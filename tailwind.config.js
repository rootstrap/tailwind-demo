//tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      colors: {
        'dark-blue': '#282c34',
        'light-blue': '#61dafb',
      }
    },
  },
  plugins: [],
}
