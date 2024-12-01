
import type { Config } from 'tailwindcss'
export default <Partial<Config>>{
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        customPrimary:{
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
          950: '#001729'
        } 

      },
    },
    fontFamily: {
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
  },
}