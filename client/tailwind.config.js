/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // A bold blue for buttons and highlights
        secondary: "#9333EA", // A nice purple accent
        background: "#F3F4F6", // Soft gray for background
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Sleek and modern font
      },
      boxShadow: {
        card: "0 4px 6px rgba(0, 0, 0, 0.1)", // Soft shadow for cards
      },
      borderRadius: {
        xl: "1.5rem", // Extra large rounded corners
      },
    },
  },
  plugins: [],
};
