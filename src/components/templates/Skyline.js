import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Skyline = ({ data }) => {
  const { personalInfo, experience, education, skills } = data;

  return (
    <div className="w-full h-full min-h-[297mm] bg-white text-slate-800 font-sans">
       {/* Top Bar */}
       <div className="h-4 bg-sky-600 w-full"></div>
       
       <header className="px-12 py-10 flex justify-between items-start bg-slate-50 border-b border-slate-200">
          <div>
             <h1 className="text-5xl font-bold text-slate-900 tracking-tight">{personalInfo.fullName}</h1>
             <p className="text-xl text-sky-600 font-medium mt-2">{personalInfo.title}</p>
          </div>
          <div className="text-right space-y-2 text-sm text-slate-600">
             {personalInfo.email && <div className="flex items-center justify-end gap-2"><Mail size={14} /> {personalInfo.email}</div>}
             {personalInfo.phone && <div className="flex items-center justify-end gap-2"><Phone size={14} /> {personalInfo.phone}</div>}
             {personalInfo.location && <div className="flex items-center justify-end gap-2"><MapPin size={14} /> {personalInfo.location}</div>}
          </div>
       </header>

       <div className="px-12 py-10 grid grid-cols-3 gap-10">
          {/* Main Column */}
          <div className="col-span-2 space-y-10">
             {personalInfo.summary && (
                <section>
                   <h2 className="text-lg font-bold uppercase text-slate-900 border-b-2 border-slate-200 pb-2 mb-4">Profile</h2>
                   <p className="text-slate-600 leading-relaxed">
                      {personalInfo.summary}
                   </p>
                </section>
             )}

             {experience.length > 0 && (
                <section>
                   <h2 className="text-lg font-bold uppercase text-slate-900 border-b-2 border-slate-200 pb-2 mb-6">Experience</h2>
                   <div className="space-y-8">
                      {experience.map(exp => (
                         <div key={exp.id}>
                            <div className="flex justify-between items-baseline mb-1">
                               <h3 className="text-xl font-bold text-slate-800">{exp.role}</h3>
                               <span className="text-sm font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                                  {exp.startDate} - {exp.endDate}
                               </span>
                            </div>
                            <div className="text-sky-700 font-semibold mb-3">{exp.company}</div>
                            <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                               {exp.description}
                            </p>
                         </div>
                      ))}
                   </div>
                </section>
             )}
          </div>

          {/* Sidebar */}
          <div className="col-span-1 space-y-10">
             {personalInfo.photo && (
                <div className="w-full aspect-square bg-slate-200 rounded-lg overflow-hidden mb-6">
                   <img src={personalInfo.photo} alt="Profile" className="w-full h-full object-cover" />
                </div>
             )}

             {skills.length > 0 && (
                <section>
                   <h2 className="text-lg font-bold uppercase text-slate-900 border-b-2 border-slate-200 pb-2 mb-4">Core Skills</h2>
                   <div className="space-y-2">
                      {skills.map(skill => (
                         <div key={skill.id} className="bg-slate-50 p-3 rounded border border-slate-100 flex items-center gap-3">
                            <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                            <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                         </div>
                      ))}
                   </div>
                </section>
             )}

             {education.length > 0 && (
                <section>
                   <h2 className="text-lg font-bold uppercase text-slate-900 border-b-2 border-slate-200 pb-2 mb-4">Education</h2>
                   <div className="space-y-4">
                      {education.map(edu => (
                         <div key={edu.id} className="bg-slate-50 p-4 rounded border border-slate-100">
                            <div className="font-bold text-slate-900 text-sm">{edu.institution}</div>
                            <div className="text-xs text-sky-700 font-medium mt-1">{edu.degree}</div>
                            <div className="text-xs text-slate-500 mt-2 pt-2 border-t border-slate-200">{edu.startDate} - {edu.endDate}</div>
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

export default Skyline;
