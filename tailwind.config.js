// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '850px',
      'md': '680px',
      'lg': '1024px',
    },
    extend: {
      fontFamily: {
        "main": ['Playfair Display'],
        "body": ['DM Sans']
      }
    },
  },
  plugins: [],
}
