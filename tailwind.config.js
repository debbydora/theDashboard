/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        blue: "#39CDCC",
        white: "#FFFFFF",
        greyash: "rgba(84, 95, 125, 0.15)",
        darkBlue: "#213F7D",
        lightBlue: "#545F7D",
        shadowBlue: "rgba(33, 63, 125, 0.06)",
        purple: "#DF18FF",
      },
      boxShadow: {
        "3xl": "3px 5px 20px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};
