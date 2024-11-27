/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          primary: '#00B890',
          secondary: '#D6FFF6',
        },
      },
    },
  },
  plugins: [],
};
