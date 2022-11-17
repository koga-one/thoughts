/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      serif: ["Alvarado", "serif"],
      display: ["Dalfitra", "serif"],
      sans: ["Haskoy", "sans-serif"],
    },
  },
  plugins: [],
};
