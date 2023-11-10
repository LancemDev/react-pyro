/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      height: {
        '75vh': '75vh',
        '50vh':'50vh',
        '25vh':'25vh'
      }
    },
  },
  plugins: [],
}

