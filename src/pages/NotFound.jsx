import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-[linear-gradient(45deg,#1e1b4b,#be185d)] text-white py-16 pt-24 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-7xl sm:text-8xl md:text-9xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-pink-500"
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl mb-8"
        >
          Oops! The page you're looking for doesn't exist.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Link
            to="/"
            className="bg-gradient-to-r from-amber-300 to-pink-500 text-white px-10 py-4 rounded-full font-semibold text-lg sm:text-xl shadow-lg hover:shadow-2xl"
            aria-label="Return to Home"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NotFound;
