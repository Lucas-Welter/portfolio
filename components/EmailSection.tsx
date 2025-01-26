import React from "react";
import { useTranslation } from "react-i18next";

const EmailSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-4 md:px-8 bg-secondary-bg text-text dark:bg-background dark:text-secondary-text">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* Text Content */}
        <div>
          <h5
            id="contact-section"
            className="text-4xl font-bold text-primary mb-6"
          >
            {t("emailSection.heading")}
          </h5>
          <p className="text-secondary-text dark:text-text text-lg leading-relaxed">
            {t("emailSection.description")}
          </p>
        </div>

        {/* Form */}
        <div className="bg-background dark:bg-secondary-bg text-text dark:text-secondary-text shadow-lg rounded-lg p-10 border border-border">
          <form className="space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-semibold text-primary dark:text-secondary"
              >
                {t("emailSection.emailLabel")} <span className="text-error">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="bg-secondary-bg dark:bg-card-bg border border-border dark:border-border placeholder-secondary-text dark:placeholder-secondary-text text-text dark:text-secondary-text text-base rounded-lg block w-full p-4 transition-all hover:shadow-md"
                placeholder="jacob@gmail.com"
                required
                aria-required="true"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-semibold text-primary dark:text-secondary"
              >
                {t("emailSection.subjectLabel")}
              </label>
              <input
                type="text"
                id="subject"
                className="bg-secondary-bg dark:bg-card-bg border border-border dark:border-border placeholder-secondary-text dark:placeholder-secondary-text text-text dark:text-secondary-text text-base rounded-lg block w-full p-4 transition-all hover:shadow-md"
                placeholder={t("emailSection.subjectPlaceholder")}
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-semibold text-primary dark:text-secondary"
              >
                {t("emailSection.messageLabel")}
              </label>
              <textarea
                id="message"
                className="bg-secondary-bg dark:bg-card-bg border border-border dark:border-border placeholder-secondary-text dark:placeholder-secondary-text text-text dark:text-secondary-text text-base rounded-lg block w-full p-4 transition-all hover:shadow-md"
                placeholder={t("emailSection.messagePlaceholder")}
                rows={5}
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="bg-button-bg hover:bg-button-hover text-button-text font-semibold py-3 px-6 rounded-lg w-full hover:shadow-lg active:scale-95 transition-all duration-300"
              >
                {t("emailSection.buttonText")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
