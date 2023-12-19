module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 700: "#58595b" },
        deep_orange: {
          "600_34": "#ff4e0f34",
          "700_00": "#d65b1500",
          "700_0f": "#e357130f",
        },
        light_green: { A700: "#2dc100" },
        light_blue: { A700: "#0084ff" },
        red: {
          A700_0c: "#eb0a1e0c",
          A700_33: "#eb0a1e33",
          A700_99: "#eb0a1e99",
          A700: "#eb0a1e",
        },
        white: { A700: "#ffffff" },
      },
      fontFamily: { avenirltstd: "Avenir LT Std", sfprotext: "SF Pro Text" },
      backgroundImage: {
        gradient:
          "linear-gradient(75deg ,#eb0a1e,#ff4e0f34,#e357130f,#d65b1500)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
