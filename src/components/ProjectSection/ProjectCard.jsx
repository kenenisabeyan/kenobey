import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const itemVariant = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, margin: "0px" });

  return (
    <motion.div
      ref={cardRef}
      variants={itemVariant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ y: -10 }}
      className="group relative h-full flex flex-col"
    >
      <div className="h-full bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-[var(--primary)]/50 group-hover:shadow-xl group-hover:shadow-[var(--primary)]/10 flex flex-col">
        <div className="relative overflow-hidden h-48 bg-[var(--surface-highlight)]">
          <motion.img
            src={project.image}
            alt={`Preview of ${project.title}`}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={{ scale: isInView ? 1 : 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
            <div className="flex gap-4 text-white text-2xl">
              {project.tech.map((tech, idx) => (
                <div key={idx} className="relative group/tech">
                  <span className="hover:text-[var(--primary)] transition-colors">
                    {tech.icon}
                  </span>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/tech:opacity-100 transition-opacity">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 flex-grow flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
              {project.title}
            </h3>
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-[var(--surface-highlight)] text-[var(--text-secondary)]">
              {project.category}
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)] mb-4 flex-grow">{project.description}</p>

          <div className="flex gap-4 mt-auto">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-[var(--text-primary)] hover:text-[var(--primary)] transition-colors"
                title="Live Demo"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                title="View Code"
              >
                <FaGithub />
                Code
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 rounded-2xl bg-[var(--primary)] opacity-0 group-hover:opacity-10 blur-sm transition-opacity duration-300 -z-10 pointer-events-none"></div>
    </motion.div>
  );
};

export default ProjectCard;
