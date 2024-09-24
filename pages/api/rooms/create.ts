// app/api/rooms/route.ts
import { NextResponse } from 'next/server';
import { prismaClient } from '@/lib/db'; // Adjust path if needed
import { RoomProps } from '@/types/types';

export async function POST(request: Request) {
    const data: RoomProps = await request.json();

    try {
        // Check if room with the same slug already exists
        const existingRoom = await prismaClient.room.findUnique({
            where: {
                slug: data.slug
            },
        });

        if (existingRoom) {
            return NextResponse.json({ error: "Room already exists with this slug" }, { status: 409 });
        }

        // Create new room in the database
        const amenities = typeof data.amenities === 'string' 
        ? data.amenities.split(',').map(amenity => amenity.trim())
        : (data.amenities as string[]).map(amenity => amenity.trim());
  
        const newRoom = await prismaClient.room.create({
            data: {
                title: data.title,
                description: data.description,
                image: data.imageUrl,
                category: data.category.toUpperCase() as "NORTH" | "SOUTH",
                price: data.price,
                slug: data.slug,
                amenities,
            },
        });

        return NextResponse.json(newRoom, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Room not created" }, { status: 500 });
    }
}
