const { BsTranslate } = require("react-icons/bs");

/** @type {import('tailwindcss').Config} */
module.exports = {
  //mode - makes build time faster
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gap: {
        "20-px": "20px",
      },

      margin: {
        "m-0auto": "0 auto",
      },
      keyframes: {
        // Keyframes for Typing Style
        type: {
          from: { width: "0" },
          to: { width: "100%" },
        },

        blinkCaret: {
          from: { borderColor: "transparent" },
          to: { borderColor: "transparent" },
          "50%": { borderColor: "black" },
        },
        //Project Fade in Animation
        fade: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
      },
      //Custom Animation
      animation: {
        //Animation for typing style
        typing:
          "type 3.5s steps(40 , end),  blinkCaret 0.75s step-end infinite",

        fadein: "fade 0.5s",
      },
    },
  },
  plugins: [],
};
