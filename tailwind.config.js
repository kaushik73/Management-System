/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // A custom blue for primary
        secondary: "#F59E0B", // A custom yellow for secondary
        accent: "#22C55E", // A custom green for accents
        dark: "#111827", // Dark background color
        light: "#F3F4F6", // Light background color
      },
      height: {
        header: "50px", // Custom height for the header
        footer: "110px", // Custom height for the footer
        content: "calc(100vh - 160px)", // Full viewport height minus header and footer
      },
    },
  },
  plugins: [],
};
