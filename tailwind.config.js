/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './src/**/*.{js,ts,jsx,tsx}',
  './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
],
  darkMode: 'class', // enable dark mode support
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        // Primary
        green: {
          500: 'hsl(163, 72%, 41%)',
        },
        red: {
          500: 'hsl(356, 69%, 56%)',
          700: 'hsl(348, 97%, 39%)',
        },
        blue: {
          600: 'hsl(208, 92%, 53%)', // Facebook
          500: 'hsl(203, 89%, 53%)', // Twitter
          50: 'hsl(225, 100%, 98%)', // Light Top BG
        },
        'instagram-gradient': 'linear-gradient(to right, hsl(37, 97%, 70%), hsl(5, 77%, 71%), hsl(329, 70%, 58%))',
        insta1: 'hsl(37, 97%, 70%)',
        insta2: 'hsl(5, 77%, 71%)',
        insta3: 'hsl(329, 70%, 58%)',

        // Toggle
        toggle: {
          light: 'hsl(230, 22%, 74%)', // Gray 400
          darkFrom: 'hsl(210, 79%, 56%)',
          darkTo: 'hsl(146, 68%, 55%)',
        },

        // Neutral - Light
        white: 'hsl(0, 100%, 100%)',
        navy: {
          50: 'hsl(227, 47%, 96%)',
          950: 'hsl(228, 28%, 20%)',
        },
        gray: {
          400: 'hsl(230, 22%, 74%)', // Shared
          650: 'hsl(228, 12%, 44%)',
          950: 'hsl(230, 17%, 14%)',
        },

        // Neutral - Dark
        dark: {
          bg: 'hsl(230, 17%, 14%)',
          topBg: 'hsl(232, 19%, 15%)',
          text: 'hsl(0, 100%, 100%)',
        },
      },
      fontSize: {
        sm: '14px', // For overview card headings
      },
      backgroundImage: {
        'instagram-gradient': 'linear-gradient(to right, hsl(37, 97%, 70%), hsl(5, 77%, 71%), hsl(329, 70%, 58%))',
        'toggle-dark': 'linear-gradient(to right, hsl(210, 79%, 56%), hsl(146, 68%, 55%))',
      },
    },
  },
  plugins: [],
}
