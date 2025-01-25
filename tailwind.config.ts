/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Habilita o dark mode baseado em classes
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Inclui diretório `src`
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        background: "var(--bg-color)",
        "secondary-bg": "var(--secondary-bg-color)",

        // Texts
        text: "var(--text-color)",

        // Primary and Secondary Colors
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",

        // Accent Colors
        accent: "var(--accent-color)", // Pastel orange
        "light-accent": "var(--light-accent-color)", // Light lavender
        "soft-blue": "var(--soft-blue)", // Soft blue

        // Buttons
        "button-bg": "var(--button-bg-color)",
        "button-hover": "var(--button-hover-color)",
        "button-text": "var(--button-text-color)",

        // Borders
        border: "var(--border-color)",
      },
    },
  },
  plugins: [],
};
