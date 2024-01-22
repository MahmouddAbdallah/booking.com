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
        goldColor: "#ffb700",
        darkBlue: "#00224f"
      }
    },
  },
  plugins: [],
}