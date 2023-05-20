/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      colors: {
        project_primary: "#25316D",
        project_secondary: "#5F6F94",
        project_tertiary: "#5068A9",
        project_white: "#97D2EC",
        project_yellow: "#FEF5AC",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes
    }),
  ],
};
