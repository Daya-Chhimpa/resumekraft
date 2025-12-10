import React from 'react';

const Titan = ({ data }) => {
  const { personalInfo, experience, education, skills, languages, hobbies } = data;

  return (
    <div className="w-full h-full min-h-[297mm] bg-white text-black font-sans">
      {/* Heavy Header */}
      <header className="bg-black text-white p-12 flex justify-between items-end">
         <div>
            <h1 className="text-7xl font-black tracking-tighter leading-none mb-4 uppercase">
              {personalInfo.fullName.split(' ')[0]} <br/>
              <span className="text-slate-400">{personalInfo.fullName.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-xl font-bold tracking-[0.2em] uppercase text-slate-300 border-t-4 border-white pt-4 inline-block">
              {personalInfo.title}
            </p>
         </div>
         {personalInfo.photo && (
           <div className="w-32 h-32 bg-white p-1 shrink-0 rotate-3">
              <img src={personalInfo.photo} alt="Profile" className="w-full h-full object-cover grayscale contrast-125" />
           </div>
         )}
      </header>

      {/* Grid Layout */}
      <div className="grid grid-cols-12 min-h-[calc(100%-250px)]">
         {/* Sidebar (Left) */}
         <div className="col-span-4 bg-stone-100 p-10 space-y-12 border-r-4 border-black">
            {/* Contact */}
            <div className="space-y-4">
               <h3 className="font-black text-2xl uppercase border-b-4 border-black pb-2 mb-4">Contact</h3>
               <div className="space-y-2 font-bold text-sm">
                  {personalInfo.email && <div className="break-all">{personalInfo.email}</div>}
                  {personalInfo.phone && <div>{personalInfo.phone}</div>}
                  {personalInfo.location && <div>{personalInfo.location}</div>}
               </div>
            </div>

            {/* Education */}
            {education.length > 0 && (
               <div>
                  <h3 className="font-black text-2xl uppercase border-b-4 border-black pb-2 mb-4">Education</h3>
                  <div className="space-y-6">
                     {education.map(edu => (
                        <div key={edu.id}>
                           <div className="font-black text-lg leading-tight">{edu.institution}</div>
                           <div className="text-sm font-bold text-stone-600">{edu.degree}</div>
                           <div className="text-xs font-mono mt-1">{edu.startDate} - {edu.endDate}</div>
                        </div>
                     ))}
                  </div>
               </div>
            )}

            {/* Skills */}
            {skills.length > 0 && (
               <div>
                  <h3 className="font-black text-2xl uppercase border-b-4 border-black pb-2 mb-4">Expertise</h3>
                  <ul className="space-y-2 font-bold">
                     {skills.map(skill => (
                        <li key={skill.id} className="flex items-center gap-2">
                           <span className="w-2 h-2 bg-black"></span>
                           {skill.name}
                        </li>
                     ))}
                  </ul>
               </div>
            )}
         </div>

         {/* Main (Right) */}
         <div className="col-span-8 p-12 space-y-12">
            {personalInfo.summary && (
               <div className="text-xl font-bold leading-relaxed">
                  {personalInfo.summary}
               </div>
            )}

            {experience.length > 0 && (
               <div>
                  <h2 className="text-4xl font-black uppercase mb-8 flex items-center gap-4">
                     Experience
                     <span className="flex-1 h-2 bg-black"></span>
                  </h2>
                  <div className="space-y-10">
                     {experience.map(exp => (
                        <div key={exp.id}>
                           <div className="flex justify-between items-baseline mb-2">
                              <h3 className="text-2xl font-black">{exp.role}</h3>
                              <span className="font-mono font-bold bg-black text-white px-2 py-1 text-sm">
                                 {exp.startDate} - {exp.endDate}
                              </span>
                           </div>
                           <div className="text-xl font-bold text-stone-500 mb-4">{exp.company}</div>
                           <p className="font-medium text-slate-800 leading-relaxed whitespace-pre-line">
                              {exp.description}
                           </p>
                        </div>
                     ))}
                  </div>
               </div>
            )}
         </div>
      </div>
    </div>
  );
};

export default Titan;
