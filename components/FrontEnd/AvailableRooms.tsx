"use client";
import { useState, ReactNode } from "react";
import { FaTable, FaBed, FaShieldAlt, FaCar, FaWifi, FaBath, FaFire, FaTimes } from 'react-icons/fa';
import { DirectionAwareHover } from "../ui/direction-aware-hover";
import { RoomCarouselDemo } from "./RoomCarousel";
import { Button } from "@/components/ui/button"
import { SelectDemo } from "./RoomPackeges";

interface CardData {
  category: string;
  title: string;
  src: string;
  images: string[]; // Array of image URLs
  price: string;
}

// Image arrays for each room
const room1Imgs = [
  "/valley_south_room1_bedroom.jpeg",
  "/valley_south_room1_livingroom.jpeg",
  "/valley_south_room1_bathroom.jpeg",
  "/valley_south_room1_kitchen.jpeg",
  "/valley_south_room1_balcony.jpeg"
];

const room2Imgs = [
  "/valley_south_room2_bedroom.jpeg",
  "/valley_south_room2_livingroom.jpeg",
  "/valley_south_room2_bathroom.jpeg",
  "/valley_south_room2_kitchen.jpeg",
  "/valley_south_room2_balcony.jpeg"
];

const room3Imgs = [
  "/bedroom_display1.jpeg",
  "/livingroom_display1.jpeg",
  "/bathroom_display1.jpeg",
  "/kitchen_display1.jpeg",
  "/balcony_display1.jpeg"
];

const room4Imgs = [
  "/bedroom_display2.jpeg",
  "/livingroom_display2.jpeg",
  "/bathroom_display2.jpeg",
  "/kitchen_display2.jpeg",
  "/balcony_display2.jpeg"
];

// Array of amenities with icons
const amenities = [
  { label: "Table", icon: <FaTable className="text-[#ff7665] text-3xl mt-4" /> },
  { label: "Double", icon: <FaBed className="text-[#ff7665] text-3xl mt-4" /> },
  { label: "Security", icon: <FaShieldAlt className="text-[#ff7665] text-3xl mt-4" /> },
  { label: "Parking", icon: <FaCar className="text-[#ff7665] text-3xl mt-4" /> },
  { label: "Free Wifi", icon: <FaWifi className="text-[#ff7665] text-3xl mt-4" /> },
  { label: "Bathroom", icon: <FaBath className="text-[#ff7665] text-3xl mt-4" /> },
  { label: "Heater", icon: <FaFire className="text-[#ff7665] text-3xl mt-4" /> },
  { label: "Blanket", icon: <FaFire className="text-[#ff7665] text-3xl mt-4" /> }
];

// DummyContent component to display the popup content
const DummyContent = ({ category, title, images }: { category: string; title: string; images: string[] }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="lg:w-1/2">
        <div className="ml-5">
          <SelectDemo/>
        </div>
        <div  className="-mt-28">

          <RoomCarouselDemo images={images} />
          <div className="w-full flex justify-center p-5">
            <Button>Book now</Button>
          </div>
        </div>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl">
            <h3 className="text-neutral-700 dark:text-neutral-200 text-xl font-bold mb-2">{category}</h3>
            <h4 className="text-neutral-700 dark:text-neutral-200 text-lg mb-4">{title}</h4>  
            {/* Individual Amenities with Icons */}
            <div className="flex flex-wrap justify-between mt-10">
              {amenities.map((amenity, index) => (
                <div key={index} className="w-[96px] h-[96px] flex flex-col items-center bg-white rounded-lg border border-[#e8e8e8] p-4">
                  {amenity.icon}
                  <div className="mt-2 text-xs">{amenity.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Card data array
const cardsData: CardData[] = [
  {
    category: "The Valley South",
    title: "Room 1",
    src: "/valley_south_room1_bedroom.jpeg",
    images: room1Imgs,
    price: "R250/ Night"
  },
  {
    category: "The Valley South",
    title: "Room 2",
    src: "/valley_south_room2_bedroom.jpeg",
    images: room2Imgs,
    price: "R250/ Night"
  },
  {
    category: "The Valley North",
    title: "Room 1",
    src: "/bedroom_display1.jpeg",
    images: room3Imgs,
    price: "R250/ Night"
  },
  {
    category: "The Valley North",
    title: "Room 2",
    src: "/bedroom_display2.jpeg",
    images: room4Imgs,
    price: "R250/ Night"
  },
];

export function CardDemo() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState<ReactNode | null>(null);

  const handleClick = (category: string, title: string, images: string[]) => {
    setPopupContent(<DummyContent category={category} title={title} images={images} />);
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Available Rooms</h2>
        <a href="#" className="text-sm font-semibold text-indigo-600 hover:underline">
          View All
        </a>
      </div>

      <div className="flex flex-wrap justify-between gap-2">
        {cardsData.map((card, index) => (
          <div
            key={index}
            onClick={() => handleClick(card.category, card.title, card.images)}
            className="cursor-pointer"
          >
            <DirectionAwareHover imageUrl={card.src}>
              <p className="font-bold text-xl">{card.title}</p>
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
              className="absolute top-3.5 right-1 text-gray-500 hover:text-gray-700"
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
