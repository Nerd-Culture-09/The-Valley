"use client";
import { useState, ReactNode } from "react";
import {FaTimes } from "react-icons/fa";
import { DirectionAwareHover } from "../ui/direction-aware-hover";
import { RoomCarouselDemo } from "./RoomCarousel";
import { Button } from "@/components/ui/button";
import { SelectDemo } from "./RoomPackeges";
import { useRouter } from "next/router";
import { Timeline } from "./BookTimeline";
import { DummyContent } from "./DummyContent";

export interface CardData {
  category: string;
  title: string;
  src: string;
  images: string[]; // Array of image URLs
  price: string;
}


// Image arrays for each room
const room1Imgs = [
  "/valley_south_room1_bedroom.jpeg",
  "/bedroom_front_display.jpg",
  "/valley_south_room1_bathroom.jpeg",
  "/valley_south_outside_night.jpeg",
  "/valley_south_town_view.jpeg",
];

const room2Imgs = [
  "/valley_south_room2_bedroom.jpeg",
  "/valley_south_room2_shower.jpeg",
  "/bedroom_front_display3.jpg",
  "/valley_south_outside_night.jpeg",
  "/valley_south_town_view.jpeg",
];

const room3Imgs = [
  "/valley_south_room3_bedroom.jpeg",
  "/valley_south_room3_bathroom.jpeg",
  "/bedroom_front_display3.jpg",
  "/valley_south_outside_night.jpeg",
  "/valley_south_town_view.jpeg",
];

const room4Imgs = [
  "/bedroom_display2.jpeg",
  "/valley_south_room2_restroom.jpeg",
  "/valley_south_room2_shower.jpeg",
  "/valley_south_outside_night.jpeg",
  "/valley_south_town_view.jpeg",
];


// Card data array
const cardsData: CardData[] = [
  {
    category: "The Valley South",
    title: "Room 1",
    src: "/bedroom_front_display3.jpg",
    images: room1Imgs,
    price: "R250/ Night",
  },
  {
    category: "The Valley South",
    title: "Room 2",
    src: "/bedroom_front_display.jpg",
    images: room2Imgs,
    price: "R250/ Night",
  },
  {
    category: "The Valley North",
    title: "Room 1",
    src: "/bedroom_display1.jpeg",
    images: room3Imgs,
    price: "R250/ Night",
  },
  {
    category: "The Valley North",
    title: "Room 2",
    src: "/bedroom_display2.jpeg",
    images: room4Imgs,
    price: "R250/ Night",
  },
];

export function CardDemo() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState<ReactNode | null>(null);

  const handleClick = (card: CardData) => {
    setPopupContent(
      <DummyContent category={card.category} title={card.title} images={card.images} room={card} />
    );
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Available Rooms</h2>
        <a
          href="#"
          className="text-sm font-semibold text-indigo-600 hover:underline"
        >
          View All
        </a>
      </div>

      <div className="flex flex-wrap md:flex-row flex-col md:justify-between justify-center items-center gap-2">
        {cardsData.map((card, index) => (
          <div
            key={index}
            onClick={() => handleClick(card)}
            className="cursor-pointer"
          >
            <DirectionAwareHover imageUrl={card.src}>
              <p className="font-bold text-xl">
                {card.category + " " + card.title}
              </p>
              <p className="font-normal text-sm">{card.price}</p>
            </DirectionAwareHover>
          </div>
        ))}
      </div>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white p-8 w-full max-w-4xl relative border-2 border-gray-200 rounded-lg md:rounded-2xl">
            <button
              onClick={handleClose}
              className="absolute top-2 right-1 text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <FaTimes className="text-2xl" />
            </button>
            {popupContent}
          </div>
        </div>
      )}
    </div>
  );
}
