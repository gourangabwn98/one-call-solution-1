import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const NotFound = () => (
  <div>
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gray-100 flex items-center justify-center text-center pt-16"
    >
      <div>
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="text-6xl font-bold mb-4"
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl mb-6"
        >
          Page Not Found
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold"
        >
          <Link to="/">Return to Home</Link>
        </motion.div>
      </div>
    </motion.section>
    <Footer />
  </div>
);

export default NotFound;
