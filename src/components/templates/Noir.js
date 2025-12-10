import React from 'react';

const Noir = ({ data }) => {
  const { personalInfo, experience, education, skills, languages } = data;

  return (
    <div className="w-full h-full min-h-[297mm] bg-neutral-900 text-white p-12 font-serif flex flex-col">
      {/* Header */}
      <header className="border-b border-yellow-600 pb-8 mb-10 text-center">
        <h1 className="text-5xl font-bold tracking-widest text-white uppercase mb-4">
          {personalInfo.fullName}
        </h1>
        <p className="text-xl text-yellow-600 tracking-widest uppercase mb-6">
          {personalInfo.title}
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-400 font-sans">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.photo && (
                <div style={{display: "none"}}>{/* Noir is text focused, maybe hide photo or small avatar? Keeping it hidden for pure noir feel unless requested */}</div>
          )}
        </div>
      </header>

      <div className="flex-1 grid grid-cols-12 gap-12">
        {/* Main Content */}
        <div className="col-span-8 space-y-10">
           {personalInfo.summary && (
             <section>
               <h2 className="text-lg font-bold text-yellow-600 uppercase tracking-widest mb-4">Profile</h2>
               <p className="text-neutral-300 leading-relaxed font-sans font-light">
                 {personalInfo.summary}
               </p>
             </section>
           )}

           {experience.length > 0 && (
             <section>
               <h2 className="text-lg font-bold text-yellow-600 uppercase tracking-widest mb-6">Experience</h2>
               <div className="space-y-8 border-l border-neutral-800 pl-6">
                 {experience.map((exp) => (
                   <div key={exp.id} className="relative">
                     <div className="absolute -left-[31px] top-1 w-3 h-3 bg-yellow-600 rounded-full border-4 border-neutral-900"></div>
                     <div className="flex justify-between items-baseline mb-2">
                       <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                       <span className="text-sm font-sans text-neutral-500">{exp.startDate} - {exp.endDate}</span>
                     </div>
                     <div className="text-md text-neutral-400 mb-2 italic">{exp.company}</div>
                     <p className="text-neutral-300 font-sans font-light text-sm leading-relaxed whitespace-pre-line">
                       {exp.description}
                     </p>
                   </div>
                 ))}
               </div>
             </section>
           )}
           
           {/* Hobbies usually don't fit well in main column of Noir, maybe skip or sidebar */}
        </div>

        {/* Sidebar */}
        <div className="col-span-4 space-y-10 border-l border-neutral-800 pl-8">
           {skills.length > 0 && (
             <section>
               <h2 className="text-lg font-bold text-yellow-600 uppercase tracking-widest mb-6">Expertise</h2>
               <ul className="space-y-3 font-sans">
                 {skills.map((skill) => (
                   <li key={skill.id} className="flex flex-col">
                     <span className="text-neutral-300 text-sm mb-1">{skill.name}</span>
                     <div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
                       <div className="h-full bg-yellow-600/50" style={{ width: '80%' }}></div>
                     </div>
                   </li>
                 ))}
               </ul>
             </section>
           )}

           {education.length > 0 && (
             <section>
               <h2 className="text-lg font-bold text-yellow-600 uppercase tracking-widest mb-6">Education</h2>
               <div className="space-y-6">
                 {education.map((edu) => (
                   <div key={edu.id}>
                     <div className="text-white font-bold">{edu.institution}</div>
                     <div className="text-neutral-400 text-sm italic">{edu.degree}</div>
                     <div className="text-neutral-600 text-xs mt-1 font-sans">{edu.startDate} - {edu.endDate}</div>
                   </div>
                 ))}
               </div>
             </section>
           )}
           
           {languages && languages.length > 0 && (
              <section>
                <h2 className="text-lg font-bold text-yellow-600 uppercase tracking-widest mb-6">Languages</h2>
                <ul className="space-y-2 font-sans text-sm text-neutral-300">
                  {languages.map(l => (
                    <li key={l.id} className="flex justify-between border-b border-neutral-800 pb-2">
                      <span>{l.name}</span>
                      <span className="text-neutral-500 text-xs">{l.proficiency}</span>
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

export default Noir;
