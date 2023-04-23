/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './dist/**/*.{html,js,jsx,ts,tsx}',
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'sage-100': '#e9eeed',
        'sage-300': '#b1c0bf',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        theme: '12px 12px 28px #08102e,-12px -12px 28px #284cda',
      },
    },
  },
  plugins: [],
};
