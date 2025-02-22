import { About } from "./pages/About";
import { Achievements } from "./pages/Achievements";
import { Contact } from "./pages/Contact";
import { Hero } from "./pages/Hero";

import { Suspense, lazy } from "react";
import { Skills } from "./pages/Skills";

const ProfessionalHistory = lazy(() => import("./pages/ProfessionalHistory"));

function App() {
  return (
    <main>
      <section>
        <Hero />
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
    </main>
  );
}

export default App;
