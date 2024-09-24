import React from 'react';
import { CardData } from './AvailableRooms';
import { DirectionAwareHover } from '../ui/direction-aware-hover';
import { TypewriterEffectSmoothDemo } from './Typewriter';
import SouthRoomCards from './SouthRoomCards';
import NorthRoomCards from './NorthRoomCards';

function AllRooms()
{
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
          price: "250/ Night",
          room: ""
        },
        {
          category: "The Valley South",
          title: "Room 2",
          src: "/bedroom_front_display.jpg",
          images: room2Imgs,
          price: "250/ Night",
          room: ""
        },
        {
          category: "The Valley North",
          title: "Room 1",
          src: "/bedroom_display1.jpeg",
          images: room3Imgs,
          price: "250/ Night",
          room: ""
        },
      ];
    return (
        <div className='flex flex-col p-6'>
            <div className="flex justify-center items-center py-10 mt-10">
            <TypewriterEffectSmoothDemo
              words={[
                { text: "North", className:"text-gray-700" },
                { text: "Branch", className: "text-blue-500 dark:text-red-500" },
              ]}
            />
            </div>
            <NorthRoomCards />
            <div className="flex justify-center items-center py-10 mt-10">
              <TypewriterEffectSmoothDemo
                words={[
                  { text: "South", className:"text-gray-700" },
                  { text: "Branch", className: "text-blue-500 dark:text-red-500" },
                ]}
              />
              </div>
              <SouthRoomCards />
              </div>
    )
}

export default AllRooms;