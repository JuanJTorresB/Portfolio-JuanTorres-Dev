/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amberMine: '#FCE7A2',
        separatorColor:"#D9D9D9"
      },
      fontFamily: {
        tanNimbus: ['TANNIMBUS', 'sans-serif'],
        Ysabeau : ['Ysabeau', 'sans-serif'],
      },
  },
},
  plugins: [],
}