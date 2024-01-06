/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-ballet': "url('/src/assets/bgimage-ballet.jpg')"
      }
    },
  },
  plugins: [],
}

