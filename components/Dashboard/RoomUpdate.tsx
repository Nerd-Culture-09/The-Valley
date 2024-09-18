"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { getAllRooms, updateRoomAvailability } from "@/actions/rooms";
import { Button } from "../ui/button";

interface Room {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  price: string;
  amenities: string[];
  isAvailable: boolean;
}

export default function RoomUpdate() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [updatingRoomId, setUpdatingRoomId] = useState<string | null>(null);

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await getAllRooms();
      if (response.data) {
        setRooms(response.data);
      }
    };

    fetchRooms();
  }, []);

  const handleUpdateAvailability = async (
    roomId: string,
    isAvailable: boolean
  ) => {
    setUpdatingRoomId(roomId); // Optional: Can be used to show loading state for this room
    const response = await updateRoomAvailability(roomId, isAvailable);
    if (response.status === 200) {
      // Update the local room state after successful update
      setRooms((prevRooms) =>
        prevRooms.map((room) =>
          room.id === roomId ? { ...room, isAvailable } : room
        )
      );
    } else {
      console.error(response.error);
    }
    setUpdatingRoomId(null); // Reset the loading state
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Remove the grid and use a flex column layout to stack the cards */}
      {rooms.map((room) => (
        <Card key={room.id} className="w-full">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">{room.title}</CardTitle>
            <CardDescription className="text-gray-500">{room.description}</CardDescription>
            <p className={`text-sm font-semibold ${room.isAvailable ? "text-green-500" : "text-red-500"}`}>
              {room.isAvailable ? "Available" : "Booked"}
            </p>
          </CardHeader>
          <CardContent>
            <AlertDialog>
              <AlertDialogTrigger>
                <Button>
                  Update Availability
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Update availability for {room.title}</AlertDialogTitle>
                  <AlertDialogDescription>
                    Click on Available to mark the room available for booking or Booked to mark the room unavailable for booking.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    className="bg-red-600"
                    onClick={() => handleUpdateAvailability(room.id, false)}
                    disabled={updatingRoomId === room.id}
                  >
                    Booked
                  </AlertDialogAction>
                  <AlertDialogAction
                    className="bg-blue-600"
                    onClick={() => handleUpdateAvailability(room.id, true)}
                    disabled={updatingRoomId === room.id}
                  >
                    Available
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
