import React from "react";
import { useTranslation } from "next-i18next";
import {
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";
import { PresentationChartLineIcon } from "@heroicons/react/24/outline";
import useIsMobile from "@/hooks/useIsMobile";

const Services = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  const getDelay = (defaultDelay?: string) =>
    isMobile ? "200" : defaultDelay;

  return (
    <section
      id="services-section"
      className="bg-background text-text dark:bg-secondary-bg dark:text-secondary-text py-16 px-8"
    >
      <h2 className="text-4xl font-bold text-center text-primary mb-12">
        {t("servicesSection.heading")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] mx-auto">
        {/* Mobile Service (Service 1) */}
        <div
          className="rounded-lg bg-background dark:bg-background text-text dark:text-secondary-text shadow-lg p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-sm dark:hover:shadow-white border border-border"
          data-aos="fade-right"
          data-aos-delay={0} 
        >
          <DevicePhoneMobileIcon className="w-16 h-16 mx-auto text-soft-blue dark:text-secondary" />
          <h3 className="text-2xl font-semibold text-center mt-4 mb-2 ">
            {t("servicesSection.service1.title")}
          </h3>
          <p className="text-secondary-text dark:text-secondary-text text-center leading-relaxed md:max-lg:text-xl">
            {t("servicesSection.service1.description")}
          </p>
        </div>

        {/* Web App Service (Service 2) */}
        <div
          className="rounded-lg bg-background dark:bg-background text-text dark:text-secondary-text shadow-lg p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-sm dark:hover:shadow-white border border-border"
          data-aos="zoom-in"
          data-aos-delay={getDelay("200")}
        >
          <ComputerDesktopIcon className="w-16 h-16 mx-auto text-primary" />
          <h3 className="text-2xl font-semibold text-center mt-4 mb-2">
            {t("servicesSection.service2.title")}
          </h3>
          <p className="text-secondary-text dark:text-secondary-text text-center leading-relaxed md:max-lg:text-xl">
            {t("servicesSection.service2.description")}
          </p>
        </div>

        {/* Software Hosting Service (Service 3) */}
        <div
          className="rounded-lg bg-background dark:bg-background text-text dark:text-secondary-text shadow-lg p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-sm dark:hover:shadow-white border border-border"
          data-aos="fade-left"
          data-aos-delay={getDelay("400")}
        >
          <RocketLaunchIcon className="w-16 h-16 mx-auto text-accent" />
          <h3 className="text-2xl font-semibold text-center mt-4 mb-2">
            {t("servicesSection.service3.title")}
          </h3>
          <p className="text-secondary-text dark:text-secondary-text text-center leading-relaxed md:max-lg:text-xl">
            {t("servicesSection.service3.description")}
          </p>
        </div>

        {/* Chatbot Service (Service 4) */}
        <div
          className="rounded-lg bg-background dark:bg-background text-text dark:text-secondary-text shadow-lg p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-sm dark:hover:shadow-white border border-border"
          data-aos="fade-right"
          data-aos-delay={getDelay("500")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
            className="w-16 h-16 mx-auto text-primary"
          >
            <path d="M12 2.25A2.261 2.261 0 0 0 9.75 4.5c0 .971.63 1.807 1.5 2.12v1.13h-3a4.508 4.508 0 0 0-4.436 3.75H3.75a2.261 2.261 0 0 0-2.25 2.25v2A2.261 2.261 0 0 0 3.75 18h.064a4.508 4.508 0 0 0 4.436 3.75h7.5A4.508 4.508 0 0 0 20.186 18h.064a2.261 2.261 0 0 0 2.25-2.25v-2a2.261 2.261 0 0 0-2.25-2.25h-.064a4.508 4.508 0 0 0-4.436-3.75h-3V6.62a2.265 2.265 0 0 0 1.5-2.12A2.261 2.261 0 0 0 12 2.25zM9.25 11c.958 0 1.75.792 1.75 1.75s-.792 1.75-1.75 1.75-1.75-.792-1.75-1.75S8.292 11 9.25 11zm5.5 0c.958 0 1.75.792 1.75 1.75s-.792 1.75-1.75 1.75S13 13.708 13 12.75 13.792 11 14.75 11zm-6.5 6h7.5c.416 0 .75.334.75.75s-.334.75-.75.75h-7.5a.748.748 0 0 1-.75-.75c0-.416.335-.75.75-.75z"></path>
          </svg>
          <h3 className="text-2xl font-semibold text-center mt-4 mb-2">
            {t("servicesSection.service4.title")}
          </h3>
          <p className="text-secondary-text dark:text-secondary-text text-center leading-relaxed md:max-lg:text-xl">
            {t("servicesSection.service4.description")}
          </p>
        </div>

        {/* UI/UX Service (Service 5) */}
        <div
          className="rounded-lg bg-background dark:bg-background text-text dark:text-secondary-text shadow-lg p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-sm dark:hover:shadow-white border border-border"
          data-aos="zoom-in"
          data-aos-delay={getDelay("700")}
        >
          <PaintBrushIcon className="w-16 h-16 mx-auto text-accent" />
          <h3 className="text-2xl font-semibold text-center mt-4 mb-2">
            {t("servicesSection.service5.title")}
          </h3>
          <p className="text-secondary-text dark:text-secondary-text text-center leading-relaxed md:max-lg:text-xl">
            {t("servicesSection.service5.description")}
          </p>
        </div>

        {/* Agile Consulting Service (Service 6) */}
        <div
          className="rounded-lg bg-background dark:bg-background text-text dark:text-secondary-text shadow-lg p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-sm dark:hover:shadow-white border border-border"
          data-aos="fade-left"
          data-aos-delay={getDelay("900")}
        >
          <PresentationChartLineIcon className="w-16 h-16 mx-auto text-soft-blue dark:text-secondary" />
          <h3 className="text-2xl font-semibold text-center mt-4 mb-2">
            {t("servicesSection.service6.title")}
          </h3>
          <p className="text-secondary-text dark:text-secondary-text text-center leading-relaxed md:max-lg:text-xl">
            {t("servicesSection.service6.description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
