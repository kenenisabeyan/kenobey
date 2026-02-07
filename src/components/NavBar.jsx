import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
  useAnimation,
} from "framer-motion";
import { FiMenu, FiX, FiArrowUpRight, FiSun, FiMoon } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const { theme, toggleTheme } = useTheme();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const progress = Math.min(latest / 300, 1);
    setScrollProgress(progress);
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    // Only animate shadow and border on scroll, background remains constant
    if (isScrolled) {
      controls.start({
        boxShadow: "var(--shadow-sm)",
        borderColor: "var(--border)",
      });
    } else {
      controls.start({
        boxShadow: "none",
        borderColor: "transparent",
      });
    }
  }, [isScrolled, controls, theme]);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "work", label: "Work" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/kenenisabeyan", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/keno05", label: "LinkedIn" },
    { icon: <FaTwitter />, url: "https://x.com/kenenisa93941", label: "Twitter" },
  ];

  return (
    <>
      <motion.nav
        ref={navRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl mx-auto"
      >
        <div className="relative">
          {/* Main nav container */}
          <motion.div
            className={`relative backdrop-blur-xl rounded-full flex items-center justify-between px-2 py-2 md:px-4 md:py-2 border transition-all duration-300`}
            style={{
              backgroundColor: `rgba(var(--surface-rgb), 0.85)`, /* Always visible opacity */
              backdropFilter: "blur(12px)", /* Always glass */
              borderColor: "var(--border)",
              boxShadow: isScrolled ? "var(--shadow-sm)" : "none",
            }}
            animate={controls}
          >
            {/* Logo */}
            <motion.a
              href="#home"
              aria-label="Go to Home"
              className="p-2 flex-shrink-0 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative flex items-center justify-center w-10 h-10 bg-[var(--primary)] rounded-full text-white font-bold text-xl">
                K
              </div>
            </motion.a>

            {/* Desktop Nav Links */}
            <nav className="hidden md:block">
              <ul className="flex gap-1">
                {navItems.map((item) => (
                  <motion.li
                    key={item.id}
                    className="relative"
                    onHoverStart={() => setHoveredItem(item.id)}
                    onHoverEnd={() => setHoveredItem(null)}
                  >
                    <a
                      href={`#${item.id}`}
                      className={`relative z-10 block px-4 py-2 text-sm font-medium transition-colors ${activeSection === item.id
                        ? "text-[var(--primary)]"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                        }`}
                      onClick={() => setActiveSection(item.id)}
                    >
                      {item.label}
                      {activeSection === item.id && (
                        <motion.span
                          className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[var(--primary)] rounded-full"
                          layoutId="navIndicator"
                        />
                      )}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Desktop Right Side */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-highlight)] transition-colors cursor-pointer"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
              </button>

              <div className="h-6 w-px bg-[var(--border)] mx-1"></div>

              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -2, color: "var(--primary)" }}
                  className="text-[var(--text-secondary)] transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}

              <motion.a
                href="/resume.pdf"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-2 px-4 py-2 text-xs font-semibold bg-[var(--primary)] text-white rounded-full flex items-center gap-1 shadow-md shadow-[var(--primary)]/20 hover:shadow-lg hover:shadow-[var(--primary)]/30 transition-all"
              >
                Resume <FiArrowUpRight />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-[var(--text-secondary)] hover:bg-[var(--surface-highlight)] transition-colors cursor-pointer"
              >
                {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
              </button>
              <button
                className="p-2 text-[var(--text-primary)]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}

              >
                {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-24 z-40 bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-xl md:hidden overflow-hidden"
          >
            <ul className="flex flex-col p-4 divide-y divide-[var(--border)]">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`block py-3 text-lg font-medium ${activeSection === item.id
                      ? "text-[var(--primary)]"
                      : "text-[var(--text-primary)]"
                      }`}
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-4 mt-2 flex justify-between items-center">
                <span className="text-[var(--text-secondary)] text-sm">Connect</span>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      className="text-[var(--text-secondary)] hover:text-[var(--primary)] text-xl"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;


// #3a05daff