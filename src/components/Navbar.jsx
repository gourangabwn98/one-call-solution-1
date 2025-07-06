import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { siteData } from "../data";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -10 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { delay: 0.2, duration: 0.5 },
    },
    hover: { scale: 1.05, rotate: 5, transition: { duration: 0.3 } },
  };

  const linkVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
    hover: { scale: 1.1, color: "#fcd34d", transition: { duration: 0.2 } },
  };

  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  const lineVariants = {
    closed: { rotate: 0, y: 0, backgroundColor: "#ffffff" },
    open: (i) => ({
      rotate: i === 0 ? 45 : -45,
      y: i === 0 ? 8 : -8,
      backgroundColor: "#fcd34d",
      transition: { duration: 0.3 },
    }),
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="bg-[linear-gradient(45deg,#1e1b4b,#be185d)] text-white  fixed w-full z-20 shadow-xl"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          variants={logoVariants}
          whileHover="hover"
          className="flex items-center space-x-2"
        >
          <Link
            to="/"
            className="flex items-center"
            aria-label="One Call Solution Home"
          >
            <span className="text-3xl text-amber-300">📞</span>
            <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-pink-500">
              One Call Solution
            </span>
          </Link>
        </motion.div>
        <div className="hidden md:flex">
          <div className="p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
            <div className="flex space-x-6">
              {siteData.navLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  className={({ isActive }) =>
                    `font-medium px-3 py-2 rounded-md ${
                      isActive
                        ? "text-amber-300 underline"
                        : "hover:bg-white/20"
                    }`
                  }
                  aria-current={({ isActive }) =>
                    isActive ? "page" : undefined
                  }
                >
                  <motion.span
                    custom={index}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                  >
                    {link.name}
                  </motion.span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
        <button
          className="md:hidden flex flex-col space-y-1.5 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <motion.span
            className="w-6 h-0.5"
            animate={isMenuOpen ? ["open", { custom: 0 }] : "closed"}
            variants={lineVariants}
          />
          <motion.span
            className="w-6 h-0.5"
            animate={
              isMenuOpen
                ? { opacity: 0 }
                : { opacity: 1, backgroundColor: "#ffffff" }
            }
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="w-6 h-0.5"
            animate={isMenuOpen ? ["open", { custom: 1 }] : "closed"}
            variants={lineVariants}
          />
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:hidden bg-[linear-gradient(45deg,#1e1b4b,#be185d)] text-white py-6"
          >
            <div className="container mx-auto px-4">
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                <div className="flex flex-col space-y-4">
                  {siteData.navLinks.map((link, index) => (
                    <NavLink
                      key={index}
                      to={link.path}
                      className={({ isActive }) =>
                        `text-lg font-medium px-3 py-2 rounded-md ${
                          isActive
                            ? "text-amber-300 underline"
                            : "hover:bg-white/20"
                        }`
                      }
                      onClick={toggleMenu}
                      aria-current={({ isActive }) =>
                        isActive ? "page" : undefined
                      }
                    >
                      <motion.span
                        custom={index}
                        variants={linkVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                      >
                        {link.name}
                      </motion.span>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
