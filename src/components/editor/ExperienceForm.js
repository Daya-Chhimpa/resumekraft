import React from 'react';
import { Plus } from 'lucide-react';
import useResumeStore from '../../store/useResumeStore';

const ExperienceForm = () => {
  const { resumeData, addExperience, updateExperience } = useResumeStore();
  const { experience } = resumeData;

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    updateExperience(id, name, value);
  };

  return (
    <div className="space-y-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm animate-in fade-in slide-in-from-bottom-5">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
           <span className="w-1 h-6 bg-gradient-to-b from-pink-500 to-orange-500 rounded-full"></span>
           Work Experience
        </h3>
        <button
          onClick={addExperience}
          className="flex items-center text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500 hover:opacity-80 transition-opacity"
        >
          <Plus className="w-5 h-5 mr-1 text-pink-500" /> Add Position
        </button>
      </div>

      <div className="space-y-6">
        {experience.map((exp, index) => (
          <div key={exp.id} className="p-4 border border-slate-100 rounded-lg bg-slate-50 relative group">
             {/* Delete Button (absolute) */}
             {/* TODO: Add remove action */}
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-500 uppercase">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={exp.company}
                    onChange={(e) => handleChange(exp.id, e)}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Company Name"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-500 uppercase">Role</label>
                  <input
                    type="text"
                    name="role"
                    value={exp.role}
                    onChange={(e) => handleChange(exp.id, e)}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Job Title"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-500 uppercase">Start Date</label>
                  <input
                    type="text"
                    name="startDate"
                    value={exp.startDate}
                    onChange={(e) => handleChange(exp.id, e)}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="MM/YYYY"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-500 uppercase">End Date</label>
                  <input
                    type="text"
                    name="endDate"
                    value={exp.endDate}
                    onChange={(e) => handleChange(exp.id, e)}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Present / MM/YYYY"
                  />
                </div>
                <div className="space-y-1 md:col-span-2">
                  <label className="text-xs font-semibold text-slate-500 uppercase">Description</label>
                  <textarea
                    name="description"
                    value={exp.description}
                    onChange={(e) => handleChange(exp.id, e)}
                    rows={3}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="• Achieved X by doing Y..."
                  />
                </div>
             </div>
          </div>
        ))}
        
        {experience.length === 0 && (
          <div className="text-center py-8 text-slate-400 bg-slate-50 rounded-lg border border-dashed border-slate-200">
            No experience added yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceForm;
