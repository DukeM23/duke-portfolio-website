/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,jpg}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        primary: {
          900: "#e4dccf",
        },
        secondary: {
          100: "#7d9d9c",
          200: "#576f72",
        },
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
        "float-1": {
          "0%": { transform: "translateY(-5%)" },
          "50%": { transform: "translateY(10%)" },
          // "50%": { transform: "translateY(-5%)" },
          // "66%": { transform: "translateY(10%)" },
          "100%": { transform: "translateY(-5%)" },
        },
        "bounce-right": {
          "0%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(10%)" },
          // "50%": { transform: "translateY(-5%)" },
          // "66%": { transform: "translateY(10%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "float-1": "float-1 2s ease-in-out infinite",
        "bounce-right": "bounce-right 1s ease-in-out infinite"
      },
    },
  },
  plugins: [],
};

