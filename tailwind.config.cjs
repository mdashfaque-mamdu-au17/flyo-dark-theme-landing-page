/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-black': '#181F2B',
        'creame-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
};
