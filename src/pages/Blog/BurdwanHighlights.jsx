import { motion } from "framer-motion";
import HeroSection from "../../components/HeroSection";
import Footer from "../../components/Footer";
import { siteData } from "../../data";

const BurdwanHighlights = () => {
  const post = siteData.blogPosts.find((p) => p.id === "burdwan-highlights");

  return (
    <div>
      <HeroSection
        headline={post.title}
        subheadline="Explore the best of Burdwan with One Call Solution."
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
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            {post.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-600 text-center mb-8"
          >
            {post.date}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-gray-600"
          >
            <p>{post.content}</p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BurdwanHighlights;
