"use client";
import React, { useState } from "react";
import { RoomCarouselDemo } from "./RoomCarousel";
import { Button } from "@/components/ui/button";
import { CardData } from "./AvailableRooms";
import { FormPage } from "./BookingForm";
import { Timeline } from "./BookTimeline";
import { ConfirmationPage } from "./ConfirmBooking";
import { SelectDemo } from "./RoomPackeges";
import { Bath, Bed, Table, Wifi } from 'lucide-react';

interface DummyContentProps {
  category: string;
  title: string;
  images: string[];
  room: CardData;
  price: string;
  amenities: string[]; // Accept amenities as a prop
}

export const DummyContent: React.FC<DummyContentProps> = ({
  category,
  title,
  images,
  room,
  price,
  amenities
}) => {
  const [step, setStep] = useState(1);
  const [userDetails, setUserDetails] = useState<{
    fullName: string;
    email: string;
  }>({
    fullName: "",
    email: "",
  });

  const handleNextStep = () => {
    if (step === 2) {
      setUserDetails({ fullName: "User Name", email: "user@example.com" });
    }
    setStep(step + 1);
  };
  const amenityIcons: Record<string, JSX.Element> = {
    Wifi: <Wifi className="w-5 h-5 text-blue-600" />,
    Bed: <Bed className="w-5 h-5 text-blue-600" />,
    Shower: <Bath className="w-5 h-5 text-blue-600" />,
    Table: <Table className="w-5 h-5 text-blue-600" />,
  };

  return (
    <>
      <Timeline currentStep={step} />
      <div className="flex flex-col lg:flex-row lg:space-x-6">
        {step === 1 && (
          <div className="lg:w-1/2">
            <div className="ml-5">
              <SelectDemo />
            </div>
            <div className="-mt-28">
              <RoomCarouselDemo images={images} />
              <div className="w-full flex justify-center p-5">
                <Button onClick={handleNextStep}>Book now</Button>
              </div>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="lg:w-1/2">
            <FormPage onNext={handleNextStep} />
          </div>
        )}
        {step === 3 && (
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <ConfirmationPage room={room} userDetails={userDetails} />
          </div>
        )}
        <div className="lg:w-1/2 mt-8 lg:mt-20">
          <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl">
            <h3 className="text-neutral-700 text-2xl font-bold">
              {category}
            </h3>
            <h4 className="text-neutral-700 dark:text-neutral-200 text-lg mb-4">
            {title}
            <h1>Price: <span className="text-green-600 font-semibold">M{price}</span></h1>
            </h4>
            <div className="room-amenities">
            <h4 className="font-bold">Amenities:</h4>
            <ul className="flex space-x-4">
            {amenities.map((amenity, index) => (
              <li key={index} className="grid grid-col pt-4">
                {amenityIcons[amenity] || <span>{amenity}</span>}
              </li>
            ))}
          </ul>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};