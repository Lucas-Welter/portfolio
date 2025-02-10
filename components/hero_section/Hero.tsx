import React, { useState, useEffect } from "react";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import { useTranslation } from 'next-i18next';

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
      className="shapedividers_com-7478 relative min-h-[calc(100vh-10vh)] bg-background flex items-center justify-center pt-[15vh] md:pt-[10vh] pb-12 overflow-hidden transition-colors"
      aria-labelledby="hero-heading"
    >
      <div className="w-[90%] max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[60%,40%] gap-8 md:gap-12 items-center text-center lg:text-left">
        {/* Text Section */}
        <div className="order-1 lg:order-none">
          <h1
            id="hero-heading"
            className="text-[40px] md:text-[55px] font-extrabold text-primary"
          >
            {t("hero.heading")}
          </h1>

          <div className="mt-4 hidden sm:flex">
            <TextEffect key={key} />
          </div>

          <p
            className="mt-6 text-[1.2rem] md:max-lg:text-[1.5rem] dark:text-text leading-relaxed md:leading-loose"
            aria-label="Introdução breve"
          >
            {t("hero.intro")}
          </p>

          {/* Mobile Image (centered on <lg screens) */}
          <div className="lg:hidden w-full my-8 flex justify-center">
            <div className="relative w-56 h-56 md:max-lg:w-80 md:max-lg:h-80">
              <div className="absolute inset-0 bg-gradient-to-l from-primary to-secondary rounded-full shadow-lg p-2">
                <div className="w-full h-full overflow-hidden rounded-full">
                  <Image
                    src="/images/u1.jpg"
                    alt={t("hero.alt", {
                      defaultValue: "Lucas Welter's profile picture",
                    })}
                    width={256}
                    height={256}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:space-x-8  md:max-lg:space-x-16 items-center justify-center lg:justify-start">
            <a
              href={links.cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-button-bg text-button-text font-bold text-lg md:max-lg:text-xl uppercase rounded-lg flex items-center hover:bg-button-hover transition-all duration-300 focus:ring-2 focus:ring-primary"
              aria-label={t("hero.downloadCv")}
            >
              <p>{t("hero.downloadCv")}</p>
              <ArrowDownTrayIcon className="ml-2 w-6 h-6 md:max-lg:w-8 md:max-lg:h-8" />
            </a>
            <a
              href={links.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 group mt-6 sm:mt-0"
              aria-label={t("hero.watchVideo")}
            >
              <PlayCircleIcon className="w-12 h-12  md:max-lg:w-16 md:max-lg:h-16 text-accent group-hover:text-orange-400 dark:group-hover:text-blue-500 transition-all" />
              <p className="text-lg md:max-lg:text-2xl font-semibold group-hover:text-orange-400 dark:group-hover:text-soft-blue dark:text-text">
                {t("hero.watchVideo")}
              </p>
            </a>
          </div>
        </div>

        {/* Desktop Image (centered on lg+ screens) */}
        <div className="hidden lg:flex order-2 justify-center items-center">
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 bg-gradient-to-l from-primary to-secondary rounded-full shadow-lg p-2">
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
      </div>
    </section>
  );
};

export default Hero;