/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        morabba_light: "morabba_light",
        morabba_medium: "morabba_medium",
        morabba_bold: "morabba_bold",
        dana_light: "morabba_light",
      },
      colors: {
        primaryColor: "#FF5023", // orange dark
        secondaryColor: "#FF50231F", // orange light
        // secondaryColor: "#FF9A2E", // orange light
        thirdColor: "#FF5D42", // red
        // background
        button_light: "#FFFFFF",
        box_lighten_primary: "#DEDEDE",
        box_lighten_secondry: "#F9F9F9",
        box_darken_primary: "#E1E1E1",
        offer_darken: "#EFEFEF",
        // text
        txt_color_primary_l: "#212121",
        txt_color_secondry_l: "#9C9C9C",
        txt_color_footer_l: "#818181",

        primary_lighteen: "#FFFFFF",
        primary_darken: "#1E2026",
        primary_glass: "#FFFFFF54",
      },
      boxShadow: {
        primary_shadow: "0px 0px 17px 0px #0000000F",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
