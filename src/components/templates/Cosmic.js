import React from 'react';
import SectionRenderer from './SectionRenderer';

const Cosmic = ({ data }) => {
  const { personalInfo, themeSettings } = data;
  
  // Extract theme settings with defaults
  const colors = themeSettings?.colors || { primary: '#ec4899', secondary: '#f97316', text: '#0f172a', background: '#ffffff' };
  const fonts = themeSettings?.fonts || { heading: 'Inter', body: 'Inter' };
  const spacing = themeSettings?.spacing || { margin: 10, lineHeight: 1.5 };

  const renderSection = (sectionKey, sectionData) => {
    switch (sectionKey) {
      case 'education':
        return (
          <section key="education" className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-3" style={{ color: colors.primary, fontFamily: fonts.heading }}>
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.primary, boxShadow: `0 0 10px ${colors.primary}` }}></span>
              Education
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {sectionData.map(edu => (
                <div key={edu.id} className="bg-slate-800/30 p-5 rounded-xl border border-slate-800 hover:border-purple-500/30 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-slate-200" style={{ fontFamily: fonts.body }}>{edu.institution}</h3>
                    <span className="text-xs font-mono px-2 py-1 rounded" style={{ color: colors.primary, backgroundColor: `${colors.primary}20` }}>{edu.startDate} - {edu.endDate}</span>
                  </div>
                  <p className="text-sm text-slate-400" style={{ fontFamily: fonts.body }}>{edu.degree}</p>
                </div>
              ))}
            </div>
          </section>
        );

      case 'experience':
        return (
          <section key="experience" className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-3" style={{ color: colors.secondary, fontFamily: fonts.heading }}>
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.secondary, boxShadow: `0 0 10px ${colors.secondary}` }}></span>
              Experience
            </h2>
            <div className="space-y-8 pl-3 border-l-2 border-slate-800">
              {sectionData.map(exp => (
                <div key={exp.id} className="relative pl-8">
                  <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-600"></span>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white" style={{ fontFamily: fonts.heading }}>{exp.role}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="font-medium" style={{ color: colors.primary, fontFamily: fonts.body }}>{exp.company}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                      <span className="text-xs text-slate-500" style={{ fontFamily: fonts.body }}>{exp.startDate} - {exp.endDate}</span>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line" style={{ fontFamily: fonts.body, lineHeight: spacing.lineHeight }}>
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        );

      case 'skills':
      case 'languages':
      case 'hobbies':
        // These are in sidebar, handled separately
        return null;

      default:
        return null;
    }
  };

  return (
    <div className="flex w-full h-full min-h-[297mm] bg-slate-900 text-slate-100 font-sans selection:bg-purple-500 selection:text-white" style={{ fontFamily: fonts.body, padding: `${spacing.margin}mm` }}>
      {/* Sidebar (Left) */}
      <div className="w-[32%] p-8 space-y-10 border-r border-slate-800 relative overflow-hidden" style={{ backgroundColor: colors.text }}>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none"></div>

        <div className="relative z-10 space-y-8">
          {personalInfo.photo && (
            <div className="w-40 h-40 mx-auto rounded-full p-1 bg-gradient-to-tr from-purple-500 to-pink-500 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              <img src={personalInfo.photo} alt="Profile" className="w-full h-full rounded-full object-cover border-4 border-slate-900" />
            </div>
          )}

          <div className="space-y-4 text-sm">
            {personalInfo.email && <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-800 text-slate-300 break-all">{personalInfo.email}</div>}
            {personalInfo.phone && <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-800 text-slate-300">{personalInfo.phone}</div>}
            {personalInfo.location && <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-800 text-slate-300">{personalInfo.location}</div>}
          </div>

          {data.skills && data.skills.length > 0 && (themeSettings?.layout?.sectionVisibility?.skills !== false) && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold uppercase tracking-widest" style={{ color: colors.primary, fontFamily: fonts.heading }}>Skills</h3>
              <div className="flex flex-wrap gap-2">
                {data.skills.map(skill => (
                  <span key={skill.id} className="px-3 py-1 text-xs rounded-full border" style={{ backgroundColor: `${colors.primary}20`, color: colors.primary, borderColor: `${colors.primary}40`, fontFamily: fonts.body }}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {data.languages && data.languages.length > 0 && (themeSettings?.layout?.sectionVisibility?.languages !== false) && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold uppercase tracking-widest" style={{ color: colors.secondary, fontFamily: fonts.heading }}>Languages</h3>
              <ul className="space-y-2">
                {data.languages.map(lang => (
                  <li key={lang.id} className="flex justify-between text-sm text-slate-400 border-b border-slate-800 pb-1" style={{ fontFamily: fonts.body }}>
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
        
        {/* Dynamic Sections */}
        <SectionRenderer data={data} renderSection={renderSection} />
      </div>
    </div>
  );
};

export default Cosmic;
