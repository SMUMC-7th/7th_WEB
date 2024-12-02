/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadein: {
          "0%": {
            opacity: "0.5",
            transform: "translateX(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeout: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
            transform: "translateX(-10px)",
          },
        },
      },
      animation: {
        fadein: "fadein 0.5s",
        fadeout: "fadeout 0.4s",
      },
    },
  },
  plugins: [],
};
