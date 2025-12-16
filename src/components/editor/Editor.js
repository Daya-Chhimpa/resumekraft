import React from 'react';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import PersonalDetailsForm from './PersonalDetailsForm';
import ExperienceForm from './ExperienceForm';
import EducationForm from './EducationForm';
import SkillsForm from './SkillsForm';
import LanguagesForm from './LanguagesForm';
import HobbiesForm from './HobbiesForm';
import TemplateRenderer from '../templates/TemplateRenderer';
import useResumeStore from '../../store/useResumeStore';
import DesignPanel from './DesignPanel';

import GoogleAd from '../GoogleAd';
import ConfirmationModal from '../ConfirmationModal';

const Editor = () => {
  const { resumeData, setActiveSection } = useResumeStore();
  const previewRef = React.useRef(null);
  const [activeTab, setActiveTab] = React.useState('content'); // 'content' | 'design'
  const [isClearModalOpen, setIsClearModalOpen] = React.useState(false);

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
      <header className="border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-50 transition-all">
        <Link to="/" className="font-bold text-xl flex items-center gap-2 text-slate-900 group">
          <div className="w-8 h-8 bg-gradient-to-tr from-pink-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold shadow-md group-hover:scale-105 transition-transform">R</div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">ResumeKraft</span>
        </Link>
        <div className="flex gap-4">
          <button 
            onClick={() => setIsClearModalOpen(true)}
            className="px-4 py-2 text-sm font-bold text-red-500 hover:text-red-600 transition-colors hover:bg-red-50 rounded-full"
          >
            Clear Data
          </button>
          <button className="px-5 py-2 text-sm font-bold text-slate-600 hover:text-pink-600 transition-colors bg-slate-100 hover:bg-pink-50 rounded-full">
            Preview
          </button>
          <button 
            onClick={handleDownloadPDF}
            className="px-6 py-2 text-sm font-bold bg-gradient-to-r from-pink-600 to-orange-500 text-white rounded-full hover:shadow-lg hover:shadow-pink-500/30 hover:scale-105 transition-all active:scale-95"
          >
            Download PDF
          </button>
        </div>
      </header>
      
      {/* Top Content Ad Placement */}
      <div className="w-full bg-slate-50 border-b border-slate-200">
          <GoogleAd slot="TOP_AD_SLOT_ID" format="horizontal" style={{ height: '90px' }} />
      </div>
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar / Forms */}
        <div className="w-1/2 border-r bg-slate-50 overflow-y-auto custom-scrollbar flex flex-col">
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

           <div className="p-8 pb-32">
             {activeTab === 'content' ? (
                <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-left-5">
                  <div id="section-personal" className="transition-all duration-300 rounded-2xl">
                    <PersonalDetailsForm />
                  </div>
                  <div id="section-experience" className="transition-all duration-300 rounded-2xl">
                    <ExperienceForm />
                  </div>
                  <div id="section-education" className="transition-all duration-300 rounded-2xl">
                    <EducationForm />
                  </div>
                  <div id="section-skills" className="transition-all duration-300 rounded-2xl">
                    <SkillsForm />
                  </div>
                  <div id="section-languages" className="transition-all duration-300 rounded-2xl">
                    <LanguagesForm />
                  </div>
                  <div id="section-hobbies" className="transition-all duration-300 rounded-2xl">
                    <HobbiesForm />
                  </div>
                  
                  {/* Future sections (Projects) will go here */}
                  <div className="p-4 bg-white rounded-lg border border-slate-200 border-dashed flex items-center justify-center text-slate-400 h-32 hover:border-pink-300 hover:bg-pink-50 transition-colors cursor-pointer">
                      + Add More Sections
                  </div>
                </div>
             ) : (
                <div className="max-w-2xl mx-auto">
                   <DesignPanel />
                </div>
             )}
           </div>

           {/* Sidebar Bottom Ad */}
           <div className="mt-auto px-6 py-4 border-t border-slate-200 bg-white">
               <div className="text-xs text-center text-slate-400 mb-2 uppercase tracking-wider font-bold">Sponsored</div>
               <GoogleAd slot="SIDEBAR_AD_SLOT_ID" format="rectangle" style={{ minHeight: '250px' }} />
           </div>
        </div>

        {/* Live Preview - Simple HTML view for now */}
        <div className="w-1/2 bg-slate-100 p-8 overflow-y-auto flex justify-center custom-scrollbar">
            <div 
                ref={previewRef}
                className="w-[210mm] min-h-[297mm] bg-white shadow-2xl origin-top transition-transform duration-200"
            >
               <TemplateRenderer onSectionClick={handleSectionClick} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
