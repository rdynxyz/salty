/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'xs' : '420px',
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' : '1280px',
      '2xl' : '1536px',
    },
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