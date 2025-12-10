import React from 'react';
import { Plus, X } from 'lucide-react';
import useResumeStore from '../../store/useResumeStore';

const SkillsForm = () => {
  const { resumeData, addSkill, updateSkill, removeSectionItem } = useResumeStore();
  const { skills } = resumeData;

  const handleChange = (id, e) => {
    updateSkill(id, 'name', e.target.value);
  };

  return (
    <div className="space-y-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm animate-in fade-in slide-in-from-bottom-5">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
           <span className="w-1 h-6 bg-gradient-to-b from-pink-500 to-orange-500 rounded-full"></span>
           Skills
        </h3>
        <button
          onClick={addSkill}
          className="flex items-center text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500 hover:opacity-80 transition-opacity"
        >
          <Plus className="w-5 h-5 mr-1 text-pink-500" /> Add Skill
        </button>
      </div>

      <div className="space-y-3">
        {skills.map((skill) => (
          <div key={skill.id} className="flex items-center gap-2 group">
             <input
                type="text"
                value={skill.name}
                onChange={(e) => handleChange(skill.id, e)}
                className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Skill name (e.g. React)"
             />
             <button
               onClick={() => removeSectionItem('skills', skill.id)}
               className="p-2 text-slate-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
             >
               <X className="w-4 h-4" />
             </button>
          </div>
        ))}
        {skills.length === 0 && (
          <div className="text-center py-6 text-slate-400 bg-slate-50 rounded-lg border border-dashed border-slate-200">
            Add skills to showcase your expertise.
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsForm;
