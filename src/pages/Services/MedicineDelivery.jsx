import { motion } from "framer-motion";
import HeroSection from "../../components/HeroSection";
import ServiceCard from "../../components/ServiceCard";
import Footer from "../../components/Footer";
import { siteData } from "../../data";

const MedicineDelivery = () => {
  const service = siteData.services.find(
    (s) => s.title === "Medicine Delivery"
  );

  return (
    <div>
      <HeroSection
        headline={service.title}
        subheadline={service.desc}
        ctaPrimary={service.cta}
        ctaSecondary="Contact Us"
        ctaPrimaryLink={service.link}
        ctaSecondaryLink="/contact"
      />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-4xl font-bold text-center mb-8"
          >
            Why Choose Our Medicine Delivery?
          </motion.h2>
          <div className="max-w-2xl mx-auto text-gray-600">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              We partner with trusted pharmacies in Burdwan to ensure your
              prescriptions and over-the-counter medicines are delivered safely
              and quickly. Upload your prescription, track your order, and get
              delivery within hours.
            </motion.p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <ServiceCard {...service} index={0} />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MedicineDelivery;
