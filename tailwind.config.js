/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/templates/**/*.html",
  ],
  theme: {
    extend: { 
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        textColor: 'var(--text-color)',
        white: 'var(--white-color)',
      },
      backgroundImage: {
        'circle': "url('/images/circle.svg')",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        archivo: ['Archivo', 'sans-serif'],
        expletus: ['Expletus Sans', 'sans-serif'],
      },
      gridTemplateColumns: {
        'footer-col': '1fr repeat(5, max-content)',
      }      
    },
    zIndex: {
        10: '10',
        20: '20',
        30: '30',
        40: '40',
        50: '50',
        60: '60',
        100: '100',
        999: '999',
        9999: '9999',
      },
  },
  plugins: [],
};