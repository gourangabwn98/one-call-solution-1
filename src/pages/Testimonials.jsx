import { motion } from "framer-motion";
import TestimonialCard from "../components/TestimonialCard";
import { siteData } from "../data";

const Testimonials = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: 0.7 + i * 0.2, duration: 0.5 },
    }),
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
          What Our Customers Say
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl text-center mb-12 max-w-3xl mx-auto"
        >
          Hear from our happy customers about their experience with One Call
          Solution.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {siteData.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              custom={index}
              initial="hidden"
              animate="visible"
            >
              <TestimonialCard
                name={testimonial.name}
                quote={testimonial.quote}
                role={testimonial.role}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
