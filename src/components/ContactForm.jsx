import { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      borderColor: "#fcd34d",
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white/5 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white/20 max-w-lg mx-auto"
      onSubmit={handleSubmit}
    >
      <h3 className="text-2xl font-semibold text-center mb-6 text-white">
        Get in Touch
      </h3>
      <div className="mb-4">
        <label
          className="block text-sm sm:text-base text-gray-200 mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <motion.input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          whileFocus="focus"
          variants={inputVariants}
          className="w-full px-4 py-2 bg-white/10 border border-gray-300 rounded-lg text-white focus:outline-none"
        />
        {errors.name && (
          <p className="text-red-400 text-sm mt-1">{errors.name}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block text-sm sm:text-base text-gray-200 mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <motion.input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          whileFocus="focus"
          variants={inputVariants}
          className="w-full px-4 py-2 bg-white/10 border border-gray-300 rounded-lg text-white focus:outline-none"
        />
        {errors.email && (
          <p className="text-red-400 text-sm mt-1">{errors.email}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block text-sm sm:text-base text-gray-200 mb-2"
          htmlFor="message"
        >
          Message
        </label>
        <motion.textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          whileFocus="focus"
          variants={inputVariants}
          className="w-full px-4 py-2 bg-white/10 border border-gray-300 rounded-lg text-white focus:outline-none"
          rows="4"
        />
        {errors.message && (
          <p className="text-red-400 text-sm mt-1">{errors.message}</p>
        )}
      </div>
      <motion.button
        type="submit"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 15px rgba(251, 191, 36, 0.7)",
        }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-gradient-to-r from-amber-300 to-pink-500 text-white px-6 py-3 rounded-full font-semibold"
        aria-label="Submit contact form"
      >
        Send Message
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;
