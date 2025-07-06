import { useState } from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I book a service?",
      answer:
        "Visit our Book Service page, select your desired service, choose a date, and submit your details. We’ll handle the rest!",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We currently operate in Burdwan and surrounding areas. Contact us to confirm service availability in your location.",
    },
    {
      question: "How fast is your delivery?",
      answer:
        "Our delivery services aim to reach you within hours, depending on the service and location.",
    },
    {
      question: "Can I cancel a booking?",
      answer:
        "Yes, you can cancel a booking through our website or by contacting our support team.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const faqVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.7 + i * 0.2, duration: 0.5 },
    }),
    open: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
    closed: { height: 0, opacity: 0, transition: { duration: 0.3 } },
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
          Frequently Asked Questions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl text-center mb-12 max-w-3xl mx-auto"
        >
          Find answers to common questions about our services.
        </motion.p>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={faqVariants}
              custom={index}
              initial="hidden"
              animate="visible"
              className="bg-white/5 backdrop-blur-md rounded-xl p-4 mb-4 border border-white/20"
            >
              <button
                className="w-full text-left text-lg sm:text-xl font-semibold flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                {faq.question}
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              <motion.div
                id={`faq-answer-${index}`}
                variants={faqVariants}
                animate={openIndex === index ? "open" : "closed"}
                className="overflow-hidden text-sm sm:text-base text-gray-200 mt-2"
              >
                {faq.answer}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQ;
