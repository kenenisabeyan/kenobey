import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/Skills";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/FooterSection";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";
import ExperienceSection from "./components/ExperienceSection";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [enableScrollTracking, setEnableScrollTracking] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      requestAnimationFrame(() => {
        setIsLoading(false);
        setEnableScrollTracking(true);
      });
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative bg-gradient-to-b from-[#010e02] to-black text-white">
      {enableScrollTracking && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-[#06890a] z-50 origin-left"
          initial={{ scaleX: 0 }}
          style={{ scaleX }}
        />
      )}

      <div className="max-w-[85rem] mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <NavBar />
        <main className="w-full">
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
      </div>

      <ScrollToTop />
    </div>
  );
}

export default App;
