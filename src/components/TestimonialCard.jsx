import { motion } from "framer-motion";

const TestimonialCard = ({ name, quote, role }) => {
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
      className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg text-white"
    >
      <p className="text-sm sm:text-base text-gray-200 mb-4 italic">
        "{quote}"
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-r from-amber-300 to-pink-500 rounded-full mr-4"></div>
        <div>
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-sm text-gray-300">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
