import React from 'react';

/**
 * SectionRenderer - Renders sections in the correct order based on layout settings
 * @param {Object} props
 * @param {Object} props.data - Resume data
 * @param {Function} props.renderSection - Function to render each section
 */
const SectionRenderer = ({ data, renderSection }) => {
  const { themeSettings, experience, education, skills, languages, hobbies } = data;
  
  // Get section order from theme settings
  const sectionOrder = themeSettings?.layout?.sectionOrder || 
    ['personal', 'experience', 'education', 'skills', 'languages', 'hobbies'];
  
  // Get section visibility settings
  const sectionVisibility = themeSettings?.layout?.sectionVisibility || {};
  
  // Section data mapping
  const sections = {
    experience: {
      key: 'experience',
      data: experience || [],
      visible: sectionVisibility.experience !== false,
    },
    education: {
      key: 'education',
      data: education || [],
      visible: sectionVisibility.education !== false,
    },
    skills: {
      key: 'skills',
      data: skills || [],
      visible: sectionVisibility.skills !== false,
    },
    languages: {
      key: 'languages',
      data: languages || [],
      visible: sectionVisibility.languages !== false,
    },
    hobbies: {
      key: 'hobbies',
      data: hobbies || [],
      visible: sectionVisibility.hobbies !== false,
    },
  };
  
  return (
    <>
      {sectionOrder
        .filter(key => key !== 'personal') // Personal is handled separately
        .map(key => {
          const section = sections[key];
          if (!section || !section.visible || section.data.length === 0) {
            return null;
          }
          return renderSection(section.key, section.data);
        })}
    </>
  );
};

export default SectionRenderer;
