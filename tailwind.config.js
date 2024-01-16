/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "rgba(18, 18, 164, 0.72)",
        secondary: "#1ccdff",
        third: "#31303d",
      },
      opacity: {
        10: "0.1",
        25: "0.25",
        50: "0.5",
        75: "0.75",
        90: "0.9",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
