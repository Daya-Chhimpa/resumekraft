import React from 'react';
import TemplateRenderer from './templates/TemplateRenderer.js';
import Aurora from './templates/Aurora';
import Noir from './templates/Noir';
import NeoClassic from './templates/NeoClassic';
import Pulse from './templates/Pulse';
import Edge from './templates/Edge';
import Cosmic from './templates/Cosmic';
import Glass from './templates/Glass';
import Titan from './templates/Titan';
import Vogue from './templates/Vogue';
import Skyline from './templates/Skyline';
import { dummyResumeData } from '../data/dummyData';

// We need to map manually here because TemplateRenderer usually connects to store
// But for thumbnails we want to pass specific props (dummy data)
const templateMap = {
  aurora: Aurora,
  noir: Noir,
  neo: NeoClassic,
  pulse: Pulse,
  edge: Edge,
  cosmic: Cosmic,
  glass: Glass,
  titan: Titan,
  vogue: Vogue,
  skyline: Skyline,
};

const TemplateThumbnail = ({ templateId }) => {
  const TemplateComponent = templateMap[templateId] || Aurora;
  
  // We scale the A4 sized component down to fit in the card
  // A4 is roughly 210mm (~794px) x 297mm (~1123px).
  // We use absolute positioning with translate to center it perfectly
  
  return (
    <div className="w-full h-full overflow-hidden bg-slate-200 relative">
       <div 
         className="absolute top-0 left-1/2 origin-top transform -translate-x-1/2 scale-[0.35] shadow-2xl mt-4"
         style={{ width: '210mm', minHeight: '297mm' }} 
       >
          <div className="bg-white min-h-full w-full pointer-events-none select-none">
            <TemplateComponent data={dummyResumeData} />
          </div>
       </div>
    </div>
  );
};

export default TemplateThumbnail;
