import colors from "tailwindcss/colors"

/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      maxWidth: {
        '1/2': '50%'
      },
      colors: {
        banner:{
          default: '#fffed7'
        },
        primary: {
          ...colors.teal,
          DEFAULT: colors.teal["400"],
          light: colors.teal["200"],
          dark: colors.teal["600"]
        }
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)']
      },
      zIndex: {
        image: 1,
        hover: 15
      }
    },
  },
  plugins: [],
}
