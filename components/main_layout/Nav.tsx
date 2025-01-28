import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageDropdown from "./LanguageDropDown";
import { useTranslation } from "react-i18next";

interface Props {
  nav: boolean;
  toggleNav: () => void;
}

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
    });
  }
};

const Nav = ({ nav, toggleNav }: Props) => {
  const { t } = useTranslation();
  const translate = (key: string) => t(key, { defaultValue: key });
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return (
    <nav className="w-full fixed z-50 top-0 bg-background shadow-md dark:bg-secondary-bg">
      <div className="flex items-center justify-between w-[90%] max-w-[1200px] mx-auto h-[10vh]">
        {/* Logo */}
        <h1
          className="cursor-pointer text-[25px] font-bold flex items-center text-text hover:text-primary transition-colors duration-300"
          onClick={() => scrollToSection("home-section")}
        >
          <span className="text-text dark:text-text">LUCAS</span>
          <span className="text-primary"> WELTER</span>
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {["home", "about", "services", "projects", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(`${section}-section`)}
              className="nav-link text-text dark:text-text hover:text-primary dark:hover:text-button-hover transition-all duration-300"
            >
              {translate(section)}
            </button>
          ))}
        </div>

        {/* Theme Toggle and Language Dropdown */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <LanguageDropdown />
        </div>

        {/* Mobile Menu Icon */}
        <div onClick={toggleNav} className="md:hidden flex items-center cursor-pointer">
          {nav ? (
            <XMarkIcon className="w-8 h-8 text-primary dark:text-primary" />
          ) : (
            <Bars3Icon className="w-8 h-8 text-primary dark:text-primary" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
