"use client";
import React, { useEffect, useRef, useState } from "react";
import { RiMoonFoggyFill } from "react-icons/ri";
import { RiSunFoggyFill } from "react-icons/ri";
import { motion } from "framer-motion";

interface ToggleModeProps {
  children: React.ReactNode;
}

const ToggleMode = ({ children }: ToggleModeProps) => {
  let value = localStorage.getItem("isDarkTheme");
  if (value) {
    value = JSON.parse(value);
  }
  const [isDarkTheme, setIsDarkTheme] = useState<null | boolean>(
    value as boolean | null
  );
  const mainRef = useRef<null | HTMLElement>(null);

  useEffect(() => {
    if (value) {
      setIsDarkTheme(true);
      mainRef.current?.classList.add("dark");
    } else {
      setIsDarkTheme(false);
      mainRef.current?.classList.remove("dark");
    }
  }, []);

  const handleClick = () => {
    if (isDarkTheme) {
      setIsDarkTheme(false);
      mainRef.current?.classList.remove("dark");
      localStorage.setItem("isDarkTheme", "false");
    } else {
      setIsDarkTheme(true);
      mainRef.current?.classList.add("dark");
      localStorage.setItem("isDarkTheme", "true");
    }
  };

  return (
    <main ref={mainRef}>
      <div className="dark:bg-zinc-800">
        <div>
          <button
            className="fixed z-[100] right-14 sm:right-10 top-10 text-yellow-600 hover:text-yellow-500"
            onClick={() => {
              handleClick();
            }}
          >
            {isDarkTheme === false ? (
              <motion.span
                key="moon"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ scale: 0, opacity: 0 }}
                className="absolute block rounded-full bg-zinc-50 dark:bg-zinc-800 transition-colors p-1 text-2xl"
              >
                <RiMoonFoggyFill />
              </motion.span>
            ) : (
              <motion.span
                key="sun"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ scale: 0, opacity: 0 }}
              >
                <RiSunFoggyFill className="absolute block rounded-full bg-zinc-50 dark:bg-zinc-800 transition-colors p-1 text-4xl" />
              </motion.span>
            )}
          </button>
          {children}
        </div>
      </div>
    </main>
  );
};

export default ToggleMode;
