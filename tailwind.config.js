/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Sora: ["Sora", "sans-serif"],
      },
      colors: {
        gold: {
          900: "#F19A33",
        },
        "royal-green": {
          600: "657782",
          900: "#12373F",
        },
      },
    },
  },
  plugins: [],
};
