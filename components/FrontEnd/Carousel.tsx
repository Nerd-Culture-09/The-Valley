"use client";

import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

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

  // Animation for the text movement
  const textSpring = useSpring({
    from: { transform: "translate3d(100%, 0, 0)", opacity: 0 },
    to: [
      { transform: "translate3d(0%, 0, 0)", opacity: 1 },
      { transform: "translate3d(-100%, 0, 0)", opacity: 0 },
    ],
    config: { duration: 3000 },
    reset: true,
    loop: true,
  });

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
            {index === activeIndex && (
              <div className="flex items-start justify-center h-full pt-4">
                <animated.h2
                  style={textSpring}
                  className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-blue-500 to-gray-300 font-custom"
                >
                  WELCOME TO THE VALLEY GUEST HOUSE
                </animated.h2>
              </div>
            )}
          </div>
        ))}

        {/* Stationary Text Overlay */}
        <div className="text-white absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center"></div>
      </div>

      {/* Navigation buttons */}
      <div className="absolute top-0 left-0 flex justify-between w-full h-full">
        <button
          className="text-white bg-black bg-opacity-50 p-2"
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          className="text-white bg-black bg-opacity-50 p-2"
          onClick={handleNext}
        >
          Next
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 bg-white rounded-full mx-1 cursor-pointer ${
              index === activeIndex ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
