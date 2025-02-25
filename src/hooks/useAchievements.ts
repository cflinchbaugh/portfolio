import { useMemo } from "react";

type Achievement = {
  id: number;
  head: string;
  tail: string;
};

const achievements: Achievement[] = [
  {
    id: 0,
    head: "Drove a 100% increase in fintech deposits",
    tail: "at a startup by developing a cutting-edge mobile check deposit system with AI-powered text recognition.",
  },
  {
    id: 1,
    head: 'Awarded "Champion of Process Improvement"',
    tail: "for streamlining engineering workflows and enhancing efficiency, improving developer velocity across teams.",
  },
  {
    id: 2,
    head: "Led multiple cross-functional teams of 10-20 engineers",
    tail: "across IoT, manufacturing, ecommerce, and fintech projects; driving architecture decisions, best practices, and delivery of high-quality software.",
  },
  {
    id: 3,
    head: "Founded a Front-End Guild",
    tail: "to mentor dozens of engineers, standardize best practices, and improve collaboration—an initiative so impactful that it led to the creation of additional discipline-based guilds across the organization.",
  },
  {
    id: 4,
    head: "Reduced UI development time and established brand user-experience",
    tail: "by building a scalable, reusable proprietary React component library, ensuring design consistency across company projects.",
  },
  {
    id: 5,
    head: "Achieved WCAG AA compliance across enterprise software",
    tail: "by advocating for and implementing accessibility standards, enhancing usability for tens of thousands of users and unlocking new business opportunities.",
  },
  {
    id: 6,
    head: "Accelerated development velocity and reduced defects",
    tail: "by optimizing TypeScript configurations, streamlining workflows, and proactively identifying and resolving defects early in the development cycle.",
  },
  {
    id: 7,
    head: "Reduced manual QA testing time by more than 60%",
    tail: "implemented comprehensive unit and end-to-end testing with Jest, Vitest, and Playwright, significantly improving test reliability and catching regressions early.",
  },
  {
    id: 8,
    head: "Spearheaded a Code Quality Initiative",
    tail: "designed and deployed internal auditing tools and optimizations, improving code quality and and freeing up engineers to focus on high-value work.",
  },
];

export const useAchievements = () => {
  return useMemo(() => achievements, []);
};
