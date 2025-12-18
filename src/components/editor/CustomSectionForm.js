import React from 'react';
import { Plus, Trash2, Calendar, Building, Type } from 'lucide-react';
import useResumeStore from '../../store/useResumeStore';

const CustomSectionForm = ({ sectionId, title }) => {
  const { resumeData, addCustomSectionItem, updateCustomSectionItem, removeCustomSectionItem, removeCustomSection } = useResumeStore();
  const section = resumeData.customSections.find(s => s.id === sectionId);
  
  if (!section) return null;

  return (
    <div className="space-y-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm animate-in fade-in slide-in-from-bottom-5 relative group/section">
       <button
        onClick={() => removeCustomSection(sectionId)}
        className="absolute top-4 right-4 p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-full transition-all opacity-0 group-hover/section:opacity-100"
        title="Delete entire section"
      >
        <Trash2 className="w-4 h-4" />
      </button>

      <div className="flex justify-between items-center mb-6 pr-8">
        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
           <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
           {title}
        </h3>
        <button
          onClick={() => addCustomSectionItem(sectionId)}
          className="flex items-center text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-80 transition-opacity"
        >
          <Plus className="w-5 h-5 mr-1 text-purple-500" /> Add Item
        </button>
      </div>

      <div className="space-y-6">
        {section.items.map((item) => (
          <div 
            key={item.id} 
            className="group relative bg-slate-50 p-5 rounded-xl border border-slate-200 hover:border-purple-300 transition-colors"
          >
            <button
                onClick={() => removeCustomSectionItem(sectionId, item.id)}
                className="absolute top-3 right-3 p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-full transition-all opacity-0 group-hover:opacity-100"
            >
                <Trash2 className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div>
                  <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Title / Role</label>
                  <div className="relative">
                      <Type className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input 
                        type="text" 
                        value={item.title}
                        onChange={(e) => updateCustomSectionItem(sectionId, item.id, 'title', e.target.value)}
                        placeholder="e.g. AWS Certified Solution Architect"
                        className="w-full pl-9 p-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-800 focus:border-purple-500 outline-none"
                      />
                  </div>
               </div>

               <div>
                  <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Subtitle / Issuer</label>
                   <div className="relative">
                      <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input 
                        type="text" 
                        value={item.subtitle}
                        onChange={(e) => updateCustomSectionItem(sectionId, item.id, 'subtitle', e.target.value)}
                        placeholder="e.g. Amazon Web Services"
                        className="w-full pl-9 p-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 focus:border-purple-500 outline-none"
                      />
                   </div>
               </div>

               <div className="md:col-span-2">
                 <div className="flex gap-4">
                    <div className="w-1/3">
                        <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Date / Year</label>
                        <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input 
                                type="text" 
                                value={item.date}
                                onChange={(e) => updateCustomSectionItem(sectionId, item.id, 'date', e.target.value)}
                                placeholder="e.g. 2023"
                                className="w-full pl-9 p-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 focus:border-purple-500 outline-none"
                            />
                        </div>
                    </div>
                 </div>
               </div>

               <div className="md:col-span-2">
                  <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Description (Optional)</label>
                  <textarea 
                    value={item.description}
                    onChange={(e) => updateCustomSectionItem(sectionId, item.id, 'description', e.target.value)}
                    placeholder="Short description..."
                    rows="2"
                    className="w-full p-3 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 focus:border-purple-500 outline-none resize-none"
                  ></textarea>
               </div>
            </div>
          </div>
        ))}
        {section.items.length === 0 && (
          <div className="text-center py-8 bg-slate-50 border border-dashed border-slate-200 rounded-xl text-slate-400 text-sm">
             Click "Add Item" to add entries to this section.
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomSectionForm;
