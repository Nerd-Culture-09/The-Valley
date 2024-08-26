"use client";
import React, { useState } from "react";
import { CardData } from "./AvailableRooms";
import { Button } from "../ui/button";

interface ConfirmationPageProps {
  room: CardData;
  userDetails: {
    fullName: string;
    email: string;
  };
}

export const ConfirmationPage: React.FC<ConfirmationPageProps> = ({
  room,
  userDetails,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleConfirmClick = () => {
    setIsVisible(true);
  };
  return (
    <div className="p-4">
      <h3 className="text-xl font-bold mb-4">Booking Confirmation</h3>
      <div className="mb-4">
        <h4 className="text-lg font-semibold">Room Details</h4>
        <p>{room.category + " " + room.title}</p>
        <p>{room.price}</p>
      </div>
      <div className="mb-4">
        <h4 className="text-lg font-semibold">Your Details</h4>
        <p>{userDetails.fullName}</p>
        <p>{userDetails.email}</p>
      </div>
      <div className="mt-25">
        <Button variant="outline" onClick={() => handleConfirmClick()}>
          Confirm Booking
        </Button>
      </div>
      {isVisible && (
        <p className="text-green-600 font-bold">
          Your booking has been confirmed!
        </p>
      )}
    </div>
  );
};
