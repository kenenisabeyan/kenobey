import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 p-3 bg-[#06890a] rounded-full shadow-lg z-40 cursor-pointer hover:bg-[#4dc247] transition duration-300 ease-in-out"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Scroll to top"
    >
      <FaArrowUp className="text-white text-xl" />
    </motion.button>
  );
};

export default ScrollToTop;
