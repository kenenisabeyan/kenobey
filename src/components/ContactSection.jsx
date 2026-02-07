import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaEnvelope,
  FaDiscord,
  FaMedium,
  FaStackOverflow,
  FaYoutube,
} from "react-icons/fa6";
import { SiLeetcode, SiDevdotto, SiHashnode, SiCodepen } from "react-icons/si";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    {
      icon: <FaEnvelope className="text-red-400" />,
      url: "mailto:kenenisab05@gmail.com",
      label: "Email",
      hoverColor: "hover:text-[var(--primary)]",
    },
    {
      icon: <FaGithub className="text-[var(--text-primary)]" />,
      url: "https://github.com/kenenisabeyan",
      label: "GitHub",
      hoverColor: "hover:text-[var(--primary)]",
    },
    {
      icon: <FaLinkedin className="text-blue-500" />,
      url: "https://linkedin.com/in/keno05",
      label: "LinkedIn",
      hoverColor: "hover:text-[var(--primary)]",
    },
    {
      icon: <FaXTwitter className="text-[var(--text-secondary)]" />,
      url: "https://twitter.com/kenenisa94931",
      label: "Twitter",
      hoverColor: "hover:text-[var(--primary)]",
    },
    {
      icon: <FaDiscord className="text-indigo-400" />,
      url: "https://discord.com/users/keno05",
      label: "Discord",
      hoverColor: "hover:text-[var(--primary)]",
    },
    {
      icon: <SiDevdotto className="text-[var(--text-secondary)]" />,
      url: "https://dev.to/keno05",
      label: "Dev.to",
      hoverColor: "hover:text-[var(--primary)]",
    },
    {
      icon: <SiLeetcode className="text-yellow-500" />,
      url: "https://leetcode.com/kenenisabeyan",
      label: "LeetCode",
      hoverColor: "hover:text-[var(--primary)]",
    },
    {
      icon: <FaMedium className="text-[var(--text-secondary)]" />,
      url: "https://medium.com/@yourusername",
      label: "Medium",
      hoverColor: "hover:text-[var(--primary)]",
    },
    {
      icon: <FaStackOverflow className="text-orange-500" />,
      url: "https://stackoverflow.com/users/yourusername",
      label: "Stack Overflow",
      hoverColor: "hover:text-[var(--primary)]",
    },
  ];

  return (
    <section
      id="contact"
      className="relative pt-22 pb-14 overflow-hidden bg-[var(--background)]"
    >
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[var(--primary)] rounded-full filter blur-3xl opacity-5 -z-10 pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[var(--primary)] rounded-full filter blur-3xl opacity-5 -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[var(--text-primary)]">Let's </span>
            <span className="text-[var(--primary)]">Connect</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              className={`flex flex-col items-center justify-center bg-[var(--surface)] backdrop-blur-sm border border-[var(--border)] rounded-xl p-6 text-3xl transition-all duration-300 ${social.hoverColor} hover:border-[var(--primary)]/50 hover:bg-[var(--surface-highlight)] hover:shadow-md`}
            >
              <div className="mb-2">{social.icon}</div>
              <span className="text-xs font-medium text-[var(--text-secondary)] mt-2 group-hover:text-[var(--text-primary)]">
                {social.label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-16 text-[var(--text-secondary)]"
        >
          <p className="text-sm">
            Prefer a direct approach? <br className="sm:hidden" />
            <a
              href="mailto:kenenisab05@gmail.com"
              className="text-[var(--primary)] hover:underline"
            >
              kenenisab05@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
