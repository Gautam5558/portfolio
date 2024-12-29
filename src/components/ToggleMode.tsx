import React, { useState } from "react";
import { RiMoonFoggyFill } from "react-icons/ri";
import { RiSunFoggyFill } from "react-icons/ri";

interface ToggleModeProps {
  children: React.ReactNode;
}

const ToggleMode = ({ children }: ToggleModeProps) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleClick = () => {
    if (isDarkTheme) {
      setIsDarkTheme(false);
    } else {
      setIsDarkTheme(true);
    }
  };

  return (
    <main>
      <div>
        <div>
          <button
            className="fixed right-14 sm:right-10 top-10 text-yellow-600 hover:text-yellow-500"
            onClick={() => {
              handleClick();
            }}
          >
            {isDarkTheme === false ? (
              <span className="absolute block rounded-full bg-zinc-50 p-1 text-2xl">
                <RiMoonFoggyFill />
              </span>
            ) : (
              <span>
                <RiSunFoggyFill className="absolute block rounded-full bg-zinc-50 p-1 text-3xl" />
              </span>
            )}
          </button>
          {children}
        </div>
      </div>
    </main>
  );
};

export default ToggleMode;
