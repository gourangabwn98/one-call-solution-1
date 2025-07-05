import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import Footer from "../components/Footer";
import { siteData } from "../data";

const Home = () => (
  <div>
    <HeroSection {...siteData.hero} />
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.services.slice(0, 3).map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          Why Choose Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {siteData.whyChooseUs.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ rotateY: 180, transition: { duration: 0.5 } }}
              className="bg-blue-50 p-6 rounded-lg shadow-md text-center"
            >
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.desc}</p>
            </motion.div>
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
          What Our Customers Say
        </motion.h2>
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: [-100, 0] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="flex gap-8"
          >
            {siteData.testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Home;
