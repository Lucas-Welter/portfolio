import {
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  return (
    <section
      id="services-section"
      className="bg-background text-text dark:bg-secondary-bg dark:text-secondary-text py-16 px-8"
    >
      <h2 className="text-4xl font-bold text-center text-primary mb-12">
        {t("servicesSection.heading")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] mx-auto">
        {/* Front-end Service */}
        <div
          className="rounded-lg bg-background dark:bg-background text-text dark:text-secondary-text shadow-lg p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-sm dark:hover:shadow-white border border-border"
          data-aos="fade-right"
        >
          <DevicePhoneMobileIcon className="w-16 h-16 mx-auto text-soft-blue dark:text-secondary" />
          <h3 className="text-2xl font-semibold text-center mt-4 mb-2">
            {t("servicesSection.service1.title")}
          </h3>
          <p className="text-secondary-text dark:text-secondary-text text-center leading-relaxed">
            {t("servicesSection.service1.description")}
          </p>
        </div>
        {/* Back-end Service */}
        <div
          className="rounded-lg bg-background dark:bg-background text-text dark:text-secondary-text shadow-lg p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-sm dark:hover:shadow-white border border-border"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <ComputerDesktopIcon className="w-16 h-16 mx-auto text-primary" />
          <h3 className="text-2xl font-semibold text-center mt-4 mb-2">
            {t("servicesSection.service2.title")}
          </h3>
          <p className="text-secondary-text dark:text-secondary-text text-center leading-relaxed">
            {t("servicesSection.service2.description")}
          </p>
        </div>
        {/* Full Stack Service */}
        <div
          className="rounded-lg bg-background dark:bg-background text-text dark:text-secondary-text shadow-lg p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-sm dark:hover:shadow-white border border-border"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <RocketLaunchIcon className="w-16 h-16 mx-auto text-accent" />
          <h3 className="text-2xl font-semibold text-center mt-4 mb-2">
            {t("servicesSection.service3.title")}
          </h3>
          <p className="text-secondary-text dark:text-secondary-text text-center leading-relaxed">
            {t("servicesSection.service3.description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
