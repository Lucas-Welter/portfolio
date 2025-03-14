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
    fallbackLng: "en", 
    detection: {
      order: ["localStorage", "navigator"], 
      caches: ["localStorage"], 
    },
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
