/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sbb: {
          red: {
            125: '#C60018',
            DEFAULT: '#EB0000'
          },
          milk: '#F6F6F6',
          granite: '#686868',
          smoke: '#8D8D8D'
        },
      }
    },
    
  },
  plugins: [
  ]
}
