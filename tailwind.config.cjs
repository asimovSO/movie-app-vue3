/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    extend: {
      screens: {
        default: '768px',
        sm: '230px'
      },
      colors:{
        bg: '#09030f',
        "bg-light": '#0d0317'
      },
      borderWidth: {
        1: 1
      }
    },
  },
  plugins: [],
};
