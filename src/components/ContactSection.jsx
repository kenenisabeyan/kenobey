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
      url: "mailto:firomsaguteta11@gmail.com",
      label: "Email",
      hoverColor: "hover:text-red-400",
    },
    {
      icon: <FaGithub className="text-gray-200" />,
      url: "https://github.com/firogute",
      label: "GitHub",
      hoverColor: "hover:text-purple-400",
    },
    {
      icon: <FaLinkedin className="text-blue-500" />,
      url: "https://linkedin.com/in/firoguteta12",
      label: "LinkedIn",
      hoverColor: "hover:text-blue-400",
    },
    {
      icon: <FaXTwitter className="text-gray-400" />,
      url: "https://twitter.com/FiroGute492",
      label: "Twitter",
      hoverColor: "hover:text-blue-300",
    },
    {
      icon: <FaDiscord className="text-indigo-400" />,
      url: "https://discord.com/users/firogute13",
      label: "Discord",
      hoverColor: "hover:text-indigo-300",
    },
    {
      icon: <SiDevdotto className="text-gray-300" />,
      url: "https://dev.to/yourusername",
      label: "Dev.to",
      hoverColor: "hover:text-green-400",
    },
    {
      icon: <SiLeetcode className="text-yellow-500" />,
      url: "https://leetcode.com/firogute",
      label: "LeetCode",
      hoverColor: "hover:text-yellow-400",
    },
    {
      icon: <FaMedium className="text-gray-100" />,
      url: "https://medium.com/@yourusername",
      label: "Medium",
      hoverColor: "hover:text-green-300",
    },
    {
      icon: <FaStackOverflow className="text-orange-500" />,
      url: "https://stackoverflow.com/users/yourusername",
      label: "Stack Overflow",
      hoverColor: "hover:text-orange-400",
    },
  ];

  return (
    <section
      id="contact"
      className="relative pt-22 pb-14 overflow-hidden bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#06890a] rounded-full filter blur-3xl opacity-10 -z-10"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#4dc247] rounded-full filter blur-3xl opacity-5 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Let's <span className="text-[#06890a]">Connect</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
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
              className={`flex flex-col items-center justify-center bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-3xl transition-all duration-300 ${social.hoverColor} hover:border-[#06890a]/50 hover:bg-gray-700/30 hover:shadow-md`}
            >
              <div className="mb-2">{social.icon}</div>
              <span className="text-xs font-medium text-gray-400 mt-2">
                {social.label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-16 text-gray-400"
        >
          <p className="text-sm">
            Prefer a direct approach? <br className="sm:hidden" />
            <a
              href="mailto:firomsaguteta11@gmail.com"
              className="text-[#4dc247] hover:underline"
            >
              firomsaguteta11@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
