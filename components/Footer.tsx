import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-background py-6 px-4 text-text">
      <div className="flex justify-center space-x-6">
        <a
          href="https://www.linkedin.com/in/LucasWelterSoft"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="hover:text-primary transition-colors duration-300"
        >
          <FaLinkedin className="w-6 h-6 md:w-8 md:h-8" />
        </a>
        <a
          href="https://github.com/Lucas-Welter"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="hover:text-primary transition-colors duration-300"
        >
          <FaGithub className="w-6 h-6 md:w-8 md:h-8" />
        </a>
        <a
          href="https://www.instagram.com/lucas__welter"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Profile"
          className="hover:text-primary transition-colors duration-300"
        >
          <FaInstagram className="w-6 h-6 md:w-8 md:h-8" />
        </a>
      </div>
      <p className="text-center text-sm mt-4 text-secondary">
        &copy; {new Date().getFullYear()} Lucas Welter. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
