import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";
import ThemeToggle from "./ThemeToggle";

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
              {section.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Theme Toggle Button */}
        <div className="hidden md:flex">
          <ThemeToggle />
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
