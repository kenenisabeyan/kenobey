import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
  useAnimation,
} from "framer-motion";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const controls = useAnimation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const progress = Math.min(latest / 300, 1);
    setScrollProgress(progress);
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    if (isScrolled) {
      controls.start({
        boxShadow: "0 10px 30px -10px rgba(5, 137, 10, 0.2)",
        borderColor: "rgba(77, 194, 71, 0.1)",
      });
    } else {
      controls.start({
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        borderColor: "rgba(255, 255, 255, 0.05)",
      });
    }
  }, [isScrolled, controls]);

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
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl mx-auto"
      >
        <div className="relative">
          {/* Animated border gradient */}
          <motion.div
            className="absolute inset-0 rounded-full p-[1px] pointer-events-none overflow-hidden"
            style={{
              background: `conic-gradient(from ${scrollProgress * 360
                }deg, #06890a, #4dc247, #06890a)`,
            }}
            animate={{
              opacity: isScrolled ? 1 : 0.7,
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Main nav container */}
          <motion.div
            className={`relative bg-gradient-to-b from-gray-900/95 to-gray-900 backdrop-blur-2xl rounded-full flex items-center justify-between border transition-all duration-300 ${isMenuOpen ? "border-[#4dc247]/30" : "border-transparent"
              }`}
            animate={controls}
            whileHover={{ scale: 1.01 }}
          >
            {/* Logo */}
            <motion.a
              href="#home"
              aria-label="Go to Home"
              className="p-2 pl-5 flex-shrink-0 inline-block"
              whileHover={{ rotate: 8, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
            >
              <div className="relative group flex items-center justify-center">
                {/* Glowing rounded background */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#06890a] to-[#4dc247] opacity-0 group-hover:opacity-80 blur-lg"
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Keep logo crisp & uncropped */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12">
                  <img
                    src="logo.jpg"
                    alt="Logo"
                    className="w-10 h-10 object-contain transition-transform duration-500
                   group-hover:scale-110"
                  />
                </div>
              </div>
            </motion.a>



            {/* Desktop Nav Links */}
            <nav className="hidden md:block">
              <ul className="flex gap-1 px-2">
                {navItems.map((item) => (
                  <motion.li
                    key={item.id}
                    className="relative"
                    onHoverStart={() => setHoveredItem(item.id)}
                    onHoverEnd={() => setHoveredItem(null)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={`#${item.id}`}
                      className={`relative z-10 block px-6 py-4 text-sm font-medium transition-all ${activeSection === item.id
                        ? "text-[#4dc247]"
                        : "text-gray-300 hover:text-white"
                        }`}
                      onClick={() => setActiveSection(item.id)}
                    >
                      {item.label}
                      {activeSection === item.id && (
                        <motion.span
                          className="absolute bottom-3 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#4dc247] rounded-full"
                          layoutId="navIndicator"
                          transition={{
                            type: "spring",
                            bounce: 0.2,
                            duration: 0.6,
                          }}
                        />
                      )}
                    </a>

                    {hoveredItem === item.id && (
                      <motion.span
                        className="absolute inset-0 bg-gray-800/30 rounded-full -z-10"
                        layoutId="navHoverBg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Desktop Social Links & Resume Button */}
            <div className="hidden md:flex items-center gap-2 pr-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -2, color: "#4dc247" }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-gray-400 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
              <motion.a
                href="/resume.pdf"
                target="_blank"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(5, 137, 10, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="ml-2 px-4 py-2 text-xs font-semibold bg-[#06890a]/20 text-[#4dc247] border border-[#4dc247]/30 rounded-full flex items-center gap-1 transition-all"
              >
                Resume <FiArrowUpRight className="text-xs" />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-4 text-gray-400 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? (
                <FiX size={24} className="text-[#4dc247]" />
              ) : (
                <FiMenu size={24} />
              )}
            </motion.button>
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
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-md bg-gray-900/95 backdrop-blur-2xl border border-gray-700/30 rounded-2xl overflow-hidden shadow-2xl md:hidden"
            style={{
              boxShadow:
                "0 20px 25px -5px rgba(5, 137, 10, 0.1), 0 10px 10px -5px rgba(5, 137, 10, 0.04)",
            }}
          >
            <ul className="flex flex-col divide-y divide-gray-700/30">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href={`#${item.id}`}
                    className={`block px-6 py-4 text-lg font-medium transition-colors ${activeSection === item.id
                      ? "text-[#4dc247] bg-[#06890a]/10"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                      }`}
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsMenuOpen(false);
                    }}
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2"
                    >
                      {item.label}
                      {activeSection === item.id && (
                        <motion.span
                          className="w-2 h-2 bg-[#4dc247] rounded-full"
                          layoutId="mobileNavIndicator"
                        />
                      )}
                    </motion.span>
                  </a>
                </motion.li>
              ))}

              <motion.li
                className="flex flex-col items-center gap-4 p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex justify-center gap-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      whileHover={{ y: -3, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-2xl text-gray-400 hover:text-[#4dc247] transition-colors"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 py-3 text-sm font-semibold bg-[#06890a]/20 text-[#4dc247] border border-[#4dc247]/30 rounded-full flex items-center gap-2 transition-all"
                >
                  Download Resume <FiArrowUpRight className="text-xs" />
                </motion.a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
