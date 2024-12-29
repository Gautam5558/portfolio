import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";
import { projectShowcaseListItemType } from "@/types";
import ProjectShowcaseList from "./ProjectShowcaseList";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Heading from "./Heading";

const generateImageData = (projectsData: projectShowcaseListItemType[]) => {
  return projectsData.map((project) => project.image);
};

interface ProjectShowcaseProps {
  projectsData: projectShowcaseListItemType[];
}

export default function ProjectShowcase({
  projectsData,
}: ProjectShowcaseProps) {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const images = useMemo(() => {
    return generateImageData(projectsData);
  }, [projectsData]);

  const handleAnimate = (index: number) => {
    if (index === currentImage) {
      return;
    }
    setCurrentImage(index);
  };

  return (
    <section className="overflow-hidden px-6 py-32 min-sm:px-14 min-md:px-56">
      <div className="relative mx-auto max-w-7xl">
        <div className="relative right-0 top-0 hidden min-lg:block">
          <AnimatePresence>
            <motion.div
              key={projectsData[currentImage].title}
              initial={{ x: "100%", opacity: 0 }}
              animate={{
                x: "60%",
                y: "95%",
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              }}
              transition={{
                type: "spring",
                stiffness: 100,
              }}
              className="absolute right-0 top-0 z-50"
            >
              <Image
                src={images[currentImage]}
                unoptimized
                width={100}
                height={100}
                className="h-auto w-1/2 rounded-lg border border-yellow-500 shadow-lg"
                alt={`project ${currentImage}`}
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <Heading text="My projects" />
        <div className="hidden flex-col gap-6 py-14 min-sm:gap-8 min-sm:py-20 min-md:gap-10 min-lg:flex">
          {projectsData.map((project, index) => (
            <ProjectShowcaseList
              activeProject={currentImage}
              toggleList={handleAnimate}
              data={project}
              key={index}
            />
          ))}
        </div>
        <div className="flex flex-col gap-4 py-14 min-sm:gap-8 min-sm:py-20 min-md:gap-10 min-lg:hidden">
          {projectsData.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="flex flex-col gap-1"
            >
              <div className="flex gap-2 group">
                <span className="text-3xl font-semibold text-red-400 group-hover:text-red-500 duration-300 min-sm:text-4xl min-md:text-5xl min-lg:hidden">
                  {project.index + 1}.
                </span>
                <span
                  key={project.title}
                  className="underline-offset-3 text-3xl font-semibold text-red-400 group-hover:underline group-hover:text-red-500 duration-300 min-sm:text-4xl min-md:text-5xl min-lg:hidden"
                >
                  {project.title}
                </span>
              </div>
              <p className="flex max-w-xl flex-wrap gap-2 text-base font-semibold text-gray-500 dark:text-white/75 transition-colors min-sm:text-lg">
                {project.tags.map((tag, index) => (
                  <span key={index}>#{tag}</span>
                ))}
              </p>
            </Link>
          ))}
        </div>
        <Link
          href="/projects"
          className="group/link relative flex max-w-max  gap-4 text-base font-semibold min-sm:text-lg min-md:text-[1.3rem]"
        >
          <div className="relative max-w-max flex items-center gap-2">
            <span className="text-gray-700 dark:text-white transition-colors">
              See more projects{" "}
            </span>
            <span>
              {" "}
              <FaRegArrowAltCircleRight className="rotate-0 text-red-400 transition-transform duration-300 group-hover/link:-rotate-45 group-hover/link:scale-[1.2] group-hover/link:text-red-500 " />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
