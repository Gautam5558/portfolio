import { heroIcons } from "@/assets";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-screen grid place-items-center">
      <div>
        <div className="flex flex-col items-center justify-center gap-y-3 font-light capitalize">
          <div className="flex items-center justify-center">
            <Image
              src={"/person.png"}
              alt="Person Image"
              width={400}
              height={400}
              priority={true}
              className="h-auto w-[150px]"
            />
            <span className="absolute text-3xl font-semibold text-white">
              Hi there
            </span>
          </div>
          <h1 className="text-center text-3xl font-bold tracking-wider text-gray-500">
            I am Gautam Jain
          </h1>
          <p className="text-lg tracking-wider text-gray-700">
            Full Stack Developer & Software Engineer
          </p>
        </div>
        <div className="mt-8 flex justify-center gap-x-8 text-3xl text-yellow-600">
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
        >
          Talk to me
        </a>
      </div>
    </div>
  );
};

export default Hero;
