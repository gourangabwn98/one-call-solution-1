import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, description, icon, link }) => {
  const cardVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 0 20px rgba(251, 191, 36, 0.7)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg text-white text-center"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl sm:text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-sm sm:text-base text-gray-200 mb-4">{description}</p>
      <Link
        to={link}
        className="inline-block bg-gradient-to-r from-amber-300 to-pink-500 text-white px-6 py-2 rounded-full font-medium hover:bg-gradient-to-r hover:from-pink-500 hover:to-amber-300"
        aria-label={`Learn more about ${title}`}
      >
        Learn More
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
