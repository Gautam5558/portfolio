import { classNames } from "@/assets/utilityFunctions";
import React from "react";

interface HeadingProps {
  text: string;
  className?: string;
}

const Heading = ({ text, className }: HeadingProps) => {
  return (
    <h1
      className={classNames(
        "text-3xl sm:text-2xl font-bold text-gray-600 mb-14 self-start dark:text-white transition-colors",
        className
      )}
    >
      {text}
    </h1>
  );
};

export default Heading;
