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
  },
  plugins: [],
};