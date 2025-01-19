/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable class-based dark mode
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-color)",
        "secondary-bg": "var(--secondary-bg-color)", "tertiary-bg": "var(--tertiary-bg-color)",
        "gradient-bg": "var(--gradient-bg-color)", 
        text: "var(--text-color)",
        "secondary-text": "var(--secondary-text-color)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        tertiary: "var(--tertiary-color)",
        "button-bg": "var(--button-bg-color)",
        "button-hover": "var(--button-hover-color)",
        "button-text": "var(--button-text-color)",
        "card-bg": "var(--card-bg-color)",
        border: "var(--border-color)",
        success: "var(--success-color)",
        error: "var(--error-color)",
        focus: "var(--focus-color)",
      },
    },
  },
  plugins: [],
};
