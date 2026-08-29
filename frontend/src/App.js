import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { AnimatePresence } from "framer-motion";
import "@/App.css";
import HeroSection from "@/sections/HeroSection";
import MarqueeSection from "@/sections/MarqueeSection";
import AboutSection from "@/sections/AboutSection";
import ServicesSection from "@/sections/ServicesSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ContactFooter from "@/sections/ContactFooter";
import { CustomCursor } from "@/components/CustomCursor";
import { Preloader } from "@/components/Preloader";

function App() {
  const lenisRef = useRef(null);
  const [intro, setIntro] = useState(() => {
    try {
      return !window.sessionStorage.getItem("jx_intro_seen");
    } catch {
      return true;
    }
  });
  const [introDelay] = useState(() => {
    try {
      return window.sessionStorage.getItem("jx_intro_seen") ? 0 : 2.4;
    } catch {
      return 2.4;
    }
  });

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    lenisRef.current = lenis;
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (intro) lenisRef.current?.stop();
    else lenisRef.current?.start();
  }, [intro]);

  const finishIntro = () => {
    try {
      window.sessionStorage.setItem("jx_intro_seen", "1");
    } catch {}
    setIntro(false);
  };

  return (
    <div className="App min-h-screen" style={{ backgroundColor: "#0C0C0C", overflowX: "clip" }}>
      <CustomCursor />
      <AnimatePresence>{intro && <Preloader onDone={finishIntro} />}</AnimatePresence>
      <HeroSection introDelay={introDelay} />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactFooter />
    </div>
  );
}

export default App;
