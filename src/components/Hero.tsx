"use client";
import { heroIcons } from "@/assets";
import { useMotionValue, useTransform, motion, useSpring } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [windowOffset, setWindowOffset] = useState({
    innerWidth: 0,
    innerHeight: 0,
  });
  const [mouseMove, setMouseMove] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    x.set(clientX);
    y.set(clientY);

    console.log(x, y);
  };

  const handleMouseEnter = () => {
    setWindowOffset({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    });
    setMouseMove(true);
  };

  const { innerWidth, innerHeight } = windowOffset;

  const xSpring = useSpring(x, { stiffness: 100, damping: 10 });
  const ySpring = useSpring(y, { stiffness: 100, damping: 10 });

  const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30]);
  const rotateX = useTransform(ySpring, [0, innerHeight], [10, -50]);

  return (
    <div
      className="h-screen grid place-items-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
    >
      <div>
        <div className="flex flex-col items-center justify-center gap-y-3 font-light capitalize">
          <motion.div
            style={{
              rotateX: mouseMove ? rotateX : 0,
              rotateY: mouseMove ? rotateY : 0,
              transition: "0.1s",
            }}
            className="flex items-center justify-center"
          >
            <Image
              src={"/person.png"}
              alt="Person Image"
              width={400}
              height={400}
              priority={true}
              className="h-auto w-[150px]"
            />
            <motion.span
              initial={{ scale: 0 }}
              animate={{
                opacity: buttonHover ? 0 : 1,
                scale: buttonHover ? 2 : 0,
                y: buttonHover ? -40 : 0,
              }}
              transition={{ opacity: { delay: 0.4 } }}
              className="absolute text-3xl font-semibold text-white"
            >
              Hi
            </motion.span>
          </motion.div>
          <h1 className="text-center text-3xl font-bold tracking-wider text-gray-500 sm:text-2xl">
            I am Gautam Jain
          </h1>
          <p className="text-lg tracking-wider text-gray-700">
            Full Stack Developer & Software Engineer
          </p>
        </div>
        <div className="mt-8 flex justify-center gap-x-8 text-3xl text-yellow-600 sm:text-2xl">
          {heroIcons.map((element, index) => {
            return (
              <a href="#" key={index}>
                <div className="relative p-2 flex justify-center items-center h-8 w-8 border-yellow-600 border-[1px] rounded-full overflow-hidden group">
                  {/* The icon itself */}
                  <span className="relative text-[16px] z-10 transition-colors duration-300 group-hover:text-white">
                    {element}
                  </span>

                  {/* The hover fill effect */}
                  <div className="absolute inset-0 bg-red-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
                </div>
              </a>
            );
          })}
        </div>
        <a
          href="#"
          className="mx-auto mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-red-500 transition-colors"
          onMouseEnter={() => {
            setButtonHover(true);
          }}
          onMouseLeave={() => {
            setButtonHover(false);
          }}
        >
          Talk to me
        </a>
      </div>
    </div>
  );
};

export default Hero;
