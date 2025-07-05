import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, desc, icon, index, cta, link }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2, duration: 0.5 }}
    whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
    className="bg-white p-6 rounded-lg shadow-md text-center"
  >
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{desc}</p>
    {cta && link && (
      <Link
        to={link}
        className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold"
      >
        {cta}
      </Link>
    )}
  </motion.div>
);

export default ServiceCard;
