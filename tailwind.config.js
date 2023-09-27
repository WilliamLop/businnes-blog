/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['"Poppins"', 'sans-serif'],
        'lato': ['"Lato"', 'sans-serif'],
      },
      colors: {
        'verydark': '#111729', 
        'verygray': '#677489', 
        'verywhite': '#FFFFFF', 
        'ligthwhite': '#F2F5F9', 
      },
    },
  },
  plugins: [],
}

