import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export const useDarkMode = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Read the current theme class on the <html> element
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'light'; // Default during SSR
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    // Update the <html> element class
    document.documentElement.classList.toggle('dark', newTheme === 'dark');

    // Save the theme to localStorage
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    // Sync state with the current theme class on the <html> element
    const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    setTheme(currentTheme);
  }, []);

  return [theme, toggleTheme];
};
