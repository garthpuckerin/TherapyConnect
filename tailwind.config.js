/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: 'var(--color-surface)',
        accent: 'var(--color-accent)',
        text: 'var(--color-text)',
        // Add more semantic color roles as needed
        primary: {
          50: '#f6fcf7', // very light green (background)
          100: '#e9fbe9', // light green
          200: '#d3f7d6', // pale green
          300: '#b0efbb', // soft green
          400: '#7fe7a2', // accent green
          500: '#52d98b', // main green
          600: '#36b87c', // strong green
          700: '#28996b', // deep green
          800: '#217c5a', // dark green
          900: '#1a6047', // very dark green
        },
        secondary: {
          50: '#ffffff', // white for gradients
          100: '#f6fcf7', // match lightest primary
          200: '#e9fbe9', // match primary 100
          300: '#d3f7d6', // match primary 200
          400: '#b0efbb', // match primary 300
          500: '#7fe7a2', // match primary 400
          600: '#52d98b', // match primary 500
          700: '#36b87c', // match primary 600
          800: '#28996b', // match primary 700
          900: '#217c5a', // match primary 800
        },
      },
      primary: {
        50: '#f6fcf7', // very light green (background)
        100: '#e9fbe9', // light green
        200: '#d3f7d6', // pale green
        300: '#b0efbb', // soft green
        400: '#7fe7a2', // accent green
        500: '#52d98b', // main green
        600: '#36b87c', // strong green
        700: '#28996b', // deep green
        800: '#217c5a', // dark green
        900: '#1a6047', // very dark green
      },
      secondary: {
        50: '#ffffff', // white for gradients
        100: '#f6fcf7', // match lightest primary
        200: '#e9fbe9', // match primary 100
        300: '#d3f7d6', // match primary 200
        400: '#b0efbb', // match primary 300
        500: '#7fe7a2', // match primary 400
        600: '#52d98b', // match primary 500
        700: '#36b87c', // match primary 600
        800: '#28996b', // match primary 700
        900: '#217c5a', // match primary 800
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
