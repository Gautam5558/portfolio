"use client";

import Image from "next/image";
import Heading from "./reusable/Heading";

const Contact = () => {
  return (
    <div className="h-screen py-20 px-56">
      <Heading text="Get in touch" />
      <div className="w-full h-full my-auto flex lg:flex-col items-center justify-between lg:jusify-center gap-x-20 lg:gap-x-0 gap-y-20">
        <div>
          <Image
            src={"/contact.gif"}
            alt="contact-section-image"
            width={400}
            height={400}
            className="w-[400px] rounded-md opacity-80"
          />
        </div>
        <form className="w-[600px] lg:w-[400px] sm:w-full flex flex-col gap-3">
          <div className="w-full flex lg:flex-col gap-x-3 lg:gap-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outine-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outine-none"
            />
          </div>
          <input
            placeholder="Subject"
            type="text"
            className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outine-none"
          />
          <textarea
            placeholder="Write me..."
            className="max-h-[250px] min-h-[150px] border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outine-none"
          />
          <button className="w-full border border-yellow-500 rounded-md bg-yellow-600 px-4 py-2 text-sm font-light tracking-wider text-white outine-none hover:bg-yellow-500 transition-colors cursor-pointer">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
