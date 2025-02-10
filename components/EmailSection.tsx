import React, { useRef, useState } from "react";
import { useTranslation } from 'next-i18next';
import emailjs from "@emailjs/browser";
import { FaHandshake, FaArrowDown } from "react-icons/fa";

const EmailSection: React.FC = () => {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    if (!formRef.current) {
      setIsSending(false);
      return;
    }

    const serviceID = "service_eh6mbf2";
    const templateID = "template_ngy79zo";
    const publicKey = "Zzv-mgyT4aN9WsrRG";

    try {
      const result = await emailjs.sendForm(serviceID, templateID, formRef.current, publicKey);
      console.log("Email enviado:", result.text);
      setStatus(t("emailSection.successMessage") || "Mensagem enviada com sucesso!");
      formRef.current.reset();
      setTimeout(() => setStatus(null), 5000);
    } catch (error: any) {
      console.error("Erro ao enviar e-mail:", error);
      setStatus(t("emailSection.errorMessage") || "Erro ao enviar mensagem.");
      setTimeout(() => setStatus(null), 5000);
    }
    setIsSending(false);
  };

  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  
    // Trigger glow on social icons 
    const socialIcons = document.getElementById("social-icons");
    if (socialIcons) {
      socialIcons.classList.remove("glow");
      socialIcons.classList.add("glow");
      setTimeout(() => {
        socialIcons.classList.remove("glow");
      }, 2000);
    }
  
    // Trigger running line animation
    const socialLine = document.getElementById("social-line");
    if (socialLine) {
      socialLine.classList.remove("glow-line");
      void socialLine.offsetWidth;
      socialLine.classList.add("glow-line");
      setTimeout(() => {
        socialLine.classList.remove("glow-line");
      }, 2000); 
    }
  };
  

  return (
    <section
      id="contact-section"
      className="py-24 px-4 md:px-8 bg-secondary-bg text-text dark:bg-background dark:text-secondary-text transition-colors"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 sm:max-lg:gap-4 items-center">
        {/* Seção da esquerda */}
        <div className="flex flex-col md:items-center text-center md:text-justify">
          <div className="flex justify-center items-center w-full mb-6">
            <FaHandshake className="text-8xl sm:max-lg:text-9xl text-primary" />
          </div>
          <h5 className="text-4xl sm:max-lg:text-center sm:max-lg:text-5xl font-bold text-primary mb-6">
            {t("emailSection.heading")}
          </h5>
          <p className="text-secondary-text dark:text-text text-lg sm:max-lg:text-2xl sm:max-lg:text-left leading-relaxed mb-6">
            {t("emailSection.description")}
          </p>
          <button
            onClick={scrollToFooter}
            className="flex items-center gap-2 sm:max-lg:text-xl bg-button-bg text-white  hover:bg-button-hover px-4 py-2 rounded"
          >
            <span>{t("emailSection.socialButtonText") || "Visite minhas redes sociais"}</span>
            <FaArrowDown />
          </button>
        </div>

        {/* Formulário */}
        <div className="bg-background dark:bg-secondary-bg text-text dark:text-secondary-text shadow-lg rounded-lg p-10 border border-border">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="from_name"
                className="block mb-2 text-sm sm:max-lg:text-xl font-semibold text-primary dark:text-primary"
              >
                {t("emailSection.emailLabel")} <span className="text-error">*</span>
              </label>
              <input
                type="email"
                name="from_name"
                id="from_name"
                className="bg-secondary-bg dark:bg-card-bg border border-border dark:border-border placeholder-secondary-text dark:placeholder-secondary-text text-text dark:text-secondary-text text-base sm:max-lg:text-xl rounded-lg block w-full p-4 hover:shadow-md"
                placeholder="ana@gmail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm sm:max-lg:text-xl font-semibold text-primary dark:text-primary"
              >
                {t("emailSection.subjectLabel")}
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="bg-secondary-bg dark:bg-card-bg border border-border dark:border-border placeholder-secondary-text dark:placeholder-secondary-text text-text dark:text-secondary-text text-base sm:max-lg:text-xl rounded-lg block w-full p-4 hover:shadow-md"
                placeholder={t("emailSection.subjectPlaceholder")}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm sm:max-lg:text-xl font-semibold text-primary dark:text-primary"
              >
                {t("emailSection.messageLabel")}
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-secondary-bg dark:bg-card-bg border border-border dark:border-border placeholder-secondary-text dark:placeholder-secondary-text text-text dark:text-secondary-text text-base sm:max-lg:text-xl rounded-lg block w-full p-4 hover:shadow-md"
                placeholder={t("emailSection.messagePlaceholder")}
                rows={5}
                required
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={isSending}
                className="bg-button-bg hover:bg-button-hover text-button-text font-semibold sm:max-lg:text-xl py-3 px-6 rounded-lg w-full hover:shadow-lg active:scale-95 transition-all duration-300"
              >
                {isSending ? t("emailSection.sending") || "Enviando..." : t("emailSection.buttonText")}
              </button>
            </div>
          </form>
          {status && <p className="mt-4 text-center text-primary">{status}</p>}
        </div>
      </div>
    </section>

  );
};

export default EmailSection;
