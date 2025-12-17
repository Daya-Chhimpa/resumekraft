import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useResumeStore = create(
  persist(
    (set) => ({
      resumeData: {
        personalInfo: {
          fullName: 'John Doe',
          email: 'john.doe@example.com',
          phone: '(555) 123-4567',
          title: 'Software Engineer',
          location: 'San Francisco, CA',
          summary: 'Experienced software engineer with a passion for building scalable web applications.',
          links: { linkedin: '', github: '', website: '' }
        },
        experience: [],
        education: [],
        skills: [],
        projects: [],
        customSections: [],
        themeSettings: {
          colors: {
            primary: '#ec4899', // Pink-500
            secondary: '#f97316', // Orange-500
            text: '#0f172a', // Slate-900
            background: '#ffffff',
          },
          fonts: {
            heading: 'Inter',
            body: 'Inter',
          },
          spacing: {
            margin: 10, // mm
            lineHeight: 1.5,
          },
          layout: {
            sidebarPosition: 'left', // 'left' | 'right'
            sectionOrder: ['personal', 'experience', 'education', 'skills', 'languages', 'hobbies'],
            sectionVisibility: {
              personal: true,
              experience: true,
              education: true,
              skills: true,
              languages: true,
              hobbies: true,
            }
          }
        }
      },
      activeSection: null, // 'personal', 'experience', 'education', 'skills', 'design'

      // Actions
      setActiveSection: (section) => set({ activeSection: section }),

      updatePersonalInfo: (field, value) => set((state) => ({
        resumeData: {
          ...state.resumeData,
          personalInfo: { ...state.resumeData.personalInfo, [field]: value }
        }
      })),

      updateThemeSettings: (category, field, value) => set((state) => {
        const currentThemeSettings = state.resumeData.themeSettings || {};
        const currentCategory = currentThemeSettings[category] || {};

        return {
          resumeData: {
            ...state.resumeData,
            themeSettings: {
              ...currentThemeSettings,
              [category]: {
                ...currentCategory,
                [field]: value
              }
            }
          }
        };
      }),

      reorderSection: (section, oldIndex, newIndex) => set((state) => {
        const list = [...(state.resumeData[section] || [])];
        const [removed] = list.splice(oldIndex, 1);
        list.splice(newIndex, 0, removed);
        return {
          resumeData: {
            ...state.resumeData,
            [section]: list
          }
        };
      }),

      addExperience: () => set((state) => ({
        resumeData: {
          ...state.resumeData,
          experience: [
            ...(state.resumeData.experience || []),
             { id: crypto.randomUUID(), company: '', role: '', startDate: '', endDate: '', description: '' }
          ]
        }
      })),
      
      updateExperience: (id, field, value) => set((state) => ({
        resumeData: {
          ...state.resumeData,
          experience: (state.resumeData.experience || []).map((exp) => 
            exp.id === id ? { ...exp, [field]: value } : exp
          )
        }
      })),

      addEducation: () => set((state) => ({
        resumeData: {
          ...state.resumeData,
          education: [
            ...(state.resumeData.education || []),
             { id: crypto.randomUUID(), institution: '', degree: '', startDate: '', endDate: '', description: '' }
          ]
        }
      })),

      updateEducation: (id, field, value) => set((state) => ({
        resumeData: {
          ...state.resumeData,
          education: (state.resumeData.education || []).map((edu) => 
            edu.id === id ? { ...edu, [field]: value } : edu
          )
        }
      })),

      addSkill: () => set((state) => ({
        resumeData: {
          ...state.resumeData,
          skills: [
            ...(state.resumeData.skills || []),
             { id: crypto.randomUUID(), name: '', level: 100 }
          ]
        }
      })),

      addBulkSkills: (skillNames) => set((state) => ({
        resumeData: {
          ...state.resumeData,
          skills: [
            ...(state.resumeData.skills || []),
            ...skillNames.map(name => ({ id: crypto.randomUUID(), name, level: 100 }))
          ]
        }
      })),

      updateSkill: (id, field, value) => set((state) => ({
        resumeData: {
          ...state.resumeData,
          skills: (state.resumeData.skills || []).map((skill) => 
            skill.id === id ? { ...skill, [field]: value } : skill
          )
        }
      })),

      addLanguage: () => set((state) => ({
        resumeData: {
          ...state.resumeData,
          languages: [
            ...(state.resumeData.languages || []),
             { id: crypto.randomUUID(), name: '', proficiency: 'Fluent' }
          ]
        }
      })),

      updateLanguage: (id, field, value) => set((state) => ({
        resumeData: {
          ...state.resumeData,
          languages: (state.resumeData.languages || []).map((lang) => 
            lang.id === id ? { ...lang, [field]: value } : lang
          )
        }
      })),

      addHobby: () => set((state) => ({
        resumeData: {
          ...state.resumeData,
          hobbies: [
            ...(state.resumeData.hobbies || []),
             { id: crypto.randomUUID(), name: '' }
          ]
        }
      })),

      updateHobby: (id, field, value) => set((state) => ({
        resumeData: {
          ...state.resumeData,
          hobbies: (state.resumeData.hobbies || []).map((hobby) => 
            hobby.id === id ? { ...hobby, [field]: value } : hobby
          )
        }
      })),

      // Custom Sections Actions
      addCustomSection: (title) => set((state) => ({
        resumeData: {
          ...state.resumeData,
          customSections: [
            ...(state.resumeData.customSections || []),
            { 
              id: crypto.randomUUID(), 
              title: title, 
              items: [] 
            }
          ]
        }
      })),

      removeCustomSection: (sectionId) => set((state) => ({
        resumeData: {
          ...state.resumeData,
          customSections: (state.resumeData.customSections || []).filter(s => s.id !== sectionId)
        }
      })),

      updateCustomSectionTitle: (sectionId, title) => set((state) => ({
        resumeData: {
          ...state.resumeData,
          customSections: (state.resumeData.customSections || []).map(s => 
             s.id === sectionId ? { ...s, title } : s
          )
        }
      })),

      addCustomSectionItem: (sectionId) => set((state) => ({
        resumeData: {
          ...state.resumeData,
          customSections: (state.resumeData.customSections || []).map(s => 
            s.id === sectionId ? {
                ...s,
                items: [
                    ...s.items,
                    { id: crypto.randomUUID(), title: '', subtitle: '', date: '', description: '' }
                ]
            } : s
          )
        }
      })),

      updateCustomSectionItem: (sectionId, itemId, field, value) => set((state) => ({
        resumeData: {
          ...state.resumeData,
          customSections: (state.resumeData.customSections || []).map(s => 
            s.id === sectionId ? {
                ...s,
                items: s.items.map(item => 
                    item.id === itemId ? { ...item, [field]: value } : item
                )
            } : s
          )
        }
      })),

      removeCustomSectionItem: (sectionId, itemId) => set((state) => ({
        resumeData: {
          ...state.resumeData,
          customSections: (state.resumeData.customSections || []).map(s => 
            s.id === sectionId ? {
                ...s,
                items: s.items.filter(item => item.id !== itemId)
            } : s
          )
        }
      })),
      
      setActiveTemplate: (templateId) => set(() => ({
        activeTemplate: templateId
      })),
      
      removeSectionItem: (section, id) => set((state) => ({
        resumeData: {
          ...state.resumeData,
          [section]: (state.resumeData[section] || []).filter((item) => item.id !== id)
        }
      })),

      resetResumeData: () => set(() => ({
        resumeData: {
          personalInfo: {
            fullName: 'John Doe',
            email: 'john.doe@example.com',
            phone: '(555) 123-4567',
            title: 'Software Engineer',
            location: 'San Francisco, CA',
            summary: 'Experienced software engineer with a passion for building scalable web applications.',
            links: { linkedin: '', github: '', website: '' }
          },
          experience: [],
          education: [],
          skills: [],
          languages: [],
          hobbies: [],
          customSections: [], // Ensure initialized
          projects: [],
          themeSettings: {
            colors: {
              primary: '#ec4899',
              secondary: '#f97316',
              text: '#0f172a',
              background: '#ffffff',
            },
            fonts: {
              heading: 'Inter',
              body: 'Inter',
            },
            spacing: {
              margin: 10,
              lineHeight: 1.5,
            },
            layout: {
              sidebarPosition: 'left',
              sectionOrder: ['personal', 'experience', 'education', 'skills', 'languages', 'hobbies'],
              sectionVisibility: {
                personal: true,
                experience: true,
                education: true,
                skills: true,
                languages: true,
                hobbies: true,
              }
            }
          }
        }
      })),

      // ... Add other actions as needed
    }),
    {
      name: 'resume-storage',
      version: 2,
      migrate: (persistedState, version) => {
        let state = persistedState;
        
        if (version === 0 || version === 1) {
          state = {
            ...state,
            resumeData: {
              ...state.resumeData,
              languages: state.resumeData.languages || [],
              hobbies: state.resumeData.hobbies || [],
              experience: state.resumeData.experience || [],
              education: state.resumeData.education || [],
              skills: state.resumeData.skills || [],
              customSections: state.resumeData.customSections || [],
              themeSettings: {
                ...(state.resumeData.themeSettings || {}),
                colors: state.resumeData.themeSettings?.colors || {
                  primary: '#ec4899',
                  secondary: '#f97316',
                  text: '#0f172a',
                  background: '#ffffff',
                },
                fonts: state.resumeData.themeSettings?.fonts || {
                  heading: 'Inter',
                  body: 'Inter',
                },
                spacing: state.resumeData.themeSettings?.spacing || {
                  margin: 10,
                  lineHeight: 1.5,
                },
                layout: state.resumeData.themeSettings?.layout || {
                  sidebarPosition: 'left',
                  sectionOrder: ['personal', 'experience', 'education', 'skills', 'languages', 'hobbies'],
                  sectionVisibility: {
                    personal: true,
                    experience: true,
                    education: true,
                    skills: true,
                    languages: true,
                    hobbies: true,
                  }
                }
              }
            },
            activeTemplate: state.activeTemplate || 'aurora'
          };
        }
        return state;
      },
    }
  )
);

export default useResumeStore;
