import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { siteData } from "../data";

const Navbar = () => (
  <motion.nav
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="bg-blue-600 text-white py-4 fixed w-full z-10"
  >
    <div className="container mx-auto px-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">One Call Solution</h1>
      <div className="space-x-4">
        {siteData.navLinks.map((link, index) => (
          <Link key={index} to={link.path} className="hover:underline">
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
