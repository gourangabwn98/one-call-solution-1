import { motion } from "framer-motion";
import { Link, useParams, useNavigate } from "react-router-dom";

const RideBookingDetails = () => {
  const { rideId } = useParams();
  const navigate = useNavigate();

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
      features: "Basic amenities, 4 seats",
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
      features: "AC, 4 seats, Wi-Fi",
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
      features: "AC, 6 seats, luggage space",
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
      features: "AC, leather seats, premium audio",
    },
  ];

  const item = items.find((m) => m.id === parseInt(rideId));
  const relatedItems = items
    .filter((m) => m.id !== parseInt(rideId))
    .slice(0, 3);

  const handleAddToOrder = () => {
    navigate("/services/ride-booking", { state: { details: item.name } });
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
          <h2 className="text-3xl font-semibold">Ride Not Found</h2>
          <Link
            to="/services/ride-booking"
            className="text-amber-300 hover:underline"
          >
            Back to Rides
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
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
          <p className="text-gray-200 mb-2">Base Price: ₹{item.basePrice}</p>
          <p className="text-gray-200 mb-2">Price per km: ₹{item.perKm}</p>
          <p className="text-gray-200 mb-2">
            Availability: {item.availability}
          </p>
          <p className="text-gray-200 mb-4">{item.description}</p>
          <p className="text-gray-200 mb-4">Features: {item.features}</p>
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
            to="/services/ride-booking"
            className="block text-center text-amber-300 hover:underline mt-4"
            aria-label="Back to rides"
          >
            Back to Rides
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-semibold text-center mb-6">
            Other Ride Options
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
                <p className="text-gray-200 mb-4">
                  Base Price: ₹{related.basePrice}
                </p>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(251, 191, 36, 0.7)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    navigate(`/services/ride-booking/${related.id}`)
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

export default RideBookingDetails;
