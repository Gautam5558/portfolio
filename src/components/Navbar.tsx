"use client";
import { navbarData } from "@/assets";
import { classNames } from "@/assets/utilityFunctions";
import { motion } from "framer-motion";

interface NavbarProps {
  id: number | string;
}

const Navbar = ({ id }: NavbarProps) => {
  return (
    <div className="w-[70] h-full fixed z-[100] left-0 top-0 flex flex-col justify-between border-r border-gray-200 px-4 py-10">
      <a href="#">
        <span className="text-3xl font-semibold text-red-400">G</span>.
        <span className="block w-min rotate-90 origin-bottom text-[12px] font-semibold dark:text-white transition-colors">
          Jain
        </span>
      </a>
      <div className="flex flex-col gap-y-3 sm:gap-y-2">
        {navbarData.map((element) => {
          return (
            <motion.a
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              href={"#" + element.id}
              key={element.id}
              className="group flex flex-col items-center gap-y-2"
            >
              <span
                className={classNames(
                  "text-2xl text-yellow-600 group-hover:scale-125 transition-all",
                  id === element.id ? "!text-red-500 scale-125" : ""
                )}
              >
                {element.icon}
              </span>
              <span
                className={classNames(
                  "text-[10px] tracking-wide -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100  duration-300 text-center dark:text-white transition-colors",
                  id === element.id ? "opacity-100 translate-x-0" : ""
                )}
              >
                {element.name}
              </span>
            </motion.a>
          );
        })}
      </div>
      <p className="flex items-center justify-centertext-[13px] text-gray-500 mt-6">
        <span className="absolute left-1/2 w-max flex items-center -rotate-90 origin-bottom-left tracking-wider">
          &copy; 2024-2025
        </span>
      </p>
    </div>
  );
};

export default Navbar;
