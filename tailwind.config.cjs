/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-black': '#181F2B',
        'creame-white': '#FFFFFF',
        'primary-cyan': '#63E1D9',
        'dark-cyan': '#8ADAE3',
      },
    },
  },
  plugins: [],
};
