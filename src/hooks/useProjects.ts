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
    name: "Contract Consultant",
    subheader: "Delivering High-Impact Solutions in Tight Timeframes",
    approach:
      "I refactored complex user interfaces using modern, scalable frameworks while ensuring backwards compatibility. I introduced robust testing layers, resolving previously undetected defects and improving overall system reliability. I implemented real-time text recognition using React Native Vision Camera and machine learning libraries, enabling advanced mobile functionality. Additionally, I developed interactive camera overlays and collaborated closely with designers to standardize UI components and UX patterns, ensuring consistency across projects.",
    challenges:
      "Refactoring production-critical code required extensive testing to prevent outages. Updating configurations and development standards introduced the risk of scope creep, demanding a disciplined approach to execution.",
    description:
      "In just a few months, I modernized project configurations, enhanced test coverage, and led multiple initiatives to successful on-time, on-budget completion. My work improved stability, accelerated development, and directly contributed to significant business growth.",
    imageAriaLabel: "Chart showing rising graphs lines and numbers",
    imageName: "fintech",
    impact:
      "Within three months, I delivered key functionalities that doubled financial deposits (+100%), a major milestone for the business. My work reduced test failures to zero, significantly accelerating development speed and increasing confidence in automated testing. I improved test coverage across multiple repositories by over 50%, enhancing overall software quality. By standardizing design and development patterns, I reduced engineering overhead and strengthened brand consistency across products.",
    tags: [
      "Front-End",
      "Leadership",
      "Financial Tech (FinTech)",
      "React Native",
      "Mobile",
      "AI",
      "Modernization",
      "Collaboration",
      "Project Management",
      "Knowledge Sharing",
      "Agile Development",
      "Quality Assurance (QA)",
      "Playwright",
    ],
  },
  {
    name: "Founder & Leader of Front-End Guild",
    subheader:
      "Excellence Through Mentorship, Collaboration, and Best Practice",
    approach:
      "I began by identifying the guild's core audience, assessing their domain-specific expertise, and defining focus areas that would provide the most immediate value. Early on, I established structured sessions covering best practices, emerging technologies, and collaborative problem-solving. Over time, I transitioned the guild into a more community-driven initiative by empowering members to lead discussions and present new ideas. Anonymous surveys were used to gather feedback and refine upcoming topics, ensuring continuous improvement for the life of the guild. To further scale the initiative, I formed a leadership panel to share responsibilities and maintain engagement, while also documenting key guidelines for sustaining long-term success.",
    challenges:
      "With a diverse group of approximately two dozen engineers at varying skill levels, ensuring engagement, relevance, and long-term value was critical. Sustaining momentum, fostering active participation, and balancing structured learning with organic discussions were key challenges.",
    description:
      "Established an ongoing mentorship and knowledge-sharing program for front-end engineers, fostering a collaborative environment where best practices were defined, refined, and adopted across the company. The guild served as a hub for technical discussions, technology demonstrations, and Q&A sessions, empowering engineers of all levels to improve their skills and contribute to higher engineering standards.",
    imageName: "guild",
    imageAriaLabel: "Lightbulb design surrounded by multicolored gears",
    impact:
      "Led to the adoption of company-wide best practices, resulting in higher quality, more standardized code across dozens of projects. Standardization accelerated onboarding for new engineers, reduced friction in cross-team collaboration, and improved overall development efficiency. The guild also facilitated informed decision-making on new technologies, enabling the team to adopt modern solutions with confidence. Its success led the executive team to replicate the model across other engineering disciplines, further elevating knowledge-sharing and engineering excellence throughout the company.",
    tags: [
      "Front-End",
      "Leadership",
      "Mentorship",
      "Collaboration",
      "Project Management",
      "Knowledge Sharing",
      "Agile Development",
      "Engineering Culture",
      "Quality Assurance (QA)",
    ],
  },
  {
    name: "IoT Tech Lead",
    subheader:
      "Leading cross-discipline development for an enterprise IoT solution (NDA Protected)",
    approach:
      "Planned multiple features simultaneously to minimize blockers, allowing engineers to stay productive. Maintained constant communication with designers, engineers, and stakeholders to anticipate and mitigate issues early. Led by example—writing production-ready code, reviewing PRs, and guiding engineers through technical challenges. Due to the nature of this project and contractual agreements, specific details and code samples cannot be shared publicly; however, I'm happy to discuss my contributions in general terms upon request.",
    challenges:
      "Orchestrating cross-functional collaboration to ensure seamless integration across hardware and software while avoiding development bottlenecks caused by parallel feature development. Balancing leadership responsibilities while remaining deeply involved in coding and architecture.",
    description:
      "Led a team of over 20 engineers across multiple disciplines, including front-end, back-end, hardware, design, and QA. While driving architecture and strategy, I remained hands-on—contributing directly to complex features, reviewing critical code, and mentoring engineers. Ensured smooth parallel development by breaking down large initiatives into actionable tasks, enabling efficient collaboration across teams.",
    imageName: "iot",
    imageAriaLabel:
      "Cybernetically styled text showing IoT, Internet of Things",
    impact:
      "Successfully delivered key IoT features under an aggressive timeline, contributing directly to securing ongoing contracts. Delivered high-stakes client demos, showcasing functional prototypes that met evolving requirements. Maintained high technical standards while adapting to shifting priorities, ensuring both strategic alignment and hands-on execution.",
    tags: [
      "IoT",
      "Fullstack",
      "Leadership",
      "Technical Leadership",
      "Client Facing",
      "Communication",
      "Project Management",
      "Cross-Discipline Collaboration",
      "Agile Development",
      "Software Architecture",
      "Quality Assurance (QA)",
    ],
  },
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
    name: "DiDi & Smiling Johns",
    subheader: "small business website (deprecated)",
    approach:
      "I worked closely with the business owners to define their goals, prioritizing an engaging and personality-driven online presence. Through an iterative design process, I incorporated their feedback to create an accessible website featuring individual staff spotlights, a strong call to action, and interactive elements that highlighted the shop's welcoming atmosphere. To ensure maintainability, I implemented a custom CMS integration, allowing them to update select content safely while preserving design integrity. The final design struck a balance between individuality and brand cohesion, using color schemes, group photos, and layout consistency to unify the dual business.",
    challenges:
      "Building a website for a dual barber/salon required balancing individuality and cohesion—each stylist needed a personalized section while maintaining a unified brand identity. The business owners also wanted the ability to edit content with minimal risk, necessitating a custom CMS solution that was both flexible and easy to use. It was important to the core identity of the business that the website be inclusive and accessible, as well as accommodate a rotating staff, requiring a structure that could easily adapt to changes.",
    description:
      "This is a website I designed and coded for a local business pro-bono to help unify their branding and improve their web presence. They were looking to show each professional as an individual with their own specialties and prices, but also provide cohesion to reflect how closely they worked together. To achieve this, I focused on separating each person and providing them a card with their details while directing focus to groupshots and and increased the use of their branding colors to provide unity.",
    imageName: "didiAndSmilingJohns",
    imageAriaLabel: "Blurred photo of barbers and cutting clients hair",
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
