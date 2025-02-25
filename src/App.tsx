import { About } from "./pages/About";
import { Achievements } from "./pages/Achievements";
import { Contact } from "./pages/Contact";
import { Hero } from "./pages/Hero";

import { Suspense, lazy } from "react";
import { Skills } from "./pages/Skills";
import Navbar from "./components/Navbar";

const ProfessionalHistory = lazy(() => import("./pages/ProfessionalHistory"));

const navLinks = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Achievements",
    href: "#achievements",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

function App() {
  return (
    <main>
      <Navbar navLinks={navLinks} />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="achievements">
        <Achievements />
      </section>
      <section id="professionalHistory">
        <Suspense fallback={<div>Loading...</div>}>
          <ProfessionalHistory />
        </Suspense>
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>

      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "10vh",
          background:
            "linear-gradient(to top, var(--color-cyber-black-400) 10%, transparent)",
          pointerEvents: "none",
          zIndex: 100,
        }}
      />
    </main>
  );
}

export default App;
