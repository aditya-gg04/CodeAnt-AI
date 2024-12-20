/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            satoshi: ['Satoshi', 'sans-serif'],
        },
        width:{
          '1000': '1225px'
        },
    },
},
  plugins: [],
}

