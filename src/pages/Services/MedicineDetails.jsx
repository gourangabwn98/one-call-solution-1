import { motion } from "framer-motion";
import { Link, useParams, useNavigate } from "react-router-dom";
import paracetamol from "../../assets/Images/Paracetamol-500-mg-Tablet_1.webp";

const MedicineDetails = () => {
  const { medicineId } = useParams();
  const navigate = useNavigate();

  // Demo medicines data (same as MedicineDelivery.jsx)
  const medicines = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      price: "₹50",
      discount: "10% OFF",
      stock: "High",
      image: paracetamol,
      description: "Relieves mild to moderate pain and fever.",
      dosage: "1-2 tablets every 4-6 hours",
      sideEffects: "Rare: rash, nausea",
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
      dosage: "1 tablet every 6-8 hours",
      sideEffects: "Stomach upset, dizziness",
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
      dosage: "1 capsule every 8 hours",
      sideEffects: "Diarrhea, allergic reactions",
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
      dosage: "1 tablet daily",
      sideEffects: "Drowsiness, dry mouth",
    },
    {
      id: 5,
      name: "Aspirin 75mg",
      price: "₹30",
      discount: "",
      stock: "Low",
      image: "https://via.placeholder.com/150x150?text=Aspirin",
      description: "For heart health and pain relief.",
      dosage: "1 tablet daily",
      sideEffects: "Stomach bleeding, allergic reactions",
    },
    {
      id: 6,
      name: "Metformin 500mg",
      price: "₹60",
      discount: "10% OFF",
      stock: "Medium",
      image: "https://via.placeholder.com/150x150?text=Metformin",
      description: "Manages type 2 diabetes.",
      dosage: "1-2 tablets daily with meals",
      sideEffects: "Nausea, diarrhea",
    },
  ];

  const medicine = medicines.find((m) => m.id === parseInt(medicineId));
  const relatedMedicines = medicines
    .filter((m) => m.id !== parseInt(medicineId))
    .slice(0, 3);

  const handleAddToOrder = () => {
    // Redirect to main page with pre-filled form
    navigate("/services/medicine-delivery", {
      state: { details: medicine.name },
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

  if (!medicine) {
    return (
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="min-h-screen bg-[linear-gradient(45deg,#1e1b4b,#be185d)] text-white py-16 pt-24"
      >
        <div className="container mx-auto px-6 sm:px-8 md:px-12 text-center">
          <h2 className="text-3xl font-semibold">Medicine Not Found</h2>
          <Link
            to="/services/medicine-delivery"
            className="text-amber-300 hover:underline"
          >
            Back to Medicines
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
            {medicine.name}
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-white/5 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white/20 max-w-2xl mx-auto"
        >
          <img
            src={medicine.image}
            alt={medicine.name}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">{medicine.name}</h2>
          <p className="text-gray-200 mb-2">Price: {medicine.price}</p>
          {medicine.discount && (
            <p className="text-red-400 mb-2">{medicine.discount}</p>
          )}
          <p className="text-gray-200 mb-2">Stock: {medicine.stock}</p>
          <p className="text-gray-200 mb-4">{medicine.description}</p>
          <p className="text-gray-200 mb-2">Dosage: {medicine.dosage}</p>
          <p className="text-gray-200 mb-4">
            Side Effects: {medicine.sideEffects}
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(251, 191, 36, 0.7)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToOrder}
            className="w-full bg-gradient-to-r from-amber-300 to-pink-500 text-white px-6 py-3 rounded-full font-semibold"
            aria-label={`Add ${medicine.name} to order`}
          >
            Add to Order
          </motion.button>
          <Link
            to="/services/medicine-delivery"
            className="block text-center text-amber-300 hover:underline mt-4"
            aria-label="Back to medicines"
          >
            Back to Medicines
          </Link>
        </motion.div>
        {/* Related Medicines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-semibold text-center mb-6">
            Customers Also Bought
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedMedicines.map((related, index) => (
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
                    navigate(`/services/medicine-delivery/${related.id}`)
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

export default MedicineDetails;
