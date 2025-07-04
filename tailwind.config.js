/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#b12c33", // Red button
        secondary: "#eeca36", // Yellow text
        accent: "#9c4039",
        light: "#f1e6b8",
        navy: "#203356", // Header background
        whiteSoft: "#fcf6f6",
        yellowBright: "#f0b320",
      },
      fontFamily: {
        helvetica: ["Helvetica", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
