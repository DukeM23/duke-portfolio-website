/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,jpg}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        primary: "#e4dccf",
        secondary: "#576f72",
        // 'tertiery'
      },
      fontFamily: {
        roboto: ['"Robot"', "sans-serif"],
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(2rem)" },
          "50%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(2rem)" },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};

