import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { siteData } from "../data";

const Contact = () => (
  <div>
    <HeroSection {...siteData.contact} />
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-3xl font-bold mb-4"
            >
              Contact Form
            </motion.h2>
            <ContactForm formFields={siteData.contact.formFields} />
          </div>
          <div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-3xl font-bold mb-4"
            >
              Contact Info
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="space-y-4"
            >
              <p className="text-gray-600">
                Phone: {siteData.contact.info.phone}
              </p>
              <p className="text-gray-600">
                WhatsApp: {siteData.contact.info.whatsapp}
              </p>
              <p className="text-gray-600">
                Email: {siteData.contact.info.email}
              </p>
              <p className="text-gray-600">
                Address: {siteData.contact.info.address}
              </p>
              <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <p>Google Map of Burdwan (Placeholder)</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Contact;
