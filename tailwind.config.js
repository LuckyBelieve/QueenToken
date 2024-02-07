/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FEF1C5",
        secondary: "#A18451",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        base: "16px",
        lg: "20px",
        xxl: "60px",
      },
    },
  },
  plugins: [],
};
