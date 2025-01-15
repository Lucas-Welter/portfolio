import { Bars3Icon } from "@heroicons/react/20/solid";
import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

interface Props {
  openNav: () => void;
}

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
    });
  }
};

const Nav = ({ openNav }: Props) => {
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
          <button onClick={() => scrollToSection("home-section")} className="nav-link text-text">
            HOME
          </button>
          <button onClick={() => scrollToSection("about-section")} className="nav-link text-text">
            ABOUT
          </button>
          <button onClick={() => scrollToSection("services-section")} className="nav-link text-text">
            SERVICES
          </button>
          <button onClick={() => scrollToSection("projects-section")} className="nav-link text-text">
            PROJECTS
          </button>
          <button onClick={() => scrollToSection("contact-section")} className="nav-link text-text">
            CONTACT
          </button>
        </div>

        {/* Theme Toggle Button */}
        {isHydrated && (
          <button
            onClick={toggleTheme}
            className="hidden md:block p-2 rounded-md bg-secondary text-text"
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        )}

        {/* Mobile Menu Icon */}
        <div onClick={openNav} className="md:hidden flex items-center cursor-pointer">
          <Bars3Icon className="w-8 h-8 text-primary" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
