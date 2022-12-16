/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 26 column grid
        '26': 'repeat(26, 10vh)',
      },
      gridTemplateRows: {
      // Simple 10 column grid
      '10': 'repeat(10, 10vh)',
      },
      transitionProperty:{
        'transition-duration': '0.7s',
        'transition-timing-function': 'cubic-bezier(0.2, 0.6, 0.35, 1)',
        'transition-delay': '0s',
        'transition-property': 'all'
      },
      width:{
        'section': 'calc(160vh)',
        'section-wrapper': 'calc(100vh * 2.6* 6)',
      },
    },
  },
  plugins: [require("daisyui")],
}