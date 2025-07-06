import { motion } from "framer-motion";

const Loader = () => {
  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: { duration: 1, repeat: Infinity, ease: "linear" },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-[linear-gradient(45deg,#1e1b4b,#be185d)] z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        variants={spinnerVariants}
        animate="animate"
        className="w-16 h-16 border-4 border-t-amber-300 border-r-pink-500 border-b-transparent border-l-transparent rounded-full"
      />
    </motion.div>
  );
};

export default Loader;
