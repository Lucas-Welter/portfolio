import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

interface FormData {
  email: string;
  subject: string;
  message: string;
}

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
      // Envia o formulário para o EmailJS
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

  return (
    <section className="py-24 px-4 md:px-8 bg-secondary-bg text-text dark:bg-background dark:text-secondary-text">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* Conteúdo de Texto */}
        <div>
          <h5 id="contact-section" className="text-4xl font-bold text-primary mb-6">
            {t("emailSection.heading")}
          </h5>
          <p className="text-secondary-text dark:text-text text-lg leading-relaxed">
            {t("emailSection.description")}
          </p>
        </div>

        {/* Formulário */}
        <div className="bg-background dark:bg-secondary-bg text-text dark:text-secondary-text shadow-lg rounded-lg p-10 border border-border">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            {/* Campo de E-mail */}
            <div>
              <label htmlFor="from_name" className="block mb-2 text-sm font-semibold text-primary dark:text-secondary">
                {t("emailSection.emailLabel")} <span className="text-error">*</span>
              </label>
              <input
                type="email"
                name="from_name" 
                id="from_name"
                className="bg-secondary-bg dark:bg-card-bg border border-border dark:border-border placeholder-secondary-text dark:placeholder-secondary-text text-text dark:text-secondary-text text-base rounded-lg block w-full p-4 hover:shadow-md"
                placeholder="ana@gmail.com"
                required
              />
            </div>

            {/* Campo de Assunto */}
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-semibold text-primary dark:text-secondary">
                {t("emailSection.subjectLabel")}
              </label>
              <input
                type="text"
                name="subject" 
                id="subject"
                className="bg-secondary-bg dark:bg-card-bg border border-border dark:border-border placeholder-secondary-text dark:placeholder-secondary-text text-text dark:text-secondary-text text-base rounded-lg block w-full p-4 hover:shadow-md"
                placeholder={t("emailSection.subjectPlaceholder")}
              />
            </div>

            {/* Campo de Mensagem */}
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-semibold text-primary dark:text-secondary">
                {t("emailSection.messageLabel")}
              </label>
              <textarea
                name="message" 
                id="message"
                className="bg-secondary-bg dark:bg-card-bg border border-border dark:border-border placeholder-secondary-text dark:placeholder-secondary-text text-text dark:text-secondary-text text-base rounded-lg block w-full p-4 hover:shadow-md"
                placeholder={t("emailSection.messagePlaceholder")}
                rows={5}
                required
              />
            </div>

            {/* Botão de Envio */}
            <div>
              <button
                type="submit"
                disabled={isSending}
                className="bg-button-bg hover:bg-button-hover text-button-text font-semibold py-3 px-6 rounded-lg w-full hover:shadow-lg active:scale-95 transition-all duration-300"
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
