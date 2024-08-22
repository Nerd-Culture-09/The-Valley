"use client";

import React from "react";
import { DirectionAwareHover } from "../ui/direction-aware-hover";

export function CardDemo() {
  // Replace the image URL with the data provided in the AppleCardsCarouselDemo component.
  const data = [
    {
      category: "Artificial Intelligence",
      title: "You can do more with AI.",
      src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      category: "Productivity",
      title: "Enhance your productivity.",
      src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      category: "Product",
      title: "Launching the new Apple Vision Pro.",
      src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      category: "Product",
      title: "Maps for your iPhone 15 Pro Max.",
      src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        {data.map((item, index) => (
          <DirectionAwareHover key={index} imageUrl={item.src}>
            <p className="font-bold text-xl">{item.title}</p>
            <p className="font-normal text-sm">{item.category}</p>
          </DirectionAwareHover>
        ))}
      </div>
    </div>
  );
}
