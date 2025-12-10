export const dummyResumeData = {
    personalInfo: {
      fullName: 'Alex Morgan',
      email: 'alex.morgan@example.com',
      phone: '+1 (555) 0123-4567',
      title: 'Senior Product Designer',
      location: 'New York, NY',
      summary: 'Creative Product Designer with 5+ years of experience in building user-centric digital products. Passionate about minimalism and accessibility.',
      photo: '', // No photo by default for previews to keep it clean, or could add a placeholder
      links: { linkedin: 'linkedin.com/in/alex', github: 'github.com/alex', website: 'alex.design' }
    },
    experience: [
      {
        id: '1',
        role: 'Senior UX Designer',
        company: 'TechFlow Inc.',
        startDate: '2021',
        endDate: 'Present',
        description: '• Led the redesign of the core mobile application.\n• Mentored junior designers and established a design system.\n• Increased user engagement by 25% through iterative testing.'
      },
      {
        id: '2',
        role: 'UI Designer',
        company: 'Creative Studio',
        startDate: '2018',
        endDate: '2021',
        description: '• Designed marketing websites for high-profile clients.\n• Collaborated with developers to ensure pixel-perfect implementation.'
      }
    ],
    education: [
      {
        id: '1',
        institution: 'Parsons School of Design',
        degree: 'BFA in Design & Technology',
        startDate: '2014',
        endDate: '2018',
        description: ''
      }
    ],
    skills: [
      { id: '1', name: 'Figma', level: 90 },
      { id: '2', name: 'React', level: 60 },
      { id: '3', name: 'Prototyping', level: 85 },
      { id: '4', name: 'User Research', level: 80 }
    ],
    languages: [
      { id: '1', name: 'English', proficiency: 'Native' },
      { id: '2', name: 'Spanish', proficiency: 'Conversational' }
    ],
    hobbies: [
      { id: '1', name: 'Photography' },
      { id: '2', name: 'Traveling' }
    ]
  };
