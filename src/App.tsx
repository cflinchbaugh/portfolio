import { About } from "./pages/About";
import { Achievements } from "./pages/Achievements";
import { Contact } from "./pages/Contact";
import { Hero } from "./pages/Hero";

import { Suspense, lazy } from "react";
import { Skills } from "./pages/Skills";
import ThreeDCarousel from "./components/ThreeDCarousel";

const ProfessionalHistory = lazy(() => import("./pages/ProfessionalHistory"));

function App() {
  return (
    <main>
      <section>
        <Hero />
      </section>
      <section>
        <ThreeDCarousel />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Achievements />
      </section>
      <section>
        <Suspense fallback={<div>Loading...</div>}>
          <ProfessionalHistory />
        </Suspense>
      </section>
      <section>
        <Skills />
      </section>
      <section>
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
