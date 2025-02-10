import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { useTranslation } from 'next-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const linkedInLink = t("footer.linkedin");
  const rightsText = t("footer.rights", { year: new Date().getFullYear() });

  return (
    <footer id="footer" className="bg-primary dark:bg-secondary-bg py-8 px-4 text-secondary-text border-t border-border dark:bg-bg-color dark:text-text transition-colors">
      <div className="flex justify-center space-x-8">
        <a
          href={linkedInLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="text-button-text hover:text-accent hover:scale-110 transition-all duration-300"
        >
          <FaLinkedin className="w-6 h-6 md:w-8 md:h-8" />
        </a>
        <a
          href="https://github.com/Lucas-Welter"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="text-button-text hover:text-accent hover:scale-110 focus:border-none transition-all duration-300"
        >
          <FaGithub className="w-6 h-6 md:w-8 md:h-8" />
        </a>
        <a
          href="https://www.instagram.com/lucas__welter"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Profile"
          className="text-button-text hover:text-accent hover:scale-110  transition-all duration-300"
        >
          <FaInstagram className="w-6 h-6 md:w-8 md:h-8" />
        </a>
      </div>
      <p className="text-center text-sm md:max-lg:text-lg mt-6 text-white dark:text-text">
        {rightsText}
      </p>
    </footer>
  );
};

export default Footer;
