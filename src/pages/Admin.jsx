import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

const Admin = () => (
  <div>
    <HeroSection
      headline="Admin Dashboard"
      subheadline="Manage services, orders, and users for One Call Solution."
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
          Admin Panel
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-gray-600 text-center"
        >
          <p>
            Placeholder for admin dashboard. Manage orders, services, and
            customer data securely.
          </p>
        </motion.div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Admin;
