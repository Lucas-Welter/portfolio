import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
}

const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "A responsive React portfolio with interactive features.",
    image: "/images/p1.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Photography Portfolio Website",
    description: "A visually appealing website for photographers.",
    image: "/images/p2.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "A scalable e-commerce solution with modern UI.",
    image: "/images/p3.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "A mobile app for seamless food ordering experience.",
    image: "/images/p4.jpg",
    tag: ["All", "Mobile"],
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD using Firebase.",
    image: "/images/p5.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "A guide to mastering full-stack development.",
    image: "/images/p6.jpg",
    tag: ["All", "Web"],
  },
];

const Projects: React.FC = () => {
  const [tag, setTag] = useState("All");

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  return (
    <section
      id="projects-section"
      className="bg-gradient-to-b from-gradient-bg-color via-secondary-bg-color to-gradient-bg-color py-16 px-8"
    >
      <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-12">
        My Projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-4 text-text mb-12">
        {["All", "Web", "Mobile"].map((tagName) => (
          <ProjectTag
            key={tagName}
            name={tagName}
            onClick={handleTagChange}
            isSelected={tag === tagName}
          />
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
