/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#62943b",
        secondary: "#c3ca2b",
        mainWhite: "#fff",
        mainBlack: "000",
        dimWhite: "rgba(255, 255, 255, 0.9)",
        red: "rgb(219, 21, 21)",
        lightGreen: "#f7fff3",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      vs: "320px",
      xs: "450px",
      ss: "620px",
      sm: "768px",
      xsm: "900px",
      md: "1060px",
      lg: "1200px",
      xl: "1500px",
      xxl: "1700px",
    },
  },
  plugins: [],
};
