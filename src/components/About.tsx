import React from "react";
import Heading from "./reusable/Heading";
import Image from "next/image";
import Achievements from "./reusable/Achievements";
import { aboutData, downloadIcon, arrowLeftIcon, aboutText } from "@/assets";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen px-56 flex flex-col items-center justify-center sm:px-28"
    >
      <Heading text="About Me" />
      <div className="w-full flex items-center justify-between md:justify-center ">
        <Image
          src={"/about-me.png"}
          alt="About Image"
          width={400}
          height={400}
          className="w-[300px] lg:w-[200px] md:hidden mid-tab:hidden small-tab:hidden"
        />
        <div className="relative max-x-[800px] rounded-xl bg-zinc-100 dark:bg-zinc-700 transition-colors p-5 text-justify ">
          <span className="absolute top-20 -left-5 scale-[2.5] text-zinc-100  md:hidden">
            {arrowLeftIcon}
          </span>
          <p className="text-lg font-light text-gray-700 dark:text-white first-letter:pl-3 lg:text-[14px] sm:text-[14px] mid-tab:text-[14px]">
            {aboutText}
          </p>
          <a
            href="/gautam-resume.pdf"
            download=""
            className="w-max flex items-center gap-x-2 mt-6 rounded-full border-gray-300 border bg-red-400 px-3 py-2 text-white font-light hover:bg-red-500 transition-colors "
          >
            <span>Download CV</span>
            <span className="text-xl">{downloadIcon}</span>
          </a>
        </div>
      </div>
      <div className="mt-20 w-full flex flex-wrap items-center justify-between gap-x-7 gap-y-10 mid-tab:justify-center sm:justify-center ">
        {aboutData.map((item, index) => {
          return <Achievements key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default About;
