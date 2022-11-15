/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      sm: ["0.8rem", { lineHeight: "0.8rem", fontWeight: 500 }],
      base: [
        "calc(0.2vw + 1rem)",
        { lineHeight: "calc(0.2vw + 1rem)", fontWeight: 500 },
      ],
      lg: ["calc(0.4vw + 1rem)", { lineHeight: "calc(0.6vw + 1rem)" }],
      xl: [
        "calc(2vw + 1rem)",
        { lineHeight: "calc(2vw + 1rem)", fontWeight: 300 },
      ],
      "2xl": [
        "calc(5vw + 1rem)",
        { lineHeight: "calc(5vw + 1rem)", fontWeight: 300 },
      ],
      "3xl": [
        "calc(7vw + 1rem)",
        { lineHeight: "calc(7vw + 1rem)", fontWeight: 300 },
      ],
      "4xl": [
        "calc(9vw + 1rem)",
        { lineHeight: "calc(9vw + 1rem)", fontWeight: 300 },
      ],
      "5xl": [
        "calc(12vw + 1rem)",
        { lineHeight: "calc(12vw + 1rem)", fontWeight: 200 },
      ],
    },
    fontFamily: {
      serif: ["Alvarado", "serif"],
      display: ["Dalfitra", "serif"],
      sans: ["Haskoy", "sans-serif"],
    },
  },
  plugins: [],
};
