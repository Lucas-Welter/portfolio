import { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

interface TabData {
  title: string;
  id: string;
  content: React.ReactNode;
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc ml-6 text-primary space-y-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc ml-6 text-primary space-y-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc ml-6 text-primary space-y-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const About: React.FC = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="bg-gradient-bg text-text py-16 px-8 md:px-16">
      <div id="about-section" className="md:grid md:grid-cols-2 gap-8 items-center">
        {/* About Image */}
        <div className="relative">
          <Image
            src="/images/about.jpg"
            width={500}
            height={500}
            alt="About Me"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 border border-border-color"
          />
        </div>

        {/* About Content */}
        <div className="mt-8 md:mt-0 text-left flex flex-col">
          <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-8">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-secondary leading-loose mb-8">
            I am a software engineer passionate about building robust, scalable, and user-friendly
            applications. My journey in tech has been fueled by curiosity and a love for learning
            new technologies.
          </p>
          <div className="flex flex-row justify-start gap-4 mb-8 p-4 bg-card-bg-color rounded-lg shadow-lg shadow-gray-300/50 border border-border-color">
            {TAB_DATA.map((tabData) => (
              <TabButton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
                className={`${
                  tab === tabData.id
                    ? "bg-primary text-white rounded-md"
                    : "hover:text-primary"
                } focus:ring-2 focus:ring-primary focus:ring-offset-2`}
              >
                {tabData.title}
              </TabButton>
            ))}
          </div>
          <div className="text-secondary-text bg-secondary-bg-color p-4 rounded-lg border-l-4 border-primary shadow-md">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
