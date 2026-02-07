import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1; // Smooth increment
      });
    }, 20); // 20ms * 100 = 2000ms total duration

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center z-[9999]">
      <div className="relative flex flex-col items-center">
        {/* Logo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 relative"
        >
          {/* Animated K Logo */}
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-[#10b981]"
          >
            <motion.path
              d="M30 20 V80 M30 50 L70 20 M30 50 L70 80"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
            />
          </svg>

          {/* Subtle Glow Behind Logo */}
          <div className="absolute inset-0 bg-[#10b981] blur-3xl opacity-20 rounded-full animate-pulse"></div>
        </motion.div>

        {/* Text Fade In */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-[#a1a1aa] font-light tracking-[0.2em] text-sm uppercase mb-8"
        >
          Kenenisa Beyan
        </motion.div>

        {/* Progress Bar Container */}
        <div className="w-48 h-[2px] bg-gray-800 rounded-full overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-[#10b981]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ type: "tween", ease: "linear", duration: 0.1 }} // Smooth update from state
          />
        </div>

        {/* Percentage Text */}
        <motion.div
          className="mt-2 text-[#10b981] text-xs font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {progress}%
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingScreen;
