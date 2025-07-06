import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import { siteData } from "../data";

const Services = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -50]);
  const y2 = useTransform(scrollY, [0, 500], [0, 50]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  const headlineVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { delay: 0.3, duration: 0.7 },
    },
  };

  const subheadlineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.6 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: 0.7 + i * 0.15, duration: 0.5 },
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0 0 20px rgba(251, 191, 36, 0.7)",
      transition: { duration: 0.3 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1.2, duration: 0.6, type: "spring" },
    },
    hover: {
      scale: 1.1,
      boxShadow: "0 0 25px rgba(251, 191, 36, 0.8)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  const particleVariants = {
    float: (i) => ({
      y: [0, -20, 0],
      x: [0, 15, 0],
      scale: [1, 1.15, 1],
      opacity: [0.2, 0.4, 0.2],
      transition: {
        duration: 5 + i * 0.7,
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
      className="relative bg-[linear-gradient(45deg,#1e1b4b,#be185d)] py-16 sm:py-20 md:py-24 overflow-hidden"
      aria-label="Services section for One Call Solution"
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
      <div className="container mx-auto px-6 sm:px-8 md:px-12">
        <motion.h1
          variants={headlineVariants}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-pink-500 tracking-tight"
        >
          Our Services in Burdwan
        </motion.h1>
        <motion.p
          variants={subheadlineVariants}
          className="text-lg sm:text-xl md:text-2xl text-center text-white mb-12 max-w-3xl mx-auto font-medium"
        >
          Discover fast, reliable solutions for all your needs!
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {siteData.services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            </motion.div>
          ))}
        </div>
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          className="mt-12 text-center"
        >
          <Link
            to="/book-service"
            className="bg-gradient-to-r from-amber-300 to-pink-500 text-white px-10 py-4 rounded-full font-semibold text-lg sm:text-xl shadow-lg hover:shadow-2xl"
            aria-label="Book a service now"
          >
            Book Now
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
