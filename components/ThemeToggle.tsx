import React, { useState, useEffect } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import { SunIcon, MoonIcon } from "@heroicons/react/20/solid";

const ThemeToggle: React.FC = () => {
  const [theme, toggleTheme] = useDarkMode();
  const [hydrated, setHydrated] = useState(false);

  // Ensure the component is hydrated before rendering the toggle
  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null; // Avoid rendering until hydration is complete
  }

  return (
    <div
      onClick={toggleTheme}
      className="relative w-14 h-8 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center cursor-pointer transition-all duration-300"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {/* Knob */}
      <div
        className={`absolute w-6 h-6 bg-white dark:bg-black rounded-full shadow-md transform transition-transform duration-300 ${
          theme === "light" ? "translate-x-1" : "translate-x-7"
        }`}
      ></div>

      {/* Sun Icon */}
      <div
        className={`absolute left-2 top-1/2 transform -translate-y-1/2 ${
          theme === "light" ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
      >
        <SunIcon className="h-4 w-4 text-accent" />
      </div>

      {/* Moon Icon */}
      <div
        className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
      >
        <MoonIcon className="h-4 w-4 text-soft-blue" />
      </div>
    </div>
  );
};

export default ThemeToggle;
