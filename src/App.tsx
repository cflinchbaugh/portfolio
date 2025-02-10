import { About } from "./pages/About";
import { Achievements } from "./pages/Achievements";
import { Contact } from "./pages/Contact";
import { Hero } from "./pages/Hero";

import { Suspense, lazy } from "react";
import { Skills } from "./pages/Skills";
const Projects = lazy(() => import("./pages/Projects"));

function App() {
  return (
    <main>
      <Hero />
      <About />
      <Achievements />
      <Suspense fallback={<div>Loading...</div>}>
        <Projects />
      </Suspense>
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
