/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#A8715A",
        secondary: "#DD8560",
      },
      fontFamily: {
        Tanor: ["Tenor Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
