'use client';

import Link from 'next/link';
import { useState } from 'react';

import SpecialOffer from './Special-Offers';
import Testimonial from './Testimonials';
import Team from './Team';
import { ImagesSliderDemo } from './Image-slider-Carousel';
import { CardDemo } from './AvailableRooms';
import { BackGroundBoxBar } from './BackGroundBox-bar'; // Import the BackgroundBoxesDemo component

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="relative isolate pt-14 lg:pt-8 w-full overflow-hidden">
        {/* Remove any inset or margin from these divs */}
        <div className="w-full h-full">
          <ImagesSliderDemo />
        </div>

        {/* Add BackgroundBoxesDemo directly after ImagesSliderDemo with no margin */}
        <BackGroundBoxBar />

        {/* You can uncomment these sections as needed */}
        {/*<CarouselDefault/>*/}
        {/*<Carousel />*/}
        {/* <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56" >
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Where Hospitality Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#2e0347]">Serenity</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Nestled in a tranquil environment, our guesthouse provides the perfect escape for those seeking peace and rejuvenation.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
              <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>*/}

        <CardDemo />

        <Testimonial />

        <Team />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          
        </div>
      </div>
    </div>
  );
}