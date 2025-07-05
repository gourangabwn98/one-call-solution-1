import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";
import Footer from "../components/Footer";
import { siteData } from "../data";

const Services = () => (
  <div>
    <HeroSection
      headline="Our Services: Your Needs, Our Solutions"
      subheadline="Discover the easiest way to get medicine, food, and more in Burdwan."
      ctaPrimary="Book Now"
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
          All Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
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
          How It Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.howItWorks.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 }}
              className="bg-blue-50 p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.step}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Services;
