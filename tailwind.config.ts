/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: true,
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        overlay: 'rgba(43, 45, 66, 0.5)',
        background: '#2b2d42',
        button: '#f8f32b',
        headline: '#ffffff',
        paragraph: '#8d99ae',
        buttonText: '#2b2d42',
        stroke: '#8d99ae',
        main: '#f8f32b',
        highlight: '#f8f32b',
        secondary: '#8d99ae',
        tertiary: '#000000',
      },
      fontFamily: {
        sans: ['Poppins', 'sans'],
        serif: ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};