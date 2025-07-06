import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import { siteData } from "../data";

const Blog = () => {
  // Sample blog posts (update siteData.blogPosts in data.js with actual data)
  const blogPosts = siteData.blogPosts || [
    {
      id: "tips-for-seniors",
      title: "Tips for Seniors",
      date: "June 20, 2025",
      content:
        "Learn how to stay healthy and safe as a senior with our expert advice...",
    },
    {
      id: "emergency-numbers",
      title: "Emergency Numbers in Burdwan",
      date: "June 15, 2025",
      content:
        "A comprehensive list of emergency contacts for Burdwan residents...",
    },
    {
      id: "burdwan-highlights",
      title: "Highlights of Burdwan",
      date: "June 10, 2025",
      content: "Explore the top attractions and hidden gems in Burdwan...",
    },
  ];

  // Featured posts (specific IDs to highlight)
  const featuredPosts = blogPosts.filter(
    (post) =>
      post.id === "tips-for-seniors" ||
      post.id === "emergency-numbers" ||
      post.id === "burdwan-highlights"
  );

  // Debug: Log featuredPosts to check if data is present
  console.log("Featured Posts:", featuredPosts);

  // Sample categories (can be extended in siteData)
  const categories = ["Health", "Emergency", "Travel", "Lifestyle"];

  // Current date and time
  const currentDate = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour12: true,
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }); // e.g., "Sunday, July 06, 2025, 04:48 PM IST"

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
    hover: { scale: 1.05, boxShadow: "0 0 20px rgba(251, 191, 36, 0.7)" },
  };

  const featuredVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.3, duration: 0.6 },
    }),
    hover: { scale: 1.1, boxShadow: "0 0 25px rgba(251, 191, 36, 0.8)" },
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(45deg,#1e1b4b,#be185d)] text-white">
      <HeroSection
        headline="Our Blog"
        subheadline="Stay updated with tips, news, and highlights from One Call Solution in Burdwan."
        ctaPrimary="Book Service"
        ctaSecondary="Contact Us"
        ctaPrimaryLink="/book-service"
        ctaSecondaryLink="/contact"
      />
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-8">
          {/* Featured Posts Section */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            className="w-full"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-3xl md:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-pink-500"
            >
              Featured Posts
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {featuredPosts.length > 0 ? (
                featuredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    custom={index}
                    variants={featuredVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 overflow-hidden relative"
                  >
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 text-amber-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-200 mb-2 text-sm">{post.date}</p>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.content}
                    </p>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-block bg-gradient-to-r from-amber-300 to-pink-500 text-white px-4 py-2 rounded-full font-medium hover:bg-gradient-to-r hover:from-amber-400 hover:to-pink-600 transition duration-300"
                    >
                      Read Now
                    </Link>
                    <div className="absolute top-2 right-2 text-3xl">📖</div>
                  </motion.div>
                ))
              ) : (
                <p className="text-center text-gray-400">
                  No featured posts available.
                </p>
              )}
            </div>
          </motion.div>

          {/* Main Content and Sidebar */}
          <div className="w-full lg:flex lg:flex-row gap-8">
            {/* Main Content (All Posts) */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              className="lg:w-2/3"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-3xl md:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-pink-500"
              >
                All Posts
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20"
                  >
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-200 mb-2">{post.date}</p>
                    <p className="text-gray-300 mb-4">
                      {post.content.substring(0, 100)}...
                    </p>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-amber-300 hover:underline font-medium"
                    >
                      Read More
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-center text-gray-400 mt-8"
              >
                Last updated: {currentDate}
              </motion.p>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              className="lg:w-1/3"
            >
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 sticky top-20">
                <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-pink-500">
                  Categories
                </h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        to={`/blog/category/${category.toLowerCase()}`}
                        className="text-gray-200 hover:text-amber-300"
                      >
                        {category}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                <h3 className="text-xl font-semibold mt-6 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-pink-500">
                  Recent Posts
                </h3>
                <ul className="space-y-2">
                  {blogPosts.slice(0, 3).map((post, index) => (
                    <motion.li
                      key={post.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-gray-200 hover:text-amber-300"
                      >
                        {post.title}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
