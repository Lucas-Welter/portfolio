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
        background: "var(--bg-color)", // Light/dark alternado
        "secondary-bg": "var(--secondary-bg-color)",

        // Texts
        text: "var(--text-color)", // Cor padrão para textos

        // Primary and Secondary Colors
        primary: "var(--primary-color)", // Roxo principal
        secondary: "var(--secondary-color)", // Roxo secundário

        // Accent Colors
        accent: "var(--accent-color)", // Laranja suave
        "light-accent": "var(--light-accent-color)", // Lavanda clara
        "soft-blue": "var(--soft-blue)", // Azul suave para destaques

        // Buttons
        "button-bg": "var(--button-bg-color)", // Cor de fundo dos botões
        "button-hover": "var(--button-hover-color)", // Hover dos botões
        "button-text": "var(--button-text-color)", // Texto do botão

        // Cards
        "card-bg": "var(--card-bg-color)", // Fundo de cards

        // Borders
        border: "var(--border-color)", // Cor de borda padrão
      },
    },
  },
  plugins: [],
};
