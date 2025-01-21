import React from "react";
import { useTranslation } from "react-i18next";

const EmailSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-gradient-bg via-secondary-bg to-gradient-bg">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* Text Content */}
        <div>
          <h5
            id="contact-section"
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
          >
            {t("emailSection.heading")}
          </h5>
          <p className="text-secondary-text text-lg leading-relaxed mt-6">
            {t("emailSection.description")}
          </p>
        </div>

        {/* Form */}
        <div className="bg-card-bg shadow-lg rounded-lg p-10 border border-border">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-semibold text-primary"
              >
                {t("emailSection.emailLabel")} <span className="text-error">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="bg-background border border-border placeholder-secondary-text text-text text-base rounded-lg block w-full p-4 focus:ring-2 focus:ring-primary focus:border-primary transition-all hover:shadow-sm"
                placeholder="jacob@gmail.com" 
                required
                aria-required="true"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-semibold text-primary"
              >
                {t("emailSection.subjectLabel")}
              </label>
              <input
                type="text"
                id="subject"
                className="bg-background border border-border placeholder-secondary-text text-text text-base rounded-lg block w-full p-4 focus:ring-2 focus:ring-primary focus:border-primary transition-all hover:shadow-sm"
                placeholder={t("emailSection.subjectPlaceholder")}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-semibold text-primary"
              >
                {t("emailSection.messageLabel")}
              </label>
              <textarea
                id="message"
                className="bg-background border border-border placeholder-secondary-text text-text text-base rounded-lg block w-full p-4 focus:ring-2 focus:ring-primary focus:border-primary transition-all hover:shadow-sm"
                placeholder={t("emailSection.messagePlaceholder")}
                rows={5}
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-button-text font-semibold py-3 px-6 rounded-lg w-full hover:shadow-lg active:scale-95 transition-transform duration-300"
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
