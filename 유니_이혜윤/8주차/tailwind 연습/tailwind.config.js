/** @type {import('tailwindcss').Config} */

// 길이가 200인 배열에 값을 넣어서 전달해줘
const px0_200 = Array.from({ length: 201 }, (_, idx) => `${idx}px`);

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: px0_200,
    },
  },
  plugins: [],
};
