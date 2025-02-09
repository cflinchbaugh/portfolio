import { useMemo } from "react";

type Skill = {
  name: string;
  details: string[];
  icon?: React.ReactNode;
};

const skills: Skill[] = [
  {
    name: "Frontend Development",
    details: [
      "React.js & React Native - Expertise in building dynamic, high-performance web and mobile applications. Experience includes state management (Redux.js), performance optimizations, and React Dev Tools.",
      "TypeScript & JavaScript - Strong proficiency in modern JavaScript (ES6+) for scalable, maintainable applications.",
      "CSS & Styling - Skilled in Tailwind CSS, SASS, Bootstrap, and traditional CSS for responsive, accessible UI design.",
      "Adaptive & Responsive Design - Ensuring seamless user experiences across devices and screen sizes.",
    ],
    icon: "🌐",
  },
  {
    name: "Testing & Quality Assurance",
    details: [
      "Unit & Integration Testing - Experienced with Jest, Vitest for unit tests and integration testing.",
      "End-to-End Testing - Proficient in Cypress & Playwright for UI automation and regression testing.",
      "CI/CD & Automation - Using GitHub Actions to automate testing and linting in development workflows.",
    ],
    icon: "🧪",
  },
  {
    name: "Backend & API Development",
    details: [
      "GraphQL & REST APIs - Built and consumed APIs, including developing a GraphQL API for a full-stack project.",
      "Database Experience - Worked with MongoDB & Supabase (PostgreSQL-based) for data storage solutions.",
      "Authentication & Security - Implemented Google Auth and integrated secure session token authentication via API endpoints.,",
    ],
    icon: "🔗",
  },
  {
    name: "Performance Optimization",
    details: [
      "Lighthouse & React Dev Tools - Regularly optimize performance using auditing tools.",
      "Lazy Loading & Code Splitting - Reduce initial load times by deferring non-critical assets and dynamically loading modules.",
      "Image Optimization - Implementing best practices like AVIF/WebP, responsive image sizing, and content visibility techniques.",
    ],
    icon: "⚡",
  },
  {
    name: "Accessibility & Inclusive Design",
    details: [
      "WCAG 2.1 AA Compliance - Ensured enterprise software met high accessibility standards.",
      "Section 508 Compliance - Experience implementing compliance best practices in government and corporate environments.",
      "Accessibility Testing Tools - Regular use of WAVE browser extension and manual testing to improve usability.",
    ],
    icon: "♿",
  },
  {
    name: "AI & Computer Vision",
    details: [
      "AI Text Recognition - Implemented React Native Vision Camera for scanning and processing text in real-time applications.",
      "AI Prompt Engineering - Experience refining and structuring AI-driven interactions for better contextual accuracy.",
    ],
  },
  {
    name: "Project Management & Leadership",
    details: [
      "Mentorship & Team Leadership - Founded a Front-end Guild to mentor and support developers.",
      "Code Reviews & Best Practices - Regularly conducted code reviews and established company-wide frontend standards.",
      "Agile & Feature Prioritization - Worked in Agile environments with a focus on efficient feature planning and delivery.",
    ],
  },
  {
    name: "DevOps & Developer Tools",
    details: [
      "Version Control & Collaboration - Proficient in Git, GitHub, and remote team collaboration tools.",
      "CI/CD Pipelines - Experience setting up automated deployment and testing workflows.",
      "Developer Productivity Tools - Comfortable with Vite, Webpack, and debugging utilities to streamline development.",
    ],
  },
];

export const useSkills = () => {
  return useMemo(() => skills, []);
};
