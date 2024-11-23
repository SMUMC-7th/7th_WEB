/** @type {import('tailwindcss').Config} */

const px0_200 = Array.from({length:201}, (_,idx) => `${idx}px`);

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], //tailwindcss의 영향범위다 src내에 어떤 폴더안에 있는 js등등 다
  theme: {
    extend: {
      fontSize: px0_200,
    },
  },
  plugins: [],
}

