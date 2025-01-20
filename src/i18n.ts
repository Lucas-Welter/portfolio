import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./locales/en/translation.json";
import translationPT from "./locales/pt-BR/translation.json";

const resources = {
  en: { translation: translationEN },
  "pt-BR": { translation: translationPT },
};

i18n
  .use(LanguageDetector) // Automatically detects user language
  .use(initReactI18next) // Integrates i18next with React
  .init({
    resources,
    fallbackLng: "en", // Default language if detection fails
    detection: {
      order: ["navigator", "localStorage", "querystring"], // Detects language from browser or localStorage
      caches: ["localStorage"], // Caches the language preference
    },
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
