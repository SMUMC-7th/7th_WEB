/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                s: '900px',
                xs: '740px',
                xxs: '650px',
            },
        },
    },
    plugins: [],
};
