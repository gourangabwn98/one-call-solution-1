import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { siteData } from "../data";

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="bg-blue-600 text-white py-8"
  >
    <div className="container mx-auto px-4 text-center">
      <div className="flex justify-center space-x-4 mb-4">
        {siteData.footer.links.map((link, index) => (
          <Link key={index} to={link.path} className="hover:underline">
            {link.name}
          </Link>
        ))}
      </div>
      <p className="mb-2">
        Phone: {siteData.footer.contact.phone} | Email:{" "}
        {siteData.footer.contact.email}
      </p>
      <p>{siteData.footer.copyright}</p>
    </div>
  </motion.footer>
);

export default Footer;
