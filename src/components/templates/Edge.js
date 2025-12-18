import React from 'react';
import SectionRenderer from './SectionRenderer';

const Edge = ({ data }) => {
  const { personalInfo } = data;
  
  // Extract theme settings with defaults (reserved for future customization)
  // const colors = themeSettings?.colors || { primary: '#ec4899', secondary: '#f97316', text: '#0f172a', background: '#ffffff' };
  // const fonts = themeSettings?.fonts || { heading: 'Inter', body: 'Inter' };
  // const spacing = themeSettings?.spacing || { margin: 10, lineHeight: 1.5 };

  // Render main content sections (Experience)
  const renderMainSection = (sectionKey, sectionData) => {
    if (sectionKey === 'experience') {
      return (
        <section key="experience">
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Experience</h2>
          <div className="space-y-10">
            {sectionData.map((exp) => (
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
      );
    }
    return null;
  };

  // Render sidebar sections
  const renderSidebarSection = (sectionKey, sectionData) => {
    switch (sectionKey) {
      case 'skills':
        return (
          <section key="skills">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 border-t-2 border-slate-100 pt-2">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {sectionData.map((skill) => (
                <span key={skill.id} className="bg-slate-100 text-slate-700 px-3 py-1 text-sm font-bold">
                  {skill.name}
                </span>
              ))}
            </div>
          </section>
        );

      case 'education':
        return (
          <section key="education">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 border-t-2 border-slate-100 pt-2">Education</h2>
            <div className="space-y-6">
              {sectionData.map((edu) => (
                <div key={edu.id}>
                  <div className="font-bold text-lg text-slate-900">{edu.institution}</div>
                  <div className="text-slate-600 font-medium">{edu.degree}</div>
                  <div className="text-slate-400 text-xs mt-1 font-bold uppercase">{edu.startDate} - {edu.endDate}</div>
                </div>
              ))}
            </div>
          </section>
        );

      case 'languages':
        return data.languages && data.languages.length > 0 ? (
          <section key="languages">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 border-t-2 border-slate-100 pt-2">Languages</h2>
            <ul className="space-y-3">
              {data.languages.map(l => (
                <li key={l.id} className="flex justify-between items-center text-sm">
                  <span className="font-bold text-slate-700">{l.name}</span>
                  <span className="text-slate-400 text-xs uppercase">{l.proficiency}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null;

      case 'hobbies':
        return data.hobbies && data.hobbies.length > 0 ? (
          <section key="hobbies">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 border-t-2 border-slate-100 pt-2">Interests</h2>
            <div className="flex flex-wrap gap-2">
              {data.hobbies.map(hobby => (
                <span key={hobby.id} className="text-sm text-slate-600">• {hobby.name}</span>
              ))}
            </div>
          </section>
        ) : null;

      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full min-h-[297mm] bg-white text-slate-900 p-12 flex flex-col font-sans">
      {/* Header */}
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

          {/* Dynamic Main Sections */}
          <SectionRenderer data={data} renderSection={renderMainSection} />
        </div>

        {/* Sidebar (Right) */}
        <div className="col-span-4 space-y-12">
          {/* Dynamic Sidebar Sections */}
          <SectionRenderer data={data} renderSection={renderSidebarSection} />
        </div>
      </div>
    </div>
  );
};

export default Edge;
