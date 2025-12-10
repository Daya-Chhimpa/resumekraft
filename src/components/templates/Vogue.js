import React from 'react';

const Vogue = ({ data }) => {
  const { personalInfo, experience, education, skills } = data;

  return (
    <div className="w-full h-full min-h-[297mm] bg-[#fcfcfc] text-slate-900 font-serif p-12 border-[20px] border-white outline outline-1 outline-slate-200">
       
       {/* Header */}
       <header className="text-center border-b border-black pb-12 mb-12 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#fcfcfc] px-4 text-xs tracking-[0.3em] font-sans uppercase text-slate-400">
             Resume / Portfolio
          </div>

          <h1 className="text-8xl font-thin tracking-widest uppercase mb-4 scale-y-90">
             {personalInfo.fullName}
          </h1>
          <p className="text-sm font-sans tracking-[0.4em] uppercase text-slate-500 mb-8">
             {personalInfo.title}
          </p>
          
          <div className="flex justify-center gap-8 font-sans text-xs tracking-widest uppercase border-t border-b border-slate-100 py-3 max-w-2xl mx-auto">
             {personalInfo.email && <span>{personalInfo.email}</span>}
             {personalInfo.phone && <span>{personalInfo.phone}</span>}
             {personalInfo.location && <span>{personalInfo.location}</span>}
          </div>
       </header>

       {/* Two Column Layout */}
       <div className="grid grid-cols-12 gap-12">
          
          {/* Main Column */}
          <div className="col-span-7 space-y-12 border-r border-slate-100 pr-12">
             {personalInfo.summary && (
                <div className="text-lg leading-loose italic text-slate-600 first-letter:text-5xl first-letter:font-bold first-letter:mr-2 first-letter:float-left">
                   {personalInfo.summary}
                </div>
             )}

             {experience.length > 0 && (
                <section>
                   <h2 className="text-2xl font-normal uppercase tracking-widest border-b border-black pb-2 mb-8 text-center ring-offset-4 decoration-1">
                      Professional History
                   </h2>
                   <div className="space-y-10">
                      {experience.map(exp => (
                         <div key={exp.id} className="text-center">
                            <h3 className="text-xl font-bold font-sans uppercase tracking-wider">{exp.role}</h3>
                            <div className="text-sm italic text-slate-500 mb-4 font-serif">
                               {exp.company} — {exp.startDate} to {exp.endDate}
                            </div>
                            <p className="text-sm leading-7 text-slate-700 text-justify">
                               {exp.description}
                            </p>
                         </div>
                      ))}
                   </div>
                </section>
             )}
          </div>

          {/* Sidebar Column */}
          <div className="col-span-5 space-y-12 pt-2">
             {personalInfo.photo && (
                <div className="w-full aspect-[3/4] bg-slate-100 mb-8 relative">
                   <img src={personalInfo.photo} alt="Profile" className="w-full h-full object-cover grayscale contrast-110" />
                   <div className="absolute inset-0 ring-1 ring-inset ring-black/5"></div>
                </div>
             )}

             {skills.length > 0 && (
                <section className="text-center">
                   <h2 className="text-lg font-sans font-bold uppercase tracking-widest mb-6">Capabilities</h2>
                   <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
                      {skills.map(skill => (
                         <span key={skill.id} className="text-sm italic border-b border-slate-200">
                            {skill.name}
                         </span>
                      ))}
                   </div>
                </section>
             )}

             {education.length > 0 && (
                <section className="text-center">
                   <h2 className="text-lg font-sans font-bold uppercase tracking-widest mb-6">Academic</h2>
                   <div className="space-y-6">
                      {education.map(edu => (
                         <div key={edu.id}>
                            <div className="font-bold">{edu.institution}</div>
                            <div className="text-sm italic text-slate-500">{edu.degree}</div>
                            <div className="text-xs font-sans mt-1 text-slate-400">{edu.startDate} - {edu.endDate}</div>
                         </div>
                      ))}
                   </div>
                </section>
             )}
          </div>
       </div>
    </div>
  );
};

export default Vogue;
