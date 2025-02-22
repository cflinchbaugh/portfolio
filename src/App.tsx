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
      <Hero />
      <About />
      <Achievements />
      <Suspense fallback={<div>Loading...</div>}>
        <ProfessionalHistory />
      </Suspense>
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
