/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'dark-background': 'linear-gradient(45deg, #1b3547, #07090a, #0453a8, #292d2e, #f5cee1)', // Cambia este valor al color deseado
      },
    },
  },
  plugins: [],
}

