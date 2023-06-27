/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "radial-pink": `radial-gradient(ellipse at center, ${colors.pink[500]}, transparent 60%)`,
        "radial-violet": `radial-gradient(ellipse at center, ${colors.violet[500]}, transparent 60%)`,
        "radial-purple": `radial-gradient(ellipse at center, ${colors.purple[500]}, transparent 60%)`,
      },
      colors: {
        primary: colors.pink,
        secondary: colors.violet,
        base: colors.gray,
      },
      animation: {
        breathe: "breathe 5s ease-in-out infinite",
        blink: "blink 1s ease-in-out infinite",
        phase: "phase 5s ease-in-out infinite",
      },
      keyframes: {
        breathe: {
          "0%, 100%": { opacity: "20%" },
          "50%": { opacity: "10%" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        phase: {
          "0%, 100%": { transform: "translateX(0px, 0px)" },
          "25%": { transform: "translate(128px, -128px)" },
          "50%": { transform: "translate(0px, 0px)" },
          "75%": { transform: "translate(-128px, -128px)" },
        },
      },
    },
  },
  plugins: [],
};
