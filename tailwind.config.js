/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'protest-strike': ['"Protest Strike"', 'sans-serif'], // Add custom font here
      },
    },
  },
  plugins: [],
}