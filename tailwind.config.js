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
            300: "#D9D9D9",
            400: "#FFFFFF"
          },
          custRed: "#FF6F5B"
        },
        width: {
          '128': '32rem',
          '138': '50rem',
        },
        height: {
          '102':'32rem',
          '128': '50rem',
        }
    },
  },
  plugins: [],
}