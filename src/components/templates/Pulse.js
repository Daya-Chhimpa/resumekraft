import React from 'react';

const Pulse = ({ data }) => {
  const { 
    personalInfo = {}, 
    experience = [], 
    education = [], 
    skills = [], 
    hobbies = [] 
  } = data || {};

  return (
    <div className="w-full h-full min-h-[297mm] bg-white flex">
      {/* Sidebar */}
      <div className="w-1/3 bg-blue-50 p-8 flex flex-col items-center text-center space-y-8 border-r border-blue-100">
         {/* Photo - Prominent */}
         <div className="w-40 h-40 rounded-full bg-white p-2 shadow-xl mb-4">
           <div className="w-full h-full rounded-full overflow-hidden bg-slate-200">
             {personalInfo?.photo ? (
               <img src={personalInfo.photo} alt="Profile" className="w-full h-full object-cover" />
             ) : (
               <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold text-4xl">
                 {personalInfo?.fullName?.charAt(0) || 'R'}
               </div>
             )}
           </div>
         </div>

         <div className="w-full">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">{personalInfo?.fullName || 'Your Name'}</h1>
            <div className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-wider mb-6">
              {personalInfo?.title || 'Job Title'}
            </div>
            
            <div className="space-y-2 text-sm text-slate-600">
               {personalInfo?.email && <div className="p-2 bg-white rounded shadow-sm">{personalInfo.email}</div>}
               {personalInfo?.phone && <div className="p-2 bg-white rounded shadow-sm">{personalInfo.phone}</div>}
               {personalInfo?.location && <div className="p-2 bg-white rounded shadow-sm">{personalInfo.location}</div>}
            </div>
         </div>

         {/* Skills - Bars */}
         {skills?.length > 0 && (
           <div className="w-full text-left">
             <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Skills</h3>
             <div className="space-y-3">
               {skills.map(skill => (
                 <div key={skill.id}>
                   <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                     <span>{skill.name}</span>
                     <span>Usually 80%</span>
                   </div>
                   <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                     <div className="h-full bg-blue-400 rounded-full" style={{ width: '80%' }}></div>
                   </div>
                 </div>
               ))}
             </div>
           </div>
         )}
         
         {hobbies && hobbies.length > 0 && (
             <div className="w-full text-left">
               <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Passions</h3>
                <div className="flex flex-wrap gap-2">
                    {hobbies.map(h => (
                        <span key={h.id} className="px-2 py-1 bg-white text-blue-600 rounded border border-blue-200 text-xs font-medium">
                            {h.name}
                        </span>
                    ))}
                </div>
             </div>
         )}
      </div>

      {/* Main */}
      <div className="w-2/3 p-10 space-y-10">
         {personalInfo?.summary && (
           <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg -mt-16 relative z-10">
             <h2 className="text-sm font-bold opacity-80 uppercase mb-2">My Objective</h2>
             <p className="leading-relaxed">
               {personalInfo.summary}
             </p>
           </div>
         )}

         {experience?.length > 0 && (
           <section>
             <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
               <span className="w-2 h-8 bg-blue-500 mr-3 rounded-full"></span>
               Experience
             </h2>
             <div className="space-y-8 pl-4 border-l-2 border-slate-100 ml-1">
               {experience.map(exp => (
                 <div key={exp.id} className="relative pl-6">
                   <div className="absolute -left-[9px] top-2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full"></div>
                   <h3 className="text-xl font-bold text-slate-800">{exp.role}</h3>
                   <div className="text-blue-600 font-semibold mb-1">{exp.company}</div>
                   <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-3">
                     {exp.startDate} — {exp.endDate}
                   </div>
                   <p className="text-slate-600 text-sm leading-relaxed">
                     {exp.description}
                   </p>
                 </div>
               ))}
             </div>
           </section>
         )}

         {education?.length > 0 && (
           <section>
             <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
               <span className="w-2 h-8 bg-blue-500 mr-3 rounded-full"></span>
               Education
             </h2>
             <div className="grid grid-cols-1 gap-4">
               {education.map(edu => (
                 <div key={edu.id} className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                   <div className="font-bold text-slate-900">{edu.institution}</div>
                   <div className="text-blue-600 text-sm font-medium">{edu.degree}</div>
                   <div className="text-slate-400 text-xs mt-2">{edu.startDate} - {edu.endDate}</div>
                 </div>
               ))}
             </div>
           </section>
         )}
      </div>
    </div>
  );
};

export default Pulse;
