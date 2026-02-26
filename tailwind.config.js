/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0f0f0f",
        graphite: "#151515",
        panel: "#191919",
        chrome: "#242424",
        warm: "#a8a29e",
        accent: "#e2643a",
        accentSoft: "#f27a4d",
        violet: "#7c5cff",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
}

