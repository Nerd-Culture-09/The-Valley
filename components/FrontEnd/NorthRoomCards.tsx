"use client"

import React, { useState } from 'react';
import AmenityItem from '@/components/FrontEnd/AmenityItem';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bath, Bed, Table, Wifi } from 'lucide-react';
import Image from 'next/image';
import { DummyContent } from './DummyContent'; // Import your popup component
import { Button } from '../ui/button';
import { FaTimes } from 'react-icons/fa';

interface Room {
  title: string;
  description: string;
  image: string;
  category: string;
  src: string;
  images: string[];
  price: string;
  amenities: string[];
}

export default function NorthRoomCards() {
  const rooms: Room[] = [
    {
      title: 'Room 1',
      description: 'Luxury Room For 1',
      image: '/about.png',
      category: 'North',
      src: '/about.png',
      images: ['/about.png'],
      price: '120',
      amenities: ['Bed', 'Table', 'Wifi', 'Shower'],
    },
    {
      title: 'Room 2',
      description: 'Luxury Room For 2',
      image: '/about.png',
      category: 'North',
      src: '/about.png',
      images: ['/about.png'],
      price: '160',
      amenities: ['Bed', 'Table', 'Wifi', 'Shower'],
    },
  ];

  const [isLoading, setIsLoading] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReserveClick = (room: Room) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="pt-6 py-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {rooms.map((room, index) => (
          <Card key={index} className="w-[310px] mx-auto">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">{room.title}</CardTitle>
              <CardDescription className="text-gray-500">{room.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="aspect-square overflow-hidden relative h-[200px] rounded-lg">
                <Image
                  src={room.image}
                  alt="Room Image"
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 content-start text-sm">
                <AmenityItem><Bed className="w-4 h-4 font-bold text-blue-600" /> 1 Bed</AmenityItem>
                <AmenityItem><Table className="w-4 h-4 text-blue-600" /> Table</AmenityItem>
                <AmenityItem><Wifi className="w-4 h-4 text-blue-600" /> Wifi</AmenityItem>
                <AmenityItem><Bath className="w-4 h-4 text-blue-600" /> Shower</AmenityItem>
              </div>
              <div className="pt-10 flex justify-between">
              <Button
                onClick={() => handleReserveClick(room)}
                className={`py-2 px-4 rounded-lg ${
                  isLoading ? 'bg-gray-500' : 'bg-blue-600'
                } text-white`}
                disabled={isLoading}
              >
                {isLoading ? 'please wait...' : 'Reserve'}
              </Button>
                <p className='border border-green-500 rounded-lg w-16'>
                  <span className='flex justify-center pt-2 font-extrabold'>M{room.price}</span>
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {isModalOpen && selectedRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-xl">
            <Button className="absolute top-4 right-4 text-sm" onClick={closeModal}>
              <FaTimes className="text-xl" />
            </Button>
            <DummyContent
              category={selectedRoom.category}
              title={selectedRoom.title}
              images={selectedRoom.images}
              room={selectedRoom}
              price={selectedRoom.price}
              amenities={selectedRoom.amenities}
            />
          </div>
        </div>
      )}
    </>
  );
}
