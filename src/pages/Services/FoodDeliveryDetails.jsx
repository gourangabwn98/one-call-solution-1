import { motion } from "framer-motion";
import { Link, useParams, useNavigate } from "react-router-dom";

const FoodDeliveryDetails = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();

  const items = [
    {
      id: 1,
      name: "Margherita Pizza",
      price: "₹250",
      availability: "High",
      image:
        "https://ooni.com/cdn/shop/articles/20220211142347-margherita-9920_ba86be55-674e-4f35-8094-2067ab41a671.jpg?crop=center&height=800&v=1737104576&width=800",
      description: "Classic pizza with tomato and mozzarella.",
      ingredients: "Tomato, mozzarella, basil",
      prepTime: "20 minutes",
    },
    {
      id: 2,
      name: "Butter Chicken",
      price: "₹350",
      availability: "Low",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2021/02/butter-chicken-ac2ff98.jpg?quality=90&resize=440,400",
      description: "Creamy chicken curry with naan.",
      ingredients: "Chicken, cream, spices",
      prepTime: "30 minutes",
    },
    {
      id: 3,
      name: "Veg Biryani",
      price: "₹200",
      availability: "Medium",
      image:
        "https://www.madhuseverydayindian.com/wp-content/uploads/2022/11/easy-vegetable-biryani.jpg",
      description: "Spiced rice with vegetables.",
      ingredients: "Rice, vegetables, spices",
      prepTime: "25 minutes",
    },
    {
      id: 4,
      name: "Pasta Alfredo",
      price: "₹280",
      availability: "High",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPqy9hzvU2R6-8278COnWuaoo6ZQctdaz74g&s",
      description: "Creamy pasta with parmesan.",
      ingredients: "Pasta, cream, parmesan",
      prepTime: "15 minutes",
    },
    {
      id: 5,
      name: "Paneer Tikka",
      price: "₹300",
      availability: "Low",
      image:
        "https://j6e2i8c9.delivery.rocketcdn.me/wp-content/uploads/2023/10/Pahadi-Paneer-Tikka-Recipe-01-500x500.jpg",
      description: "Grilled paneer with spices.",
      ingredients: "Paneer, spices, yogurt",
      prepTime: "25 minutes",
    },
    {
      id: 6,
      name: "Chocolate Dessert",
      price: "₹150",
      availability: "Medium",
      image:
        "https://bakewithshivesh.com/wp-content/uploads/2023/03/IMG_9955-scaled.jpg",
      description: "Rich chocolate mousse.",
      ingredients: "Chocolate, cream, sugar",
      prepTime: "10 minutes",
    },
  ];

  const item = items.find((m) => m.id === parseInt(itemId));
  const relatedItems = items
    .filter((m) => m.id !== parseInt(itemId))
    .slice(0, 3);

  const handleAddToOrder = () => {
    navigate("/services/food-delivery", { state: { details: item.name } });
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
          <h2 className="text-3xl font-semibold">Food Item Not Found</h2>
          <Link
            to="/services/food-delivery"
            className="text-amber-300 hover:underline"
          >
            Back to Foods
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
          <p className="text-gray-200 mb-2">
            Availability: {item.availability}
          </p>
          <p className="text-gray-200 mb-4">{item.description}</p>
          <p className="text-gray-200 mb-2">Ingredients: {item.ingredients}</p>
          <p className="text-gray-200 mb-4">Prep Time: {item.prepTime}</p>
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
            to="/services/food-delivery"
            className="block text-center text-amber-300 hover:underline mt-4"
            aria-label="Back to foods"
          >
            Back to Foods
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-semibold text-center mb-6">
            Customers Also Ordered
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
                    navigate(`/services/food-delivery/${related.id}`)
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

export default FoodDeliveryDetails;
