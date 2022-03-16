const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      "lime-green": "hsl(163, 72%, 41%)",
      "bright-red": "hsl(356, 69%, 56%)",
      facebook: "hsl(208, 92%, 53%)",
      twitter: "hsl(203, 89%, 53%)",
      instagram: {
        color1: "hsl(37, 97%, 70%)",
        color2: "hsl(329, 70%, 58%)"
      },
      youtube: "hsl(348, 97%, 39%)",
      "toggle-dark": {
        blue: "hsl(210, 78%, 56%)",
        green: "hsl(146, 68%, 55%)",
      },
      "toggle-light": "hsl(230, 22%, 74%)",

      // dark theme
      dark: {
        "primary-bg": "hsl(230, 17%, 14%)",
        "top-bg": "hsl(232, 19%, 15%)",
        "card-bg": "hsl(228, 28%, 20%)",
        "blue-text": "hsl(228, 34%, 66%)",
        "primary-text": "hsl(0, 0%, 100%)",
      },

      // light theme
      light: {
        "primary-bg": "hsl(0, 0%, 100%)",
        "top-bg": "hsl(225, 100%, 98%)",
        "card-bg": "hsl(227, 47%, 96%)",
        "blue-text": "hsl(228, 12%, 44%)",
        "primary-text": "hsl(230, 17%, 14%)",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
