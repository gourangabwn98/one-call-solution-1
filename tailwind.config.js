/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "brand-amber": "#fcd34d",
        "brand-indigo": "#3730a3",
        "hero-indigo": "#1e1b4b",
        "hero-pink": "#be185d",
      },
      backdropBlur: {
        md: "10px",
      },
    },
  },
  plugins: [],
};
