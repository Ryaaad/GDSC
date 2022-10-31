/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,jsx,ts,js}',
  ],
  extend: {},
  theme: {
      colors: {
        bgcolor: "#0095CB",
        hoverbg: "#05afed", //"#037199",
        yellow: "#ffde59",
        white: "#ffffff",
        pink: "rgb(236, 72, 153)",
      },
    },
  plugins: [],
}
