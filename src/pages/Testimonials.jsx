import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import TestimonialCard from "../components/TestimonialCard";
import Footer from "../components/Footer";
import { siteData } from "../data";

const Testimonials = () => (
  <div>
    <HeroSection
      headline="What Our Customers Say"
      subheadline="Hear from Burdwan residents about their experience with One Call Solution."
      ctaPrimary="Book Service"
      ctaSecondary="Contact Us"
      ctaPrimaryLink="/book-service"
      ctaSecondaryLink="/contact"
    />
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteData.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Testimonials;
