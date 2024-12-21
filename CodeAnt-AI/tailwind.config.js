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
            sans: ['Inter', 'sans-serif'],
        },fontWeight: {
          light: '300', // Use the light weight of Satoshi
        },
        width:{
          '1000': '1225px'
        },
    },
},
  plugins: [],
}

