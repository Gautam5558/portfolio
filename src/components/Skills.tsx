"use client";

import React from "react";
import Heading from "./reusable/Heading";
import Image from "next/image";
import { skillsData } from "@/assets";
import { motion } from "framer-motion";

const Skills = () => {
  const variants = {
    visible: (i: number) => {
      return {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.3 + i * 0.05,
        },
      };
    },
    hidden: {
      opacity: 0,
      y: 30,
    },
  };
  return (
    <div
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center gap-y-20 px-56 sm:px-28 sm:mt-32 "
    >
      <Heading text="Skills" />
      <div className="w-full grid grid-cols-5 gap-x-6 gap-y-4 tablet-lg:grid-cols-4 mid-tab:grid-cols-3 md:grid-cols-2 small-tab:grid-cols-2 sm:grid-cols-1 big-phone:grid-cols-1  ">
        {skillsData.map((item, index) => {
          return (
            <motion.div
              custom={index}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.1 }}
              viewport={{ margin: "50px", once: true }}
              key={index}
              className="flex items-center justify-center gap-x-3 rounded-xl border border-yellow-500 bg-zinc-200 px-5 py-2 lg:px-2"
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={100}
                height={100}
                className="h-auto w-[40px] mid-tab:w-[25px]"
              />
              <p className="text-sm mid-tab:text-[0.8rem] text-gray-600">
                {item.name}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
