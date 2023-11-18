/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "vzir" : "vazir",
        "vazirBold" : "vazir Bold",
        "vazirExtraBold" : "vazir ExtraBold",
        "vazirLight" : "vazir Light"
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

