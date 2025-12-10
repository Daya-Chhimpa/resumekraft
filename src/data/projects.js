const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    subtitle: "Full-Stack Web Application",
    description: `A comprehensive e-commerce solution with real-time inventory management,
payment processing, and analytics dashboard. Built for scalability to handle
millions of products and thousands of concurrent users.`,
    image: "https://via.placeholder.com/600x400/4F46E5/ffffff?text=E-Commerce",
    category: "Web App",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: true,
    stats: {
      users: "50K+",
      transactions: "$2M+",
      uptime: "99.9%"
    }
  },
  {
    id: 2,
    title: "Task Management App",
    subtitle: "Productivity Tool",
    description: `A Notion-inspired task management application with real-time
collaboration, drag-and-drop interface, and smart reminders.
Supports teams of any size with role-based permissions.`,
    image: "https://via.placeholder.com/600x400/10B981/ffffff?text=TaskFlow",
    category: "Web App",
    tags: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: true,
    stats: {
      users: "25K+",
      tasks: "1M+",
      teams: "500+"
    }
  },
  {
    id: 3,
    title: "AI Content Generator",
    subtitle: "Machine Learning Application",
    description: `An AI-powered content generation tool that creates blog posts,
marketing copy, and social media content. Uses GPT-4 API with
custom fine-tuning for brand voice consistency.`,
    image: "https://via.placeholder.com/600x400/8B5CF6/ffffff?text=AI+Writer",
    category: "AI/ML",
    tags: ["Python", "FastAPI", "OpenAI", "React", "TailwindCSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: true,
    stats: {
      articles: "100K+",
      accuracy: "95%",
      languages: "12"
    }
  },
  {
    id: 4,
    title: "Real Estate Marketplace",
    subtitle: "Property Listing Platform",
    description: `A modern real estate platform with virtual tours, mortgage
calculator, and neighborhood insights. Features advanced search
with map integration and AI-powered property recommendations.`,
    image: "https://via.placeholder.com/600x400/F59E0B/ffffff?text=RealtyHub",
    category: "Web App",
    tags: ["Vue.js", "Django", "PostgreSQL", "Mapbox", "AWS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: false,
    stats: {
      listings: "10K+",
      agents: "500+",
      sales: "$50M+"
    }
  },
  {
    id: 5,
    title: "Fitness Tracking App",
    subtitle: "Mobile Application",
    description: `Cross-platform fitness application with workout tracking,
nutrition logging, and social features. Integrates with wearables
and provides personalized training recommendations.`,
    image: "https://via.placeholder.com/600x400/EF4444/ffffff?text=FitTrack",
    category: "Mobile",
    tags: ["React Native", "Firebase", "Node.js", "HealthKit"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: false,
    stats: {
      downloads: "100K+",
      workouts: "5M+",
      rating: "4.8"
    }
  },
  {
    id: 6,
    title: "Developer Portfolio Theme",
    subtitle: "Open Source Project",
    description: `A customizable portfolio template for developers with multiple
themes, dark mode, and blog integration. Used by 5000+ developers
worldwide. Built with accessibility in mind.`,
    image: "https://via.placeholder.com/600x400/06B6D4/ffffff?text=DevFolio",
    category: "Open Source",
    tags: ["React", "Gatsby", "GraphQL", "MDX", "Styled Components"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: false,
    stats: {
      stars: "2.5K",
      forks: "800+",
      contributors: "50+"
    }
  }
];

export const projectCategories = [
  "All",
  "Web App",
  "Mobile",
  "AI/ML",
  "Open Source"
];

export default projects;
