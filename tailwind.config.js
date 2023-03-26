/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#e5f0ff",
          100: "#b3d3ff",
          200: "#80b6ff",
          300: "#4d99ff",
          400: "#1a7cff",
          500: "#0063e6",
          600: "#004db3",
          700: "#003780",
          800: "#00214d",
          900: "#000b1a",
        },
      },
      fontFamily: {
        'satoshi': ["Satoshi-Variable", "sans-serif"],
        'clash': ['ClashDisplay-Variable', "Arial"],
      }
    },
  },
  plugins: [],
}