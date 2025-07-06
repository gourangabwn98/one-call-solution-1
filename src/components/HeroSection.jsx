import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -50]);
  const y2 = useTransform(scrollY, [0, 500], [0, 50]);

  const sectionVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  const headlineVariants = {
    hidden: { opacity: 0, scale: 0.7, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { delay: 0.4, duration: 0.8 },
    },
  };

  const subheadlineVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.6, duration: 0.7 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.8 + i * 0.2, duration: 0.6, type: "spring" },
    }),
    hover: {
      scale: 1.12,
      boxShadow: "0 0 20px rgba(251, 191, 36, 0.8)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.92 },
  };

  const particleVariants = {
    float: (i) => ({
      y: [0, -15, 0],
      x: [0, 10, 0],
      scale: [1, 1.1, 1],
      opacity: [0.2, 0.4, 0.2],
      transition: {
        duration: 4 + i * 0.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    }),
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      className="relative min-h-screen bg-[linear-gradient(45deg,#1e1b4b,#be185d)] flex items-center justify-center text-white pt-24 pb-12 overflow-hidden"
      aria-label="Hero section for One Call Solution"
    >
      <motion.div
        variants={particleVariants}
        animate="float"
        custom={0}
        style={{ y: y1 }}
        className="absolute top-10 left-5 sm:left-10 text-3xl sm:text-4xl opacity-20"
      >
        📞
      </motion.div>
      <motion.div
        variants={particleVariants}
        animate="float"
        custom={1}
        style={{ y: y2 }}
        className="absolute top-20 right-5 sm:right-10 text-3xl sm:text-4xl opacity-20"
      >
        🛒
      </motion.div>
      <motion.div
        variants={particleVariants}
        animate="float"
        custom={2}
        style={{ y: y1 }}
        className="absolute bottom-20 left-10 sm:left-20 text-3xl sm:text-4xl opacity-20"
      >
        🩺
      </motion.div>
      <motion.div
        variants={particleVariants}
        animate="float"
        custom={3}
        style={{ y: y2 }}
        className="absolute bottom-10 right-10 sm:right-20 text-3xl sm:text-4xl opacity-20"
      >
        🍔
      </motion.div>
      <div className="relative z-10 text-center px-6 sm:px-8 md:px-12 bg-white/5 backdrop-blur-md rounded-2xl py-12 sm:py-16 max-w-5xl mx-auto border border-white/20 shadow-2xl">
        <motion.h1
          variants={headlineVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-pink-500 tracking-tight"
        >
          Fast, Reliable Services in Burdwan
        </motion.h1>
        <motion.p
          variants={subheadlineVariants}
          className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-medium"
        >
          Order medicine, food, groceries, and more with one call!
        </motion.p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <motion.button
            variants={buttonVariants}
            custom={0}
            whileHover="hover"
            whileTap="tap"
            className="bg-gradient-to-r from-amber-300 to-pink-500 text-white px-8 sm:px-10 py-4 rounded-full font-semibold text-lg sm:text-xl shadow-lg hover:shadow-2xl"
            aria-label="Order Now"
          >
            <Link to="/book-service">Order Now</Link>
          </motion.button>
          <motion.button
            variants={buttonVariants}
            custom={1}
            whileHover="hover"
            whileTap="tap"
            className="bg-transparent border-2 border-amber-300 text-amber-300 px-8 sm:px-10 py-4 rounded-full font-semibold text-lg sm:text-xl hover:bg-amber-300 hover:text-indigo-900"
            aria-label="Explore Services"
          >
            <Link to="/services">Explore Services</Link>
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
