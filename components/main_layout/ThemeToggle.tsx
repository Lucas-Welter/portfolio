import React, { useState, useEffect } from "react";
import { useDarkMode } from "../../hooks/useDarkMode";
import { SunIcon, MoonIcon } from "@heroicons/react/20/solid";

const ThemeToggle: React.FC = () => {
  const [theme, toggleTheme] = useDarkMode();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null; 
  }

  return (
    <div
      onClick={toggleTheme}
      className="relative w-14 h-8 md:max-lg:w-16 md:max-lg:h-10 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center cursor-pointer transition-all duration-300"
      aria-label={`Mudar para o modo ${theme === "light" ? "dark" : "light"}`}
    >
      <div
        className={`
          absolute 
          w-6 h-6 
          md:max-lg:w-8 md:max-lg:h-8 
          bg-white dark:bg-black 
          rounded-full shadow-md 
          transform transition-transform duration-300 
          ${theme === "light" ? "translate-x-1 md:max-lg:translate-x-1" : "translate-x-7 md:max-lg:translate-x-8"}
        `}
      ></div>
      <div
        className={`
          absolute left-2 top-1/2 
          transform -translate-y-1/2 
          ${theme === "light" ? "opacity-100" : "opacity-0"} 
          transition-opacity duration-300
        `}
      >
        <SunIcon className="h-4 w-4 md:max-lg:h-5 md:max-lg:w-5 text-accent" />
      </div>
      <div
        className={`
          absolute right-2 top-1/2 
          transform -translate-y-1/2 
          ${theme === "dark" ? "opacity-100" : "opacity-0"} 
          transition-opacity duration-300
        `}
      >
        <MoonIcon className="h-4 w-4 md:max-lg:h-5 md:max-lg:w-5 text-soft-blue" />
      </div>
    </div>
  );
};

export default ThemeToggle;
