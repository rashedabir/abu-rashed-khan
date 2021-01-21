import React from "react";
import github from "../assets/icons/github.svg";
import { motion } from "framer-motion";

const navbar_varient = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};

function ProjectCard({ project: { name, image, deployed_url, github_url } }) {
  return (
    <motion.div
      className="projectCard col-md-6 col-lg-4 my-2"
      variants={navbar_varient}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <figure className="projectCard_wrapper">
        <a href={deployed_url} target="_blank" rel="noreferrer">
          <img src={image} alt={name} className="projectCard_image" />
        </a>
        <div className="projectCard_title">
          <a href={github_url} target="_blank" rel="noreferrer">
            <img src={github} alt="github url" className="projectCard_icon" />
          </a>
          {name}
        </div>
      </figure>
    </motion.div>
  );
}

export default ProjectCard;