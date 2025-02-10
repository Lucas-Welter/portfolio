import { useTransition, useState } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import {
  CodeBracketIcon,
  CubeIcon,
  CogIcon,
  AcademicCapIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";
import TabButton from "./TabButton";
import { AnimatePresence, motion } from "framer-motion";
import { tabContentVariants } from "../../utils/animations";

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

  const AboutTabs = () => (
    <>
      {/* Tabs navigation */}
      <div
        className="flex flex-row justify-start sm:gap-4 mb-8 p-2 bg-background dark:bg-background rounded-lg shadow-lg border border-border"
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

      {/* Tab panel content */}
      <div
        className="bg-background dark:bg-background p-6 rounded-lg border border-border shadow-md min-h-[200px]"
        role="tabpanel"
      >
        <AnimatePresence mode="wait">
          {tab === "skills" &&
            currentTab?.content &&
            typeof currentTab.content === "object" && (
              <motion.div
                key="skills"
                variants={tabContentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {Object.entries(currentTab.content).map(([category, items]) => (
                    <div key={category}>
                      <h3 className="flex items-center text-xl md:max-lg:text-2xl font-bold mb-4 text-primary">
                        {category === "languages" && (
                          <CodeBracketIcon className="w-6 h-6 mr-2 md:max-lg:w-8 md:max-lg:h-8" />
                        )}
                        {category === "frameworks" && (
                          <CubeIcon className="w-6 h-6 mr-2 md:max-lg:w-10 md:max-lg:h-10" />
                        )}
                        {category === "technologies" && (
                          <CogIcon className="w-6 h-6 mr-2 md:max-lg:w-8 md:max-lg:h-8" />
                        )}
                        {t(`aboutSection.tabs.skills.${category}`)}
                      </h3>
                      {Array.isArray(items) &&
                        items.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3 mb-2 md:max-lg:text-xl"
                          >
                            <CheckCircleIcon className="w-5 h-5 text-accent" />
                            <p className="text-text dark:text-secondary-text">
                              {item}
                            </p>
                          </div>
                        ))}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

          {tab === "education" && Array.isArray(currentTab?.content) && (
            <motion.div
              key="education"
              variants={tabContentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentTab.content.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 md:max-lg:text-xl bg-background dark:bg-background rounded-lg shadow-md border border-border hover:scale-105 transition-transform"
                  >
                    <AcademicCapIcon className="w-24 h-24 text-accent" />
                    <p className="text-text dark:text-secondary-text">
                      {item.text}
                    </p>
                  </a>
                ))}
              </div>
            </motion.div>
          )}

          {tab === "certifications" && Array.isArray(currentTab?.content) && (
            <motion.div
              key="certifications"
              variants={tabContentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentTab.content.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-background dark:bg-background rounded-lg shadow-md border border-border hover:scale-105 transition-transform"
                  >
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-accent-light rounded-full">
                      <CheckBadgeIcon className="w-6 h-6 text-accent" />
                    </div>
                    <p className="text-text dark:text-secondary-text md:max-lg:text-xl">
                      {item.text}
                    </p>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );

  return (
    <section
      id="about-section"
      className="bg-secondary-bg text-text dark:bg-bg-color dark:text-text py-16 px-8 md:px-12 transition-colors"
    >
      {/* Grid for image and text (heading & description) */}
      <div className="md:grid md:grid-cols-2 gap-6 items-start">
        {/* Image */}
        <div className="relative hidden sm:block">
          <Image
            src="/images/about.jpg"
            width={500}
            height={500}
            alt={t("aboutSection.heading")}
            className="lg:mt-16 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 border border-border"
          />
        </div>

        {/* Textual content (heading & description) */}
        <div className="mt-4 md:mt-0 flex flex-col">
          <h2 className="text-5xl font-extrabold text-center sm:text-left text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-8">
            {t("aboutSection.heading")}
          </h2>
          <p className="text-lg md:text-xl md:max-lg:text-2xl text-justify md:text-left text-secondary-text leading-loose mb-8">
            {t("aboutSection.description")}
          </p>
          <div className="block md:hidden lg:block">
            <AboutTabs />
          </div>
        </div>
      </div>
      <div className="hidden md:block lg:hidden mt-8">
        <AboutTabs />
      </div>
    </section>
  );
};

export default About;
