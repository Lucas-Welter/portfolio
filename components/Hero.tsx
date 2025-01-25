import React, { useState, useEffect } from "react";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";
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
      className="h-[90vh] bg-background flex items-center justify-center py-12"
      aria-labelledby="hero-heading"
    >
      <div className="w-[90%] max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[60%,40%] gap-12 items-center text-center lg:text-left">
        {/* Texto da Seção */}
        <div>
          <h1
            id="hero-heading"
            className="text-[40px] md:text-[55px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
          >
            {parse(t("hero.heading"))}
          </h1>
          <div className="mt-4">
            <TextEffect key={key} />
          </div>
          <p
            className="mt-6 text-[1.2rem] text-secondary-text leading-relaxed md:leading-loose"
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
              className="px-6 py-3 bg-primary text-button-text font-bold text-lg uppercase rounded-lg flex items-center hover:bg-secondary transition-all duration-300 focus:ring-2 focus:ring-primary"
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
              className="flex items-center space-x-3 group mt-6 sm:mt-0 "
              aria-label={t("hero.watchVideo")}
            >
              <PlayCircleIcon className="w-12 h-12 text-accent group-hover:text-secondary transition-all duration-300" />
              <p className="text-lg font-semibold text-secondary-text group-hover:text-primary">
                {t("hero.watchVideo")}
              </p>
            </a>
          </div>
        </div>

        {/* Imagem de Perfil */}
        <div className="relative mx-auto lg:ml-auto flex justify-center lg:justify-end items-center">
          <div
            className="w-80 h-80 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg p-1 relative"
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
