/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,js,tsx,jsx}', './src/**/*.{ts,js,tsx,jsx}'],
  theme: {
    extend: {
        colors: {
          custGreen: "#4EE1A0",
          custBlack: {
            100: "#151515",
            200: "#242424",
            300: "#d9d9d9",
            400: "#FFFFFF"
          },
          custRed: "#FF6F5B"
        },
    },
  },
  plugins: [],
}