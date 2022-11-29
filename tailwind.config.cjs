/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#2D3134',
        'secondary' : '#5B5F62',
        'third' : '#2E476B',
        'forth' : '#939597',
        'accent' : '#F66F4D',
        'background' : '#FAF8ED'
      },
    },
    fontFamily: {
      'Sen' : ['Sen', 'sans-serif'],
      'Poppins' : ['Poppins' , 'sans-serif'],
      'Inter' : ['Inter' , 'sans-serif'],
    },
  },
  plugins: [],
}