"use client"

import React, { useEffect, useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { getAllRooms} from '@/actions/rooms';

  interface Room {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    price: string;
    amenities: string[];
    isAvailable: boolean; // Add the isAvailable field here
  }

export default function RoomUpdate() {
    const [rooms, setRooms] = useState<Room[]>([]);
  
  useEffect(() => {
    const fetchRooms = async () => {
      const response = await getAllRooms();
      if (response.data) {
        setRooms(response.data);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div>
       <div className="pt-6 py-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {rooms.map((room) => (
                <Card key={room.id} className="w-[310px] mx-auto">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">{room.title}</CardTitle>
                    <CardDescription className="text-gray-500">{room.description}</CardDescription>
                    <p className={`text-sm font-semibold ${room.isAvailable ? 'text-green-500' : 'text-red-500'}`}>
                      {room.isAvailable ? 'Available' : 'Not Available'}
                    </p>
                  </CardHeader>
                </Card>
              ))}
            </div>
    </div>
  )
}
