import { motion } from "framer-motion";

const ContactForm = ({ formFields }) => (
  <div className="space-y-4">
    {formFields.map((field, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        {field.type === "textarea" ? (
          <textarea
            name={field.name}
            placeholder={field.placeholder}
            className="w-full p-3 border rounded-lg"
            rows="4"
          />
        ) : field.type === "select" ? (
          <select name={field.name} className="w-full p-3 border rounded-lg">
            <option value="">{field.placeholder}</option>
            {field.options.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            className="w-full p-3 border rounded-lg"
          />
        )}
      </motion.div>
    ))}
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold"
    >
      Submit Request
    </motion.button>
  </div>
);

export default ContactForm;
