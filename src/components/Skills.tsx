"use client";

import React from "react";
import Heading from "./reusable/Heading";
import Image from "next/image";
import { skillsData } from "@/assets";

const Skills = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-y-20 px-96">
      <Heading text="Skills" />
      <div className="w-full flex justify-between flex-wrap gap-x-8 gap-y-10 lg:gap-y-6">
        {skillsData.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-center gap-x-3 rounded-xl border border-yellow-800 bg-zinc-200 px-5 py-2 lg:px-2"
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={100}
                height={100}
                className="h-auto w-[40px]"
              />
              <p className="text-sm text-gray-600">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
