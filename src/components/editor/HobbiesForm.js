import React from 'react';
import { Plus, X } from 'lucide-react';
import useResumeStore from '../../store/useResumeStore';

const HobbiesForm = () => {
  const { resumeData, addHobby, updateHobby, removeSectionItem } = useResumeStore();
  const { hobbies } = resumeData;

  return (
    <div className="space-y-4 p-4 bg-white rounded-lg border border-slate-200 shadow-sm animate-in fade-in slide-in-from-bottom-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-slate-800">Hobbies & Interests</h3>
        <button
          onClick={addHobby}
          className="flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium"
        >
          <Plus className="w-4 h-4 mr-1" /> Add Hobby
        </button>
      </div>

      <div className="space-y-3">
        {(hobbies || []).map((hobby) => (
          <div key={hobby.id} className="flex items-center gap-2 group">
             <input
                type="text"
                value={hobby.name}
                onChange={(e) => updateHobby(hobby.id, 'name', e.target.value)}
                className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Hobby (e.g. Photography)"
             />
             <button
               onClick={() => removeSectionItem('hobbies', hobby.id)}
               className="p-2 text-slate-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
             >
               <X className="w-4 h-4" />
             </button>
          </div>
        ))}
        {(hobbies || []).length === 0 && (
          <div className="text-center py-6 text-slate-400 bg-slate-50 rounded-lg border border-dashed border-slate-200">
            Share your interests.
          </div>
        )}
      </div>
    </div>
  );
};

export default HobbiesForm;
