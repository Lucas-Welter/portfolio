import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

interface AnimatedProjectCardProps {
  id: number;
  title: string;
  description: string;
  images: string[];
  technologies?: string[];
  date?: string;
  status?: string;
  hasDemo?: boolean;
}

const AnimatedProjectCard: React.FC<AnimatedProjectCardProps> = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
    >
      <ProjectCard {...props} />
    </motion.div>
  );
};

export default AnimatedProjectCard;