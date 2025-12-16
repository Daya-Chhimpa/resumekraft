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
             { id: crypto.randomUUID(), name: '', level: 50 }
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
          languages: [], // Ensure initialized
          hobbies: [],   // Ensure initialized
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
            }
          }
        }
      })),

      // ... Add other actions as needed
    }),
    {
      name: 'resume-storage',
      version: 1,
      migrate: (persistedState, version) => {
        if (version === 0) {
          return {
            ...persistedState,
            resumeData: {
              ...persistedState.resumeData,
              languages: persistedState.resumeData.languages || [],
              hobbies: persistedState.resumeData.hobbies || [],
              experience: persistedState.resumeData.experience || [],
              education: persistedState.resumeData.education || [],
              skills: persistedState.resumeData.skills || [],
              themeSettings: persistedState.resumeData.themeSettings || {
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
                }
              }
            },
            activeTemplate: persistedState.activeTemplate || 'aurora'
          };
        }
        return persistedState;
      },
    }
  )
);

export default useResumeStore;
