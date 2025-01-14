// components/Nav.tsx
import { Bars3Icon } from "@heroicons/react/20/solid";
import React from "react";

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
  return (
    <nav className="w-full fixed z-50 top-0 bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[90%] max-w-[1200px] mx-auto h-[10vh]">
        {/* Logo */}
        <h1
          className="cursor-pointer text-[25px] text-white font-bold flex items-center"
          onClick={() => scrollToSection("home-section")}
        >
          LUCAS
          <span className="text-yellow-300"> WELTER</span>
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection("home-section")}
            className="nav-link"
          >
            HOME
          </button>
          <button
            onClick={() => scrollToSection("about-section")}
            className="nav-link"
          >
            ABOUT
          </button>
          <button
            onClick={() => scrollToSection("services-section")}
            className="nav-link"
          >
            SERVICES
          </button>
          <button
            onClick={() => scrollToSection("projects-section")}
            className="nav-link"
          >
            PROJECTS
          </button>
          <button
            onClick={() => scrollToSection("contact-section")}
            className="nav-link"
          >
            CONTACT
          </button>
          
        </div>

        {/* Mobile Menu Icon */}
        <div
          onClick={openNav}
          className="md:hidden flex items-center cursor-pointer"
        >
          <Bars3Icon className="w-8 h-8 text-yellow-300" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
