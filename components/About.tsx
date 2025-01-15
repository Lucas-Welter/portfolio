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
      <ul className="list-disc pl-4 text-text">
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
      <ul className="list-disc pl-4 text-text">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-4 text-text">
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
    <section className="bg-gradient-to-b from-background via-secondary to-background text-text py-16 px-16">
      <div id="about-section" className="md:grid md:grid-cols-2 gap-8 items-center">
        {/* About Image */}
        <div className="relative">
          <Image
            src="/images/about.jpeg"
            width={500}
            height={500}
            alt="About Me"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* About Content */}
        <div className="mt-8 md:mt-0 text-left flex flex-col">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 mb-6">
            About Me
          </h2>
          <p className="text-base md:text-lg text-color mb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
            corporis ea odit nesciunt, quo in, dicta vero, deserunt asperiores
            adipisci consequatur eligendi. Excepturi nihil voluptate expedita
            placeat maxime! Repellendus, quia.
          </p>
          <div className="flex flex-row justify-start gap-4 mb-8 bg-background p-4 rounded-lg shadow-md">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="text-text">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
