import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import { BootScreen } from "./components/ui/BootScreen";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Resume } from "./components/sections/Resume";
import { Education } from "./components/sections/Education";
import { Contact } from "./components/sections/Contact";
import { Terminal } from "./components/ui/Terminal";
import { CustomCursor } from "./components/ui/CustomCursor";
import { SpaceBackground } from "./components/ui/SpaceBackground";

function App() {
  const [isBooted, setIsBooted] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <main className="min-h-screen selection:bg-blue-600 selection:text-white">
      <AnimatePresence>
        {!isBooted && <BootScreen onComplete={() => setIsBooted(true)} />}
      </AnimatePresence>

      {isBooted && (
        <>
          <div className="mesh-gradient" />
          <SpaceBackground isDarkMode={true} />
          <div className="relative z-10">
            <CustomCursor />
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Resume />
            <Education />
            <Contact />
            <Terminal />
            
            <footer className="py-12 border-t border-white/5 text-center text-[10px] uppercase tracking-widest text-slate-500 bg-black/20 backdrop-blur-sm">
              Pallavi Sarovar // Professional Portfolio // © 2026
            </footer>
          </div>
        </>
      )}
    </main>
  );
}

export default App;
