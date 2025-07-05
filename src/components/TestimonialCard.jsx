import { motion } from "framer-motion";

const TestimonialCard = ({ quote, author }) => (
  <motion.div className="bg-white p-6 rounded-lg shadow-md min-w-[300px] mx-4">
    <p className="text-gray-600 italic">"{quote}"</p>
    <p className="text-right font-semibold mt-2">– {author}</p>
  </motion.div>
);

export default TestimonialCard;
