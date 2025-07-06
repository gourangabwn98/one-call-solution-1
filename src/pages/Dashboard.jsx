import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "../data";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [bookings, setBookings] = useState([
    {
      id: 1,
      service: "Food Delivery",
      details: "Pizza Order",
      date: "2025-07-10",
      status: "Confirmed",
    },
    {
      id: 2,
      service: "Grocery Delivery",
      details: "Weekly Essentials",
      date: "2025-07-12",
      status: "Pending",
    },
    {
      id: 3,
      service: "Ride Booking",
      details: "Airport Drop",
      date: "2025-07-15",
      status: "Confirmed",
    },
    {
      id: 4,
      service: "Decoration Services",
      details: "Wedding Elegance",
      date: "2025-07-20",
      status: "Confirmed",
    },
    {
      id: 5,
      service: "House Rent",
      details: "2BHK Apartment",
      date: "2025-08-01",
      status: "Pending",
    },
    {
      id: 6,
      service: "Travel & Tour",
      details: "Goa Beach Tour",
      date: "2025-07-25",
      status: "Confirmed",
    },
    {
      id: 7,
      service: "Doctor Appointment",
      details: "Dr. Anita Sharma",
      date: "2025-07-18",
      status: "Confirmed",
      points: 50,
    },
    {
      id: 8,
      service: "Medicine Delivery",
      details: "Prescription Medicines",
      date: "2025-07-16",
      status: "Confirmed",
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [formData, setFormData] = useState({ date: "", details: "" });
  const [errors, setErrors] = useState({});

  const totalPoints = bookings
    .filter((b) => b.service === "Doctor Appointment")
    .reduce((sum, b) => sum + (b.points || 0), 0);

  const filteredBookings =
    activeTab === "all"
      ? bookings
      : bookings.filter(
          (b) =>
            b.service.toLowerCase().replace(/ & /g, "-").replace(" ", "-") ===
            activeTab
        );

  const handleEditBooking = (booking) => {
    setSelectedBooking(booking);
    setFormData({ date: booking.date, details: booking.details });
    setShowModal(true);
  };

  const handleCancelBooking = (bookingId) => {
    setBookings(bookings.filter((b) => b.id !== bookingId));
  };

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
      setBookings(
        bookings.map((b) =>
          b.id === selectedBooking.id
            ? { ...b, date: formData.date, details: formData.details }
            : b
        )
      );
      setFormData({ date: "", details: "" });
      setShowModal(false);
      setSelectedBooking(null);
      setErrors({});
    } else {
      setErrors(newErrors);
    }
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
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-pink-500">
            Your Dashboard
          </h1>
          <p className="text-xl sm:text-2xl">
            Manage all your bookings in one place!
          </p>
          <p className="text-lg text-green-400 mt-2">
            Loyalty Points (Doctor Appointments): {totalPoints}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-12 flex flex-wrap gap-4 justify-center"
        >
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-full font-semibold flex items-center ${
              activeTab === "all"
                ? "bg-gradient-to-r from-amber-300 to-pink-500"
                : "bg-white/10 border border-gray-300"
            }`}
          >
            All Bookings
          </button>
          {siteData?.services?.map((service) => (
            <button
              key={service.link}
              onClick={() =>
                setActiveTab(
                  service.title
                    .toLowerCase()
                    .replace(/ & /g, "-")
                    .replace(" ", "-")
                )
              }
              className={`px-4 py-2 rounded-full font-semibold flex items-center ${
                activeTab ===
                service.title
                  .toLowerCase()
                  .replace(/ & /g, "-")
                  .replace(" ", "-")
                  ? "bg-gradient-to-r from-amber-300 to-pink-500"
                  : "bg-white/10 border border-gray-300"
              }`}
            >
              <span className="text-2xl mr-2">{service.icon}</span>
              {service.title}
            </button>
          )) || <p className="text-gray-200">No services available</p>}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {filteredBookings.length > 0 ? (
            filteredBookings.map((booking, index) => (
              <motion.div
                key={booking.id}
                variants={cardVariants}
                custom={index}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/20 text-center"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {booking.service}
                </h3>
                <p className="text-gray-200 mb-2">{booking.details}</p>
                <p className="text-gray-200 mb-2">Date: {booking.date}</p>
                <p className="text-gray-200 mb-4">Status: {booking.status}</p>
                {booking.points && (
                  <p className="text-green-400 mb-4">
                    Points Earned: {booking.points}
                  </p>
                )}
                <div className="flex gap-2 justify-center">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(251, 191, 36, 0.7)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleEditBooking(booking)}
                    className="bg-gradient-to-r from-amber-300 to-pink-500 text-white px-4 py-2 rounded-full font-semibold"
                    aria-label={`Edit booking for ${booking.details}`}
                  >
                    Edit
                  </motion.button>
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(251, 191, 36, 0.7)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleCancelBooking(booking.id)}
                    className="bg-transparent border border-red-400 text-red-400 px-4 py-2 rounded-full font-semibold"
                    aria-label={`Cancel booking for ${booking.details}`}
                  >
                    Cancel
                  </motion.button>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-200">
              No bookings found.
            </p>
          )}
        </motion.div>
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
                  Edit Booking: {selectedBooking?.details}
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-sm text-gray-200 mb-2"
                      htmlFor="date"
                    >
                      Date
                    </label>
                    <motion.input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      whileFocus="focus"
                      variants={inputVariants}
                      className="w-full px-4 py-2 bg-white/10 border border-gray-300 rounded-lg text-white focus:outline-none"
                      aria-label="Select booking date"
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
                      Details
                    </label>
                    <motion.textarea
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      whileFocus="focus"
                      variants={inputVariants}
                      className="w-full px-4 py-2 bg-white/10 border border-gray-300 rounded-lg text-white focus:outline-none"
                      rows="3"
                      aria-label="Enter booking details"
                    />
                  </div>
                  <div className="flex gap-4">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-amber-300 to-pink-500 text-white px-4 py-2 rounded-full font-semibold"
                      aria-label="Confirm edit booking"
                    >
                      Save Changes
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={() => setShowModal(false)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-transparent border border-gray-300 text-gray-300 px-4 py-2 rounded-full font-semibold"
                      aria-label="Cancel edit booking"
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

export default Dashboard;
