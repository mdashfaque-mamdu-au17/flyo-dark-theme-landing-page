/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-black': '#181F2B',
        'secondary-black': '#202A3C',
        'creame-white': '#FFFFFF',
        'primary-cyan': '#63E1D9',
        'dark-cyan': '#8ADAE3',
      },
      boxShadow: {
        '3xl': '2px 3px 6px rgba(0, 0, 0, 0.15925);',
        '4xl': '5px 5px 8px 4px rgba(56, 56, 56, 0.0991282)',
      },
    },
  },
  plugins: [],
};
