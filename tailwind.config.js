/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"]
      },
      colors: {
        "accent": "#18F2A5",
        "foreground": "#F5F5F5",
        "background-light": "#1A1A1A",
        "background-dark": "#080808",
        "background": "#111",
      },
    },
  },
  plugins: [],
};
