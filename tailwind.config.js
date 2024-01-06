/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "10px",
        sm: "10px",
        lg: "20px",
      },
    },
    colors: {
      primary: "#312525",
      secondary: "#B3A296",
      content: "#808080",
      header: "#062D4E",
      footer: "#243139",
      white: "#FFFFFF",
      black: "#212121",
      card: "#FAFAFA",
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      neucha: ["Neucha", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
