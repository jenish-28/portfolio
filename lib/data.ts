export type NavItem = {
  id: string;
  label: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  duration: string;
  highlights: string[];
};

export type EducationItem = {
  degree: string;
  institution: string;
  location: string;
  duration: string;
};

export type ProjectItem = {
  name: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
};

export const personalData = {
  name: "Jenishkumar Patel",
  title: "Full-Stack Software Developer",
  location: "Germany",
  email: "16jenishkumarpatel@gmail.com",
  phone: "+49-(0)155-65785860",
  linkedIn: "https://www.linkedin.com/in/jenishkumar-patel-634770394/",
  linkedInLabel: "LinkedIn",
  birthDate: "28.02.2003",
  taglines: [
    "Building scalable web applications",
    "React & FastAPI specialist",
    "Turning data into dashboards",
    "Clean architecture advocate",
  ],
  languages: [
    { name: "English (B2)"},
    { name: "German (A2)"},
  ],
  resumeUrl: "https://drive.google.com/file/d/1SqT7vKY8RRFoCoYEjx6nqVGjvtNgL1OJ/view?usp=sharing",
} as const;

export const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const skills = {
  Languages: ["Python", "JavaScript", "TypeScript", "SQL"],
  Frontend: ["React", "Next.js", "HTML5", "CSS", "Tailwind CSS"],
  Backend: ["FastAPI", "Node.js", "Express.js"],
  Architecture: ["RESTful APIs", "Clean Architecture", "OAuth2", "JWT"],
  "Cloud/DevOps": ["Azure DevOps", "AWS", "Docker", "CI/CD", "Git", "GitHub Actions"],
  Databases: ["MySQL", "MongoDB", "PostgreSQL"],
} as const;

export const experiences: ExperienceItem[] = [
  {
    role: "AI & IT Engineer",
    company: "KI-E-RO Swiss",
    location: "Switzerland",
    duration: "Dec 2025 - Present",
    highlights: [
      "Developed REST API with JWT auth supporting 500+ users for Finstgram (FastAPI + MongoDB)",
      "Built 8+ modular backend components following clean architecture principles",
      "Optimized database queries from 800ms to 400ms page load time",
      "Implemented role-based access control in a remote Agile environment",
    ],
  },
  {
    role: "Software Developer",
    company: "Toshal Infotech",
    location: "India",
    duration: "Jan 2024 - Apr 2024",
    highlights: [
      "Delivered 15+ responsive UI modules using React + Node.js",
      "Improved API documentation, debugging workflows, and refactoring quality",
      "Collaborated in Agile/Scrum production delivery cycles",
    ],
  },
  {
    role: "Software Developer",
    company: "Infinity IT Solution",
    location: "India",
    duration: "Jul 2023 - Sep 2023",
    highlights: [
      "Built a full-stack Registration System for 500+ users with React, Node.js, Express, and MongoDB",
      "Owned authentication, routing, and database integration tasks",
      "Contributed to a team of 4 that shipped 6+ application modules",
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: "M.Sc. Applied Computer Science",
    institution: "Hochschule Schmalkalden",
    location: "Germany",
    duration: "Oct 2025 - Sep 2027",
  },
  {
    degree: "B.E. Computer Engineering",
    institution: "Gujarat Technological University",
    location: "India",
    duration: "Jul 2020 - Jun 2024",
  },
];

export const projects: ProjectItem[] = [
  {
    name: "Finstgram API",
    description:
      "A high-performance FastAPI backend with JWT authentication, MongoDB persistence, and role-based access control serving 500+ users.",
    tags: ["FastAPI", "MongoDB", "JWT"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    name: "Registration System",
    description:
      "A production-ready full-stack platform handling 500+ registrations with secure auth flows, robust routing, and scalable API design.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    name: "Analytics Dashboard",
    description:
      "A data-driven dashboard experience featuring real-time charts, advanced filtering, and responsive UX crafted for decision-ready insights.",
    tags: ["React", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];
