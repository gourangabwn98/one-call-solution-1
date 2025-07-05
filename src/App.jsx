import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import MedicineDelivery from "./pages/Services/MedicineDelivery";
import FoodDelivery from "./pages/Services/FoodDelivery";
import Grocery from "./pages/Services/Grocery";
import RideBooking from "./pages/Services/RideBooking";
import DecorationServices from "./pages/Services/DecorationServices";
import HouseRent from "./pages/Services/HouseRent";
import TravelTour from "./pages/Services/TravelTour";
// import DoctorAppointment from "./pages/Services/DireBooking";
import BookService from "./pages/BookService";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import TipsForSeniors from "./pages/Blog/TipsForSeniors";
import EmergencyNumbers from "./pages/Blog/EmergencyNumbers";
import BurdwanHighlights from "./pages/Blog/BurdwanHighlights";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import DoctorAppointment from "./pages/Services/DoctorAppointment";

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route
        path="/services/medicine-delivery"
        element={<MedicineDelivery />}
      />
      <Route path="/services/food-delivery" element={<FoodDelivery />} />
      <Route path="/services/grocery" element={<Grocery />} />
      <Route path="/services/ride-booking" element={<RideBooking />} />
      <Route
        path="/services/decoration-services"
        element={<DecorationServices />}
      />
      <Route path="/services/house-rent" element={<HouseRent />} />
      <Route path="/services/travel-tour" element={<TravelTour />} />
      <Route
        path="/services/doctor-appointment"
        element={<DoctorAppointment />}
      />
      <Route path="/book-service" element={<BookService />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/tips-for-seniors" element={<TipsForSeniors />} />
      <Route path="/blog/emergency-numbers" element={<EmergencyNumbers />} />
      <Route path="/blog/burdwan-highlights" element={<BurdwanHighlights />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);

export default App;
