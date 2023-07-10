/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        mainheading: "var(--fs-mainheading)",
        heading: "var(--fs-heading)",
        subheading: "var(--fs-subheading)",
        paragraph: "var(--fs-paragraph)",
      },

      fontFamily: {
        roboto: "var(--roboto)",
      },

      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "767px" },
        sm: { max: "639px" },
      },

      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        white: "var(--color-white)",
        black: "var(--color-black)",
        headingColor: "var(--color-heading)",
        paragraphColor: "var(--color-paragraph)",
        ghost: "var(--color-ghost)",
        semiblack: "var(--color-semiblack)",
        grey: "var(--color-grey)",
        bgblack: "var(--color-bgblack)",
      },
      container: {
        center: true,
        padding: "2rem",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
    require("flowbite/plugin"),
  ],
};
