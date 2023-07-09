/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
   
  ],
  theme: {
    extend: {
      spacing : {
        // 1 rem = 4px
        '112' : '28rem',
        '144' : '36rem',
      }
    },
  },
  plugins: [],
}