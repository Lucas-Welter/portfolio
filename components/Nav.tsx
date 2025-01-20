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
  const [isHydrated, setIsHydrated] = useState(false); // Check for hydration

  useEffect(() => {
    setIsHydrated(true); // Mark hydration as complete
  }, []);

  if (!isHydrated) return null; // Wait for hydration before rendering

  return (
    <nav className="w-full fixed z-50 top-0 bg-background shadow-md">
      <div className="flex items-center justify-between w-[90%] max-w-[1200px] mx-auto h-[10vh]">
        {/* Logo */}
        <h1
          className="cursor-pointer text-[25px] text-text font-bold flex items-center"
          onClick={() => scrollToSection("home-section")}
        >
          LUCAS
          <span className="text-primary"> WELTER</span>
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {["home", "about", "services", "projects", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(`${section}-section`)}
              className="nav-link text-text hover:text-primary transition-all duration-300"
            >
              {t(section)} {/* Translated text */}
            </button>
          ))}
        </div>

        {/* Theme Toggle and Language Dropdown */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <LanguageDropdown /> {/* New Language Dropdown Component */}
        </div>

        {/* Mobile Menu Icon */}
        <div
          onClick={toggleNav}
          className="md:hidden flex items-center cursor-pointer"
        >
          {nav ? (
            <XMarkIcon className="w-8 h-8 text-primary" />
          ) : (
            <Bars3Icon className="w-8 h-8 text-primary" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;


