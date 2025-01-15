import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

interface Props {
  nav: boolean; // Add nav state to determine whether the mobile nav is open
  toggleNav: () => void; // Rename openNav to toggleNav for better semantics
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
  const [theme, toggleTheme] = useDarkMode();

  // Add a hydration flag to render theme-dependent content only after hydration
  const [isHydrated, setIsHydrated] = React.useState(false);

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

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
          <button
            onClick={() => scrollToSection("home-section")}
            className="nav-link text-text"
          >
            HOME
          </button>
          <button
            onClick={() => scrollToSection("about-section")}
            className="nav-link text-text"
          >
            ABOUT
          </button>
          <button
            onClick={() => scrollToSection("services-section")}
            className="nav-link text-text"
          >
            SERVICES
          </button>
          <button
            onClick={() => scrollToSection("projects-section")}
            className="nav-link text-text"
          >
            PROJECTS
          </button>
          <button
            onClick={() => scrollToSection("contact-section")}
            className="nav-link text-text"
          >
            CONTACT
          </button>
        </div>

        {/* Theme Toggle Button */}
        {isHydrated && (
          <button
            onClick={toggleTheme}
            className="hidden md:flex items-center justify-center p-2 rounded-full shadow-lg text-text hover:bg-primary hover:text-white transition-all duration-300"
          >
            {theme === "light" ? (
              <SunIcon className="h-6 w-6 text-yellow-500" />
            ) : (
              <MoonIcon className="h-6 w-6 text-blue-500" />
            )}
          </button>
        )}

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
