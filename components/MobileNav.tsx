import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  // Animation for sliding menu
  const navAnimation = nav ? "translate-x-0" : "-translate-x-full";

  return (
    <div
      className={`fixed ${navAnimation} transform transition-transform duration-300 top-0 left-0 right-0 bottom-0 z-50 bg-[#09101a]`}
    >
      {/* Close Icon */}
      <div
        onClick={closeNav}
        className="absolute top-4 right-4 text-yellow-300 cursor-pointer"
      >
        <XMarkIcon className="w-8 h-8" />
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col justify-center items-center h-full space-y-6">
        <a
          href="#home-section"
          onClick={closeNav}
          className="text-white text-2xl font-semibold hover:text-yellow-300 transition duration-200"
        >
          HOME
        </a>
        <a
          href="#about-section"
          onClick={closeNav}
          className="text-white text-2xl font-semibold hover:text-yellow-300 transition duration-200"
        >
          ABOUT
        </a>
        <a
          href="#services-section"
          onClick={closeNav}
          className="text-white text-2xl font-semibold hover:text-yellow-300 transition duration-200"
        >
          SERVICES
        </a>
        <a
          href="#projects-section"
          onClick={closeNav}
          className="text-white text-2xl font-semibold hover:text-yellow-300 transition duration-200"
        >
          PROJECTS
        </a>
        <a
          href="#contact-section"
          onClick={closeNav}
          className="text-white text-2xl font-semibold hover:text-yellow-300 transition duration-200"
        >
          CONTACT
        </a>
      </div>
    </div>
  );
};

export default MobileNav;
