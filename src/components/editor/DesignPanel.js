import React from 'react';
import useResumeStore from '../../store/useResumeStore';

const DesignPanel = () => {
  const { resumeData, updateThemeSettings } = useResumeStore();
  const { themeSettings } = resumeData;

  const handleColorChange = (key, value) => {
    updateThemeSettings('colors', key, value);
  };

  const handleFontChange = (key, value) => {
    updateThemeSettings('fonts', key, value);
  };

  const handleSpacingChange = (key, value) => {
    updateThemeSettings('spacing', key, parseFloat(value));
  };

  return (
    <div className="space-y-6 p-6 pb-20 animate-in fade-in slide-in-from-right-5">
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2">Global Colors</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
             <label className="text-xs font-bold text-slate-500 uppercase">Primary Color</label>
             <div className="flex gap-2 items-center">
               <input 
                 type="color" 
                 value={themeSettings?.colors?.primary || '#ec4899'} 
                 onChange={(e) => handleColorChange('primary', e.target.value)}
                 className="w-10 h-10 rounded shadow-sm border border-slate-200 cursor-pointer"
               />
               <input 
                 type="text" 
                 value={themeSettings?.colors?.primary || '#ec4899'}
                 onChange={(e) => handleColorChange('primary', e.target.value)}
                 className="flex-1 text-sm border border-slate-200 rounded px-2 py-1 font-mono"
               />
             </div>
          </div>
          <div className="space-y-1">
             <label className="text-xs font-bold text-slate-500 uppercase">Secondary Color</label>
             <div className="flex gap-2 items-center">
               <input 
                 type="color" 
                 value={themeSettings?.colors?.secondary || '#f97316'} 
                 onChange={(e) => handleColorChange('secondary', e.target.value)}
                 className="w-10 h-10 rounded shadow-sm border border-slate-200 cursor-pointer"
               />
               <input 
                 type="text" 
                 value={themeSettings?.colors?.secondary || '#f97316'}
                 onChange={(e) => handleColorChange('secondary', e.target.value)}
                 className="flex-1 text-sm border border-slate-200 rounded px-2 py-1 font-mono"
               />
             </div>
          </div>
          <div className="space-y-1">
             <label className="text-xs font-bold text-slate-500 uppercase">Text Color</label>
             <div className="flex gap-2 items-center">
               <input 
                 type="color" 
                 value={themeSettings?.colors?.text || '#0f172a'} 
                 onChange={(e) => handleColorChange('text', e.target.value)}
                 className="w-10 h-10 rounded shadow-sm border border-slate-200 cursor-pointer"
               />
             </div>
          </div>
          <div className="space-y-1">
             <label className="text-xs font-bold text-slate-500 uppercase">Background</label>
             <div className="flex gap-2 items-center">
               <input 
                 type="color" 
                 value={themeSettings?.colors?.background || '#ffffff'} 
                 onChange={(e) => handleColorChange('background', e.target.value)}
                 className="w-10 h-10 rounded shadow-sm border border-slate-200 cursor-pointer"
               />
             </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2">Typography</h3>
        <div className="space-y-3">
          <div className="space-y-1">
             <label className="text-xs font-bold text-slate-500 uppercase">Heading Font</label>
             <select 
               value={themeSettings?.fonts?.heading || 'Inter'} 
               onChange={(e) => handleFontChange('heading', e.target.value)}
               className="w-full px-3 py-2 bg-white border border-slate-200 rounded text-sm"
             >
                <option value="Inter">Inter (Sans-serif)</option>
                <option value="Roboto">Roboto</option>
                <option value="Merriweather">Merriweather (Serif)</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Open Sans">Open Sans</option>
                <option value="Playfair Display">Playfair Display (Serif)</option>
             </select>
          </div>
          <div className="space-y-1">
             <label className="text-xs font-bold text-slate-500 uppercase">Body Font</label>
             <select 
               value={themeSettings?.fonts?.body || 'Inter'} 
               onChange={(e) => handleFontChange('body', e.target.value)}
               className="w-full px-3 py-2 bg-white border border-slate-200 rounded text-sm"
             >
                <option value="Inter">Inter (Sans-serif)</option>
                <option value="Roboto">Roboto</option>
                <option value="Merriweather">Merriweather (Serif)</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Open Sans">Open Sans</option>
             </select>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2">Layout & Spacing</h3>
        <div className="space-y-4">
          <div className="space-y-1">
             <div className="flex justify-between">
                <label className="text-xs font-bold text-slate-500 uppercase">Page Margin</label>
                <span className="text-xs font-mono text-slate-400">{themeSettings?.spacing?.margin}mm</span>
             </div>
             <input 
               type="range" 
               min="5" 
               max="25" 
               step="1"
               value={themeSettings?.spacing?.margin || 10} 
               onChange={(e) => handleSpacingChange('margin', e.target.value)}
               className="w-full accent-pink-500 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
             />
          </div>
          <div className="space-y-1">
             <div className="flex justify-between">
                <label className="text-xs font-bold text-slate-500 uppercase">Line Height</label>
                <span className="text-xs font-mono text-slate-400">{themeSettings?.spacing?.lineHeight}</span>
             </div>
             <input 
               type="range" 
               min="1.0" 
               max="2.0" 
               step="0.1"
               value={themeSettings?.spacing?.lineHeight || 1.5} 
               onChange={(e) => handleSpacingChange('lineHeight', e.target.value)}
               className="w-full accent-pink-500 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
             />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignPanel;
