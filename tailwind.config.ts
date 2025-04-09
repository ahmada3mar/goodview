
import type { Config } from 'tailwindcss'
export default <Partial<Config>>{
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true, // Yeh container ko center karega (mx-auto)
        screens: {
          DEFAULT: "1360px", // Max width 1360px
        },
      },
      colors: {
        customPrimary: {
          DEFAULT: '#ffd34e',
          50: '#FFF0E6',
          100: '#ffd34e',
          200: '#3EA8FF',
          300: '#0084F0',
          400: '#005AA4',
          500: '#ffd34e',
          600: '#002A4D',
          700: '#002543',
          800: '#001F38',
          900: '#00192E',
          950: '#001729',
          yellow: "rgb(255 211 78)"
        }

      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      rubik: ['Rubik', 'sans-serif'],
    },
  },
}