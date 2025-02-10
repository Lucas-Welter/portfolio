import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types/project";

const cardVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
  },
};

interface AnimatedProjectCardProps extends Project {}

const AnimatedProjectCard = React.forwardRef<HTMLDivElement, AnimatedProjectCardProps>(
  (props, ref) => {
    return (
      <motion.div
        ref={ref} 
        variants={cardVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.3 }}
      >
        <ProjectCard {...props} />
      </motion.div>
    );
  }
);

AnimatedProjectCard.displayName = "AnimatedProjectCard";

export default React.memo(AnimatedProjectCard);