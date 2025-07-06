import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { siteData } from "../../data";
import { toast } from "react-toastify";

const RideBooking = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const service = siteData.services.find(
    (s) => s.link === `/services/ride-booking`
  );
  const [formData, setFormData] = useState({
    service: service?.title || "Ride Booking",
    date: "",
    details: location.state?.details || "",
  });
  const [errors, setErrors] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [distance, setDistance] = useState("");
  const [priceEstimate, setPriceEstimate] = useState(null);

  // Demo ride options
  const items = [
    {
      id: 1,
      name: "Economy Car",
      basePrice: 50,
      perKm: 10,
      availability: "High",
      image:
        "https://www.avis.com/content/dam/cars/xl/2021/kia/2021-kia-rio-gt-line-5door-hatchback-gray_featured.png",
      description: "Affordable ride for daily commutes.",
    },
    {
      id: 2,
      name: "Premium Sedan",
      basePrice: 100,
      perKm: 15,
      availability: "Medium",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcQAY2dfSHiWbecyisCKDYDUtUd2rqH0yyoA&s",
      description: "Comfortable ride with extra space.",
    },
    {
      id: 3,
      name: "SUV",
      basePrice: 150,
      perKm: 20,
      availability: "Low",
      image:
        "https://quickinsure.s3.ap-south-1.amazonaws.com/uploads/static_page/assets/3e31b78c-4aa3-41d3-bc48-f90b5a0eccb7/hyundai_creta.jpg",
      description: "Spacious ride for groups.",
    },
    {
      id: 4,
      name: "Luxury Car",
      basePrice: 200,
      perKm: 25,
      availability: "Low",
      image:
        "https://www.topgear.com/sites/default/files/news-listicle/image/2023/09/LEAD.jpg",
      description: "Premium ride with luxury features.",
    },
  ];

  // Filter items
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate price estimate
  const calculatePrice = (basePrice, perKm) => {
    if (!distance || isNaN(distance) || distance <= 0) return null;
    return (basePrice + perKm * parseFloat(distance)).toFixed(2);
  };

  useEffect(() => {
    if (distance) {
      const estimates = items.map((item) => ({
        name: item.name,
        price: calculatePrice(item.basePrice, item.perKm),
      }));
      setPriceEstimate(estimates);
    } else {
      setPriceEstimate(null);
    }
  }, [distance]);

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
      toast.error("Please select data in the form.", {
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
    navigate(`/services/ride-booking/${item.id}`);
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
            Ride Your Way, Instantly!
          </h1>
          <motion.p
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="text-xl sm:text-2xl"
          >
            See Your Ride Price in Real-Time!
          </motion.p>
        </motion.div>
        {/* Dynamic Pricing Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-12 max-w-lg mx-auto"
        >
          <label
            className="block text-sm sm:text-base text-gray-200 mb-2"
            htmlFor="distance"
          >
            Enter Distance (km)
          </label>
          <motion.input
            type="number"
            id="distance"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            whileFocus="focus"
            variants={inputVariants}
            className="w-full px-4 py-2 bg-white/10 border border-gray-300 rounded-lg text-white focus:outline-none"
            placeholder="Enter distance in km"
            aria-label="Enter distance"
          />
          {priceEstimate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 bg-white/10 backdrop-blur-md rounded-lg p-4"
            >
              <h3 className="text-lg font-semibold mb-2">Price Estimates</h3>
              {priceEstimate.map((est, index) => (
                <p key={index} className="text-gray-200">
                  {est.name}: ₹{est.price || "Enter valid distance"}
                </p>
              ))}
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
            Search Rides
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
              placeholder="Search for rides..."
              aria-label="Search rides"
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
              onClick={() => setSearchQuery("Economy")}
              className="hover:underline"
            >
              Economy
            </button>
            <button
              onClick={() => setSearchQuery("Premium")}
              className="hover:underline"
            >
              Premium
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
                <p className="text-gray-200 mb-2">
                  Base Price: ₹{item.basePrice}
                </p>
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
              No rides found.
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
            Book Your Ride
          </h3>
          <div className="mb-4">
            <label
              className="block text-sm sm:text-base text-gray-200 mb-2"
              htmlFor="date"
            >
              Ride Date
            </label>
            <motion.input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              whileFocus="focus"
              variants={inputVariants}
              className="w-full px-4 py-2 bg-white/10 border border-gray-300 rounded-lg text-white focus:outline-none"
              aria-label="Select ride date"
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
              Ride Details
            </label>
            <motion.textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              whileFocus="focus"
              variants={inputVariants}
              className="w-full px-4 py-2 bg-white/10 border border-gray-300 rounded-lg text-white focus:outline-none"
              rows="4"
              aria-label="Enter ride details"
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
            aria-label="Book Ride"
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
                      Ride Date
                    </label>
                    <motion.input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      whileFocus="focus"
                      variants={inputVariants}
                      className="w-full px-4 py-2 bg-white/10 border border-gray-300 rounded-lg text-white focus:outline-none"
                      aria-label="Select ride date"
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

export default RideBooking;
