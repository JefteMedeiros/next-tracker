/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DE5285",
        "gray-900": "#222222",
        "purple-600": "#58598C",
      },
      fontFamily: {
        nunito: ["var(--font-nunito)"],
      },
    },
  },
  plugins: [],
}
