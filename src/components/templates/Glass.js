import React from 'react';

const Glass = ({ data }) => {
  const { personalInfo, experience, education, skills, languages, hobbies } = data;

  return (
    <div className="w-full h-full min-h-[297mm] bg-gradient-to-br from-rose-100 via-sky-100 to-violet-100 p-8 font-sans relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-rose-300/30 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-sky-300/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      {/* Glass Card */}
      <div className="relative z-10 w-full h-full min-h-[280mm] bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl rounded-3xl overflow-hidden flex flex-col">
        
        {/* Header */}
        <header className="bg-white/50 p-10 flex items-center gap-8 border-b border-white/50">
           {personalInfo.photo && (
             <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg border-2 border-white ring-4 ring-white/30 transform rotate-[-2deg]">
               <img src={personalInfo.photo} alt="Profile" className="w-full h-full object-cover" />
             </div>
           )}
           <div className="flex-1">
             <h1 className="text-5xl font-black text-slate-800 tracking-tight mb-2">{personalInfo.fullName}</h1>
             <p className="text-xl text-slate-600 font-medium tracking-wide uppercase">{personalInfo.title}</p>
             <div className="flex flex-wrap gap-4 mt-4 text-sm font-medium text-slate-500">
                {personalInfo.email && <span>{personalInfo.email}</span>}
                {personalInfo.phone && <span>• {personalInfo.phone}</span>}
                {personalInfo.location && <span>• {personalInfo.location}</span>}
             </div>
           </div>
        </header>

        <div className="flex flex-1 p-10 gap-10">
          
          {/* Main Column */}
          <div className="w-[65%] space-y-10">
             {personalInfo.summary && (
                <div className="p-6 bg-white/40 rounded-2xl border border-white/50 shadow-sm">
                   <p className="text-slate-700 leading-relaxed italic">
                     "{personalInfo.summary}"
                   </p>
                </div>
             )}

             {experience.length > 0 && (
               <section>
                 <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                    <span className="p-2 bg-sky-100 rounded-lg text-sky-600 shadow-sm">Exp</span>
                    Experience
                 </h2>
                 <div className="space-y-6">
                   {experience.map(exp => (
                     <div key={exp.id} className="group p-5 bg-white/30 rounded-2xl border border-white/40 hover:bg-white/60 transition-colors shadow-sm">
                        <div className="flex justify-between items-start mb-2">
                           <div>
                              <h3 className="font-bold text-lg text-slate-900">{exp.role}</h3>
                              <p className="text-sky-700 font-medium">{exp.company}</p>
                           </div>
                           <span className="text-xs font-bold text-slate-500 bg-white/50 px-3 py-1 rounded-full border border-white/50">
                              {exp.startDate} - {exp.endDate}
                           </span>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed mt-3">
                           {exp.description}
                        </p>
                     </div>
                   ))}
                 </div>
               </section>
             )}
          </div>

          {/* Sidebar */}
          <div className="w-[35%] space-y-8">
             {/* Education */}
             {education.length > 0 && (
               <section className="bg-white/30 p-6 rounded-2xl border border-white/50 shadow-sm">
                 <h3 className="font-bold text-slate-800 mb-4 uppercase text-sm tracking-wider">Education</h3>
                 <div className="space-y-4">
                   {education.map(edu => (
                     <div key={edu.id}>
                       <div className="font-bold text-slate-900 text-sm">{edu.institution}</div>
                       <div className="text-xs text-slate-600 mb-1">{edu.degree}</div>
                       <div className="text-[10px] text-slate-400 font-medium uppercase">{edu.startDate} - {edu.endDate}</div>
                     </div>
                   ))}
                 </div>
               </section>
             )}

             {/* Skills */}
             {skills.length > 0 && (
               <section className="bg-white/30 p-6 rounded-2xl border border-white/50 shadow-sm">
                  <h3 className="font-bold text-slate-800 mb-4 uppercase text-sm tracking-wider">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map(skill => (
                      <span key={skill.id} className="px-3 py-1.5 bg-white/60 text-slate-700 text-xs font-bold rounded-lg shadow-sm border border-white/60">
                        {skill.name}
                      </span>
                    ))}
                  </div>
               </section>
             )}

             {/* Hobbies / Extras */}
             {hobbies && hobbies.length > 0 && (
               <section className="bg-white/30 p-6 rounded-2xl border border-white/50 shadow-sm">
                  <h3 className="font-bold text-slate-800 mb-4 uppercase text-sm tracking-wider">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {hobbies.map(hobby => (
                      <span key={hobby.id} className="text-xs text-slate-600 border-b border-slate-400/30 pb-0.5">
                        {hobby.name}
                      </span>
                    ))}
                  </div>
               </section>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glass;
