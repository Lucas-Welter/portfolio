import { GlobeAltIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from 'next-i18next';

const LanguageDropdown: React.FC = () => {
  const { i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false); 
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const changeLanguage = (lng: string) => {
    try {
      i18n.changeLanguage(lng);
      localStorage.setItem("i18nLanguage", lng); 
      setIsDropdownOpen(false);
    } catch (error) {
      console.error("Failed to change language:", error);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Language Icon Button */}
      <button
        aria-label="Toggle language selection"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
        className="text-text hover:text-primary transition-all duration-300 flex items-center"
      >
        <GlobeAltIcon className="w-6 h-6 md:max-lg:w-10 md:max-lg:h-10" />
      </button>
      {isDropdownOpen && (
        <div className="absolute top-full right-0 mt-2 w-40 md:max-lg:w-56 md:max-lg:text-2xl bg-secondary-bg shadow-md rounded-lg text-text z-50">
          <button
            onClick={() => changeLanguage("en")}
            className={`block w-full text-left px-4 py-2 hover:bg-primary hover:text-button-text ${
              i18n.language === "en" ? "font-bold" : ""
            }`}
          >
            English
          </button>
          <button
            onClick={() => changeLanguage("pt-BR")}
            className={`block w-full text-left px-4 py-2 hover:bg-primary hover:text-button-text ${
              i18n.language === "pt-BR" ? "font-bold" : ""
            }`}
          >
            Português - BR
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
