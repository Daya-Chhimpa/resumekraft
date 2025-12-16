import React from 'react';

const Aurora = ({ data, onSectionClick }) => {
  const { personalInfo, experience, education, skills, languages, hobbies, themeSettings } = data;
  const colors = themeSettings?.colors || { primary: '#2563eb', secondary: '#64748b', text: '#0f172a', background: '#ffffff' };
  const fonts = themeSettings?.fonts || { heading: 'Inter', body: 'Inter' };
  const spacing = themeSettings?.spacing || { margin: 10, lineHeight: 1.5 };

  const handleSectionClick = (e, section) => {
    if (onSectionClick) {
        e.stopPropagation();
        onSectionClick(section);
    }
  };

  return (
    <div 
        className="flex w-full h-full min-h-[297mm]"
        style={{ fontFamily: fonts.body }}
    >
      {/* Left Column - Sidebar */}
      <div 
        className="w-[30%] text-white p-8 space-y-8"
        style={{ backgroundColor: colors.text }}
      >
        
        {/* Photo */}
        {personalInfo.photo && (
          <div 
            className="w-full aspect-square rounded-full overflow-hidden border-4 mx-auto mb-6 cursor-pointer hover:opacity-80 transition-opacity"
            style={{ borderColor: `${colors.background}30` }}
            onClick={(e) => handleSectionClick(e, 'personal')}
          >
            <img src={personalInfo.photo} alt="Profile" className="w-full h-full object-cover" />
          </div>
        )}

        {/* Contact Info */}
        <div 
            className="space-y-4 cursor-pointer hover:bg-white/10 p-3 -m-3 rounded-lg transition-colors group relative"
            onClick={(e) => handleSectionClick(e, 'personal')}
        >
           <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 bg-white text-slate-900 px-1 py-0.5 rounded text-[10px] font-bold pointer-events-none">Edit</div>
           {personalInfo.email && (
             <div>
               <h3 className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: `${colors.background}80` }}>Email</h3>
               <p className="text-sm break-all">{personalInfo.email}</p>
             </div>
           )}
           {personalInfo.phone && (
             <div>
               <h3 className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: `${colors.background}80` }}>Phone</h3>
               <p className="text-sm">{personalInfo.phone}</p>
             </div>
           )}
           {personalInfo.location && (
             <div>
               <h3 className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: `${colors.background}80` }}>Location</h3>
               <p className="text-sm">{personalInfo.location}</p>
             </div>
           )}
        </div>

        {/* Skills */}
        {skills.length > 0 && (
          <div 
            className="cursor-pointer hover:bg-white/10 p-3 -m-3 rounded-lg transition-colors group relative"
            onClick={(e) => handleSectionClick(e, 'skills')}
          >
            <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 bg-white text-slate-900 px-1 py-0.5 rounded text-[10px] font-bold pointer-events-none">Edit</div>
            <h3 className="text-lg font-semibold text-white border-b pb-2 mb-4" style={{ borderColor: `${colors.background}20`, fontFamily: fonts.heading }}>Skills</h3>
            <ul className="space-y-2">
              {skills.map((skill) => (
                <li key={skill.id} className="text-sm" style={{ color: `${colors.background}CC` }}>
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Languages */}
        {languages && languages.length > 0 && (
          <div
            className="cursor-pointer hover:bg-white/10 p-3 -m-3 rounded-lg transition-colors group relative"
            onClick={(e) => handleSectionClick(e, 'languages')}
          >
            <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 bg-white text-slate-900 px-1 py-0.5 rounded text-[10px] font-bold pointer-events-none">Edit</div>
            <h3 className="text-lg font-semibold text-white border-b pb-2 mb-4" style={{ borderColor: `${colors.background}20`, fontFamily: fonts.heading }}>Languages</h3>
            <ul className="space-y-2">
              {languages.map((lang) => (
                <li key={lang.id} className="text-sm flex justify-between" style={{ color: `${colors.background}CC` }}>
                  <span>{lang.name}</span>
                  <span className="text-xs" style={{ color: `${colors.background}80` }}>{lang.proficiency}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Hobbies */}
        {hobbies && hobbies.length > 0 && (
          <div
            className="cursor-pointer hover:bg-white/10 p-3 -m-3 rounded-lg transition-colors group relative"
            onClick={(e) => handleSectionClick(e, 'hobbies')}
          >
             <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 bg-white text-slate-900 px-1 py-0.5 rounded text-[10px] font-bold pointer-events-none">Edit</div>
             <h3 className="text-lg font-semibold text-white border-b pb-2 mb-4" style={{ borderColor: `${colors.background}20`, fontFamily: fonts.heading }}>Interests</h3>
             <div className="flex flex-wrap gap-2">
               {hobbies.map((hobby) => (
                 <span key={hobby.id} className="text-xs px-2 py-1 rounded" style={{ color: `${colors.background}DD`, backgroundColor: `${colors.background}15` }}>
                   {hobby.name}
                 </span>
               ))}
             </div>
          </div>
        )}

        {/* Education (if compact) */}
        {education.length > 0 && (
           <div
             className="cursor-pointer hover:bg-white/10 p-3 -m-3 rounded-lg transition-colors group relative"
             onClick={(e) => handleSectionClick(e, 'education')}
           >
             <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 bg-white text-slate-900 px-1 py-0.5 rounded text-[10px] font-bold pointer-events-none">Edit</div>
             <h3 className="text-lg font-semibold text-white border-b pb-2 mb-4" style={{ borderColor: `${colors.background}20`, fontFamily: fonts.heading }}>Education</h3>
             <div className="space-y-4">
               {education.map((edu) => (
                 <div key={edu.id}>
                   <div className="text-sm font-bold text-white">{edu.institution}</div>
                   <div className="text-xs" style={{ color: `${colors.background}90` }}>{edu.degree}</div>
                   <div className="text-xs mt-1" style={{ color: `${colors.background}60` }}>{edu.startDate} - {edu.endDate}</div>
                 </div>
               ))}
             </div>
           </div>
        )}
      </div>

      {/* Right Column - Main Content */}
      <div 
        className="w-[70%] p-10 space-y-8"
        style={{ backgroundColor: colors.background }}
      >
        {/* Header */}
        <header 
            className="border-b-2 pb-8 cursor-pointer hover:bg-slate-50 p-4 -m-4 rounded-xl transition-colors group relative"
            style={{ borderColor: `${colors.text}10` }}
            onClick={(e) => handleSectionClick(e, 'personal')}
        >
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-slate-900 text-white px-2 py-1 rounded text-xs font-bold pointer-events-none">Edit Header</div>
          <h1 
            className="text-5xl font-bold tracking-tight leading-none mb-2"
            style={{ color: colors.text, fontFamily: fonts.heading }}
          >
            {personalInfo.fullName}
          </h1>
          <p 
            className="text-2xl font-light tracking-wide"
            style={{ color: colors.primary }}
          >
            {personalInfo.title}
          </p>
          {personalInfo.summary && (
             <p 
                className="mt-6 leading-relaxed text-md"
                style={{ color: `${colors.text}CC`, lineHeight: spacing.lineHeight }}
             >
               {personalInfo.summary}
             </p>
          )}
        </header>

        {/* Experience */}
        {experience.length > 0 && (
          <section
            className="cursor-pointer hover:bg-slate-50 p-4 -m-4 rounded-xl transition-colors group relative"
            onClick={(e) => handleSectionClick(e, 'experience')}
          >
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-slate-900 text-white px-2 py-1 rounded text-xs font-bold pointer-events-none">Edit</div>
            <h2 
                className="text-2xl font-bold mb-6 flex items-center gap-3"
                style={{ color: colors.text, fontFamily: fonts.heading }}
            >
              <span className="w-8 h-1 block" style={{ backgroundColor: colors.primary }}></span>
              Experience
            </h2>
            <div className="space-y-8">
              {experience.map((exp) => (
                <div key={exp.id} className="relative pl-4 border-l-2" style={{ borderColor: `${colors.text}10` }}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-xl font-bold" style={{ color: colors.text }}>{exp.role}</h3>
                    <span className="text-sm font-medium whitespace-nowrap ml-4" style={{ color: `${colors.text}60` }}>
                      {exp.startDate} – {exp.endDate}
                    </span>
                  </div>
                  <div className="text-base font-semibold mb-3" style={{ color: colors.primary }}>{exp.company}</div>
                  <p 
                    className="leading-relaxed text-sm whitespace-pre-line"
                    style={{ color: `${colors.text}90`, lineHeight: spacing.lineHeight }}
                  >
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Custom Sections */}
        {data.customSections?.map(section => (
           section.items.length > 0 && (
            <section
              key={section.id}
              className="cursor-pointer hover:bg-slate-50 p-4 -m-4 rounded-xl transition-colors group relative"
            >
              <h2
                  className="text-2xl font-bold mb-6 flex items-center gap-3"
                  style={{ color: colors.text, fontFamily: fonts.heading }}
              >
                <span className="w-8 h-1 block" style={{ backgroundColor: colors.primary }}></span>
                {section.title}
              </h2>
              <div className="space-y-8">
                {section.items.map((item) => (
                  <div key={item.id} className="relative pl-4 border-l-2" style={{ borderColor: `${colors.text}10` }}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-xl font-bold" style={{ color: colors.text }}>{item.title}</h3>
                      {item.date && (
                        <span className="text-sm font-medium whitespace-nowrap ml-4" style={{ color: `${colors.text}60` }}>
                            {item.date}
                        </span>
                      )}
                    </div>
                    {item.subtitle && (
                        <div className="text-base font-semibold mb-3" style={{ color: colors.primary }}>{item.subtitle}</div>
                    )}
                    {item.description && (
                        <p
                            className="leading-relaxed text-sm whitespace-pre-line"
                            style={{ color: `${colors.text}90`, lineHeight: spacing.lineHeight }}
                        >
                            {item.description}
                        </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
           )
        ))}
      </div>
    </div>
  );
};

export default Aurora;
