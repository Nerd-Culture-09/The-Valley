"use client";

import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";
import Testimonial from './Testimonials';
import Team from './Team';
import { ImagesSliderDemo } from './Image-slider-Carousel';
import { CardDemo } from './AvailableRooms';

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="relative isolate pt-14 lg:pt-8 w-full overflow-hidden">
        {/* Background Boxes Section */}
        <div className="h-64 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
          <div className="inset-0 w-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
          <Boxes />
          <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
            Tailwind is Awesome
          </h1>
          <p className="text-center mt-2 text-neutral-300 relative z-20">
            Framer motion is the best animation library ngl
          </p>
        </div>

        {/* Uncomment these sections as needed */}
        {/* <CarouselDefault/> */}
        {/* <Carousel /> */}

        {/* Card Demo Section */}
        <CardDemo />

        {/* Testimonial Section */}
        <Testimonial />

        {/* Team Section */}
        <Team />

        {/* Background Blur Effect */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
