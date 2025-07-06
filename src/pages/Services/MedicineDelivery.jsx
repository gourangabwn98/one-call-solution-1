import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useParams, useNavigate } from "react-router-dom";
import { siteData } from "../../data";
import paracetamol from "../../assets/Images/Paracetamol-500-mg-Tablet_1.webp";

const MedicineDelivery = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = siteData.services.find(
    (s) => s.link === `/services/medicine-delivery`
  );
  const [formData, setFormData] = useState({
    service: service?.title || "Medicine Delivery",
    date: "",
    details: "",
  });
  const [errors, setErrors] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds

  // Demo medicines data
  const medicines = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      price: "₹50",
      discount: "10% OFF",
      stock: "High",
      image: paracetamol,
      description: "Relieves mild to moderate pain and fever.",
    },
    {
      id: 2,
      name: "Ibuprofen 400mg",
      price: "₹80",
      discount: "5% OFF",
      stock: "Low",
      image:
        "https://www.ashcroftpharmacy.co.uk/uploads/images/products/large/ashcroft-pharmacy-ibuprofen-400mg-tablets-1740783905Ibuprofen-400mg-Tablets.png",
      description: "Anti-inflammatory for pain and swelling.",
    },
    {
      id: 3,
      name: "Amoxicillin 250mg",
      price: "₹120",
      discount: "",
      stock: "Medium",
      image:
        "https://assets.truemeds.in/Images/ProductImage/TM-CACR1-000259/AMOXIL-250-MG-CAPSULE-10_1.webp",
      description: "Antibiotic for bacterial infections.",
    },
    {
      id: 4,
      name: "Cetirizine 10mg",
      price: "₹40",
      discount: "15% OFF",
      stock: "High",
      image:
        "https://i0.wp.com/chemist2customer.com/wp-content/uploads/Ceterizine-dihydrochloride.png",
      description: "Relieves allergy symptoms.",
    },
    {
      id: 5,
      name: "Aspirin 75mg",
      price: "₹30",
      discount: "",
      stock: "Low",
      image:
        "https://budgetpharmacyfiji.com/wp-content/uploads/2025/05/ASPIRIN-TABS-75MG-28S-MEDREICH-1.png",
      description: "For heart health and pain relief.",
    },
    {
      id: 6,
      name: "Metformin 500mg",
      price: "₹60",
      discount: "10% OFF",
      stock: "Medium",
      image:
        "https://www.sanifyhealthcare.com/wp-content/uploads/2020/12/Saiumet-500-Tablets-1.jpg",
      description: "Manages type 2 diabetes.",
    },
  ];

  // Demo testimonials
  const testimonials = [
    {
      name: "Anita Roy",
      quote: "Super fast delivery! Got my medicines in hours.",
      rating: 5,
    },
    { name: "Rahul Das", quote: "Easy to order and great prices!", rating: 4 },
  ];

  // Filter medicines
  const filteredMedicines = medicines.filter((medicine) =>
    medicine.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 1800));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

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
    } else {
      setErrors(newErrors);
    }
  };

  const handleQuickOrder = (medicine) => {
    setSelectedMedicine(medicine);
    setFormData({ ...formData, details: medicine.name });
    setShowModal(true);
  };

  const handleViewDetails = (medicine) => {
    navigate(`/services/medicine-delivery/${medicine.id}`);
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
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="text-6xl mb-4">{service?.icon}</div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-pink-500">
            Fast, Reliable Medicine Delivery!
          </h1>
          <motion.p
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="text-xl sm:text-2xl"
          >
            Order in Seconds! Same-Day Delivery Available!
          </motion.p>
        </motion.div>
        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex justify-center gap-4 mb-12"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2">
            Trusted by 10,000+ Customers
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2">
            Secure Payments
          </div>
        </motion.div>
        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center mb-12 text-lg sm:text-xl bg-red-500/20 rounded-lg py-2"
        >
          Order in the next {Math.floor(timeLeft / 60)}:
          {(timeLeft % 60).toString().padStart(2, "0")} for same-day delivery!
        </motion.div>
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mb-12 max-w-lg mx-auto relative"
        >
          <label
            className="block text-sm sm:text-base text-gray-200 mb-2"
            htmlFor="search"
          >
            Search Medicines
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
              placeholder="Search for medicines..."
              aria-label="Search medicines"
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
              onClick={() => setSearchQuery("Paracetamol")}
              className="hover:underline"
            >
              Paracetamol
            </button>
            <button
              onClick={() => setSearchQuery("Ibuprofen")}
              className="hover:underline"
            >
              Ibuprofen
            </button>
          </div>
        </motion.div>
        {/* Medicine Catalog */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {filteredMedicines.length > 0 ? (
            filteredMedicines.map((medicine, index) => (
              <motion.div
                key={medicine.id}
                variants={cardVariants}
                custom={index}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center relative"
              >
                {medicine.discount && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {medicine.discount}
                  </div>
                )}
                <motion.img
                  src={medicine.image}
                  alt={medicine.name}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <h3 className="text-xl font-semibold mb-2">{medicine.name}</h3>
                <p className="text-gray-200 mb-2">{medicine.price}</p>
                <p className="text-sm text-gray-400 mb-4">
                  Stock: {medicine.stock}
                </p>
                <div className="flex gap-2 justify-center">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(251, 191, 36, 0.7)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleQuickOrder(medicine)}
                    className="bg-gradient-to-r from-amber-300 to-pink-500 text-white px-4 py-2 rounded-full font-semibold"
                    aria-label={`Quick order ${medicine.name}`}
                  >
                    Quick Order
                  </motion.button>
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(251, 191, 36, 0.7)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleViewDetails(medicine)}
                    className="bg-transparent border border-amber-300 text-amber-300 px-4 py-2 rounded-full font-semibold"
                    aria-label={`View details for ${medicine.name}`}
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-200">
              No medicines found.
            </p>
          )}
        </motion.div>
        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-center mb-6">
            What Our Customers Say
          </h3>
          <motion.div
            animate={{ x: [0, -100, 0] }}
            transition={{ repeat: Infinity, duration: 10 }}
            className="flex gap-4 overflow-hidden"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-lg p-4 min-w-[300px]"
              >
                <p className="text-gray-200 mb-2">"{testimonial.quote}"</p>
                <p className="text-sm font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-400">
                  {"⭐".repeat(testimonial.rating)}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
        {/* Booking Form */}
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="bg-white/5 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white/20 max-w-lg mx-auto"
          onSubmit={handleSubmit}
        >
          <h3 className="text-2xl font-semibold text-center mb-6">
            Order Medicine Delivery
          </h3>
          <div className="mb-4">
            <label
              className="block text-sm sm:text-base text-gray-200 mb-2"
              htmlFor="date"
            >
              Delivery Date
            </label>
            <motion.input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              whileFocus="focus"
              variants={inputVariants}
              className="w-full px-4 py-2 bg-white/10 border border-gray-300 rounded-lg text-white focus:outline-none"
              aria-label="Select delivery date"
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
              Medicine or Prescription Details
            </label>
            <motion.textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              whileFocus="focus"
              variants={inputVariants}
              className="w-full px-4 py-2 bg-white/10 border border-gray-300 rounded-lg text-white focus:outline-none"
              rows="4"
              aria-label="Enter medicine or prescription details"
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
            aria-label="Order Medicine Delivery"
          >
            Order Now
          </motion.button>
        </motion.form>
        {/* Quick Order Modal */}
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
                  Quick Order: {selectedMedicine?.name}
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-sm text-gray-200 mb-2"
                      htmlFor="date"
                    >
                      Delivery Date
                    </label>
                    <motion.input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      whileFocus="focus"
                      variants={inputVariants}
                      className="w-full px-4 py-2 bg-white/10 border border-gray-300 rounded-lg text-white focus:outline-none"
                      aria-label="Select delivery date"
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
                      aria-label="Confirm quick order"
                    >
                      Confirm Order
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={() => setShowModal(false)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-transparent border border-gray-300 text-gray-300 px-4 py-2 rounded-full font-semibold"
                      aria-label="Cancel quick order"
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

export default MedicineDelivery;
