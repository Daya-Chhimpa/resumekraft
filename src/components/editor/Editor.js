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

import AdModal from '../AdModal';

const Editor = () => {
  const { resumeData } = useResumeStore();
  const previewRef = React.useRef(null);
  const [showAd, setShowAd] = React.useState(false);

  const handleDownloadClick = () => {
    setShowAd(true);
  };

  const onAdComplete = async () => {
    setShowAd(false);
    await handleDownloadPDF();
  };

  const handleDownloadPDF = async () => {
    if (!previewRef.current) return;
    
    // Improved PDF quality settings
    const canvas = await html2canvas(previewRef.current, {
        scale: 2, // higher resolution
        useCORS: true,
        logging: false
    });
    
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
    });
    
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save(`${resumeData.personalInfo.fullName.replace(/\s+/g, '_')}_Resume.pdf`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-pink-100 selection:text-pink-900">
      <AdModal isOpen={showAd} onComplete={onAdComplete} />
      <header className="border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-10 transition-all">
        <Link to="/" className="font-bold text-xl flex items-center gap-2 text-slate-900 group">
          <div className="w-8 h-8 bg-gradient-to-tr from-pink-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold shadow-md group-hover:scale-105 transition-transform">R</div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">ResumeKraft</span>
        </Link>
        <div className="flex gap-4">
          <button className="px-5 py-2 text-sm font-bold text-slate-600 hover:text-pink-600 transition-colors bg-slate-100 hover:bg-pink-50 rounded-full">
            Preview
          </button>
          <button 
            onClick={handleDownloadClick}
            className="px-6 py-2 text-sm font-bold bg-gradient-to-r from-pink-600 to-orange-500 text-white rounded-full hover:shadow-lg hover:shadow-pink-500/30 hover:scale-105 transition-all active:scale-95"
          >
            Download PDF
          </button>
        </div>
      </header>
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar / Forms */}
        <div className="w-1/2 border-r bg-slate-50 overflow-y-auto p-8 custom-scrollbar">
           <div className="max-w-2xl mx-auto space-y-8">
             <PersonalDetailsForm />
             <ExperienceForm />
             <EducationForm />
             <SkillsForm />
             <LanguagesForm />
             <HobbiesForm />
             
             {/* Future sections (Projects) will go here */}
             <div className="p-4 bg-white rounded-lg border border-slate-200 border-dashed flex items-center justify-center text-slate-400 h-32">
                 + Add More Sections
             </div>
           </div>
        </div>

        {/* Live Preview - Simple HTML view for now */}
        <div className="w-1/2 bg-slate-100 p-8 overflow-y-auto flex justify-center custom-scrollbar">
            <div 
                ref={previewRef}
                className="w-[210mm] min-h-[297mm] bg-white shadow-2xl origin-top transition-transform duration-200"
            >
               <TemplateRenderer />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
