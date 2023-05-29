/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primaryGrey: "rgb(219, 222, 227)",
      secondaryGrey: "rgb(56, 59, 80)",
      grey: "rgb(32, 35, 55)",
      lightBlue: "rgb(0, 157, 223)",
      darkBlue: "rgb(32, 35, 55)",
      darkerBlue: "rgb(14, 17, 40)",
      white: "#FFFFFF",
      black: "#000000",
      primaryDark: "rgb(20 20 20)",
      secondaryDark: "rgb(56, 59, 80)",
      whiteSemiTransparent: "rgba(255, 255, 255, 0.87)",
      whiteBorder: "rgb(56, 59, 80)",
    },
    extend: {
      spacing: {
        0.75: "0.1875rem",
        5.5: "1.375rem",
        7.5: "1.875rem",
        12: "3rem",
        12.5: "3.125rem",
        13: "3.25rem",
        14: "3.5rem",
        26: "6.5rem",
      },
      fontSize: {
        xxs: "0.6875rem",
        "xs-1": "0.8125rem",
        "1.5xl": "1.375rem",
        "4.5xl": "2.5rem",
      },
      fontFamily: {
        "brutal-light": ["var(--font-brutal-light)"],
        "brutal-regular": ["var(--font-brutal-regular)"],
        "brutal-bold": ["var(--font-brutal-bold)"],
        "fira-mono": ["var(--font-fira-mono)"],
      },
      backgroundImage: {
        "blue-gradient":
          "radial-gradient(100% 185.14% at 100% 100%, rgb(52, 195, 255) 0%, rgb(51, 142, 238) 100%)",
        "blue-gradient-glow":
          "radial-gradient(100% 100% at 100% 100%, rgb(0, 171, 245) 0%, rgb(0, 171, 245) 100%) 5 / 1 / 0 stretch",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
