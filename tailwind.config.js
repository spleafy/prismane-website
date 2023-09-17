/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "radial-pink": `radial-gradient(ellipse at center, ${colors.pink[500]}, transparent 60%)`,
        "radial-rose": `radial-gradient(ellipse at center, ${colors.rose[500]}, transparent 60%)`,
        "radial-purple": `radial-gradient(ellipse at center, ${colors.purple[500]}, transparent 60%)`,
      },
      colors: {
        primary: colors.pink,
        secondary: colors.rose,
        base: colors.slate,
      },
      boxShadow: {
        inset: "inset 0 0 2px 1px var(--tw-shadow-color)",
        glow: "0 0 30px 10px var(--tw-shadow-color)",
      },
      animation: {
        breathe: "breathe 5s ease-in-out infinite",
        "breathe-light": "breathe-light 5s ease-in-out infinite",
        blink: "blink 1s ease-in-out infinite",
        phase: "phase 5s ease-in-out infinite",
        scale: "scale 2s ease-in-out infinite",
      },
      keyframes: {
        breathe: {
          "0%, 100%": { opacity: "40%" },
          "50%": { opacity: "30%" },
        },
        "breathe-light": {
          "0%, 100%": { opacity: "50%" },
          "50%": { opacity: "40%" },
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
        scale: {
          "0%, 100%": { opacity: "100%", transform: "scale(1)" },
          "50%": { opacity: "75%", transform: "scale(1.1)" },
        },
      },
    },
  },
  plugins: [],
};
