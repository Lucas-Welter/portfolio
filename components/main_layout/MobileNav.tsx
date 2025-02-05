import React from "react";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./ThemeToggle";
import LanguageDropdown from "./LanguageDropDown";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const { t } = useTranslation();

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeNav}
        className={`fixed inset-0 z-40 bg-black bg-opacity-40 backdrop-blur-sm ${nav ? "opacity-100" : "opacity-0 pointer-events-none"
          } transition-opacity duration-300`}
        aria-hidden={!nav}
      ></div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-4/5 max-w-sm bg-background shadow-lg transform ${nav ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          } transition-opacity duration-300 ease-out flex flex-col`}
        role="dialog"
        aria-hidden={!nav}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-border">
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col justify-center items-center px-8 flex-grow space-y-8">
          {["home", "about", "services", "projects", "experiences", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}-section`}
              onClick={closeNav}
              className="text-text dark:text-text text-2xl font-semibold hover:text-primary dark:hover:text-light-accent transition duration-200"
            >
              {t(`${section}`)}
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div className="w-full h-[1px] bg-border dark:bg-border mb-6"></div>

        {/* Theme Toggle and Language Dropdown */}
        <div className="px-8 py-6 flex flex-col items-center space-y-4">
          <div className="flex flex-col items-center">
            <p className="text-sm text-secondary dark:text-text mb-2">
              {t("mobileNav.switchLanguage")}
            </p>
            <LanguageDropdown />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm text-secondary dark:text-text mb-2">
              {t("mobileNav.switchTheme")}
            </p>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
