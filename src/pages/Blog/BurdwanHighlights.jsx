import { motion } from "framer-motion";

const BurdwanHighlights = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-[linear-gradient(45deg,#1e1b4b,#be185d)] text-white py-16 pt-24"
    >
      <div className="container mx-auto px-6 sm:px-8 md:px-12">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-pink-500"
        >
          Burdwan Highlights
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl text-center mb-12 max-w-3xl mx-auto"
        >
          Discover the vibrant culture and attractions of Burdwan with our
          guide.
        </motion.p>
        <div className="prose prose-invert max-w-3xl mx-auto text-gray-200">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4">1. Curzon Gate</h2>
            <p>
              Visit the iconic Curzon Gate, a historical landmark symbolizing
              Burdwan’s rich heritage.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">
              2. 108 Shiv Mandir
            </h2>
            <p>
              Explore the serene and spiritual 108 Shiv Mandir, a unique temple
              complex in Burdwan.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">
              3. Meghnad Saha Planetarium
            </h2>
            <p>
              Enjoy a star-gazing experience at the Meghnad Saha Planetarium,
              perfect for all ages.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default BurdwanHighlights;
