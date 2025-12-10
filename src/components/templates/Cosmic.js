import React from 'react';

const Cosmic = ({ data }) => {
  const { personalInfo, experience, education, skills, languages, hobbies } = data;

  return (
    <div className="flex w-full h-full min-h-[297mm] bg-slate-900 text-slate-100 font-sans selection:bg-purple-500 selection:text-white">
      {/* Sidebar (Left) */}
      <div className="w-[32%] bg-slate-950 p-8 space-y-10 border-r border-slate-800 relative overflow-hidden">
        {/* Decorative Glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none"></div>

        <div className="relative z-10 space-y-8">
            {/* Photo */}
            {personalInfo.photo && (
              <div className="w-40 h-40 mx-auto rounded-full p-1 bg-gradient-to-tr from-purple-500 to-pink-500 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                <img src={personalInfo.photo} alt="Profile" className="w-full h-full rounded-full object-cover border-4 border-slate-900" />
              </div>
            )}

            {/* Contact */}
            <div className="space-y-4 text-sm">
               {personalInfo.email && <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-800 text-slate-300 break-all">{personalInfo.email}</div>}
               {personalInfo.phone && <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-800 text-slate-300">{personalInfo.phone}</div>}
               {personalInfo.location && <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-800 text-slate-300">{personalInfo.location}</div>}
            </div>

            {/* Skills */}
            {skills.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 uppercase tracking-widest">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <span key={skill.id} className="px-3 py-1 bg-purple-500/10 text-purple-300 text-xs rounded-full border border-purple-500/20">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Languages */}
            {languages && languages.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 uppercase tracking-widest">Languages</h3>
                <ul className="space-y-2">
                  {languages.map(lang => (
                    <li key={lang.id} className="flex justify-between text-sm text-slate-400 border-b border-slate-800 pb-1">
                      <span>{lang.name}</span>
                      <span className="text-slate-600">{lang.proficiency}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </div>
      </div>

      {/* Main Content (Right) */}
      <div className="w-[68%] p-10 space-y-10">
         {/* Header */}
         <header className="space-y-4">
            <h1 className="text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-slate-400 uppercase">
              {personalInfo.fullName}
            </h1>
            <p className="text-2xl text-purple-400 font-medium tracking-wide border-l-4 border-purple-500 pl-4">
              {personalInfo.title}
            </p>
            {personalInfo.summary && (
              <p className="text-slate-400 leading-relaxed text-sm pt-4">
                {personalInfo.summary}
              </p>
            )}
         </header>
         
         {/* Education */}
         {education.length > 0 && (
            <section className="space-y-6">
               <h2 className="text-2xl font-bold text-purple-200 flex items-center gap-3">
                 <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]"></span>
                 Education
               </h2>
               <div className="grid grid-cols-1 gap-6">
                 {education.map(edu => (
                   <div key={edu.id} className="bg-slate-800/30 p-5 rounded-xl border border-slate-800 hover:border-purple-500/30 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-slate-200">{edu.institution}</h3>
                        <span className="text-xs text-purple-300 font-mono bg-purple-500/10 px-2 py-1 rounded">{edu.startDate} - {edu.endDate}</span>
                      </div>
                      <p className="text-sm text-slate-400">{edu.degree}</p>
                   </div>
                 ))}
               </div>
            </section>
         )}

         {/* Experience */}
         {experience.length > 0 && (
            <section className="space-y-6">
               <h2 className="text-2xl font-bold text-purple-200 flex items-center gap-3">
                 <span className="w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_10px_#ec4899]"></span>
                 Experience
               </h2>
               <div className="space-y-8 pl-3 border-l-2 border-slate-800">
                 {experience.map(exp => (
                   <div key={exp.id} className="relative pl-8">
                      {/* Timeline Dot */}
                      <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-600"></span>
                      
                      <div className="mb-4">
                         <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                         <div className="flex items-center gap-3 mt-1">
                           <span className="text-purple-400 font-medium">{exp.company}</span>
                           <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                           <span className="text-xs text-slate-500">{exp.startDate} - {exp.endDate}</span>
                         </div>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                        {exp.description}
                      </p>
                   </div>
                 ))}
               </div>
            </section>
         )}
      </div>
    </div>
  );
};

export default Cosmic;
