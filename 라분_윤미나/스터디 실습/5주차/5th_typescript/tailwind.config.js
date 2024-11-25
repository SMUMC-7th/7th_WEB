/** @type {import('tailwindcss').Config} */
const px0_200 = Array.from({ length: 1001 }, (_, idx) => `${idx}px`);

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { fontSize: px0_200, width: px0_200, height: px0_200 },
  },
  plugins: [],
};
