"use client";
import Link from "next/link";

import { motion } from "framer-motion";
import { classNames } from "@/assets/utilityFunctions";

export type ProjectShowcaseListItem = {
  index: number;
  title: string;
  href: string;
  tags: string[];
  image: string;
};

export interface ProjectShowcaseListProps {
  data: ProjectShowcaseListItem;
  activeProject: number;
  toggleList: (index: number) => void;
}

export default function ProjectShowcaseList({
  data,
  activeProject,
  toggleList,
}: ProjectShowcaseListProps) {
  return (
    <motion.div
      className={classNames("group flex gap-4")}
      onHoverStart={() => toggleList(data.index)}
      onFocus={() => toggleList(data.index)}
    >
      <span
        className={classNames(
          "hidden text-6xl font-semibold duration-300 min-lg:block",
          activeProject === data.index ? "text-red-500" : "text-red-400"
        )}
      >
        {data.index + 1}.
      </span>
      <div className="flex flex-col gap-2">
        <Link href={data.href} className="relative max-w-max">
          <span
            className={classNames(
              "hidden text-6xl font-semibold transition-colors duration-300 min-lg:block",
              activeProject === data.index
                ? "text-red-500 underline underline-offset-3"
                : "text-red-400"
            )}
          >
            {data.title}
          </span>
        </Link>
        <p className="max-w-xl text-base font-semibold text-gray-500 min-sm:text-lg">
          {data.tags.map((tag) => {
            return `#${tag} `;
          })}
        </p>
      </div>
    </motion.div>
  );
}
