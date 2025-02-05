import "@/styles/globals.css";
import "@/styles/embla.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import "../i18n"; 
function App({ Component, pageProps }: AppProps) {
  const { detectedLanguage } = pageProps;

  if (detectedLanguage) {
    import("i18next").then((i18n) => {
      i18n.default.changeLanguage(detectedLanguage);
    });
  }

  return <Component {...pageProps} />;
}

export default appWithTranslation(App);
