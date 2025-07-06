import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { siteData } from "../../data";

const TravelTour = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const service = siteData.services.find(
    (s) => s.link === `/services/travel-tour`
  );
  const [formData, setFormData] = useState({
    service: service?.title || "Travel Tour",
    date: "",
    details: location.state?.details || "",
  });
  const [errors, setErrors] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [discountCode, setDiscountCode] = useState("");

  // Demo tour items
  const items = [
    {
      id: 1,
      name: "Goa Beach Tour",
      price: "₹15,000",
      availability: "High",
      image: "https://hikerwolf.com/wp-content/uploads/2020/05/goa-beaches.jpg",
      description: "Relaxing beach getaway.",
      duration: "3 Days",
    },
    {
      id: 2,
      name: "Himalayan Trek",
      price: "₹25,000",
      availability: "Medium",
      image:
        "https://res.cloudinary.com/enchanting/q_80,f_auto,c_fit,w_640,h_480/exodus-web/2021/12/trekking-poles-himalaya.jpg",
      description: "Adventure in the mountains.",
      duration: "5 Days",
    },
    {
      id: 3,
      name: "Kerala Backwaters",
      price: "₹20,000",
      availability: "High",
      image:
        "https://dwq3yv87q1b43.cloudfront.net/public/blogs/fit-in/1200x675/Blog_20241010-942624340-1728560023.jpg",
      description: "Serene houseboat experience.",
      duration: "4 Days",
    },
    {
      id: 4,
      name: "Rajasthan Heritage",
      price: "₹30,000",
      availability: "Medium",
      image:
        "https://www.tourmyindia.com/states/rajasthan/images/golden-triangle-with-amritsar-tour.jpg",
      description: "Explore royal palaces.",
      duration: "6 Days",
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
    if (!formData.date) newErrors.date = "Travel date is required";
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
      setDiscountCode("");
    } else {
      setErrors(newErrors);
    }
  };

  const handleQuickBook = (item) => {
    setSelectedItem(item);
    setFormData({ ...formData, details: item.name });
    setShowModal(true);
  };

  const handleViewDetails = (item) => {
    navigate(`/services/travel-tour/${item.id}`);
  };

  const handleShare = () => {
    setDiscountCode("SHARE10");
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
            Explore the World with Epic Tours!
          </h1>
          <motion.p
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="text-xl sm:text-2xl"
          >
            Share Your Adventure for a Discount!
          </motion.p>
        </motion.div>
        {/* Social Sharing Incentive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h3 className="text-xl font-semibold mb-4">Share & Save</h3>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(251, 191, 36, 0.7)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShare}
            className="bg-gradient-to-r from-amber-300 to-pink-500 text-white px-6 py-3 rounded-full font-semibold"
            aria-label="Share tour"
          >
            Share Tour on Social Media
          </motion.button>
          {discountCode && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-lg text-green-400"
            >
              Use code: {discountCode} for 10% off!
            </motion.p>
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
            Search Tours
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
              placeholder="Search for tours..."
              aria-label="Search tours"
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
              onClick={() => setSearchQuery("Goa")}
              className="hover:underline"
            >
              Goa
            </button>
            <button
              onClick={() => setSearchQuery("Himalayan")}
              className="hover:underline"
            >
              Himalayan
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
              No tours found.
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
            Book Your Tour
          </h3>
          <div className="mb-4">
            <label
              className="block text-sm sm:text-base text-gray-200 mb-2"
              htmlFor="date"
            >
              Travel Date
            </label>
            <motion.input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              whileFocus="focus"
              variants={inputVariants}
              className="w-full px-4 py-2 bg-white/10 border border-gray-300 rounded-lg text-white focus:outline-none"
              aria-label="Select travel date"
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
              Tour Details
            </label>
            <motion.textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              whileFocus="focus"
              variants={inputVariants}
              className="w-full px-4 py-2 bg-white/10 border border-gray-300 rounded-lg text-white focus:outline-none"
              rows="4"
              aria-label="Enter tour details"
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
            aria-label="Book Tour"
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
                      Travel Date
                    </label>
                    <motion.input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      whileFocus="focus"
                      variants={inputVariants}
                      className="w-full px-4 py-2 bg-white/10 border border-gray-300 rounded-lg text-white focus:outline-none"
                      aria-label="Select travel date"
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

export default TravelTour;
