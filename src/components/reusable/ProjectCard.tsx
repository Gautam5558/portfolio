"use client";
import { ProjectItem } from "@/types";
import ImagesSlider from "./ImagesSlider";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: ProjectItem;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ y: 80 }}
      whileInView={{ y: 0 }}
      transition={{
        type: "spring",
        duration: 0.4,
      }}
      className="w-full overflow-hidden rounded-lg border border-yellow-300 shadow-md transition-shadow duration-150 hover:shadow-md"
    >
      <ImagesSlider images={project.images} />
      <div className="p-3 flex items-center gap-2 text-gray-800 min-sm:p-4">
        <span className="relative h-5 w-5">
          <Image src={project.favicon} alt="logo" width={20} height={20} />
        </span>
        <span className="text-sm font-semibold">{project.title}</span>
      </div>
      <div className="px-3">
        <p className="text-xs text-gray-600 min-md:text-sm">
          {project.description}
        </p>
      </div>
      <div className="py-2 px-3 flex items-center justify-end gap-6">
        <a
          href={project.githubLink}
          target="_blank"
          className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800 transition-colors duration-100 underline min-md:text-sm"
        >
          <FaGithub className="size-5" /> Source Code
        </a>
        {project.deploymentLink && (
          <a
            href={project.deploymentLink}
            target="_blank"
            className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800 transition-colors duration-100 underline min-md:text-sm"
          >
            <FaExternalLinkAlt className="size-5" /> Live
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
