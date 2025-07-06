import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { siteData } from "../data";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
    hover: { scale: 1.1, color: "#fcd34d", transition: { duration: 0.2 } },
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      animate="visible"
      className="bg-[linear-gradient(45deg,#1e1b4b,#be185d)] text-white py-12"
    >
      <div className="container mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-pink-500">
              One Call Solution
            </h3>
            <p className="text-sm sm:text-base">
              Fast, reliable services for Burdwan residents. Your one-stop
              solution!
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {siteData.navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  variants={linkVariants}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <Link
                    to={link.path}
                    className="text-sm sm:text-base hover:underline"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <motion.a
                href="https://facebook.com"
                aria-label="Facebook"
                whileHover={{ scale: 1.2, color: "#fcd34d" }}
                className="text-2xl"
              >
                <FaFacebookF />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                aria-label="Twitter"
                whileHover={{ scale: 1.2, color: "#fcd34d" }}
                className="text-2xl"
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                aria-label="Instagram"
                whileHover={{ scale: 1.2, color: "#fcd34d" }}
                className="text-2xl"
              >
                <FaInstagram />
              </motion.a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2025 One Call Solution. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
