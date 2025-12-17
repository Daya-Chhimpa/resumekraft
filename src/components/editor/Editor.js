import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, FileText, Plus } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import PersonalDetailsForm from './PersonalDetailsForm';
import ExperienceForm from './ExperienceForm';
import EducationForm from './EducationForm';
import SkillsForm from './SkillsForm';
import LanguagesForm from './LanguagesForm';
import HobbiesForm from './HobbiesForm';
import CustomSectionForm from './CustomSectionForm'; // Value Add
import AddSectionModal from './AddSectionModal'; // Value Add
import TemplateRenderer from '../templates/TemplateRenderer';
import useResumeStore from '../../store/useResumeStore';
import DesignPanel from './DesignPanel';
import SortableSection from './SortableSection';

import GoogleAd from '../GoogleAd';
import ConfirmationModal from '../ConfirmationModal';

const Editor = () => {
  const { resumeData, setActiveSection, updateThemeSettings } = useResumeStore();
  const previewRef = React.useRef(null);
  const [activeTab, setActiveTab] = React.useState('content'); // 'content' | 'design'
  const [isClearModalOpen, setIsClearModalOpen] = React.useState(false);
  const [isAddSectionModalOpen, setIsAddSectionModalOpen] = React.useState(false); // New state

  // Drag and Drop Sensors for Section Reordering
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8, // 8px movement required before drag starts
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleAddSection = (title) => {
    useResumeStore.getState().addCustomSection(title);
    setIsAddSectionModalOpen(false);
  };
  
  // Mobile Tab State
  const [mobileTab, setMobileTab] = React.useState('edit'); // 'edit' | 'preview'
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  // Dynamic Resume Scaling
  const [scale, setScale] = React.useState(1);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      
      // Calculate scale
      const isDesktop = window.innerWidth >= 768;
      const screenWidth = window.innerWidth;
      
      let availableWidth;
      if (isDesktop) {
        // Desktop: 50% width minus padding (approx 64px)
        availableWidth = (screenWidth / 2) - 80; 
      } else {
        // Mobile: Full width minus padding
        availableWidth = screenWidth - 48;
      }
      
      // A4 width in px (approx)
      const a4WidthStr = '210mm';
      // We can estimate 210mm is roughly 794px at 96dpi
      const baseWidth = 794; 
      
      const newScale = Math.min(availableWidth / baseWidth, 1);
      setScale(Number(newScale.toFixed(2))); // Round to 2 decimals
    };

    // Initial call
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClearDataConfirm = () => {
    useResumeStore.getState().resetResumeData();
    setIsClearModalOpen(false);
  };

  const handleSectionClick = (sectionName) => {
    setActiveTab('content');
    setActiveSection(sectionName);
    
    // Smooth scroll to section
    setTimeout(() => {
        const element = document.getElementById(`section-${sectionName}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Add highlight effect
            element.classList.add('ring-2', 'ring-pink-500', 'ring-offset-2');
            setTimeout(() => {
                element.classList.remove('ring-2', 'ring-pink-500', 'ring-offset-2');
            }, 2000);
        }
    }, 100);
  };

  const handleSectionDragEnd = (event) => {
    const { active, over } = event;

    if (active && over && active.id !== over.id) {
      const currentOrder = resumeData.themeSettings?.layout?.sectionOrder || 
        ['personal', 'experience', 'education', 'skills', 'languages', 'hobbies'];
      
      const oldIndex = currentOrder.indexOf(active.id);
      const newIndex = currentOrder.indexOf(over.id);

      if (oldIndex !== -1 && newIndex !== -1) {
        const newOrder = [...currentOrder];
        const [removed] = newOrder.splice(oldIndex, 1);
        newOrder.splice(newIndex, 0, removed);
        
        updateThemeSettings('layout', 'sectionOrder', newOrder);
      }
    }
  };

  const handleDownloadPDF = async () => {
    if (!previewRef.current) return;
    
    // Improved PDF quality settings
    const canvas = await html2canvas(previewRef.current, {
        scale: 2, // Retain high resolution matching screen density
        useCORS: true,
        logging: false
    });
    
    // Use JPEG instead of PNG to drastically reduce file size
    // 0.8 quality offers great balance between crisp text and low size
    const imgData = canvas.toDataURL('image/jpeg', 0.8);
    const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
    });
    
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    // 'FAST' compression helps reduce size further
    pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');
    pdf.save(`${resumeData.personalInfo.fullName.replace(/\s+/g, '_')}_Resume.pdf`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-pink-100 selection:text-pink-900">
      <ConfirmationModal 
         isOpen={isClearModalOpen}
         onClose={() => setIsClearModalOpen(false)}
         onConfirm={handleClearDataConfirm}
         title="Reset Resume Data?"
         message="This will permanently delete all your entries and restore the default template. This action cannot be undone."
         confirmText="Yes, Clear Data"
         isDestructive={true}
      />
      <header className="border-b border-slate-200 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-50 transition-all">
        <Link to="/" className="font-bold text-xl flex items-center gap-2 text-slate-900 group">
          <div className="w-8 h-8 bg-gradient-to-tr from-pink-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold shadow-md group-hover:scale-105 transition-transform flex-shrink-0">R</div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 hidden sm:block">ResumeKraft</span>
        </Link>
        <div className="flex gap-2 sm:gap-4 items-center">
          <button 
            onClick={() => setIsClearModalOpen(true)}
            className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold text-red-500 hover:text-red-600 transition-colors hover:bg-red-50 rounded-full flex-shrink-0 whitespace-nowrap"
          >
            Clear Data
          </button>
          
          {/* Hide Preview button on mobile since we have tabs */}
          <button className="hidden md:block px-5 py-2 text-sm font-bold text-slate-600 hover:text-pink-600 transition-colors bg-slate-100 hover:bg-pink-50 rounded-full">
            Preview
          </button>
          
          <button 
            onClick={handleDownloadPDF}
            className="px-4 py-2 sm:px-6 sm:py-2 text-xs sm:text-sm font-bold bg-gradient-to-r from-pink-600 to-orange-500 text-white rounded-full hover:shadow-lg hover:shadow-pink-500/30 hover:scale-105 transition-all active:scale-95 flex-shrink-0 whitespace-nowrap"
          >
            Download <span className="hidden sm:inline">PDF</span>
          </button>
        </div>
      </header>
      
      {/* Top Content Ad Placement */}
      <div className="w-full bg-slate-50 border-b border-slate-200">
          <GoogleAd slot="TOP_AD_SLOT_ID" format="horizontal" style={{ height: '90px' }} />
      </div>

      <div className="flex-1 flex overflow-hidden relative">
        
        {/* Mobile Tab Toggles (Visible only on mobile) */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 px-6 py-3 flex items-center justify-around shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
           <button 
             onClick={() => setMobileTab('edit')}
             className={`flex flex-col items-center gap-1 text-xs font-bold transition-colors ${mobileTab === 'edit' ? 'text-pink-600' : 'text-slate-400'}`}
           >
              <div className={`p-2 rounded-full ${mobileTab === 'edit' ? 'bg-pink-50' : 'bg-transparent'}`}>
                <Layout className="w-5 h-5" />
              </div>
              Editor
           </button>
           <button 
             onClick={() => setMobileTab('preview')}
             className={`flex flex-col items-center gap-1 text-xs font-bold transition-colors ${mobileTab === 'preview' ? 'text-pink-600' : 'text-slate-400'}`}
           >
              <div className={`p-2 rounded-full ${mobileTab === 'preview' ? 'bg-pink-50' : 'bg-transparent'}`}>
                <FileText className="w-5 h-5" />
              </div>
              Preview
           </button>
        </div>

        {/* Sidebar / Forms - Hidden on mobile if not in 'edit' tab */}
        <div className={`${isMobile && mobileTab !== 'edit' ? 'hidden' : 'flex'} w-full md:w-1/2 border-r bg-slate-50 overflow-y-auto custom-scrollbar flex-col pb-24 md:pb-0`}>
           {/* Tab Navigation */}
           <div className="sticky top-0 z-40 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 px-8 pt-6 pb-2">
              <div className="flex space-x-6">
                <button 
                  onClick={() => setActiveTab('content')}
                  className={`pb-3 text-sm font-bold transition-all relative ${activeTab === 'content' ? 'text-pink-600' : 'text-slate-500 hover:text-slate-800'}`}
                >
                  Content
                  {activeTab === 'content' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-600 rounded-full"></span>}
                </button>
                <button 
                  onClick={() => setActiveTab('design')}
                  className={`pb-3 text-sm font-bold transition-all relative ${activeTab === 'design' ? 'text-purple-600' : 'text-slate-500 hover:text-slate-800'}`}
                >
                  Design & Style
                  {activeTab === 'design' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 rounded-full"></span>}
                </button>
              </div>
           </div>

           <div className="p-4 md:p-8 pb-32">
              {activeTab === 'content' ? (
                 <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-left-5">
                   {/* Personal Details - Always at top, not draggable */}
                   <div id="section-personal" className="transition-all duration-300 rounded-2xl">
                     <PersonalDetailsForm />
                   </div>

                   {/* Drag and Drop Context for Other Sections */}
                   <DndContext
                     sensors={sensors}
                     collisionDetection={closestCenter}
                     onDragEnd={handleSectionDragEnd}
                   >
                     <SortableContext
                       items={(resumeData.themeSettings?.layout?.sectionOrder || ['personal', 'experience', 'education', 'skills', 'languages', 'hobbies']).filter(key => key !== 'personal')}
                       strategy={verticalListSortingStrategy}
                     >
                       {/* Render sections in order (excluding personal) */}
                       {(resumeData.themeSettings?.layout?.sectionOrder || ['personal', 'experience', 'education', 'skills', 'languages', 'hobbies'])
                         .filter(key => key !== 'personal')
                         .map((sectionKey) => {
                         // Section component mapping
                         const sectionComponents = {
                           experience: { Component: ExperienceForm, title: 'Experience' },
                           education: { Component: EducationForm, title: 'Education' },
                           skills: { Component: SkillsForm, title: 'Skills' },
                           languages: { Component: LanguagesForm, title: 'Languages' },
                           hobbies: { Component: HobbiesForm, title: 'Hobbies' },
                         };

                         const section = sectionComponents[sectionKey];
                         if (!section) return null;

                         const { Component, title } = section;

                         return (
                           <SortableSection key={sectionKey} id={sectionKey} title={title}>
                             <Component />
                           </SortableSection>
                         );
                       })}
                     </SortableContext>
                   </DndContext>

                   {/* Custom Sections */}
                   {resumeData.customSections?.map(section => (
                       <div key={section.id} id={`section-${section.id}`} className="transition-all duration-300 rounded-2xl">
                           <CustomSectionForm sectionId={section.id} title={section.title} />
                       </div>
                   ))}
                   
                   {/* Add More Sections Button */}
                  <div 
                      onClick={() => setIsAddSectionModalOpen(true)}
                      className="p-4 bg-white rounded-lg border border-slate-200 border-dashed flex items-center justify-center text-slate-400 h-32 hover:border-pink-300 hover:bg-pink-50 transition-colors cursor-pointer group"
                  >
                      <div className="flex flex-col items-center gap-2">
                        <div className="bg-slate-100 p-3 rounded-full group-hover:bg-pink-100 transition-colors">
                            <Plus className="w-6 h-6 text-slate-400 group-hover:text-pink-500" />
                        </div>
                        <span className="font-semibold group-hover:text-pink-600 transition-colors">Add Custom Section</span>
                        <span className="text-xs opacity-70">Certifications, Awards, etc.</span>
                      </div>
                  </div>
                </div>
             ) : (
                <div className="max-w-2xl mx-auto">
                   <DesignPanel />
                </div>
             )}
           </div>

           <AddSectionModal 
              isOpen={isAddSectionModalOpen}
              onClose={() => setIsAddSectionModalOpen(false)}
              onConfirm={handleAddSection}
           />

           {/* Sidebar Bottom Ad */}
           <div className="mt-auto px-6 py-4 border-t border-slate-200 bg-white">
               <div className="text-xs text-center text-slate-400 mb-2 uppercase tracking-wider font-bold">Sponsored</div>
               <GoogleAd slot="SIDEBAR_AD_SLOT_ID" format="rectangle" style={{ minHeight: '250px' }} />
           </div>
        </div>

        {/* Live Preview - Hidden on mobile if not in 'preview' tab */}
        <div className={`${isMobile && mobileTab !== 'preview' ? 'hidden' : 'flex'} w-full md:w-1/2 bg-slate-100 p-4 md:p-8 overflow-y-auto justify-center custom-scrollbar pb-24 md:pb-0 relative`}>
             {/* Sticky Container so the resume "sticks" while you scroll if it's small, 
                 but typically we want it to scroll with the page. 
                 Actually, just centering it is fine. */}
            <div 
                ref={previewRef}
                className="min-w-[210mm] w-[210mm] min-h-[50vh] md:min-h-[297mm] bg-white shadow-2xl origin-top transition-transform duration-100 ease-out"
                style={{ 
                    transform: `scale(${scale})`,
                    marginBottom: `-${(1 - scale) * 100}%` // Simple compensation for bottom whitespace
                }}
            >
               <TemplateRenderer onSectionClick={handleSectionClick} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
