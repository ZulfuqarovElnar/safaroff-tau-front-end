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
        lightBg: 'var(--light-bg)',
      }
    },
  },
  plugins: [],
};
