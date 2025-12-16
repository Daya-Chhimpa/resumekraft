import React from 'react';

const Glass = ({ data, onSectionClick }) => {
  const { personalInfo, experience, education, skills, languages, hobbies, themeSettings } = data;
  const colors = themeSettings?.colors || { primary: '#ec4899', secondary: '#f97316', text: '#0f172a', background: '#ffffff' };
  const fonts = themeSettings?.fonts || { heading: 'Inter', body: 'Inter' };
  const spacing = themeSettings?.spacing || { margin: 10, lineHeight: 1.5 };

  const handleSectionClick = (e, section) => {
    if (onSectionClick) {
        e.stopPropagation(); // Prevent bubbling
        onSectionClick(section);
    }
  };

  return (
    <div 
      className="w-full h-full min-h-[297mm] font-sans relative overflow-hidden"
      style={{
        fontFamily: fonts.body,
        padding: `${spacing.margin}mm`,
        backgroundColor: colors.background, // Actually the wrapper handles bg, but we'll set it here too
      }}
    >
      {/* Dynamic Background Gradients based on primary/secondary colors */}
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" 
        style={{
            background: `linear-gradient(135deg, ${colors.primary}20, ${colors.secondary}20)`
        }}
      ></div>

      {/* Decorative Orbs */}
      <div 
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ backgroundColor: `${colors.primary}40` }}
      ></div>
      <div 
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none"
        style={{ backgroundColor: `${colors.secondary}30` }}
      ></div>

      {/* Glass Card */}
      <div className="relative z-10 w-full h-full min-h-[280mm] bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl rounded-3xl overflow-hidden flex flex-col">
        
        {/* Header */}
        <header 
            className="bg-white/50 p-10 flex items-center gap-8 border-b border-white/50 cursor-pointer hover:bg-white/60 transition-colors group relative"
            onClick={(e) => handleSectionClick(e, 'personal')}
        >
           <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-white/80 px-2 py-1 rounded text-xs font-bold text-pink-500 pointer-events-none transition-opacity">
              Click to Edit
           </div>

           {personalInfo.photo && (
             <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg border-2 border-white ring-4 ring-white/30 transform rotate-[-2deg]">
               <img src={personalInfo.photo} alt="Profile" className="w-full h-full object-cover" />
             </div>
           )}
           <div className="flex-1">
             <h1 
                className="text-5xl font-black tracking-tight mb-2"
                style={{ fontFamily: fonts.heading, color: colors.text }}
             >
                {personalInfo.fullName}
             </h1>
             <p 
                className="text-xl font-medium tracking-wide uppercase"
                style={{ color: colors.primary }}
             >
                {personalInfo.title}
             </p>
             <div className="flex flex-wrap gap-4 mt-4 text-sm font-medium" style={{ color: `${colors.text}90` }}>
                {personalInfo.email && <span>{personalInfo.email}</span>}
                {personalInfo.phone && <span>• {personalInfo.phone}</span>}
                {personalInfo.location && <span>• {personalInfo.location}</span>}
             </div>
           </div>
        </header>

        <div className="flex flex-1 p-10 gap-10">
          
          {/* Main Column */}
          <div className="w-[65%] space-y-10">
             {personalInfo.summary && (
                <div 
                    className="p-6 bg-white/40 rounded-2xl border border-white/50 shadow-sm cursor-pointer hover:bg-white/60 transition-colors group relative"
                    onClick={(e) => handleSectionClick(e, 'personal')}
                >
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-white/80 px-2 py-1 rounded text-xs font-bold text-pink-500 pointer-events-none transition-opacity">Edit</div>
                   <p className="leading-relaxed italic" style={{ color: colors.text, lineHeight: spacing.lineHeight }}>
                     "{personalInfo.summary}"
                   </p>
                </div>
             )}

             {experience.length > 0 && (
               <section 
                  className="cursor-pointer hover:bg-white/20 p-4 -m-4 rounded-xl transition-colors group relative"
                  onClick={(e) => handleSectionClick(e, 'experience')}
               >
                 <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-white/80 px-2 py-1 rounded text-xs font-bold text-pink-500 pointer-events-none transition-opacity">Edit Experience</div>
                 <h2 
                    className="text-2xl font-bold mb-6 flex items-center gap-3"
                    style={{ fontFamily: fonts.heading, color: colors.text }}
                 >
                    <span 
                        className="p-2 rounded-lg shadow-sm"
                        style={{ backgroundColor: `${colors.secondary}20`, color: colors.secondary }}
                    >
                        Exp
                    </span>
                    Experience
                 </h2>
                 <div className="space-y-6">
                   {experience.map(exp => (
                     <div key={exp.id} className="group/item p-5 bg-white/30 rounded-2xl border border-white/40 hover:bg-white/60 transition-colors shadow-sm">
                        <div className="flex justify-between items-start mb-2">
                           <div>
                              <h3 className="font-bold text-lg" style={{ color: colors.text }}>{exp.role}</h3>
                              <p className="font-medium" style={{ color: colors.primary }}>{exp.company}</p>
                           </div>
                           <span className="text-xs font-bold bg-white/50 px-3 py-1 rounded-full border border-white/50" style={{ color: `${colors.text}80` }}>
                              {exp.startDate} - {exp.endDate}
                           </span>
                        </div>
                        <p className="text-sm leading-relaxed mt-3" style={{ color: `${colors.text}CC`, lineHeight: spacing.lineHeight }}>
                           {exp.description}
                        </p>
                     </div>
                   ))}
                 </div>
               </section>
             )}
          </div>

          {/* Sidebar */}
          <div className="w-[35%] space-y-8">
             {/* Education */}
             {education.length > 0 && (
               <section 
                  className="bg-white/30 p-6 rounded-2xl border border-white/50 shadow-sm cursor-pointer hover:bg-white/60 transition-colors group relative"
                  onClick={(e) => handleSectionClick(e, 'education')}
               >
                 <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-white/80 px-2 py-1 rounded text-xs font-bold text-pink-500 pointer-events-none transition-opacity">Edit</div>
                 <h3 className="font-bold mb-4 uppercase text-sm tracking-wider" style={{ fontFamily: fonts.heading, color: colors.text }}>Education</h3>
                 <div className="space-y-4">
                   {education.map(edu => (
                     <div key={edu.id}>
                       <div className="font-bold text-sm" style={{ color: colors.text }}>{edu.institution}</div>
                       <div className="text-xs mb-1" style={{ color: `${colors.text}90` }}>{edu.degree}</div>
                       <div className="text-[10px] font-medium uppercase" style={{ color: `${colors.text}60` }}>{edu.startDate} - {edu.endDate}</div>
                     </div>
                   ))}
                 </div>
               </section>
             )}

             {/* Skills */}
             {skills.length > 0 && (
               <section 
                  className="bg-white/30 p-6 rounded-2xl border border-white/50 shadow-sm cursor-pointer hover:bg-white/60 transition-colors group relative"
                  onClick={(e) => handleSectionClick(e, 'skills')}
               >
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-white/80 px-2 py-1 rounded text-xs font-bold text-pink-500 pointer-events-none transition-opacity">Edit</div>
                  <h3 className="font-bold mb-4 uppercase text-sm tracking-wider" style={{ fontFamily: fonts.heading, color: colors.text }}>Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map(skill => (
                      <span 
                        key={skill.id} 
                        className="px-3 py-1.5 bg-white/60 text-xs font-bold rounded-lg shadow-sm border border-white/60"
                        style={{ color: colors.text }}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
               </section>
             )}

             {/* Hobbies / Extras */}
             {hobbies && hobbies.length > 0 && (
               <section 
                  className="bg-white/30 p-6 rounded-2xl border border-white/50 shadow-sm cursor-pointer hover:bg-white/60 transition-colors group relative"
                  onClick={(e) => handleSectionClick(e, 'hobbies')}
               >
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-white/80 px-2 py-1 rounded text-xs font-bold text-pink-500 pointer-events-none transition-opacity">Edit</div>
                  <h3 className="font-bold mb-4 uppercase text-sm tracking-wider" style={{ fontFamily: fonts.heading, color: colors.text }}>Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {hobbies.map(hobby => (
                      <span key={hobby.id} className="text-xs border-b pb-0.5" style={{ color: `${colors.text}90`, borderColor: `${colors.text}30` }}>
                        {hobby.name}
                      </span>
                    ))}
                  </div>
               </section>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glass;
