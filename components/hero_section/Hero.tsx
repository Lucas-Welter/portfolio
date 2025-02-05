import React, { useState, useEffect } from "react";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import { useTranslation } from 'next-i18next';
import parse from "html-react-parser";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const [key, setKey] = useState(0);
  const [links, setLinks] = useState({
    cvLink: t("hero.cvLink"),
    videoLink: t("hero.videoLink"),
  });

  useEffect(() => {
    const handleLanguageChange = () => {
      setKey((prevKey) => prevKey + 1);
      setLinks({
        cvLink: t("hero.cvLink"),
        videoLink: t("hero.videoLink"),
      });
    };

    i18n.on("languageChanged", handleLanguageChange);
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n, t]);

  return (
    <section
      id="home-section"
      className="shapedividers_com-7478 relative h-[90vh] bg-background flex items-center justify-center py-12 overflow-hidden transition-colors"
      aria-labelledby="hero-heading"
    >

      <div className="w-[90%] max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[60%,40%] gap-12 items-center text-center lg:text-left">
        {/* Texto da Seção */}
        <div>
          <h1
            id="hero-heading"
            className="text-[40px] md:text-[55px] font-extrabold text-primary"
          >
            {t("hero.heading")}
          </h1>
          <div className="mt-4">
            <TextEffect key={key} />
          </div>
          <p
            className="mt-6 text-[1.2rem] dark:text-text leading-relaxed md:leading-loose"
            aria-label="Introdução breve"
          >
            {t("hero.intro")}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row sm:space-x-8 items-center justify-center lg:justify-start">
            {/* Botão de Download */}
            <a
              href={links.cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-button-bg text-button-text font-bold text-lg uppercase rounded-lg flex items-center hover:bg-button-hover transition-all duration-300 focus:ring-2 focus:ring-primary"
              aria-label={t("hero.downloadCv")}
            >
              <p>{t("hero.downloadCv")}</p>
              <ArrowDownTrayIcon className="ml-2 w-6 h-6" />
            </a>
            {/* Botão de Vídeo */}
            <a
              href={links.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 group mt-6 sm:mt-0"
              aria-label={t("hero.watchVideo")}
            >
              <PlayCircleIcon className="w-12 h-12 text-accent group-hover:text-orange-400 dark:group-hover:text-blue-500 transition-all " />
              <p className="text-lg font-semibold  group-hover:text-orange-400 dark:group-hover:text-soft-blue dark:text-text">
                {t("hero.watchVideo")}
              </p>
            </a>
          </div>
        </div>

        {/* Imagem de Perfil */}
        <div className="relative mx-auto lg:ml-auto flex justify-center lg:justify-end items-center">
          <div
            className="w-80 h-80 bg-gradient-to-l from-primary to-secondary rounded-full shadow-lg p-2 relative"
            aria-hidden="true"
          >
            <div className="w-full h-full overflow-hidden rounded-full">
              <Image
                src="/images/u1.jpg"
                alt={t("hero.alt", {
                  defaultValue: "Lucas Welter's profile picture",
                })}
                width={320}
                height={320}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
