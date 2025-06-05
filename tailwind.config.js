/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A2463',
          50: '#E6EBF4',
          100: '#C0D0E7',
          200: '#7A9BD0',
          300: '#4575BE',
          400: '#23508F',
          500: '#0A2463',
          600: '#081D4F',
          700: '#06163B',
          800: '#040F27',
          900: '#020814',
        },
        secondary: {
          DEFAULT: '#147D9C',
          50: '#E6F3F7',
          100: '#C0E1EA',
          200: '#7ABDD1',
          300: '#359EB9',
          400: '#1A8EAB',
          500: '#147D9C',
          600: '#106580',
          700: '#0C4D61',
          800: '#083542',
          900: '#041C23',
        },
        tertiary: {
          DEFAULT: '#8DA9C4',
          50: '#F5F7FA',
          100: '#E9EFF5',
          200: '#D2DFE9',
          300: '#BBCFDE',
          400: '#A4BFD1',
          500: '#8DA9C4',
          600: '#6F93B3',
          700: '#517DA2',
          800: '#3D6080',
          900: '#29425A',
        },
        neutral: {
          white: '#F5F7FA',
          gray: '#E9ECEF',
        },
        dark: '#2D3748',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}