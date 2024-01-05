/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3366CC", // new blue color
          "orange": "#FFA500", // new orange color
          "green": "#008000" // new green color
        },
        secondary: "#4682B4", // new secondary color
        "gray-200": "#ADD8E6", // new gray-200 color
        "gray-300": "#87CEEB", // new gray-300 color
        "gray-500": "#5F9EA0", // new gray-500 color
        "gray-600": "#708090", // new gray-600 color
        "gray-700": "#556B2F", // new gray-700 color
        "gray-900": "#000080", // new gray-900 color
        "white-100": "#B0C4DE", // new white-100 color
        "white-200": "#F0F8FF", // new white-200 color
        "black-100": "#1E90FF", // new black-100 color
        "neutral-black": "#0000CD", // new neutral-black color
      },
      boxShadow: {
        xs: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      },
      maxWidth: {
        "10xl": '1440px'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
      },
      borderRadius: {
        10: "10px"
      }
    },
  },
  plugins: [],
};
