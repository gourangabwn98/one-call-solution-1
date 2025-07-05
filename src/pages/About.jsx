import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import { siteData } from "../data";

const About = () => (
  <div>
    <HeroSection
      headline="About One Call Solution"
      subheadline="Burdwan’s trusted partner for all your service needs."
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
          Our Story
        </motion.h2>
        <motion.p
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          {siteData.about.story}
        </motion.p>
      </div>
    </section>
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          Our Mission
        </motion.h2>
        <motion.p
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          {siteData.about.mission}
        </motion.p>
      </div>
    </section>
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.about.team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ rotateY: 180, transition: { duration: 0.5 } }}
              className="bg-blue-50 p-6 rounded-lg shadow-md text-center"
            >
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.role}</p>
              <p className="text-gray-600">{member.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default About;
