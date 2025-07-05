export const siteData = {
  navLinks: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Book Service", path: "/book-service" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ],
  hero: {
    headline: "One Call Solution: Burdwan’s Ultimate Service Hub",
    subheadline:
      "From medicine and food delivery to travel and home services – get it all with one click or call in Burdwan!",
    ctaPrimary: "Order Now",
    ctaSecondary: "Call Us",
    ctaPrimaryLink: "/book-service",
    ctaSecondaryLink: "tel:+911234567890",
  },
  services: [
    {
      title: "Medicine Delivery",
      desc: "Fast delivery of prescriptions and OTC medicines from trusted Burdwan pharmacies. Upload prescriptions and track orders in real-time.",
      icon: "💊",
      cta: "Order Medicine",
      link: "/services/medicine-delivery",
    },
    {
      title: "Food Delivery",
      desc: "Enjoy Burdwan’s famous sweets and savory dishes from top restaurants, delivered fresh to your door.",
      icon: "🍽️",
      cta: "Order Food",
      link: "/services/food-delivery",
    },
    {
      title: "Grocery Delivery",
      desc: "Fresh groceries and essentials delivered quickly from local Burdwan vendors.",
      icon: "🛍️",
      cta: "Shop Now",
      link: "/services/grocery",
    },
    {
      title: "Ride Booking",
      desc: "Book reliable rides across Burdwan for quick and safe travel.",
      icon: "🚗",
      cta: "Book Ride",
      link: "/services/ride-booking",
    },
    {
      title: "Decoration Services",
      desc: "Transform your events with professional decoration services tailored to your needs.",
      icon: "🎉",
      cta: "Book Decoration",
      link: "/services/decoration-services",
    },
    {
      title: "House Rent",
      desc: "Find and rent homes in Burdwan with our hassle-free service.",
      icon: "🏠",
      cta: "Find Home",
      link: "/services/house-rent",
    },
    {
      title: "Travel & Tour",
      desc: "Plan memorable trips in and around Burdwan with our travel services.",
      icon: "✈️",
      cta: "Plan Trip",
      link: "/services/travel-tour",
    },
    {
      title: "Doctor Appointment",
      desc: "Schedule appointments with top doctors in Burdwan effortlessly.",
      icon: "🩺",
      cta: "Book Appointment",
      link: "/services/doctor-appointment",
    },
  ],
  whyChooseUs: [
    {
      title: "Local Expertise",
      desc: "Deeply rooted in Burdwan, we understand your needs like no one else.",
    },
    {
      title: "Lightning Speed",
      desc: "Deliveries and services often completed within 30 minutes.",
    },
    {
      title: "24/7 Support",
      desc: "Round-the-clock assistance for any query or need.",
    },
    {
      title: "Trusted by Thousands",
      desc: "Burdwan residents rely on us for consistent, high-quality service.",
    },
  ],
  testimonials: [
    {
      quote: "Medicine delivered in 25 minutes! A true lifesaver!",
      author: "Arjun Sen, Burdwan",
    },
    {
      quote: "Ordered food from my favorite restaurant – so quick and easy!",
      author: "Priya Das, Burdwan",
    },
    {
      quote: "Booked a ride in minutes, very reliable!",
      author: "Sanjay Roy, Burdwan",
    },
    {
      quote: "Their decoration service made my event unforgettable!",
      author: "Rina Paul, Burdwan",
    },
  ],
  howItWorks: [
    {
      step: "Call or Click",
      desc: "Start your order via our website or hotline.",
      icon: "📞",
    },
    {
      step: "Choose Service",
      desc: "Select from medicine, food, rides, or more.",
      icon: "✅",
    },
    {
      step: "Fast Delivery",
      desc: "Track your order and get it quickly.",
      icon: "🚚",
    },
  ],
  about: {
    story:
      "One Call Solution was founded in Burdwan to simplify life for our community. From delivering critical medicines to organizing memorable events, we’re committed to making your day easier with local expertise and unmatched speed. Our vision is to be the go-to service platform for every Burdwan resident.",
    mission:
      "To provide seamless, reliable, and fast solutions for all your needs in Burdwan, with a focus on customer satisfaction and community support.",
    team: [
      {
        name: "Amit Sharma",
        role: "Founder",
        desc: "A Burdwan native passionate about community service.",
      },
      {
        name: "Rina Das",
        role: "Operations Lead",
        desc: "Ensuring seamless deliveries across Burdwan.",
      },
      {
        name: "Vikram Sen",
        role: "Customer Support",
        desc: "Dedicated to 24/7 customer satisfaction.",
      },
    ],
  },
  contact: {
    headline: "Connect with One Call Solution",
    subheadline: "We’re here 24/7 to assist with your needs in Burdwan.",
    formFields: [
      { name: "name", type: "text", placeholder: "Your Name" },
      { name: "phone", type: "tel", placeholder: "Phone Number" },
      { name: "email", type: "email", placeholder: "Email Address" },
      {
        name: "service",
        type: "select",
        placeholder: "Select Service",
        options: [
          "Medicine",
          "Food",
          "Grocery",
          "Ride",
          "Decoration",
          "House Rent",
          "Travel",
          "Doctor Appointment",
        ],
      },
      { name: "message", type: "textarea", placeholder: "Your Message" },
    ],
    info: {
      phone: "+91-1234567890",
      whatsapp: "+91-1234567890",
      email: "support@onecallsolution.com",
      address: "123, Curzon Gate, Burdwan, West Bengal",
    },
  },
  order: {
    headline: "Place Your Order in Seconds",
    subheadline: "Order medicine, food, or any service with ease.",
    formFields: [
      {
        name: "service",
        type: "select",
        placeholder: "Select Service",
        options: [
          "Medicine",
          "Food",
          "Grocery",
          "Ride",
          "Decoration",
          "House Rent",
          "Travel",
          "Doctor Appointment",
        ],
      },
      {
        name: "details",
        type: "textarea",
        placeholder: "Item/Service Details",
      },
      { name: "address", type: "text", placeholder: "Delivery Address" },
      {
        name: "payment",
        type: "select",
        placeholder: "Payment Method",
        options: ["Cash on Delivery", "Online Payment"],
      },
    ],
  },
  blogPosts: [
    {
      id: "tips-for-seniors",
      title: "Tips for Seniors: Simplifying Life in Burdwan",
      content:
        "Living in Burdwan as a senior can be made easier with One Call Solution. From medicine delivery to grocery shopping, our services are designed to support seniors with convenience and care. Here are our top tips: 1) Use our hotline for quick orders, 2) Schedule regular deliveries for essentials, 3) Book doctor appointments hassle-free.",
      date: "June 15, 2025",
    },
    {
      id: "emergency-numbers",
      title: "Essential Emergency Numbers for Burdwan Residents",
      content:
        "Stay prepared with our list of essential emergency numbers in Burdwan: Police (100), Ambulance (108), Fire (101). For non-emergency needs, One Call Solution is your trusted partner for fast deliveries and services. Save our hotline: +91-1234567890.",
      date: "June 20, 2025",
    },
    {
      id: "burdwan-highlights",
      title: "Discover Burdwan: Top Highlights and Attractions",
      content:
        "Burdwan is rich in culture and history. Visit Curzon Gate, explore Shyamsayar Lake, or enjoy local sweets like Mihidana. Use One Call Solution’s travel services to plan your next trip or book a ride to these iconic spots!",
      date: "June 25, 2025",
    },
  ],
  faq: [
    {
      question: "What services do you offer?",
      answer:
        "We provide medicine delivery, food delivery, grocery delivery, ride booking, decoration services, house rentals, travel planning, and doctor appointments in Burdwan.",
    },
    {
      question: "How fast is your delivery?",
      answer:
        "Most deliveries are completed within 30–60 minutes, depending on the service and location.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Use your order ID on our website to track your order in real-time.",
    },
  ],
  footer: {
    links: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "About", path: "/about" },
      { name: "Contact", path: "/contact" },
      { name: "Book Service", path: "/book-service" },
      { name: "Privacy Policy", path: "/privacy" },
    ],
    contact: {
      phone: "+91-1234567890",
      email: "support@onecallsolution.com",
    },
    copyright: "© 2025 One Call Solution. All Rights Reserved.",
  },
};
