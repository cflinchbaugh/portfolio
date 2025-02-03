import { useMemo } from "react";

export type Project = {
  approach: string;
  challenges: string;
  description: string;
  impact: string;
  links?: {
    name: string;
    url: string;
  }[];
  name: string;
  subheader: string;
  tags: string[];
};

const projects: Project[] = [
  {
    name: "Learnalotl",
    subheader: "A language learning flashcard web app",
    approach:
      "Initially, Learnalotl was built as a personal study tool for Japanese, focusing on rendering n-sided flashcards with hardcoded data. Once the core functionality was solid, I iterated on the UI and added support for user-generated content, making the app more versatile for a broader audience.",
    challenges:
      "Designing an intuitive system for user-generated flashcards while ensuring a seamless experience for non-technical users was a major challenge. Balancing simplicity with flexibility required refining the UI/UX and creating an efficient JSON import/export system.",
    description:
      "Learnolotl is a web app designed to improve upon traditional flashcards by supporting multiple representations of a word (English, Romaji, Hiragana, Katakana, and Kanji). To enhance usability, I implemented a dynamic form that allows users to create and load their own flashcard decks via JSON files, making the app highly customizable for different study needs.",
    impact:
      "This was one of the first projects I independently conceived, designed, built, and deployed. It solved a real-world problem I faced daily, making language study more efficient and engaging. Additionally, it provided valuable experience in UI/UX design, state management with Redux, and front-end architecture, which I later applied in professional settings.",
    links: [
      {
        name: "Demo",
        url: "https://cflinchbaugh.github.io/Learnolotl/",
      },
      {
        name: "Repo",
        url: "https://github.com/cflinchbaugh/Learnolotl",
      },
    ],
    tags: [
      "React",
      "Redux",
      "Jest",
      "Babel",
      "Webpack",
      "UI/UX Design",
      "GitHub Pages",
      "Node",
      "Styled Components",
    ],
  },
  {
    name: "DiDi & Smiling Johns",
    subheader: "small business website (deprecated)",
    approach:
      "I worked closely with the business owners to define their goals, prioritizing an engaging and personality-driven online presence. Through an iterative design process, I incorporated their feedback to create an accessible website featuring individual staff spotlights, a strong call to action, and interactive elements that highlighted the shop's welcoming atmosphere. To ensure maintainability, I implemented a custom CMS integration, allowing them to update select content safely while preserving design integrity. The final design struck a balance between individuality and brand cohesion, using color schemes, group photos, and layout consistency to unify the dual business.",
    challenges:
      "Building a website for a dual barber/salon required balancing individuality and cohesion—each stylist needed a personalized section while maintaining a unified brand identity. The business owners also wanted the ability to edit content with minimal risk, necessitating a custom CMS solution that was both flexible and easy to use. It was important to the core identity of the business that the website be inclusive and accessible, as well as accommodate a rotating staff, requiring a structure that could easily adapt to changes.",
    description:
      "This is a website I designed and coded for a local business pro-bono to help unify their branding and improve their web presence. They were looking to show each professional as an individual with their own specialties and prices, but also provide cohesion to reflect how closely they worked together. To achieve this, I focused on separating each person and providing them a card with their details while directing focus to groupshots and and increased the use of their branding colors to provide unity.",
    impact:
      "The website successfully increased customer engagement and boosted bookings by over 100%, giving the business a much-needed online presence. Customers frequently praised the site's design and usability, reinforcing the brand's credibility. The site remained active for several years, supporting the business until its closure due to pandemic-era challenges and ownership changes.",
    links: [
      {
        name: "Website (Archived)",
        url: "https://web.archive.org/web/20220308053756/https:/www.didiandsmilingjohns.com/",
      },
    ],
    tags: [
      "React",
      "UI/UX Design",
      "WordPress",
      "Styled Components",
      "Accessibility (a11y)",
      "Responsive Design",
      "Mobile First",
      "CMS Integration",
      "SEO Optimization",
      "Web Deployment",
    ],
  },
];

export const useProjects = () => {
  return useMemo(() => projects, []);
};
