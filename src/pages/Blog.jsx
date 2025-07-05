import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import { siteData } from "../data";

const Blog = () => (
  <div>
    <HeroSection
      headline="Our Blog"
      subheadline="Stay updated with tips, news, and highlights from One Call Solution in Burdwan."
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
          Latest Posts
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-2">{post.date}</p>
              <p className="text-gray-600 mb-4">
                {post.content.substring(0, 100)}...
              </p>
              <Link
                to={`/blog/${post.id}`}
                className="text-blue-600 hover:underline"
              >
                Read More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Blog;
