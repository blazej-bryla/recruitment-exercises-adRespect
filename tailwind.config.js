/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.{html, js, css}', './index.html,'],

  theme: {
    extend: {
      screens: {
        project: '1440px'
      },
      maxWidth: {
        project: 1440
      },
      colors: {
        green: '#1B5B31',
        darkerGreen: '#113d21',
        gray: '#F5F0EC',
        beige: '#DCC1AB',
        darkerBeige: '#d6b69c',
        black: '#111111',
        darkerWhite: '#f7f7f7'
      },
      textColor: {
        white: '#F5F0EC'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      }
    }
  },
  plugins: []
}
