import { GlobeAltIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const LanguageDropdown: React.FC = () => {
  const { i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state
  const dropdownRef = useRef<HTMLDivElement>(null); // Reference for dropdown

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false); // Close the dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsDropdownOpen(false); // Close dropdown after language selection
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Language Icon Button */}
      <button
        onClick={() => setIsDropdownOpen((prev) => !prev)}
        className="text-text hover:text-primary transition-all duration-300 flex items-center"
      >
        <GlobeAltIcon className="w-6 h-6" />
      </button>
      {isDropdownOpen && (
        <div className="absolute top-full right-0 mt-2 w-40 bg-secondary-bg shadow-md rounded-lg text-text z-50">
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
            Português
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
