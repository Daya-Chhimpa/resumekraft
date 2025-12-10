import React from 'react';

const NeoClassic = ({ data }) => {
  const { personalInfo, experience, education, skills } = data;

  return (
    <div className="w-full h-full min-h-[297mm] bg-white text-slate-900 p-16 font-serif">
      <div className="text-center border-b-2 border-slate-900 pb-8 mb-8">
        <h1 className="text-4xl font-bold text-slate-900 uppercase tracking-widest mb-3">
          {personalInfo.fullName}
        </h1>
        <p className="text-xl text-slate-600 italic mb-4">{personalInfo.title}</p>
        <div className="flex justify-center gap-4 text-sm font-sans text-slate-500">
           {personalInfo.email && <span>{personalInfo.email}</span>}
           {personalInfo.phone && <span>| {personalInfo.phone}</span>}
           {personalInfo.location && <span>| {personalInfo.location}</span>}
        </div>
      </div>

      <div className="space-y-8">
        {/* Introduction */}
        {personalInfo.summary && (
          <section className="text-center max-w-2xl mx-auto mb-10">
            <p className="leading-relaxed text-slate-700">
              {personalInfo.summary}
            </p>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-slate-900 uppercase border-b border-slate-300 mb-6 pb-2">Professional Experience</h2>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-lg font-bold text-slate-800">{exp.company}</h3>
                    <span className="text-sm font-sans text-slate-500 font-medium">{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <div className="text-md text-slate-600 italic mb-2">{exp.role}</div>
                  <p className="text-sm text-slate-700 font-sans leading-relaxed whitespace-pre-line">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-2 gap-12">
           {/* Education */}
           {education.length > 0 && (
             <section>
               <h2 className="text-xl font-bold text-slate-900 uppercase border-b border-slate-300 mb-6 pb-2">Education</h2>
               <div className="space-y-4">
                 {education.map((edu) => (
                   <div key={edu.id}>
                     <div className="font-bold text-slate-800">{edu.institution}</div>
                     <div className="text-slate-600 italic">{edu.degree}</div>
                     <div className="text-xs text-slate-500 font-sans mt-1">{edu.startDate} - {edu.endDate}</div>
                   </div>
                 ))}
               </div>
             </section>
           )}

           {/* Skills */}
           {skills.length > 0 && (
             <section>
               <h2 className="text-xl font-bold text-slate-900 uppercase border-b border-slate-300 mb-6 pb-2">Skills</h2>
               <div className="flex flex-wrap gap-x-6 gap-y-2 font-sans text-sm text-slate-700">
                 {skills.map((skill) => (
                   <span key={skill.id} className="list-item list-inside">
                     {skill.name}
                   </span>
                 ))}
               </div>
             </section>
           )}
        </div>
      </div>
    </div>
  );
};

export default NeoClassic;
