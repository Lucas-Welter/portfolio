/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores base
        background: "var(--bg-color)",
        "secondary-bg": "var(--secondary-bg-color)",
        text: "var(--text-color)",
        
        // Cores principais
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        
        // Cores de destaque
        accent: "var(--accent-color)",
        "light-accent": "var(--light-accent-color)",
        "soft-blue": "var(--soft-blue)",
        
        // Botões
        "button-bg": "var(--button-bg-color)",
        "button-hover": "var(--button-hover-color)",
        "button-text": "var(--button-text-color)",
        
        // Cards e elementos UI
        "card-bg": "var(--card-bg-color)",
        border: "var(--border-color)",
        
        "tech-bg": "var(--tech-bg)",
        "tech-hover-bg": "var(--tech-hover-bg)",
        "disabled-bg": "var(--disabled-bg)",
        "disabled-text": "var(--disabled-text)"
      },
    },
  },
  plugins: [],
};