import { useTransition, useState } from "react";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {["Node.js", "Express", "PostgreSQL", "Sequelize", "JavaScript", "React"].map((skill) => (
          <div key={skill} className="flex items-center space-x-3">
            <CheckCircleIcon className="w-5 h-5 text-primary" />
            <p className="text-primary font-medium">{skill}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="grid grid-cols-1 gap-4">
        {["Fullstack Academy of Code", "University of California, Santa Cruz"].map((edu) => (
          <div key={edu} className="flex items-center space-x-3">
            <CheckCircleIcon className="w-5 h-5 text-primary" />
            <p className="text-primary font-medium">{edu}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="grid grid-cols-1 gap-4">
        {["AWS Cloud Practitioner", "Google Professional Cloud Developer"].map((cert) => (
          <div key={cert} className="flex items-center space-x-3">
            <CheckCircleIcon className="w-5 h-5 text-primary" />
            <p className="text-primary font-medium">{cert}</p>
          </div>
        ))}
      </div>
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
    <section className="bg-tertiary-bg text-text py-16 px-8 md:px-16">
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
          <div
            className="flex flex-row justify-start gap-4 mb-8 p-4 bg-card-bg-color rounded-lg shadow-lg shadow-gray-300/50 border border-border-color"
            role="tablist"
          >
            {TAB_DATA.map((tabData) => (
              <TabButton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
                aria-selected={tab === tabData.id}
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
          <div
            className="text-secondary-text bg-secondary-bg-color p-6 rounded-lg border-l-4 border-primary shadow-md"
            role="tabpanel"
          >
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
