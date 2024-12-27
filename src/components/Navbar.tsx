"use client";
import { navbarData } from "@/assets";

const Navbar = () => {
  return (
    <div className="w-[70] h-full fixed left-0 top-0 flex flex-col justify-between border-r border-gray-200 px-4 py-10">
      <a href="#">
        <span className="text-3xl font-semibold text-red-400">G</span>.
        <span className="block w-min rotate-90 origin-bottom text-[12px] font-semibold">
          Jain
        </span>
      </a>
      <div className="flex flex-col gapy-3 sm:gap-y-2">
        {navbarData.map((element) => {
          return (
            <a
              href={"#" + element.id}
              key={element.id}
              className="group flex flex-col items-center gap-y-2"
            >
              <span className="text-2xl text-yellow-600 group-hover:scale-125 transition-all">
                {element.icon}
              </span>
              <span className="text-[10px] tracking-wide -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-center">
                {element.name}
              </span>
            </a>
          );
        })}
      </div>
      <p className="flex items-center justify-centertext-[13px] text-gray-500 mt-6">
        <span className="absolute left-1/2 w-max flex items-center -rotate-90 origin-bottom-left tracking-wider">
          C 2024-2025
        </span>
      </p>
    </div>
  );
};

export default Navbar;
