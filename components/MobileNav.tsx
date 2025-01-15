import { XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/20/solid";
import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const [theme, toggleTheme] = useDarkMode(); // Use the dark mode hook

  // Animation for sliding menu
  const navAnimation = nav ? "translate-x-0" : "-translate-x-full";

  return (
    <div
      className={`fixed ${navAnimation} transform transition-transform duration-300 top-0 left-0 right-0 bottom-0 z-50 bg-background`}
    >
      {/* Close Icon */}
      <div
        onClick={closeNav}
        className="absolute top-4 right-4 text-primary cursor-pointer"
      >
        <XMarkIcon className="w-8 h-8" />
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col justify-center items-center h-full space-y-6">
        <a
          href="#home-section"
          onClick={closeNav}
          className="text-text text-2xl font-semibold hover:text-primary transition duration-200"
        >
          HOME
        </a>
        <a
          href="#about-section"
          onClick={closeNav}
          className="text-text text-2xl font-semibold hover:text-primary transition duration-200"
        >
          ABOUT
        </a>
        <a
          href="#services-section"
          onClick={closeNav}
          className="text-text text-2xl font-semibold hover:text-primary transition duration-200"
        >
          SERVICES
        </a>
        <a
          href="#projects-section"
          onClick={closeNav}
          className="text-text text-2xl font-semibold hover:text-primary transition duration-200"
        >
          PROJECTS
        </a>
        <a
          href="#contact-section"
          onClick={closeNav}
          className="text-text text-2xl font-semibold hover:text-primary transition duration-200"
        >
          CONTACT
        </a>

        {/* Theme Toggle */}
        <button
          onClick={() => {
            toggleTheme();
          }}
          className="flex items-center justify-center mt-6 p-4 rounded-full shadow-md hover:bg-primary transition-all duration-300"
        >
          {theme === "light" ? (
            <SunIcon className="h-6 w-6 text-yellow-500" />
          ) : (
            <MoonIcon className="h-6 w-6 text-blue-500" />
          )}
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
