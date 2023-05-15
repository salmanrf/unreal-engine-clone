/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      grey: "rgb(32, 35, 55)",
      lightBlue: "rgb(0, 157, 223)",
      darkBlue: "rgb(32, 35, 55)",
      darkerBlue: "rgb(14, 17, 40)",
      white: "#FFFFFF",
      black: "#000000",
      whiteSemiTransparent: "rgba(255, 255, 255, 0.87)",
      whiteBorder: "rgb(56, 59, 80)",
    },
    extend: {
      spacing: {
        0.75: "0.1875rem",
        7.5: "1.875rem",
        12: "3rem",
        12.5: "3.125rem",
        13: "3.25rem",
        26: "6.5rem",
      },
      fontSize: {
        xxs: "0.6875rem",
      },
      backgroundImage: {
        "blue-gradient":
          "radial-gradient(100% 185.14% at 100% 100%, rgb(52, 195, 255) 0%, rgb(51, 142, 238) 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
