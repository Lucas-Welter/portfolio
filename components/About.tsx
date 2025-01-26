import { useTransition, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import TabButton from "./TabButton";

const About: React.FC = () => {
  const { t } = useTranslation();
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const tabs = [
    {
      id: "skills",
      title: t("aboutSection.tabs.skills.title"),
      content: t("aboutSection.tabs.skills.content", { returnObjects: true }) as string[],
    },
    {
      id: "education",
      title: t("aboutSection.tabs.education.title"),
      content: t("aboutSection.tabs.education.content", { returnObjects: true }) as string[],
    },
    {
      id: "certifications",
      title: t("aboutSection.tabs.certifications.title"),
      content: t("aboutSection.tabs.certifications.content", { returnObjects: true }) as string[],
    },
  ];

  const currentTab = tabs.find((t) => t.id === tab);

  return (
    <section className="bg-secondary-bg text-text dark:bg-bg-color dark:text-text py-16 px-8 md:px-16">
  <div id="about-section" className="md:grid md:grid-cols-2 gap-6 items-center">
    {/* Imagem */}
    <div className="relative">
      <Image
        src="/images/about.jpg"
        width={500}
        height={500}
        alt={t("aboutSection.heading")}
        className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 border border-border"
      />
    </div>

    {/* Conteúdo */}
    <div className="mt-4 md:mt-0 text-left flex flex-col">
      <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-8">
        {t("aboutSection.heading")}
      </h2>
      <p className="text-lg md:text-xl text-secondary-text leading-loose mb-8">
        {t("aboutSection.description")}
      </p>
          <div
            className="flex flex-row justify-start gap-4 mb-8 p-2 bg-background dark:bg-background rounded-lg shadow-lg border border-border"
            role="tablist"
          >
            {tabs.map((tabData) => (
              <TabButton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
                className={`transition duration-200 ${
                  tab === tabData.id
                    ? "text-primary font-bold"
                    : "text-secondary-text hover:text-primary"
                }`}
              >
                {tabData.title}
              </TabButton>
            ))}
          </div>
          <div
            className="bg-background dark:bg-background p-6 rounded-lg border border-border shadow-md"
            role="tabpanel"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentTab?.content.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircleIcon className="w-5 h-5 text-primary dark:text-soft-blue" />
                  <p className="text-text dark:text-secondary-text font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
