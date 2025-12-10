const skills = {
  technical: [
    { name: "React / Next.js", level: 95, category: "frontend" },
    { name: "TypeScript", level: 90, category: "frontend" },
    { name: "JavaScript (ES6+)", level: 95, category: "frontend" },
    { name: "HTML5 / CSS3", level: 95, category: "frontend" },
    { name: "Vue.js", level: 80, category: "frontend" },
    { name: "SASS / Tailwind CSS", level: 90, category: "frontend" },
    { name: "Node.js / Express", level: 90, category: "backend" },
    { name: "Python / Django", level: 85, category: "backend" },
    { name: "PostgreSQL", level: 85, category: "backend" },
    { name: "MongoDB", level: 80, category: "backend" },
    { name: "GraphQL", level: 85, category: "backend" },
    { name: "REST API Design", level: 95, category: "backend" },
    { name: "AWS (EC2, S3, Lambda)", level: 85, category: "devops" },
    { name: "Docker / Kubernetes", level: 80, category: "devops" },
    { name: "CI/CD (GitHub Actions)", level: 85, category: "devops" },
    { name: "Git / Version Control", level: 95, category: "devops" }
  ],
  soft: [
    { name: "Team Leadership", level: 90 },
    { name: "Problem Solving", level: 95 },
    { name: "Communication", level: 90 },
    { name: "Project Management", level: 85 },
    { name: "Mentoring", level: 90 },
    { name: "Agile / Scrum", level: 90 }
  ],
  tools: [
    "VS Code",
    "Figma",
    "Postman",
    "Jira",
    "Slack",
    "Notion",
    "Linear",
    "GitHub",
    "GitLab",
    "Vercel",
    "Netlify",
    "AWS Console"
  ],
  languages: [
    { name: "English", level: "Native" },
    { name: "Spanish", level: "Conversational" },
    { name: "French", level: "Basic" }
  ]
};

export const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "devops", label: "DevOps" }
];

export default skills;
