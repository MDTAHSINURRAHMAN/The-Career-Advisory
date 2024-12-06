/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "bibas_neue" : ["Bebas Neue", "sans-serif"],
        "lora" : ["Lora", "serif"]
      },
      colors: {
        navColor: "#FFE802",
        btnColor: "#323232"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}