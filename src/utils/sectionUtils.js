/**
 * Utility function to get sections in the correct order based on layout settings
 * @param {Object} data - Resume data including themeSettings
 * @returns {Array} - Ordered array of section objects with their data
 */
export const getOrderedSections = (data) => {
  const { themeSettings, experience, education, skills, languages, hobbies, customSections } = data;
  
  // Get section order from theme settings, or use default
  const sectionOrder = themeSettings?.layout?.sectionOrder || 
    ['personal', 'experience', 'education', 'skills', 'languages', 'hobbies'];
  
  // Get section visibility settings
  const sectionVisibility = themeSettings?.layout?.sectionVisibility || {};
  
  // Map section keys to their data and metadata
  const sectionDataMap = {
    experience: {
      key: 'experience',
      data: experience || [],
      visible: sectionVisibility.experience !== false,
      hasData: experience && experience.length > 0
    },
    education: {
      key: 'education',
      data: education || [],
      visible: sectionVisibility.education !== false,
      hasData: education && education.length > 0
    },
    skills: {
      key: 'skills',
      data: skills || [],
      visible: sectionVisibility.skills !== false,
      hasData: skills && skills.length > 0
    },
    languages: {
      key: 'languages',
      data: languages || [],
      visible: sectionVisibility.languages !== false,
      hasData: languages && languages.length > 0
    },
    hobbies: {
      key: 'hobbies',
      data: hobbies || [],
      visible: sectionVisibility.hobbies !== false,
      hasData: hobbies && hobbies.length > 0
    },
  };
  
  // Return sections in order, filtered by visibility and data availability
  return sectionOrder
    .filter(key => key !== 'personal') // Personal is always at top, handled separately
    .map(key => sectionDataMap[key])
    .filter(section => section && section.visible && section.hasData);
};

/**
 * Check if a section should be displayed
 * @param {Object} data - Resume data
 * @param {string} sectionKey - Section key to check
 * @returns {boolean} - Whether section should be displayed
 */
export const shouldShowSection = (data, sectionKey) => {
  const { themeSettings } = data;
  const sectionVisibility = themeSettings?.layout?.sectionVisibility || {};
  return sectionVisibility[sectionKey] !== false;
};
