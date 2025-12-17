import React, { useState } from 'react';
import { Palette, Type, Layout as LayoutIcon, Sparkles, Check, GripVertical, Eye, EyeOff, ArrowLeftRight, Info, Zap } from 'lucide-react';
import useResumeStore from '../../store/useResumeStore';
import QuickTour from './QuickTour';

const DesignPanel = () => {
  const { resumeData, updateThemeSettings } = useResumeStore();
  const { themeSettings } = resumeData;
  const [activePreset, setActivePreset] = useState(null);
  const [draggedSection, setDraggedSection] = useState(null);
  const [showLayoutTooltip, setShowLayoutTooltip] = useState(true);

  const handleColorChange = (key, value) => {
    updateThemeSettings('colors', key, value);
    setActivePreset(null); // Clear preset when manually changing
  };

  const handleFontChange = (key, value) => {
    updateThemeSettings('fonts', key, value);
  };

  const handleSpacingChange = (key, value) => {
    updateThemeSettings('spacing', key, parseFloat(value));
  };

  const handleLayoutChange = (key, value) => {
    updateThemeSettings('layout', key, value);
  };

  const toggleSectionVisibility = (sectionKey) => {
    const currentVisibility = themeSettings?.layout?.sectionVisibility || {};
    handleLayoutChange('sectionVisibility', {
      ...currentVisibility,
      [sectionKey]: !currentVisibility[sectionKey]
    });
  };

  const handleDragStart = (e, index) => {
    setDraggedSection(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggedSection === null || draggedSection === index) return;

    const sectionOrder = [...(themeSettings?.layout?.sectionOrder || [])];
    const draggedItem = sectionOrder[draggedSection];
    sectionOrder.splice(draggedSection, 1);
    sectionOrder.splice(index, 0, draggedItem);
    
    handleLayoutChange('sectionOrder', sectionOrder);
    setDraggedSection(index);
  };

  const handleDragEnd = () => {
    setDraggedSection(null);
  };

  // Premium Color Presets
  const colorPresets = [
    { 
      name: 'Pink Sunset', 
      colors: { primary: '#ec4899', secondary: '#f97316', text: '#0f172a', background: '#ffffff' },
      gradient: 'from-pink-500 to-orange-500'
    },
    { 
      name: 'Ocean Blue', 
      colors: { primary: '#3b82f6', secondary: '#06b6d4', text: '#0f172a', background: '#ffffff' },
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Purple Dream', 
      colors: { primary: '#8b5cf6', secondary: '#ec4899', text: '#0f172a', background: '#ffffff' },
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Forest Green', 
      colors: { primary: '#10b981', secondary: '#14b8a6', text: '#0f172a', background: '#ffffff' },
      gradient: 'from-green-500 to-teal-500'
    },
    { 
      name: 'Royal Purple', 
      colors: { primary: '#7c3aed', secondary: '#a855f7', text: '#0f172a', background: '#ffffff' },
      gradient: 'from-violet-600 to-purple-500'
    },
    { 
      name: 'Midnight', 
      colors: { primary: '#f59e0b', secondary: '#eab308', text: '#f8fafc', background: '#0f172a' },
      gradient: 'from-slate-900 to-slate-700'
    },
  ];

  const applyPreset = (preset) => {
    Object.entries(preset.colors).forEach(([key, value]) => {
      updateThemeSettings('colors', key, value);
    });
    setActivePreset(preset.name);
  };

  const fontOptions = [
    { value: 'Inter', label: 'Inter', style: 'font-sans', desc: 'Modern & Clean' },
    { value: 'Roboto', label: 'Roboto', style: 'font-sans', desc: 'Professional' },
    { value: 'Merriweather', label: 'Merriweather', style: 'font-serif', desc: 'Classic Serif' },
    { value: 'Montserrat', label: 'Montserrat', style: 'font-sans', desc: 'Bold & Strong' },
    { value: 'Open Sans', label: 'Open Sans', style: 'font-sans', desc: 'Friendly' },
    { value: 'Playfair Display', label: 'Playfair Display', style: 'font-serif', desc: 'Elegant' },
    { value: 'Lato', label: 'Lato', style: 'font-sans', desc: 'Warm & Stable' },
    { value: 'Poppins', label: 'Poppins', style: 'font-sans', desc: 'Geometric' },
  ];

  const sectionLabels = {
    personal: 'Personal Info',
    experience: 'Experience',
    education: 'Education',
    skills: 'Skills',
    languages: 'Languages',
    hobbies: 'Hobbies & Interests'
  };

  const sectionOrder = themeSettings?.layout?.sectionOrder || ['personal', 'experience', 'education', 'skills', 'languages', 'hobbies'];
  const sectionVisibility = themeSettings?.layout?.sectionVisibility || {};
  const sidebarPosition = themeSettings?.layout?.sidebarPosition || 'left';

  return (
    <div className="space-y-8 p-6 pb-20 animate-in fade-in slide-in-from-right-5">
      {/* Quick Tour for First-Time Users */}
      <QuickTour />
      
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span className="text-sm font-bold text-purple-900">Customize Your Resume</span>
        </div>
        <p className="text-sm text-slate-500">Make it uniquely yours with colors, fonts & layout</p>
      </div>

      {/* Layout Controls Section */}
      <div className="space-y-4 relative">
        {/* NEW Feature Badge with Pulse */}
        <div className="flex items-center gap-2 justify-between">
          <div className="flex items-center gap-2">
            <LayoutIcon className="w-5 h-5 text-indigo-600" />
            <h3 className="text-lg font-bold text-slate-800">Resume Layout</h3>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
            </span>
            <span className="px-2 py-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
              New
            </span>
          </div>
          <button 
            className="group relative"
            onMouseEnter={() => setShowLayoutTooltip(true)}
          >
            <Info className="w-4 h-4 text-slate-400 hover:text-indigo-600 transition-colors" />
          </button>
        </div>

        {/* Onboarding Tooltip */}
        {showLayoutTooltip && (
          <div className="relative animate-in fade-in slide-in-from-top-2">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 rounded-xl shadow-lg">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-bold text-sm mb-1">🎉 New Layout Features!</h4>
                  <p className="text-xs opacity-90 leading-relaxed">
                    Customize your resume structure: switch sidebar position, reorder sections by dragging, and toggle visibility!
                  </p>
                </div>
                <button 
                  onClick={() => setShowLayoutTooltip(false)}
                  className="text-white/80 hover:text-white text-xs font-bold"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Sidebar Position Toggle */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-5 rounded-xl border border-indigo-200">
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-bold text-slate-700">Sidebar Position</label>
            <div className="flex items-center gap-1 px-2 py-1 bg-white rounded-full">
              <Info className="w-3 h-3 text-indigo-600" />
              <span className="text-[10px] text-slate-600 font-medium">Click to switch</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => handleLayoutChange('sidebarPosition', 'left')}
              className={`p-4 rounded-lg border-2 transition-all hover:scale-105 active:scale-95 ${
                sidebarPosition === 'left'
                  ? 'border-indigo-500 bg-white shadow-md'
                  : 'border-slate-200 bg-white/50 hover:border-slate-300'
              }`}
            >
              <div className="flex gap-2 mb-2">
                <div className="w-8 h-12 bg-indigo-500 rounded"></div>
                <div className="flex-1 h-12 bg-slate-200 rounded"></div>
              </div>
              <div className="text-xs font-bold text-slate-700">Left Sidebar</div>
              {sidebarPosition === 'left' && (
                <div className="mt-2 flex items-center justify-center gap-1 text-indigo-600">
                  <Check className="w-3 h-3" />
                  <span className="text-[10px] font-bold">Active</span>
                </div>
              )}
            </button>

            <button
              onClick={() => handleLayoutChange('sidebarPosition', 'right')}
              className={`p-4 rounded-lg border-2 transition-all hover:scale-105 active:scale-95 ${
                sidebarPosition === 'right'
                  ? 'border-indigo-500 bg-white shadow-md'
                  : 'border-slate-200 bg-white/50 hover:border-slate-300'
              }`}
            >
              <div className="flex gap-2 mb-2">
                <div className="flex-1 h-12 bg-slate-200 rounded"></div>
                <div className="w-8 h-12 bg-indigo-500 rounded"></div>
              </div>
              <div className="text-xs font-bold text-slate-700">Right Sidebar</div>
              {sidebarPosition === 'right' && (
                <div className="mt-2 flex items-center justify-center gap-1 text-indigo-600">
                  <Check className="w-3 h-3" />
                  <span className="text-[10px] font-bold">Active</span>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Section Reordering */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <label className="text-sm font-bold text-slate-700">Section Order</label>
              <div className="flex items-center gap-1 px-2 py-0.5 bg-indigo-50 rounded-full">
                <GripVertical className="w-3 h-3 text-indigo-600" />
                <span className="text-[10px] text-indigo-700 font-medium">Drag to reorder</span>
              </div>
            </div>
            <div className="flex items-center gap-1 px-2 py-0.5 bg-green-50 rounded-full">
              <Eye className="w-3 h-3 text-green-600" />
              <span className="text-[10px] text-green-700 font-medium">Click to hide</span>
            </div>
          </div>
          
          {/* Animated Drag Hint */}
          {draggedSection === null && (
            <div className="mb-3 p-2 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-100 animate-pulse">
              <p className="text-xs text-indigo-700 text-center font-medium">
                👆 Try dragging a section to change its position!
              </p>
            </div>
          )}
          
          <div className="space-y-2">
            {sectionOrder.map((sectionKey, index) => (
              <div
                key={sectionKey}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDragEnd={handleDragEnd}
                className={`flex items-center gap-3 p-3 rounded-lg border-2 transition-all cursor-move hover:border-indigo-300 hover:shadow-md ${
                  draggedSection === index 
                    ? 'border-indigo-500 bg-indigo-50 shadow-lg scale-105' 
                    : 'border-slate-200 bg-white'
                }`}
              >
                <GripVertical className="w-4 h-4 text-slate-400" />
                <span className="flex-1 text-sm font-medium text-slate-700">
                  {sectionLabels[sectionKey]}
                </span>
                <button
                  onClick={() => toggleSectionVisibility(sectionKey)}
                  className={`p-1.5 rounded-lg transition-all hover:scale-110 ${
                    sectionVisibility[sectionKey] !== false
                      ? 'bg-green-100 text-green-600 hover:bg-green-200'
                      : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                  }`}
                >
                  {sectionVisibility[sectionKey] !== false ? (
                    <Eye className="w-4 h-4" />
                  ) : (
                    <EyeOff className="w-4 h-4" />
                  )}
                </button>
              </div>
            ))}
          </div>
          <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-start gap-2">
              <ArrowLeftRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-blue-700">
                <span className="font-bold">Pro Tip:</span> Drag sections to change their order in your resume. Toggle the eye icon to show/hide sections.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Color Presets Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 justify-between">
          <div className="flex items-center gap-2">
            <Palette className="w-5 h-5 text-pink-600" />
            <h3 className="text-lg font-bold text-slate-800">Color Themes</h3>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 bg-pink-50 rounded-full">
            <Sparkles className="w-3 h-3 text-pink-600" />
            <span className="text-[10px] text-pink-700 font-medium">Click to apply</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {colorPresets.map((preset) => (
            <button
              key={preset.name}
              onClick={() => applyPreset(preset)}
              className={`relative group p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 active:scale-95 ${
                activePreset === preset.name 
                  ? 'border-pink-500 bg-pink-50 shadow-lg shadow-pink-500/20' 
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
              }`}
            >
              <div className={`h-12 rounded-lg bg-gradient-to-r ${preset.gradient} mb-2 shadow-inner`} />
              <div className="text-xs font-bold text-slate-700">{preset.name}</div>
              {activePreset === preset.name && (
                <div className="absolute top-2 right-2 bg-pink-500 text-white rounded-full p-1">
                  <Check className="w-3 h-3" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Custom Colors Section */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-600 uppercase tracking-wider">Custom Colors</h3>
        <div className="grid grid-cols-2 gap-4">
          {/* Primary Color */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase">Primary</label>
            <div className="relative group">
              <input 
                type="color" 
                value={themeSettings?.colors?.primary || '#ec4899'} 
                onChange={(e) => handleColorChange('primary', e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div 
                className="h-12 rounded-lg border-2 border-slate-200 shadow-sm cursor-pointer group-hover:scale-105 transition-transform"
                style={{ backgroundColor: themeSettings?.colors?.primary || '#ec4899' }}
              />
              <div className="mt-1 text-xs font-mono text-center text-slate-400">
                {themeSettings?.colors?.primary || '#ec4899'}
              </div>
            </div>
          </div>

          {/* Secondary Color */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase">Secondary</label>
            <div className="relative group">
              <input 
                type="color" 
                value={themeSettings?.colors?.secondary || '#f97316'} 
                onChange={(e) => handleColorChange('secondary', e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div 
                className="h-12 rounded-lg border-2 border-slate-200 shadow-sm cursor-pointer group-hover:scale-105 transition-transform"
                style={{ backgroundColor: themeSettings?.colors?.secondary || '#f97316' }}
              />
              <div className="mt-1 text-xs font-mono text-center text-slate-400">
                {themeSettings?.colors?.secondary || '#f97316'}
              </div>
            </div>
          </div>

          {/* Text Color */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase">Text</label>
            <div className="relative group">
              <input 
                type="color" 
                value={themeSettings?.colors?.text || '#0f172a'} 
                onChange={(e) => handleColorChange('text', e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div 
                className="h-12 rounded-lg border-2 border-slate-200 shadow-sm cursor-pointer group-hover:scale-105 transition-transform"
                style={{ backgroundColor: themeSettings?.colors?.text || '#0f172a' }}
              />
              <div className="mt-1 text-xs font-mono text-center text-slate-400">
                {themeSettings?.colors?.text || '#0f172a'}
              </div>
            </div>
          </div>

          {/* Background Color */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase">Background</label>
            <div className="relative group">
              <input 
                type="color" 
                value={themeSettings?.colors?.background || '#ffffff'} 
                onChange={(e) => handleColorChange('background', e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div 
                className="h-12 rounded-lg border-2 border-slate-200 shadow-sm cursor-pointer group-hover:scale-105 transition-transform"
                style={{ backgroundColor: themeSettings?.colors?.background || '#ffffff' }}
              />
              <div className="mt-1 text-xs font-mono text-center text-slate-400">
                {themeSettings?.colors?.background || '#ffffff'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Typography Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 justify-between">
          <div className="flex items-center gap-2">
            <Type className="w-5 h-5 text-purple-600" />
            <h3 className="text-lg font-bold text-slate-800">Typography</h3>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 bg-purple-50 rounded-full">
            <span className="text-[10px] text-purple-700 font-medium">Select your style</span>
          </div>
        </div>
        
        {/* Heading Font */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 uppercase">Heading Font</label>
          <div className="grid grid-cols-2 gap-2">
            {fontOptions.map((font) => (
              <button
                key={`heading-${font.value}`}
                onClick={() => handleFontChange('heading', font.value)}
                className={`p-3 rounded-lg border-2 text-left transition-all hover:scale-105 active:scale-95 ${
                  themeSettings?.fonts?.heading === font.value
                    ? 'border-purple-500 bg-purple-50 shadow-md'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className={`font-bold text-sm ${font.style}`} style={{ fontFamily: font.value }}>
                  Aa
                </div>
                <div className="text-xs text-slate-600 mt-1">{font.label}</div>
                <div className="text-[10px] text-slate-400">{font.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Body Font */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 uppercase">Body Font</label>
          <div className="grid grid-cols-2 gap-2">
            {fontOptions.slice(0, 6).map((font) => (
              <button
                key={`body-${font.value}`}
                onClick={() => handleFontChange('body', font.value)}
                className={`p-3 rounded-lg border-2 text-left transition-all hover:scale-105 active:scale-95 ${
                  themeSettings?.fonts?.body === font.value
                    ? 'border-purple-500 bg-purple-50 shadow-md'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className={`text-sm ${font.style}`} style={{ fontFamily: font.value }}>
                  Aa
                </div>
                <div className="text-xs text-slate-600 mt-1">{font.label}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Spacing Section */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-600 uppercase tracking-wider">Spacing</h3>
        
        <div className="space-y-6 bg-gradient-to-br from-slate-50 to-blue-50 p-5 rounded-xl border border-slate-200">
          {/* Page Margin */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold text-slate-700">Page Margin</label>
              <span className="px-3 py-1 bg-white rounded-full text-xs font-mono text-slate-600 shadow-sm">
                {themeSettings?.spacing?.margin}mm
              </span>
            </div>
            <input 
              type="range" 
              min="5" 
              max="25" 
              step="1"
              value={themeSettings?.spacing?.margin || 10} 
              onChange={(e) => handleSpacingChange('margin', e.target.value)}
              className="w-full accent-blue-500 h-2 bg-white rounded-lg appearance-none cursor-pointer shadow-inner"
            />
            <div className="flex justify-between text-xs text-slate-400">
              <span>Narrow</span>
              <span>Wide</span>
            </div>
          </div>

          {/* Line Height */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold text-slate-700">Line Height</label>
              <span className="px-3 py-1 bg-white rounded-full text-xs font-mono text-slate-600 shadow-sm">
                {themeSettings?.spacing?.lineHeight}
              </span>
            </div>
            <input 
              type="range" 
              min="1.0" 
              max="2.0" 
              step="0.1"
              value={themeSettings?.spacing?.lineHeight || 1.5} 
              onChange={(e) => handleSpacingChange('lineHeight', e.target.value)}
              className="w-full accent-blue-500 h-2 bg-white rounded-lg appearance-none cursor-pointer shadow-inner"
            />
            <div className="flex justify-between text-xs text-slate-400">
              <span>Compact</span>
              <span>Relaxed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Live Preview Badge */}
      <div className="sticky bottom-6 left-0 right-0">
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-xl shadow-lg shadow-pink-500/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              <span className="font-bold text-sm">Live Preview Active</span>
            </div>
            <span className="text-xs opacity-90">Changes apply instantly →</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignPanel;
