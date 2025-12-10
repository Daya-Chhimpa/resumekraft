import React from 'react';
import Aurora from './Aurora';
import Noir from './Noir';
import NeoClassic from './NeoClassic';
import Pulse from './Pulse';
import Edge from './Edge';
import Cosmic from './Cosmic';
import Glass from './Glass';
import Titan from './Titan';
import Vogue from './Vogue';
import Skyline from './Skyline';
import useResumeStore from '../../store/useResumeStore';

const templates = {
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

const TemplateRenderer = () => {
  const { activeTemplate, resumeData } = useResumeStore();
  const TemplateComponent = templates[activeTemplate] || Aurora;

  return (
    <div className="resume-template-container w-full h-full bg-white text-slate-900">
      <TemplateComponent data={resumeData} />
    </div>
  );
};

export default TemplateRenderer;
