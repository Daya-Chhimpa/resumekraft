import React from 'react';

const Edge = ({ data }) => {
  const { personalInfo, experience, education, skills, languages } = data;

  return (
    <div className="w-full h-full min-h-[297mm] bg-white text-slate-900 p-12 flex flex-col font-sans">
      {/* Header - Left Aligned, Bold */}
      <header className="mb-12 border-b-4 border-slate-900 pb-6">
        <h1 className="text-6xl font-extrabold tracking-tight text-slate-900 mb-2 uppercase">
          {personalInfo.fullName}
        </h1>
        <p className="text-xl font-medium text-slate-500 tracking-wide uppercase">
          {personalInfo.title}
        </p>
        
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm font-semibold text-slate-600">
           {personalInfo.email && (
             <span className="flex items-center gap-1">
               {personalInfo.email}
             </span>
           )}
           {personalInfo.phone && <span>{personalInfo.phone}</span>}
           {personalInfo.location && <span>{personalInfo.location}</span>}
        </div>
      </header>

      <div className="flex-1 grid grid-cols-12 gap-12">
        {/* Main Content (Left) */}
        <div className="col-span-8 space-y-12">
           {personalInfo.summary && (
             <section>
               <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Profile</h2>
               <p className="text-lg leading-relaxed font-light text-slate-800">
                 {personalInfo.summary}
               </p>
             </section>
           )}

           {experience.length > 0 && (
             <section>
               <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Experience</h2>
               <div className="space-y-10">
                 {experience.map((exp) => (
                   <div key={exp.id} className="group">
                     <div className="flex justify-between items-baseline mb-1">
                       <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                         {exp.role}
                       </h3>
                       <span className="text-sm font-bold text-slate-400">{exp.startDate} - {exp.endDate}</span>
                     </div>
                     <div className="text-base font-semibold text-slate-600 mb-3">{exp.company}</div>
                     <p className="text-slate-600 leading-relaxed text-sm whitespace-pre-line">
                       {exp.description}
                     </p>
                   </div>
                 ))}
               </div>
             </section>
           )}
        </div>

        {/* Sidebar (Right) */}
        <div className="col-span-4 space-y-12">
            {skills.length > 0 && (
             <section>
               <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 border-t-2 border-slate-100 pt-2">Skills</h2>
               <div className="flex flex-wrap gap-2">
                 {skills.map((skill) => (
                   <span key={skill.id} className="bg-slate-100 text-slate-700 px-3 py-1 text-sm font-bold">
                     {skill.name}
                   </span>
                 ))}
               </div>
             </section>
           )}

           {education.length > 0 && (
             <section>
               <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 border-t-2 border-slate-100 pt-2">Education</h2>
               <div className="space-y-6">
                 {education.map((edu) => (
                   <div key={edu.id}>
                     <div className="font-bold text-lg text-slate-900">{edu.institution}</div>
                     <div className="text-slate-600 font-medium">{edu.degree}</div>
                     <div className="text-slate-400 text-xs mt-1 font-bold uppercase">{edu.startDate} - {edu.endDate}</div>
                   </div>
                 ))}
               </div>
             </section>
           )}

           {languages && languages.length > 0 && (
              <section>
                <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 border-t-2 border-slate-100 pt-2">Languages</h2>
                <ul className="space-y-3">
                  {languages.map(l => (
                    <li key={l.id} className="flex justify-between items-center text-sm">
                      <span className="font-bold text-slate-700">{l.name}</span>
                      <span className="text-slate-400 text-xs uppercase">{l.proficiency}</span>
                    </li>
                  ))}
                </ul>
              </section>
           )}
        </div>
      </div>
    </div>
  );
};

export default Edge;
