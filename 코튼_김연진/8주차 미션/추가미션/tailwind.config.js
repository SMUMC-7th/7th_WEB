/** @type {import('tailwindcss').Config} */

export default {
    content: ['./index.html', './src/**/*.{js,tsx, ts, jsx}'],
    theme: {
        extend: {
            screens: {
                sc: '1080px',
            },
            animation: {
                skeleton: 'skeleton 3s 1s infinite linear alternate',
            },
        },
        skeleton: {
            '0%': {
                opacity: '1',
            },
            ' 30%': {
                opacity: '0.7',
            },
            '50%': {
                opacity: '0.4',
            },
            '80%': {
                opacity: '0.8',
            },
            '100%': {
                opacity: '1',
            },
        },
    },
    plugins: [],
};
