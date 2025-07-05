import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { siteData } from "../data";

const BookService = () => (
  <div>
    <HeroSection {...siteData.order} />
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          Book Your Service
        </motion.h2>
        <div className="max-w-xl mx-auto">
          <ContactForm formFields={siteData.order.formFields} />
        </div>
      </div>
    </section>
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          Track Your Order
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-xl mx-auto"
        >
          <input
            type="text"
            placeholder="Enter Order ID"
            className="w-full p-3 border rounded-lg mb-4"
          />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1 }}
            className="h-2 bg-blue-600 rounded"
          />
          <p className="text-gray-600 mt-2">Track your order in real-time.</p>
        </motion.div>
      </div>
    </section>
    <Footer />
  </div>
);

export default BookService;
