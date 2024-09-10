"use server"

import { prismaClient } from "@/lib/db";

// Function to create a new booking
export async function createBooking(formData: any) {
    console.log("Booking Form Data:", formData); // Debugging line
    const {
        roomId,
        checkInDate,
        checkOutDate,
        fullName,
        email,
        phoneNumber,
        bookingFor,
        paymentMethod,
    } = formData;

    // Validate roomId
    if (!(roomId)) {
        return {
            data: null,
            status: 400,
            error: "Invalid or missing roomId",
        };
    }

    try {
        // Create a new booking in the database
        const newBooking = await prismaClient.booking.create({
            data: {
                roomId,  // Ensure roomId is provided
                checkInDate: new Date(checkInDate),  // Ensure dates are in correct format
                checkOutDate: new Date(checkOutDate),
                fullName,
                email,
                phoneNumber,
                bookingFor,
                paymentMethod,
            },
        });

        // Log the newly created booking and return success response
        console.log(newBooking);
        return {
            data: newBooking,
            status: 201,
            error: null,
        };
    } catch (error) {
        // Handle errors and return error response
        console.log(error);
        return {
            data: null,
            status: 500,
            error: "Something went wrong",
            
        };
    }
}