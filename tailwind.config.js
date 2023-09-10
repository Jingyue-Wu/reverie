/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'light': '#F6F6F6',
      'dark': '#0D1117',
      'bg-light': '#E8E8E8',
      'bg-dark': '#2D2D2D',
      'text-light': '#0D1117',
      'text-dark': '#FFFFFF',
    },
    extend: {
      screens: {
        '3xl': '1800px',
      },
    },
  },
  plugins: [],
};