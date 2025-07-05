import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = ({
  headline,
  subheadline,
  ctaPrimary,
  ctaSecondary,
  ctaPrimaryLink,
  ctaSecondaryLink,
}) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white pt-16"
  >
    <div className="text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        {headline}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="text-lg md:text-2xl mb-6"
      >
        {subheadline}
      </motion.p>
      <div className="flex justify-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold"
        >
          <Link to={ctaPrimaryLink}>{ctaPrimary}</Link>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold"
        >
          <a href={ctaSecondaryLink}>{ctaSecondary}</a>
        </motion.button>
      </div>
    </div>
  </motion.section>
);

export default HeroSection;
