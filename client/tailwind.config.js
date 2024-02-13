/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#003b95",
        primary2: "#003580",
        goldColor: "#ffb700",
        darkBlue: "#00224f",
        textBlue: "#0095ff",
      }
    },
  },
  plugins: [],
}