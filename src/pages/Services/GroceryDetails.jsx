import { motion } from "framer-motion";
import { Link, useParams, useNavigate } from "react-router-dom";

const GroceryDetails = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();

  const items = [
    {
      id: 1,
      name: "Organic Apples",
      price: "₹150/kg",
      category: "Fruit",
      dietary: "Vegan",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGmJig9Yf_YaU-AnoX2Bcz9q-1_dLEt0UMkg&s",
      description: "Fresh organic apples.",
      origin: "India",
      weight: "1 kg",
    },
    {
      id: 2,
      name: "Whole Wheat Bread",
      price: "₹60",
      category: "Bakery",
      dietary: "Vegetarian",
      image:
        "https://www.chainbaker.com/wp-content/uploads/2022/02/IMG_2362.jpg",
      description: "Freshly baked whole wheat bread.",
      origin: "Local Bakery",
      weight: "400 g",
    },
    {
      id: 3,
      name: "Almond Milk",
      price: "₹200/ltr",
      category: "Dairy",
      dietary: "Vegan",
      image:
        "https://www.giverecipe.com/wp-content/uploads/2019/04/How-to-make-roasted-almond-milk-easy.jpg",
      description: "Plant-based almond milk.",
      origin: "India",
      weight: "1 ltr",
    },
    {
      id: 4,
      name: "Chicken Breast",
      price: "₹300/kg",
      category: "Meat",
      dietary: "Non-Veg",
      image:
        "https://www.greenchickchop.in/cdn/shop/files/ChickenBreastBoneless.webp?v=1682572347",
      description: "Fresh chicken breast.",
      origin: "Local Farm",
      weight: "1 kg",
    },
    {
      id: 5,
      name: "Brown Rice",
      price: "₹100/kg",
      category: "Grains",
      dietary: "Vegan",
      image:
        "https://assets.clevelandclinic.org/transform/f2bcdb0e-2e53-4f01-9b5d-cd2ca184c34b/brown-rice-180719868",
      description: "Healthy brown rice.",
      origin: "India",
      weight: "1 kg",
    },
    {
      id: 6,
      name: "Greek Yogurt",
      price: "₹120",
      category: "Dairy",
      dietary: "Vegetarian",
      image:
        "https://nada.com.sa/wp-content/uploads/2024/12/3-Nada-Greek-Yogurt-Plain-0-Fat-160gm-EN-1.jpg",
      description: "Creamy Greek yogurt.",
      origin: "India",
      weight: "500 g",
    },
  ];

  const item = items.find((m) => m.id === parseInt(itemId));
  const relatedItems = items
    .filter((m) => m.id !== parseInt(itemId))
    .slice(0, 3);

  const handleAddToOrder = () => {
    navigate("/services/grocery", { state: { details: item.name } });
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
          <h2 className="text-3xl font-semibold">Grocery Item Not Found</h2>
          <Link
            to="/services/grocery"
            className="text-amber-300 hover:underline"
          >
            Back to Groceries
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
          <p className="text-gray-200 mb-2">Price: {item.price}</p>
          <p className="text-gray-200 mb-2">Category: {item.category}</p>
          <p className="text-gray-200 mb-2">Dietary: {item.dietary}</p>
          <p className="text-gray-200 mb-4">{item.description}</p>
          <p className="text-gray-200 mb-2">Origin: {item.origin}</p>
          <p className="text-gray-200 mb-4">Weight: {item.weight}</p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(251, 191, 36, 0.7)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToOrder}
            className="w-full bg-gradient-to-r from-amber-300 to-pink-500 text-white px-6 py-3 rounded-full font-semibold"
            aria-label={`Add ${item.name} to order`}
          >
            Add to Order
          </motion.button>
          <Link
            to="/services/grocery"
            className="block text-center text-amber-300 hover:underline mt-4"
            aria-label="Back to groceries"
          >
            Back to Groceries
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-semibold text-center mb-6">
            Recommended Groceries
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
                  onClick={() => navigate(`/services/grocery/${related.id}`)}
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

export default GroceryDetails;
