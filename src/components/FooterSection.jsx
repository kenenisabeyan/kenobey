import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaEnvelope,
  FaDiscord,
  FaMedium,
  FaHeart,
} from "react-icons/fa6";
import { SiLeetcode, SiDevdotto } from "react-icons/si";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/kenenisabeyan",
      label: "GitHub",
      color: "hover:text-[var(--primary)]",
    },
    {
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/keno05",
      label: "LinkedIn",
      color: "hover:text-[var(--primary)]",
    },
    {
      icon: <FaXTwitter />,
      url: "https://x.com/kenenisa94931",
      label: "Twitter",
      color: "hover:text-[var(--primary)]",
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:kenenisab05@gmail.com",
      label: "Email",
      color: "hover:text-[var(--primary)]",
    },
    {
      icon: <FaDiscord />,
      url: "https://discord.com/users/keno05",
      label: "Discord",
      color: "hover:text-[var(--primary)]",
    },
  ];

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="relative bg-[var(--surface)] border-t border-[var(--border)] py-8 mt-12"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-sm text-[var(--text-secondary)] flex items-center gap-1"
          >
            <span>
              &copy; {new Date().getFullYear()} Kenenisa Beyan. All rights
              reserved.
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 ml-2">
              <span>Made with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>by Kenenisa</span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex gap-5 text-xl"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors ${social.color}`}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="sm:hidden text-xs text-[var(--text-secondary)] mt-4 flex items-center justify-center gap-1"
        >
          <span>Made with</span>
          <FaHeart className="text-red-500 animate-pulse" />
          <span>by Kenenisa</span>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
