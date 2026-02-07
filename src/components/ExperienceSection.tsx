import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaRocket, FaCode, FaAward } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      company: "Upwork",
      role: "Full-Stack Developer",
      period: "Feb 2024 - Present",
      location: "Remote",
      description:
        "Working on full-stack web development projects, building responsive front-end interfaces and robust back-end systems using modern technologies.",
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "JavaScript",
        "TypeScript",
        "Tailwind",
        "MongoDB",
        "PostgreSQL",
        "Django",
        "FastAPI",
        "n8n",
        "SEO",
      ],
      achievements: [
        {
          icon: <FaStar className="text-yellow-400" />,
          text: "Achieved 100% client satisfaction with consistent 5-star reviews",
        },
        {
          icon: <FaRocket className="text-gray-400" />,
          text: "Improved application performance by 40% through optimization",
        },
        {
          icon: <FaCode className="text-gray-500" />,
          text: "Built scalable REST and GraphQL APIs for real-time data operations",
        },
        {
          icon: <FaAward className="text-blue-400" />,
          text: "Enhanced code quality using Git, Docker, and best practices",
        },
      ],
      upworkUrl:
        "https://www.upwork.com/freelancers/~01d64fa15434a12eda?mp_source=share",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  const achievementVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <AnimatePresence>
      <motion.section
        id="work"
        className="py-20 px-6 max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div variants={cardVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Professional </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#06890a] to-[#4dc247]">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building digital solutions that drive results and exceed
            expectations
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 40px rgba(0,255,0,0.15)",
              }}
              className="w-full bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 shadow-2xl transition-all duration-500 group relative"
            >
              {/* Desktop CTA */}
              <motion.a
                href={exp.upworkUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="hidden lg:inline-flex absolute -top-3 -right-3 items-center gap-2 bg-gradient-to-r from-[#14a800] to-[#0d8d00] text-white font-semibold px-5 py-2.5 rounded-full hover:shadow-2xl hover:shadow-[#14a800]/30 transition-all duration-300 z-20"
              >
                <span>Hire Me on Upwork</span>
                <FiExternalLink className="text-sm" />
              </motion.a>

              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#4dc247] transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2">
                    <span className="text-lg font-semibold text-[#4dc247]">
                      {exp.company}
                    </span>
                    <span className="hidden sm:block text-gray-400">•</span>
                    <span className="text-gray-400">{exp.location}</span>
                  </div>
                </div>

                {/* Period badge */}
                <span className="inline-flex items-center px-4 py-2 bg-[#06890a]/20 text-[#4dc247] rounded-full text-sm font-medium mt-4 lg:mt-0">
                  {exp.period}
                </span>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-gray-300 text-lg leading-relaxed mb-8"
              >
                {exp.description}
              </motion.p>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <FaCode className="text-gray-400" />
                  Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-3">
                  {exp.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      variants={badgeVariants}
                      initial="hidden"
                      animate="visible"
                      className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full text-sm font-medium border border-gray-700 hover:border-[#4dc247]/50 hover:text-[#4dc247] transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <FaAward className="text-yellow-400" />
                  Key Achievements
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {exp.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={achievementVariants}
                      initial="hidden"
                      animate="visible"
                      className="flex items-start gap-3 p-4 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 mt-1 text-lg">
                        {achievement.icon}
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {achievement.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <motion.a
                href={exp.upworkUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="lg:hidden mt-6 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#14a800] to-[#0d8d00] text-white font-semibold px-6 py-4 rounded-xl hover:shadow-2xl hover:shadow-[#14a800]/30 transition-all duration-300"
              >
                <span>Hire Me on Upwork</span>
                <FiExternalLink className="text-sm" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default ExperienceSection;
