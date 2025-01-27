import { useTransition, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { CodeBracketIcon, CubeIcon, CogIcon, AcademicCapIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";
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

  // Tabs configuradas diretamente do arquivo de idioma
  const tabs = [
    {
      id: "skills",
      title: t("aboutSection.tabs.skills.title"),
      content: t("aboutSection.tabs.skills.content", { returnObjects: true }),
    },
    {
      id: "education",
      title: t("aboutSection.tabs.education.title"),
      content: t("aboutSection.tabs.education.content", { returnObjects: true }),
    },
    {
      id: "certifications",
      title: t("aboutSection.tabs.certifications.title"),
      content: t("aboutSection.tabs.certifications.content", { returnObjects: true }),
    },
  ];

  const currentTab = tabs.find((t) => t.id === tab);

  return (
    <section className="bg-secondary-bg text-text dark:bg-bg-color dark:text-text py-16 px-8 md:px-16">
      <div id="about-section" className="md:grid md:grid-cols-2 gap-6 items-center">
        {/* Imagem de destaque */}
        <div className="relative">
          <Image
            src="/images/about.jpg"
            width={500}
            height={500}
            alt={t("aboutSection.heading")}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 border border-border"
          />
        </div>

        {/* Conteúdo textual */}
        <div className="mt-4 md:mt-0 text-left flex flex-col">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-8">
            {t("aboutSection.heading")}
          </h2>
          <p className="text-lg md:text-xl text-secondary-text leading-loose mb-8">
            {t("aboutSection.description")}
          </p>

          {/* Abas de navegação */}
          <div
            className="flex flex-row justify-start gap-4 mb-8 p-2 bg-background dark:bg-background rounded-lg shadow-lg border border-border"
            role="tablist"
          >
            {tabs.map((tabData) => (
              <TabButton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
              >
                {tabData.title}
              </TabButton>
            ))}
          </div>

          {/* Conteúdo das abas */}
          <div
            className="bg-background dark:bg-background p-6 rounded-lg border border-border shadow-md"
            role="tabpanel"
          >
            {tab === "skills" && currentTab?.content && typeof currentTab.content === "object" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.entries(currentTab.content).map(([category, items]) => (
                  <div key={category}>
                    <h3 className="flex items-center text-xl font-bold mb-4 text-primary">
                      {category === "languages" && <CodeBracketIcon className="w-6 h-6 mr-2" />}
                      {category === "frameworks" && <CubeIcon className="w-6 h-6 mr-2" />}
                      {category === "technologies" && <CogIcon className="w-6 h-6 mr-2" />}
                      {t(`aboutSection.tabs.skills.${category}`)}
                    </h3>
                    {Array.isArray(items) &&
                      items.map((item, index) => (
                        <div key={index} className="flex items-center space-x-3 mb-2">
                          <CheckCircleIcon className="w-5 h-5 text-accent " />
                          <p className="text-text dark:text-secondary-text">{item}</p>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            )}

            {tab === "education" && Array.isArray(currentTab?.content) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentTab.content.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-background dark:bg-dark rounded-lg shadow-md border border-border hover:scale-105 transition-transform"
                  >
                    <AcademicCapIcon className="w-24 h-24 text-accent" />
                    <p className="text-text dark:text-secondary-text">{item.text}</p>
                  </a>
                ))}
              </div>
            )}

            {tab === "certifications" && Array.isArray(currentTab?.content) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentTab.content.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-background dark:bg-dark rounded-lg shadow-md border border-border hover:scale-105 transition-transform"
                  >
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-accent-light rounded-full">
                      <CheckBadgeIcon className="w-6 h-6 text-accent" />
                    </div>
                    <p className="text-text dark:text-secondary-text">{item.text}</p>
                  </a>
                ))}
              </div>
            )}


          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
