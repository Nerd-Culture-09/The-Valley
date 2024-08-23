"use client";
import { useState, ReactNode } from "react";
import Image from "next/image";
import { DirectionAwareHover } from "../ui/direction-aware-hover";
import { FaTable, FaBed, FaShieldAlt, FaCar, FaWifi, FaBath, FaFire, FaMicrophone } from 'react-icons/fa';
import { RoomCarouselDemo } from "./RoomCarousel";
import { Button } from "../ui/button";

interface CardData {
  category: string;
  title: string;
  src: string;
  content: ReactNode;
  price: string;
}

const DummyContent = ({ category, title }: { category: string; title: string }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="lg:w-1/2">
          <RoomCarouselDemo />
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl">
            <h3 className="text-neutral-700 dark:text-neutral-200 text-xl font-bold mb-2">{category}</h3>
            <h4 className="text-neutral-700 dark:text-neutral-200 text-lg mb-4">{title}</h4>
            {/* Individual Amenities with Icons */}
            <div className="flex flex-wrap justify-between mt-10">
              <div className="w-[96px] h-[96px] flex flex-col items-center bg-white rounded-lg border border-[#e8e8e8] p-4">
                <FaTable className="text-[#ff7665] text-3xl mt-4" />
                <div className="mt-2 text-xs">Table</div>
              </div>
              <div className="w-[96px] h-[96px] flex flex-col items-center bg-white rounded-lg border border-[#e8e8e8] p-4">
                <FaBed className="text-[#ff7665] text-3xl mt-4" />
                <div className="mt-2 text-xs">Double</div>
              </div>
              <div className="w-[96px] h-[96px] flex flex-col items-center bg-white rounded-lg border border-[#e8e8e8] p-4">
                <FaShieldAlt className="text-[#ff7665] text-3xl mt-4" />
                <div className="mt-2 text-xs">Security</div>
              </div>
              <div className="w-[96px] h-[96px] flex flex-col items-center bg-white rounded-lg border border-[#e8e8e8] p-4">
                <FaCar className="text-[#ff7665] text-3xl mt-4" />
                <div className="mt-2 text-xs">Parking </div>
              </div>
              <div className="w-[96px] h-[96px] flex flex-col items-center bg-white rounded-lg border border-[#e8e8e8] p-4">
                <FaWifi className="text-[#ff7665] text-3xl mt-4" />
                <div className="mt-2 text-xs">Free Wifi</div>
              </div>
              <div className="w-[96px] h-[96px] flex flex-col items-center bg-white rounded-lg border border-[#e8e8e8] p-4">
                <FaBath className="text-[#ff7665] text-3xl mt-4" />
                <div className="mt-2 text-xs">Bathroom</div>
              </div>
              <div className="w-[96px] h-[96px] flex flex-col items-center bg-white rounded-lg border border-[#e8e8e8] p-4">
                <FaFire className="text-[#ff7665] text-3xl mt-4" />
                <div className="mt-2 text-xs">Heater</div>
              </div>
              <div className="w-[96px] h-[96px] flex flex-col items-center bg-white rounded-lg border border-[#e8e8e8] p-4">
                <FaFire className="text-[#ff7665] text-3xl mt-4" />
                <div className="mt-2 text-xs">Blanket</div>
              </div>
            </div>
            </div>
          </div>
        </div>
    </>
  );
};

export function CardDemo() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState<ReactNode | null>(null);

  const handleClick = (category: string, title: string) => {
    setPopupContent(<DummyContent category={category} title={title} />);
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  const cardsData: CardData[] = [
    {
      category: "Artificial Intelligence",
      title: "You can do more with AI.",
      src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent category="Artificial Intelligence" title="You can do more with AI." />,
      price: ""
    },
    {
      category: "Productivity",
      title: "Enhance your productivity.",
      src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent category="Productivity" title="Enhance your productivity" />,
      price: ""
    },
    {
      category: "Product",
      title: "Launching the new Apple Vision Pro.",
      src: "/valley_south_room1_bedroom.jpeg",
      content: <DummyContent category="Product" title="Launching the new Apple Vision Pro" />,
      price: ""
    },
    {
      category: "The Valley South",
      title: "Room 1",
      src: "/valley_south_room1_bedroom.jpeg",
      content: <DummyContent category="The Valley South" title="Room 1" />,
      price: "R250/ Night"
    },
  ];

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
            onClick={() => handleClick(card.category, card.title)}
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
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-sm">
        <div className="bg-white p-8 w-full max-w-4xl relative border-2 border-gray-200 rounded-lg md:rounded-2xl">
        <button
        onClick={handleClose}
        className="absolute top-3.5 right-1 text-gray-500 hover:text-gray-700"
        >
        Close
        </button>
        {popupContent}
    </div>
  </div>
)}
    </div>
  );
}
