import { useMemo } from "react";

export type Project = {
  approach: string;
  challenges: string;
  description: string;
  imageName: string; //Base name, no size, no extension
  imageAriaLabel: string;
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
    imageName: "learnalotl",
    imageAriaLabel: "Hand writing with mechanical pencil",
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
    name: "Portfolio",
    subheader: "Pay lots of attention to the code behind the curtain",
    approach: "",
    challenges: "",
    description: "This website!",
    imageName: "N/A",
    imageAriaLabel: "N/A",
    impact: "",
    links: [
      {
        name: "Demo",
        url: "/",
      },
      {
        name: "Repo",
        url: "https://github.com/cflinchbaugh/portfolio",
      },
    ],
    tags: [
      "React",
      "Vite",
      "Vitest",
      "Tailwind",
      "UI/UX Design",
      "GitHub Pages",
      "TypeScript",
    ],
  },
  {
    name: "Three.JS Scrolling In Space",
    subheader: "3D models: IN SPACE",
    approach: "",
    challenges: "",
    description: "TODO",
    imageName: "N/A",
    imageAriaLabel: "N/A",
    impact: "",
    links: [
      {
        name: "Demo",
        url: "https://cflinchbaugh.github.io/threejs-scroll-site/",
      },
      {
        name: "Repo",
        url: "https://github.com/cflinchbaugh/threejs-scroll-site",
      },
    ],
    tags: ["ThreeJS", "HTML", "CSS"],
  },
  {
    name: "3D Carousel",
    subheader: "Pure HTML and CSS",
    approach: "",
    challenges: "",
    description: "TODO",
    imageName: "N/A",
    imageAriaLabel: "N/A",
    impact: "",
    links: [
      {
        name: "Demo",
        url: "https://cflinchbaugh.github.io/3D-carousel/",
      },
      {
        name: "Repo",
        url: "https://github.com/cflinchbaugh/3D-carousel",
      },
    ],
    tags: ["UI/UX", "HTML", "CSS"],
  },
  {
    name: "3D Carousel",
    subheader: "Pure HTML and CSS",
    approach: "",
    challenges: "",
    description: "TODO",
    imageName: "N/A",
    imageAriaLabel: "N/A",
    impact: "",
    links: [
      {
        name: "Demo",
        url: "https://cflinchbaugh.github.io/3D-carousel/",
      },
      {
        name: "Repo",
        url: "https://github.com/cflinchbaugh/3D-carousel",
      },
    ],
    tags: ["UI/UX", "HTML", "CSS"],
  },
];

export const useProjects = () => {
  return useMemo(() => projects, []);
};
