"use client";

import { useState, useEffect } from "react";

type Slide = {
  id: number;
  src: string;
};

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const slides: Slide[] = [
    { id: 0, src: "/dummy1.jpg" },
    { id: 1, src: "/dummy2.jpg" },
    { id: 2, src: "/dummy3.jpg" },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  // Autoplay effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [activeIndex]);

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`duration-700 ease-in-out absolute w-full h-full transition-opacity ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            data-carousel-item
            style={{
              backgroundImage: `url(${slide.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            
          </div>
        ))}

        {/* Stationary Text Overlay */}
        <div className="text-white absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <div className="text-white font-['Inter'] text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center leading-tight">
            Discover Extraordinary <br/>Comfort in The Valley</div>
        </div>
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            aria-current={index === activeIndex ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
