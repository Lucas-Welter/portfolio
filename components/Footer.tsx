import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-background py-8 px-4 text-text border-t border-border">
      <div className="flex justify-center space-x-8">
        <a
          href="https://www.linkedin.com/in/LucasWelterSoft"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="hover:text-focus hover:scale-110 focus:ring-2 focus:ring-primary transition-all duration-300"
        >
          <FaLinkedin className="w-6 h-6 lg:w-8 lg:h-8 box-shadow-bottom" />
        </a>
        <a
          href="https://github.com/Lucas-Welter"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="hover:text-focus hover:scale-110 focus:ring-2 focus:ring-primary transition-all duration-300"
        >
          <FaGithub className="w-6 h-6 lg:w-8 lg:h-8 box-shadow-bottom" />
        </a>
        <a
          href="https://www.instagram.com/lucas__welter"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Profile"
          className="hover:text-focus hover:scale-110 focus:ring-2 focus:ring-primary transition-all duration-300"
        >
          <FaInstagram className="w-6 h-6 lg:w-8 lg:h-8 box-shadow-bottom" />
        </a>
      </div>
      <p className="text-center text-sm mt-6 text-secondary">
        &copy; {new Date().getFullYear()} Lucas Welter. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
