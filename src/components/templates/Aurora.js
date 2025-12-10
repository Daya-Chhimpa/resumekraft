import React from 'react';

const Aurora = ({ data }) => {
  const { personalInfo, experience, education, skills, languages, hobbies } = data;

  return (
    <div className="flex w-full h-full min-h-[297mm]">
      {/* Left Column - Sidebar */}
      <div className="w-[30%] bg-slate-900 text-white p-8 space-y-8">
        
        {/* Photo */}
        {personalInfo.photo && (
          <div className="w-full aspect-square rounded-full overflow-hidden border-4 border-slate-700 mx-auto mb-6">
            <img src={personalInfo.photo} alt="Profile" className="w-full h-full object-cover" />
          </div>
        )}

        {/* Contact Info */}
        <div className="space-y-4">
           {personalInfo.email && (
             <div>
               <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email</h3>
               <p className="text-sm break-all">{personalInfo.email}</p>
             </div>
           )}
           {personalInfo.phone && (
             <div>
               <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Phone</h3>
               <p className="text-sm">{personalInfo.phone}</p>
             </div>
           )}
           {personalInfo.location && (
             <div>
               <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Location</h3>
               <p className="text-sm">{personalInfo.location}</p>
             </div>
           )}
        </div>

        {/* Skills */}
        {skills.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-white border-b border-slate-700 pb-2 mb-4">Skills</h3>
            <ul className="space-y-2">
              {skills.map((skill) => (
                <li key={skill.id} className="text-sm text-slate-300">
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Languages */}
        {languages && languages.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-white border-b border-slate-700 pb-2 mb-4">Languages</h3>
            <ul className="space-y-2">
              {languages.map((lang) => (
                <li key={lang.id} className="text-sm text-slate-300 flex justify-between">
                  <span>{lang.name}</span>
                  <span className="text-slate-500 text-xs">{lang.proficiency}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Hobbies */}
        {hobbies && hobbies.length > 0 && (
          <div>
             <h3 className="text-lg font-semibold text-white border-b border-slate-700 pb-2 mb-4">Interests</h3>
             <div className="flex flex-wrap gap-2">
               {hobbies.map((hobby) => (
                 <span key={hobby.id} className="text-xs text-slate-300 bg-slate-800 px-2 py-1 rounded">
                   {hobby.name}
                 </span>
               ))}
             </div>
          </div>
        )}

        {/* Education (if compact) */}
        {education.length > 0 && (
           <div>
             <h3 className="text-lg font-semibold text-white border-b border-slate-700 pb-2 mb-4">Education</h3>
             <div className="space-y-4">
               {education.map((edu) => (
                 <div key={edu.id}>
                   <div className="text-sm font-bold text-white">{edu.institution}</div>
                   <div className="text-xs text-slate-400">{edu.degree}</div>
                   <div className="text-xs text-slate-500 mt-1">{edu.startDate} - {edu.endDate}</div>
                 </div>
               ))}
             </div>
           </div>
        )}
      </div>

      {/* Right Column - Main Content */}
      <div className="w-[70%] p-10 space-y-8 bg-white">
        {/* Header */}
        <header className="border-b-2 border-slate-100 pb-8">
          <h1 className="text-5xl font-bold text-slate-900 tracking-tight leading-none mb-2">
            {personalInfo.fullName}
          </h1>
          <p className="text-2xl text-blue-600 font-light tracking-wide">
            {personalInfo.title}
          </p>
          {personalInfo.summary && (
             <p className="mt-6 text-slate-600 leading-relaxed text-md">
               {personalInfo.summary}
             </p>
          )}
        </header>

        {/* Experience */}
        {experience.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-blue-600 block"></span>
              Experience
            </h2>
            <div className="space-y-8">
              {experience.map((exp) => (
                <div key={exp.id} className="relative pl-4 border-l-2 border-slate-100/0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-xl font-bold text-slate-800">{exp.role}</h3>
                    <span className="text-sm font-medium text-slate-400 whitespace-nowrap ml-4">
                      {exp.startDate} – {exp.endDate}
                    </span>
                  </div>
                  <div className="text-base font-semibold text-blue-600 mb-3">{exp.company}</div>
                  <p className="text-slate-600 leading-relaxed text-sm whitespace-pre-line">
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

export default Aurora;
