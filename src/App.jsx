import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import MedicineDelivery from "./pages/Services/MedicineDelivery";
import MedicineDetails from "./pages/Services/MedicineDetails";
import FoodDelivery from "./pages/Services/FoodDelivery";
import FoodDeliveryDetails from "./pages/Services/FoodDeliveryDetails";
import Grocery from "./pages/Services/Grocery";
import GroceryDetails from "./pages/Services/GroceryDetails";
import RideBooking from "./pages/Services/RideBooking";
import RideBookingDetails from "./pages/Services/RideBookingDetails";
import DecorationServices from "./pages/Services/DecorationServices";
import DecorationServicesDetails from "./pages/Services/DecorationServicesDetails";
import HouseRent from "./pages/Services/HouseRent";
import HouseRentDetails from "./pages/Services/HouseRentDetails";
import TravelTour from "./pages/Services/TravelTour";
import TravelTourDetails from "./pages/Services/TravelTourDetails";
import DoctorAppointment from "./pages/Services/DoctorAppointment";
import DoctorAppointmentDetails from "./pages/Services/DoctorAppointmentDetails";
import BookService from "./pages/BookService";
import Testimonials from "./pages/Testimonials";
import TipsForSeniors from "./pages/Blog/TipsForSeniors";
import EmergencyNumbers from "./pages/Blog/EmergencyNumbers";
import BurdwanHighlights from "./pages/Blog/BurdwanHighlights";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/services/medicine-delivery"
          element={<MedicineDelivery />}
        />
        <Route
          path="/services/medicine-delivery/:medicineId"
          element={<MedicineDetails />}
        />
        <Route path="/services/food-delivery" element={<FoodDelivery />} />
        <Route
          path="/services/food-delivery/:itemId"
          element={<FoodDeliveryDetails />}
        />
        <Route path="/services/grocery" element={<Grocery />} />
        <Route path="/services/grocery/:itemId" element={<GroceryDetails />} />
        <Route path="/services/ride-booking" element={<RideBooking />} />
        <Route
          path="/services/ride-booking/:rideId"
          element={<RideBookingDetails />}
        />
        <Route
          path="/services/decoration-services"
          element={<DecorationServices />}
        />
        <Route
          path="/services/decoration-services/:decorationId"
          element={<DecorationServicesDetails />}
        />
        <Route path="/services/house-rent" element={<HouseRent />} />
        <Route
          path="/services/house-rent/:houseId"
          element={<HouseRentDetails />}
        />
        <Route path="/services/travel-tour" element={<TravelTour />} />
        <Route
          path="/services/travel-tour/:tourId"
          element={<TravelTourDetails />}
        />
        <Route
          path="/services/doctor-appointment"
          element={<DoctorAppointment />}
        />
        <Route
          path="/services/doctor-appointment/:doctorId"
          element={<DoctorAppointmentDetails />}
        />
        <Route path="/book-service" element={<BookService />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog/tips-for-seniors" element={<TipsForSeniors />} />
        <Route path="/blog/emergency-numbers" element={<EmergencyNumbers />} />
        <Route
          path="/blog/burdwan-highlights"
          element={<BurdwanHighlights />}
        />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      toastStyle={{
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        color: "#fff",
        fontFamily: "'Poppins', sans-serif",
      }}
    />
  </div>
);

export default App;
