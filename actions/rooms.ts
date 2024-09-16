"use server"

import { prismaClient } from "@/lib/db";
import { RoomProps } from "@/types/types";

export async function createRoom(data: RoomProps) {
    try {
      console.log('Data received by createRoom:', data); // Log incoming data
      
      // Check if room with the same title already exists
      const existingRoom = await prismaClient.room.findFirst({
        where: {
          title: data.title
        },
      });
  
      console.log('Existing room found:', existingRoom); // Log if room already exists
  
      if (existingRoom) {
        console.log('Room already exists with this title:', data.title); // Log duplicate room error
        return {
          data: null,
          status: 409,
          error: "Room already exists with this title"
        };
      }
  
      // Convert amenities if necessary
      const amenities = typeof data.amenities === 'string' 
        ? data.amenities.split(',').map(amenity => amenity.trim()) // Convert comma-separated string to array
        : (data.amenities as string[]).map(amenity => amenity.trim()); // Assume it's already an array
  
      console.log('Formatted amenities:', amenities); // Log formatted amenities
  
      // Create new room in the database
      const newRoom = await prismaClient.room.create({
        data: {
          title: data.title,
          description: data.description,
          image: data.imageUrl,
          category: data.category.toUpperCase() as "NORTH" | "SOUTH",
          price: data.price,
          amenities,
        },
      });
  
      console.log('New room created:', newRoom); // Log successful room creation
  
      return {
        data: newRoom,
        status: 201,
        error: null,
      };
    } catch (error) {
      console.error('Error creating room:', error); // Log any errors in the process
  
      return {
        data: null,
        status: 501,
        error: "Room not created",
      };
    }
  }
  

// actions/rooms.ts
export async function getRoomsNorth() {
  try {
    const rooms = await prismaClient.room.findMany({
      where: {
        category: 'NORTH', // Filter rooms by the 'NORTH' category
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return {
      data: rooms,
      status: 200,
      error: null,
    };
  } catch (error) {
    console.error(error);
    return {
      data: null,
      status: 500,
      error,
    };
  }
}


export async function getRoomsSouth() {
    try {
        const rooms = await prismaClient.room.findMany({
            where: {
                category: 'SOUTH',
            },
            orderBy: {
                createdAt: 'desc',
            },
        });

        return {
            data: rooms,
            status: 200,
            error: null,
        };
    } catch (error) {
        console.error(error);
        return {
            data: null,
            status: 500,
            error,
        };
    }
}

export async function updateRoomAvailability(id: string, isAvailable: boolean) {
  try {
    const updatedRoom = await prismaClient.room.update({
      where: { id },
      data: { isAvailable },
    });

    console.log(updatedRoom);
    return {
      data: updatedRoom,
      status: 200,
      error: null,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      status: 500,
      error: "Something went wrong",
    };
  }
}
