/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ].join(",")
    : null;
}

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "text-dark": `linear-gradient(0deg,rgba(255,255,255,.4),rgba(255,255,255,.4)),linear-gradient(90.01deg,#e59cff .01%,#ba9cff 50.01%,#9cb2ff 100%)`,
        radial: `radial-gradient(circle, ${colors.pink[500]} 0%, ${colors.rose[500]} 100%)`,
      },
      colors: {
        primary: colors.pink,
        secondary: colors.rose,
        base: colors.gray,
      },
      boxShadow: {
        inset: "inset 0 0 2px 1px var(--tw-shadow-color)",
        glow: "0 0 30px 10px var(--tw-shadow-color)",
        "button-inset":
          "0 0 #000019,0 9px 21px #000019fa,0 37px 37px #000019d9,0 84px 50px #00001980,0 149px 60px #00001926,0 233px 65px #00001905,0 -3px #49023933 inset",
        "secondary-button-inset":
          "linear-gradient(264.15deg,rgba(226,232,255,.2) -.4%,rgba(226,232,255,0) 100.4%),linear-gradient(0deg,rgba(226,232,255,.1),rgba(226,232,255,.1))",
        announce: `0 -4px 12px rgba(244, 114, 182, 0.2) inset`,
      },
      animation: {
        blink: "blink 1s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
