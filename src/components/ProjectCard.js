import React from "react";
import github1 from "../assets/icons/github1.png";
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

function ProjectCard({
  project: { name, image, deployed_url, github_url },
  light,
}) {
  return (
    <motion.div
      className="projectCard col-md-6 col-lg-4 my-2"
      variants={navbar_varient}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <figure className="projectCard_wrapper">
        <a title={name} href={deployed_url} target="_blank" rel="noreferrer">
          <img src={image} alt={name} className="projectCard_image" />
        </a>
        <div
          className={light ? "projectCard_title_light" : "projectCard_title"}
        >
          <a
            title="Github url"
            href={github_url}
            target="_blank"
            rel="noreferrer"
            className="text-capitalize"
          >
            <img src={github1} alt="github url" className="projectCard_icon" />
            {name}
          </a>
        </div>
      </figure>
    </motion.div>
  );
}

export default ProjectCard;
