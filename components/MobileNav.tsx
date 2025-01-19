import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";
import ThemeToggle from "./ThemeToggle";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeNav}
        className={`fixed inset-0 z-40 bg-black bg-opacity-40 backdrop-blur-sm ${
          nav ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-opacity duration-300`}
        aria-hidden={!nav}
      ></div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-4/5 max-w-sm bg-background shadow-lg transform ${
          nav ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } transition-transform transition-opacity duration-300 ease-out flex flex-col`}
        role="dialog"
        aria-hidden={!nav}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-border">
          <h1 className="text-text text-2xl font-bold">
            LUCAS<span className="text-primary"> WELTER</span>
          </h1>
          <XMarkIcon
            className="w-8 h-8 text-primary cursor-pointer hover:text-secondary transition duration-200"
            onClick={closeNav}
            aria-label="Close navigation"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col justify-center items-center px-8 flex-grow space-y-8">
          {["home", "about", "services", "projects", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}-section`}
              onClick={closeNav}
              className="text-text text-2xl font-semibold hover:text-primary transition duration-200"
            >
              {section.toUpperCase()}
            </a>
          ))}
        </nav>

        {/* Theme Toggle Switch */}
        <div className="px-8 py-6">
          <div className="flex flex-col items-center">
            <p className="text-sm text-secondary mb-2">Switch Theme</p>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
