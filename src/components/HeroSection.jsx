import React, { useEffect, useState } from "react";
import { FaGithub, FaXTwitter, FaLinkedin, FaMedium } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HeroSection = () => {
  const [nameHovered, setNameHovered] = useState(false);
  const [stackHovered, setStackHovered] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="relative pt-50 pb-12 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 lg:gap-24 overflow-hidden" id="home"
    >
      {/* Subtle background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#06890a] rounded-full filter blur-[100px] opacity-5"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#4dc247] rounded-full filter blur-[120px] opacity-5"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#4dc247] rounded-full filter blur-[90px] opacity-10 animate-float-slow"></div>
      </div>

      {/* Profile Image */}
      <motion.div
        variants={itemVariants}
        className="w-full md:w-2/5 flex flex-col items-center relative"
      >
        <div className="relative group w-72 h-72">
          {/* Premium monochrome ring (no green) */}
          <motion.div
            className="absolute -inset-3 rounded-full overflow-hidden"
            animate={{ rotate: 360 }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-full h-full bg-gradient-to-r from-slate-700 via-slate-500 to-slate-700 opacity-60"></div>
          </motion.div>

          {/* Subtle inner glow (neutral) */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-700"></div>

          {/* Profile image container (black background, no green border) */}
          <div className="relative w-72 h-72 rounded-full shadow-2xl z-10 overflow-hidden bg-gradient-to-br from-gray-900 to-black border-4 border-gray-800 group-hover:border-white/10 transition-all duration-500">
            <img
              src="logo.png"
              alt="Firomsa Guteta portrait"
              className="w-full h-full object-contain p-6 transform transition-all duration-500 group-hover:scale-105"
              style={{ objectPosition: "center" }}
            />

            {/* Premium shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
          </div>

          {/* Floating particles effect (neutral dots) */}
          <div className="absolute inset-0 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gray-500 rounded-full"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
                style={{
                  left: `${20 + i * 15}%`,
                  bottom: "10%",
                }}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Social Links (neutral hover accents) */}
        <motion.ul variants={itemVariants} className="flex gap-6 mt-12">
          {[
            { icon: <FaGithub />, url: "https://github.com/firogute", label: "GitHub", color: "hover:text-gray-300" },
            { icon: <FaXTwitter />, url: "#", label: "Twitter", color: "hover:text-blue-400" },
            { icon: <FaLinkedin />, url: "https://linkedin.com/in/firoguteta12", label: "LinkedIn", color: "hover:text-blue-500" },
            { icon: <FaMedium />, url: "https://x.com/Firogute492", label: "Medium", color: "hover:text-gray-300" },
          ].map((social, index) => (
            <motion.li key={index} whileHover={{ y: -6, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="relative p-3 block group transition-all duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black rounded-full scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 shadow-lg"></span>
                <span className="absolute inset-0 rounded-full border border-transparent group-hover:border-white/10 transition-all duration-500"></span>

                <span className={`relative z-10 text-2xl text-gray-500 transition-all duration-300 ${social.color}`}>
                  {social.icon}
                </span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>


      {/* Text Content */}
      <motion.div
        variants={itemVariants}
        className="w-full md:w-3/5 text-center md:text-left"
      >
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-white">Hello, I'm </span>
          <span
            className="relative inline-block"
            onMouseEnter={() => setNameHovered(true)}
            onMouseLeave={() => setNameHovered(false)}
          >
            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#06890a] to-[#4dc247]">
              Firomsa Guteta
            </span>
            <motion.span
              className="absolute bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#06890a] to-[#4dc247]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: nameHovered ? 1 : 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ originX: 0 }}
            />
          </span>
        </motion.h1>

        <motion.p
          className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto md:mx-0 leading-relaxed mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Full-Stack Software Engineer specializing in modern web technologies.
          Expert in{" "}
          <span
            className="relative inline-block"
            onMouseEnter={() => setStackHovered(true)}
            onMouseLeave={() => setStackHovered(false)}
          >
            <span className="relative z-10 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#06890a] to-[#4dc247]">
              JavaScript, React, Next.js, Express, PostgreSQL & MongoDB
            </span>
            <motion.span
              className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#06890a] to-[#4dc247]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: stackHovered ? 1 : 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ originX: 0 }}
            />
          </span>
          . Building scalable, high-performance applications with clean code and exceptional user experiences.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{
              y: -3,
              boxShadow: "0 10px 25px -5px rgba(5, 137, 10, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden bg-gradient-to-r from-[#06890a] to-[#4dc247] text-white font-semibold px-8 py-4 rounded-full inline-flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <span className="relative z-10">Download Resume</span>
            <MdOutlineFileDownload className="size-5 relative z-10 transition-transform duration-300 group-hover:translate-y-1" />
            <span className="absolute inset-0 bg-gradient-to-r from-[#056d08] to-[#3a9e36] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{
              y: -3,
              backgroundColor: "rgba(5, 137, 10, 0.1)",
              borderColor: "#4dc247",
            }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden border-2 border-[#06890a]/70 text-white font-semibold px-8 py-4 rounded-full inline-flex items-center gap-2 transition-all duration-300 hover:border-[#4dc247] group"
          >
            <span className="relative z-10">Let's Talk</span>
            <span className="absolute inset-0 bg-[#06890a] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
