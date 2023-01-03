/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      gridRowEnd: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
      },
      gridTemplateColumns: {
        // Simple 26 column grid
        '19': 'repeat (19, 10vh)',
        '26': 'repeat(26, 10vh)',
        '33': 'repeat(33, 10vh)',
      },
      gridTemplateRows: {
      // Simple 10 column grid
      '10': 'repeat(10, 10vh)',
      },
      height:{
        'section': '100vh',
      },
      keyframes:{
        'fade': {
            '0%': { opacity: 1 },
            '100%': { opacity: 0 },
        },
      },
      letterSpacing:{
        'tight': '-3px',
      },
      transitionProperty:{
        'transition-duration': '0.7s',
        'transition-timing-function': 'cubic-bezier(0.2, 0.6, 0.35, 1)',
        'transition-delay': '0s',
        'transition-property': 'all'
      },
      visibility: ["group-hover"],
      width:{
        'section': '260vw',
        'section-2': '330vw',
        'section-wrapper': 'calc(100vh * 2.6* 6)',
      },
    },
  },
  plugins: [require("daisyui")],
}