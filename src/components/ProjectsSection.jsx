import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectSection/ProjectCard";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaLock,
  FaLayerGroup,
  FaChartBar,
} from "react-icons/fa";

import {
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiFirebase,
  SiJavascript,
  SiMongodb,
} from "react-icons/si";

import { TbBrandVite } from "react-icons/tb";

const projects = [
  {
    title: "e-Tutor – Online Education Platform (Frontend)",
    description:
      "Developed a scalable and responsive frontend interface for an online education platform similar to Udemy. Designed reusable components, intuitive navigation, and a clean user experience using React.js, focusing on real-world application structure and future backend integration",
    image: "https://placehold.co/600x400/1a2c38/FFF?text=e-Tutor",
    link: "#",
    github: "#",
    tech: [
      { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
      { icon: <FaReact className="text-cyan-400" />, name: "React" },
      { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS/SCSS" },
    ],
    category: "Fronted",
  },
  {
    title: "Quill ",
    description:
      "Designed responsive layouts with clear navigation, feature sections, and call-to-action components. Focused on clean UI, typography, and realistic product-style design.",
    image: "https://placehold.co/600x400/1a2c38/FFF?text=Quill",
    link: "https://live-docs-xnzk.vercel.app",
    github: "#",
    tech: [
      { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
      { icon: <FaHtml5 className="text-orange-600" />, name: "HTML" },
      { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
    ],
    category: "Frontend",
  },
  {
    title: "Student-Grade-Management-App",
    description:
      "Designed and developed the frontend of a university-style student grade management system inspired by real academic platforms. Added persistent data handling with maintainable UI logic to support realistic academic workflows.",
    image: "https://placehold.co/600x400/1a2c38/FFF?text=Grade+Management+App",
    link: "https://wusc.vercel.app",
    github: "#",
    tech: [
      { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
      { icon: <FaHtml5 className="text-orange-600" />, name: "HTML" },
      { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
    ],
    category: "Frontend",
  },

  {
    title: "Mock Interview AI",
    description:
      "AI-powered mock interview platform built with Next.js, Firebase, and TailwindCSS, providing voice-based practice, authentication, and data storage.",
    image: "https://placehold.co/600x400/1a2c38/FFF?text=Mock+Interview+AI",
    link: "https://mock-interview-ai-three.vercel.app",
    github: "#",
    tech: [
      { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
      { icon: <SiFirebase className="text-amber-500" />, name: "Firebase" },
      { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind" },
      { icon: <FaReact className="text-cyan-400" />, name: "React" },
    ],
    category: "Full-Stack",
  },
  {
    title: "Employee-Performance-Evaluation -Dashboard",
    description:
      "Designed and implemented a scalable full-stack performance evaluation system using Next.js(App Router) and MongoDB. Enabled admin,self, and peer evaluations with secure authentication,role-based dashboards, and performance data visualization to improve transparency and tracking.",
    image: "https://placehold.co/600x400/1a2c38/FFF?text=Evaluation+Dashboard",
    link: "https://world-rank-seven.vercel.app",
    github: "#",
    tech: [
      { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
      { icon: <FaReact className="text-cyan-400" />, name: "React" },
      { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind" },
      { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
      { icon: <SiMongodb className="text-stone-600" />, name: "MongoDB" },
      { icon: <FaLock className="text-purple-500" />, name: "NextAuth.js" },
      { icon: <FaLayerGroup className="text-indigo-400" />, name: "Radix UI" },
      { icon: <FaChartBar className="text-orange-400" />, name: "Charts & Analytics" },


    ],
    category: "Full-stack",
  },
  {
    title: "Country Quiz",
    description:
      "Interactive country quiz app using REST Countries API and React, with dynamic questions, multiple-choice answers, instant feedback, and score tracking.",
    image: "https://placehold.co/600x400/1a2c38/FFF?text=Country+Quiz",
    link: "https://country-quiz-murex.vercel.app",
    github: "#",
    tech: [
      { icon: <FaReact className="text-cyan-400" />, name: "React" },
      { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind" },
      { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript" },
    ],
    category: "Frontend",
  },
  {
    title: "Anti-Plagiarism Detection System",
    description:
      "Academic project at ASTU. Requirement gathering and SRS documentation for a plagiarism detection system, focusing on functional/non-functional requirements and stakeholder analysis.",
    image: "https://placehold.co/600x400/1a2c38/FFF?text=Anti-Plagiarism",
    link: "#",
    github: "#",
    tech: [
      { icon: <FaPython className="text-yellow-400" />, name: "Python" },
    ],
    category: "Academic",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "100px" });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const categories = [...new Set(projects.map((project) => project.category))];

  return (
    <section
      className="relative py-28 overflow-hidden bg-[var(--background)]"
      id="projects"
    >
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[var(--primary)] rounded-full filter blur-3xl opacity-5 -z-10 pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[var(--primary)] rounded-full filter blur-3xl opacity-5 -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[var(--text-primary)]">My </span>
            <span className="text-[var(--primary)]">Projects</span>
            <span className="text-[var(--text-primary)]"> Showcase</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            A curated collection of my best work demonstrating technical
            expertise and creative problem-solving
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-4 py-2 text-sm font-medium rounded-full bg-[var(--surface-highlight)] text-[var(--text-secondary)] border border-[var(--border)] hover:bg-[var(--primary)] hover:text-white transition-colors duration-300"
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
