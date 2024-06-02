// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Inter', 'serif'],
      },
      colors: {
        'black-nav': '#37393F',
        'orange':'#fa8232'
      },
      opacity: {
        '91': '0.91',
      },
    },
  },
  plugins: [],
}
