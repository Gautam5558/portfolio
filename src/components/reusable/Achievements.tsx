"use client";
import { useMotionValue, motion } from "framer-motion";
import React from "react";

interface AchievementsProps {
  item: {
    title: string;
    amount: number;
    icon: React.JSX.Element;
  };
}

const Achievements = ({ item: { title, amount, icon } }: AchievementsProps) => {
  const number = useMotionValue(0);

  const count = (amount: number) => {
    let i = 0;
    const updateCount = () => {
      let timer;
      if (i <= amount) {
        number.set(i++);
        timer = setTimeout(updateCount, 50);
      } else {
        clearTimeout(timer);
      }
    };
    updateCount();
  };

  return (
    <div className="flex items-end gap-x-3">
      <span className="text-4xl lg:text-2xl text-gray-300">{icon}</span>
      <h1 className="flex flex-col gap-y-2 items-center ">
        <div className="flex items-center gap-1">
          <motion.span
            onViewportEnter={() => count(amount)}
            viewport={{ once: true }}
            className="text-2xl lg:text-xl font-light text-yellow-500"
          >
            {number}
          </motion.span>
          <span className="text-2xl lg:text-xl font-light text-yellow-500">
            +
          </span>
        </div>
        <span className="text-sm tracking-wide text-gray-500 dark:text-white transition-colors">
          {title}
        </span>
      </h1>
    </div>
  );
};

export default Achievements;
