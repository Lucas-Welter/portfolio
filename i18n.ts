import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./public/locales/en/translation.json";
import translationPT from "./public/locales/pt-BR/translation.json";

const resources = {
  en: { translation: translationEN },
  "pt-BR": { translation: translationPT },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en", // Default language
    detection: {
      order: ["localStorage", "navigator"], // Avoid server-client mismatch
      caches: ["localStorage"], // Cache the language preference
    },
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
