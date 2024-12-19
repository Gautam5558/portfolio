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
  toggleList: (index: number) => void; //eslint-disable-line no-unused-vars
}

export default function ProjectShowcaseList(props: ProjectShowcaseListProps) {
  return (
    <motion.div
      className={classNames("group flex gap-4 group")}
      onHoverStart={() => props.toggleList(props.data.index)}
      onFocus={() => props.toggleList(props.data.index)}
    >
      <span
        className={classNames(
          "hidden text-6xl font-semibold duration-300 min-lg:block",
          props.activeProject === props.data.index
            ? "text-red-500"
            : "text-red-400"
        )}
      >
        {props.data.index + 1}.
      </span>
      <span className="text-3xl font-semibold text-accent transition-colors duration-300 min-sm:text-4xl min-md:text-5xl min-lg:hidden">
        {props.data.index + 1}.
      </span>
      <div className="flex flex-col gap-2">
        <Link href={props.data.href} className="relative max-w-max">
          <span
            className={classNames(
              "hidden text-6xl font-semibold transition-colors duration-300 min-lg:block",
              props.activeProject === props.data.index
                ? "text-red-500 group-hover:underline underline-offset-3"
                : "text-red-400"
            )}
          >
            {props.data.title}
          </span>
          <span className="hover:-underline-offset-1 text-3xl font-semibold text-accent transition-colors duration-300 hover:underline min-sm:text-4xl min-md:text-5xl min-lg:hidden">
            {props.data.title}
          </span>
          <span
            className={classNames(
              "absolute -bottom-1 left-0 hidden h-1 origin-left rounded-lg bg-accent transition-[width] duration-300 group-hover:w-full min-lg:block",
              props.activeProject === props.data.index ? "w-full" : "w-0"
            )}
          ></span>
        </Link>
        <p className="max-w-xl text-base font-semibold text-gray-500 min-sm:text-lg">
          {props.data.tags.map((tag) => `#${tag} `)}
        </p>
      </div>
    </motion.div>
  );
}
