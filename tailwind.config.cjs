/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#015eff",
        secondary: "#00f6ff",
        mainWhite: "#fff",
        mainBlack: "000",
        dimWhite: "rgba(255, 255, 255, 0.9)",
        darkBlue: "#1e2a53",
        blue: "#1C2DC7",
        GreyOne: "#1E1F34",
        GreyTwo: "#41424F",
        grey: "#8e93a6",
        greyThree: "rgb(159, 159, 164, 0.3)",
        greyFour: "rgb(159, 159, 164, 0.9)",
        greyFive: "rgb(159, 159, 164, 0.125)",
        greySix: "#e7ecef",
        LightGrey: "rgb(159, 159, 164, 0.05)",
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
