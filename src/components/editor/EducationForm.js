import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import useResumeStore from '../../store/useResumeStore';

const EducationForm = () => {
  const { resumeData, addEducation, updateEducation, removeSectionItem } = useResumeStore();
  const { education } = resumeData;

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    updateEducation(id, name, value);
  };

  return (
    <div className="space-y-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm animate-in fade-in slide-in-from-bottom-5">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
           <span className="w-1 h-6 bg-gradient-to-b from-pink-500 to-orange-500 rounded-full"></span>
           Education
        </h3>
        <button
          onClick={addEducation}
          className="flex items-center text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500 hover:opacity-80 transition-opacity"
        >
          <Plus className="w-5 h-5 mr-1 text-pink-500" /> Add Education
        </button>
      </div>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={edu.id} className="p-4 border border-slate-100 rounded-lg bg-slate-50 relative group">
             <button
               onClick={() => removeSectionItem('education', edu.id)}
               className="absolute top-2 right-2 p-1 text-slate-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
               title="Delete"
             >
               <Trash2 className="w-4 h-4" />
             </button>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-500 uppercase">Institution</label>
                  <input
                    type="text"
                    name="institution"
                    value={edu.institution}
                    onChange={(e) => handleChange(edu.id, e)}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="University Name"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-500 uppercase">Degree</label>
                  <input
                    type="text"
                    name="degree"
                    value={edu.degree}
                    onChange={(e) => handleChange(edu.id, e)}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Degree / Major"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-500 uppercase">Start Date</label>
                  <input
                    type="text"
                    name="startDate"
                    value={edu.startDate}
                    onChange={(e) => handleChange(edu.id, e)}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-500 uppercase">End Date</label>
                  <input
                    type="text"
                    name="endDate"
                    value={edu.endDate}
                    onChange={(e) => handleChange(edu.id, e)}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
             </div>
          </div>
        ))}
        {education.length === 0 && (
          <div className="text-center py-6 text-slate-400 bg-slate-50 rounded-lg border border-dashed border-slate-200">
            No education added yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationForm;
