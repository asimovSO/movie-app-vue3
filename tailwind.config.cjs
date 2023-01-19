/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors:{
        bg: '#09030f',
        "bg-light": '#0d0317'
      }
    },
  },
  plugins: [],
};
