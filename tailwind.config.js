/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
    },
    fontFamily: {
      vibes : ['Great Vibes']
    }
    
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

