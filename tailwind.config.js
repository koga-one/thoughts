/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      front: "#444",
      back: "#bbb",
    },
    fontFamily: {
      serif: ["Alvarado", "serif"],
      display: ["Dalfitra", "serif"],
      sans: ["Haskoy", "sans-serif"],
      mono: ["Fira Code", "monospace"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
