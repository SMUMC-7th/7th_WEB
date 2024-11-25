/** @type {import('tailwindcss').Config} */

const px0_200 = Array.from({ length: 201 }, (_, idx) => `${idx}`);

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: px0_200,
      gridTemplateColumns: {
        movies: 'repeat(auto-fill, minmax(140px, 1fr))',
        credits: 'repeat(auto-fill, minmax(208px, 1fr))',
      },

      keyframes: {
        skeleton: {
          '0%, 100%': { opacity: '1' },
          '30%, 70%': { opacity: '0.7' },
          '50%': { opacity: '0.4' },
        },
      },

      animation: {
        skeleton: 'skeleton 3s infinite linear alternate',
      },
    },
  },
  plugins: [],
};
