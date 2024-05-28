/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'body-bg':'#e5effa',
        'notify-count':'#0a317b',
      }
    },
  },
  plugins: [],
}