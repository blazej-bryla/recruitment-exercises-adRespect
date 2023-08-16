/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      maxWidth: {
        project: 1440
      },
      colors: {
        green: '#1B5B31',
        gray: '#F5F0EC',
        beige: '#DCC1AB',
        black: '#111111'
      },
      textColor: {
        white: '#F5F0EC'
      }
    }
  },
  plugins: []
}
