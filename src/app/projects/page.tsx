"use client";
import { projectData } from "@/assets/projectsData";
import ProjectCard from "@/components/reusable/ProjectCard";

const ProjectsPage = () => {
  return (
    <section className="mx-auto mb-40 mt-6 w-full gap-20 px-6 min-sm:mt-12 min-sm:px-14 min-md:px-20">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-2xl font-semibold text-gray-700 min-md:tsxt-4xl">
          Projects
        </h1>
        <div className="my-2">
          <span className="text-sm text-gray-600 font-medium">
            Here are some of the projects I&apos;d like to share
          </span>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 min-lg:grid-cols-2">
          {projectData.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
