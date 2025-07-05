import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import { siteData } from "../data";

const FAQ = () => (
  <div>
    <HeroSection
      headline="Frequently Asked Questions"
      subheadline="Find answers to common questions about our services in Burdwan."
      ctaPrimary="Book Service"
      ctaSecondary="Contact Us"
      ctaPrimaryLink="/book-service"
      ctaSecondaryLink="/contact"
    />
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          FAQs
        </motion.h2>
        <div className="max-w-2xl mx-auto space-y-6">
          {siteData.faq.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-blue-50 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
              <p className="text-gray-600">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default FAQ;
