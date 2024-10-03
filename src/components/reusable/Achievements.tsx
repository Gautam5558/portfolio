import React from "react";

interface AchievementsProps {
  item: {
    title: string;
    amount: number;
    icon: React.JSX.Element;
  };
}

const Achievements = ({ item: { title, amount, icon } }: AchievementsProps) => {
  return (
    <div className="flex items-center gap-x-3">
      <span className="text-4xl lg:text-2xl text-gray-300">{icon}</span>
      <h1 className="flex flex-col gap-y-2">
        <span className="text-2xl lg:text-xl font-light text-yellow-500">
          {amount}
        </span>
        <span className="text-sm tracking-wide text-gray-500">{title}</span>
      </h1>
    </div>
  );
};

export default Achievements;
