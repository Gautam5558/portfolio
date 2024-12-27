"use client";

import { projectShowcaseList } from "@/assets/projectsData";
import ProjectShowcase from "./reusable/ProjectShowcase";

const Projects = () => {
  return (
    <div id="projects">
      <ProjectShowcase projectsData={projectShowcaseList} />
    </div>
  );
};

export default Projects;
