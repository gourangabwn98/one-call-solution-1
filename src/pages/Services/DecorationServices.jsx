import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { siteData } from "../../data";
import { toast } from "react-toastify";

const DecorationServices = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const service = siteData.services.find(
    (s) => s.link === `/services/decoration-services`
  );
  const [formData, setFormData] = useState({
    service: service?.title || "Decoration Services",
    date: "",
    details: location.state?.details || "",
  });
  const [errors, setErrors] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedTheme, setSelectedTheme] = useState(null);

  // Demo decoration items
  const items = [
    //  incorporating the virtual preview gallery for decoration themes, ensuring each theme has a unique image to showcase the design. The gallery is interactive, allowing users to click on a theme to see a larger preview, which enhances user engagement by providing a visual representation of the decoration setup before booking.

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

  // Filter items
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.date) newErrors.date = "Date is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      console.log("Booking submitted:", formData);
      setFormData({ ...formData, date: "", details: "" });
      setErrors({});
      setShowModal(false);
      setSelectedTheme(null);
      toast.success("Booking confirmed successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progressStyle: {
          background: "linear-gradient(to right, #fbbf24, #ec4899)",
        },
      });
    } else {
      setErrors(newErrors);
      toast.error("Please select date in the form.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progressStyle: {
          background: "linear-gradient(to right, #fbbf24, #ec4899)",
        },
      });
    }
  };

  const handleQuickBook = (item) => {
    setSelectedItem(item);
    setFormData({ ...formData, details: item.name });
    setShowModal(true);
  };

  const handleViewDetails = (item) => {
    navigate(`/services/decoration-services/${item.id}`);
  };

  const handleThemePreview = (item) => {
    setSelectedTheme(item);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      borderColor: "#fcd34d",
      transition: { duration: 0.2 },
    },
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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  const previewVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

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
          <div className="text-6xl mb-4">{service?.icon}</div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-pink-500">
            Transform Your Event with Stunning Decor!
          </h1>
          <motion.p
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="text-xl sm:text-2xl"
          >
            Preview Your Dream Theme Before You Book!
          </motion.p>
        </motion.div>
        {/* Virtual Preview Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold mb-4 text-center">
            Preview Decoration Themes
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {items.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleThemePreview(item)}
                className="bg-white/10 backdrop-blur-md rounded-lg p-2"
                aria-label={`Preview ${item.theme}`}
              >
                <img
                  src={item.image}
                  alt={item.theme}
                  className="w-full h-24 object-cover rounded-md"
                />
                <p className="text-sm mt-2">{item.theme}</p>
              </motion.button>
            ))}
          </div>
          {selectedTheme && (
            <motion.div
              variants={previewVariants}
              initial="hidden"
              animate="visible"
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center"
            >
              <img
                src={selectedTheme.previewImage}
                alt={selectedTheme.theme}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg font-semibold">{selectedTheme.theme}</h4>
              <p className="text-gray-200">{selectedTheme.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleQuickBook(selectedTheme)}
                className="mt-4 bg-gradient-to-r from-amber-300 to-pink-500 text-white px-4 py-2 rounded-full font-semibold"
                aria-label={`Book ${selectedTheme.name}`}
              >
                Book This Theme
              </motion.button>
            </motion.div>
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mb-12 max-w-lg mx-auto relative"
        >
          <label
            className="block text-sm sm:text-base text-gray-200 mb-2"
            htmlFor="search"
          >
            Search Decorations
          </label>
          <div className="relative">
            <motion.input
              type="text"
              id="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              whileFocus="focus"
              variants={inputVariants}
              className="w-full px-4 py-2 pl-10 bg-white/10 border border-gray-300 rounded-lg text-white focus:outline-none"
              placeholder="Search for decorations..."
              aria-label="Search decorations"
            />
            <svg
              className="absolute left-3 top-2.5 h-5 w-5 text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div className="flex gap-2 mt-2 text-sm text-gray-300">
            <span>Suggestions:</span>
            <button
              onClick={() => setSearchQuery("Wedding")}
              className="hover:underline"
            >
              Wedding
            </button>
            <button
              onClick={() => setSearchQuery("Birthday")}
              className="hover:underline"
            >
              Birthday
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                custom={index}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center relative"
              >
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-200 mb-2">{item.price}</p>
                <p className="text-sm text-gray-400 mb-4">
                  Availability: {item.availability}
                </p>
                <div className="flex gap-2 justify-center">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(251, 191, 36, 0.7)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleQuickBook(item)}
                    className="bg-gradient-to-r from-amber-300 to-pink-500 text-white px-4 py-2 rounded-full font-semibold"
                    aria-label={`Quick book ${item.name}`}
                  >
                    Quick Book
                  </motion.button>
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(251, 191, 36, 0.7)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleViewDetails(item)}
                    className="bg-transparent border border-amber-300 text-amber-300 px-4 py-2 rounded-full font-semibold"
                    aria-label={`View details for ${item.name}`}
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-200">
              No decorations found.
            </p>
          )}
        </motion.div>
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="bg-white/5 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white/20 max-w-lg mx-auto"
          onSubmit={handleSubmit}
        >
          <h3 className="text-2xl font-semibold text-center mb-6">
            Book Decoration Services
          </h3>
          <div className="mb-4">
            <label
              className="block text-sm sm:text-base text-gray-200 mb-2"
              htmlFor="date"
            >
              Event Date
            </label>
            <motion.input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              whileFocus="focus"
              variants={inputVariants}
              className="w-full px-4 py-2 bg-white/10 border border-gray-300 rounded-lg text-white focus:outline-none"
              aria-label="Select event date"
            />
            {errors.date && (
              <p className="text-red-400 text-sm mt-1">{errors.date}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-sm sm:text-base text-gray-200 mb-2"
              htmlFor="details"
            >
              Decoration Details
            </label>
            <motion.textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              whileFocus="focus"
              variants={inputVariants}
              className="w-full px-4 py-2 bg-white/10 border border-gray-300 rounded-lg text-white focus:outline-none"
              rows="4"
              aria-label="Enter decoration details"
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(251, 191, 36, 0.7)",
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-amber-300 to-pink-500 text-white px-6 py-3 rounded-full font-semibold"
            aria-label="Book Decoration Services"
          >
            Book Now
          </motion.button>
        </motion.form>
        <AnimatePresence>
          {showModal && (
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 max-w-md w-full">
                <h3 className="text-2xl font-semibold mb-4">
                  Quick Book: {selectedItem?.name}
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-sm text-gray-200 mb-2"
                      htmlFor="date"
                    >
                      Event Date
                    </label>
                    <motion.input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      whileFocus="focus"
                      variants={inputVariants}
                      className="w-full px-4 py-2 bg-white/10 border border-gray-300 rounded-lg text-white focus:outline-none"
                      aria-label="Select event date"
                    />
                    {errors.date && (
                      <p className="text-red-400 text-sm mt-1">{errors.date}</p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm text-gray-200 mb-2"
                      htmlFor="details"
                    >
                      Additional Details
                    </label>
                    <motion.textarea
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      whileFocus="focus"
                      variants={inputVariants}
                      className="w-full px-4 py-2 bg-white/10 border border-gray-300 rounded-lg text-white focus:outline-none"
                      rows="3"
                      aria-label="Enter additional details"
                    />
                  </div>
                  <div className="flex gap-4">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-amber-300 to-pink-500 text-white px-4 py-2 rounded-full font-semibold"
                      aria-label="Confirm quick book"
                    >
                      Confirm Booking
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={() => setShowModal(false)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-transparent border border-gray-300 text-gray-300 px-4 py-2 rounded-full font-semibold"
                      aria-label="Cancel quick book"
                    >
                      Cancel
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default DecorationServices;
