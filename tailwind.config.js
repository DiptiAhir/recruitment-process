/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all components
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Deep indigo
        secondary: "#F97316", // Vibrant orange
        accent: "#22C55E", // Green for success
        background: "#F9FAFB", // Light gray for page background
        textDark: "#1F2937", // Dark gray for text
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"], // Modern sans-serif font
      },
      boxShadow: {
        card: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle card shadow
        focus: "0 0 0 4px rgba(79, 70, 229, 0.5)", // Focus ring
      },
    },
  },
  plugins: [],
};
