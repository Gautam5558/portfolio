"use client";
import { useState } from "react";
import { IoCaretBackOutline, IoCaretForwardOutline } from "react-icons/io5";

interface ImagesSliderProps {
  images: string[];
}

const ImagesSlider = ({ images }: ImagesSliderProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (type: string) => {
    if (isAnimating) return; // Prevent multiple clicks during animation
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300); // Match animation duration

    if (type === "next") {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    } else {
      setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };

  return (
    <div className="relative w-full h-[300px]">
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`project-image-${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-300 ease-linear ${
              currentImage === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[20px] flex space-x-4">
        <button onClick={() => handleClick("prev")}>
          <IoCaretBackOutline className="size-6 text-red-400 hover:text-red-500" />
        </button>
        <button onClick={() => handleClick("next")}>
          <IoCaretForwardOutline className="size-6 text-red-400 hover:text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default ImagesSlider;
