import { motion } from "framer-motion";
import { Link, useParams, useNavigate } from "react-router-dom";

const DecorationServicesDetails = () => {
  const { decorationId } = useParams();
  const navigate = useNavigate();

  const items = [
    {
      id: 1,
      name: "Wedding Elegance",
      price: "₹50,000",
      availability: "Medium",
      image:
        "https://www.manyavar.com/on/demandware.static/-/Library-Sites-ManyavarSharedLibrary/default/dw045799ca/wedding%20blogs/Manyavar%20&%20Mohey%20Non-Apparel%20-%20Minimalist%20Wedding%20Decor%20Ideas%20for%20a%20Chic%20and%20Elegant%20Celebration_D.jpg",
      description: "Elegant wedding decor with floral arrangements.",
      theme: "Floral Classic",
      previewImage: "https://via.placeholder.com/300x200?text=Wedding+Preview",
    },
    {
      id: 2,
      name: "Birthday Bash",
      price: "₹20,000",
      availability: "High",
      image: "https://cheetah.cherishx.com/uploads/1627318182_original.jpg",
      description: "Vibrant birthday decor with balloons.",
      theme: "Colorful Festive",
      previewImage: "https://via.placeholder.com/300x200?text=Birthday+Preview",
    },
    {
      id: 3,
      name: "Corporate Event",
      price: "₹35,000",
      availability: "Medium",
      image:
        "https://www.showmakerz.com/event-management/lighting-design-decoration-corporate-events.webp",
      description: "Professional decor for corporate events.",
      theme: "Modern Minimalist",
      previewImage:
        "https://via.placeholder.com/300x200?text=Corporate+Preview",
    },
    {
      id: 4,
      name: "Baby Shower Bliss",
      price: "₹15,000",
      availability: "High",
      image: "https://cdn.balloondekor.com/27/1744628934532.webp",
      description: "Charming decor for baby showers.",
      theme: "Pastel Dream",
      previewImage:
        "https://via.placeholder.com/300x200?text=Baby+Shower+Preview",
    },
  ];

  const item = items.find((m) => m.id === parseInt(decorationId));
  const relatedItems = items
    .filter((m) => m.id !== parseInt(decorationId))
    .slice(0, 3);

  const handleAddToOrder = () => {
    navigate("/services/decoration-services", {
      state: { details: item.name },
    });
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: 0.7 + i * 0.15, duration: 0.5 },
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0 0 20px rgba(251, 191, 36, 0.7)",
      transition: { duration: 0.3 },
    },
  };

  if (!item) {
    return (
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="min-h-screen bg-[linear-gradient(45deg,#1e1b4b,#be185d)] text-white py-16 pt-24"
      >
        <div className="container mx-auto px-6 sm:px-8 md:px-12 text-center">
          <h2 className="text-3xl font-semibold">Decoration Not Found</h2>
          <Link
            to="/services/decoration-services"
            className="text-amber-300 hover:underline"
          >
            Back to Decorations
          </Link>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-[linear-gradient(45deg,#1e1b4b,#be185d)] text-white py-16 pt-24 overflow-hidden"
    >
      <div className="container mx-auto px-6 sm:px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-pink-500">
            {item.name}
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-white/5 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white/20 max-w-2xl mx-auto"
        >
          <img
            src={item.previewImage}
            alt={item.name}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
          <p className="text-gray-200 mb-2">Price: {item.price}</p>
          <p className="text-gray-200 mb-2">
            Availability: {item.availability}
          </p>
          <p className="text-gray-200 mb-4">{item.description}</p>
          <p className="text-gray-200 mb-4">Theme: {item.theme}</p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(251, 191, 36, 0.7)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToOrder}
            className="w-full bg-gradient-to-r from-amber-300 to-pink-500 text-white px-6 py-3 rounded-full font-semibold"
            aria-label={`Add ${item.name} to booking`}
          >
            Add to Booking
          </motion.button>
          <Link
            to="/services/decoration-services"
            className="block text-center text-amber-300 hover:underline mt-4"
            aria-label="Back to decorations"
          >
            Back to Decorations
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-semibold text-center mb-6">
            Other Decoration Themes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedItems.map((related, index) => (
              <motion.div
                key={related.id}
                variants={cardVariants}
                custom={index}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center"
              >
                <img
                  src={related.image}
                  alt={related.name}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{related.name}</h3>
                <p className="text-gray-200 mb-4">{related.price}</p>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(251, 191, 36, 0.7)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    navigate(`/services/decoration-services/${related.id}`)
                  }
                  className="bg-gradient-to-r from-amber-300 to-pink-500 text-white px-4 py-2 rounded-full font-semibold"
                  aria-label={`View details for ${related.name}`}
                >
                  View Details
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DecorationServicesDetails;
