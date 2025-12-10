import React from 'react';
import { Plus, X } from 'lucide-react';
import useResumeStore from '../../store/useResumeStore';

const LanguagesForm = () => {
  const { resumeData, addLanguage, updateLanguage, removeSectionItem } = useResumeStore();
  const { languages } = resumeData;

  const handleChange = (id, field, value) => {
    updateLanguage(id, field, value);
  };

  return (
    <div className="space-y-4 p-4 bg-white rounded-lg border border-slate-200 shadow-sm animate-in fade-in slide-in-from-bottom-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-slate-800">Languages</h3>
        <button
          onClick={addLanguage}
          className="flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium"
        >
          <Plus className="w-4 h-4 mr-1" /> Add Language
        </button>
      </div>

      <div className="space-y-3">
        {(languages || []).map((lang) => (
          <div key={lang.id} className="flex items-center gap-2 group">
             <input
                type="text"
                value={lang.name}
                onChange={(e) => handleChange(lang.id, 'name', e.target.value)}
                className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Language (e.g. English)"
             />
             <select
                value={lang.proficiency}
                onChange={(e) => handleChange(lang.id, 'proficiency', e.target.value)}
                className="px-3 py-2 bg-slate-50 border border-slate-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
             >
               <option>Native</option>
               <option>Fluent</option>
               <option>Conversational</option>
               <option>Basic</option>
             </select>
             <button
               onClick={() => removeSectionItem('languages', lang.id)}
               className="p-2 text-slate-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
             >
               <X className="w-4 h-4" />
             </button>
          </div>
        ))}
        {(languages || []).length === 0 && (
          <div className="text-center py-6 text-slate-400 bg-slate-50 rounded-lg border border-dashed border-slate-200">
            Add languages you speak.
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguagesForm;
