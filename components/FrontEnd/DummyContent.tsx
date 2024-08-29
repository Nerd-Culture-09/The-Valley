"use client";
import React, { useState } from "react";
import { RoomCarouselDemo } from "./RoomCarousel";
import { Button } from "@/components/ui/button";
import { CardData } from "./AvailableRooms";
import { FormPage } from "./BookingForm";
import { Timeline } from "./BookTimeline";
import { ConfirmationPage } from "./ConfirmBooking";
import { SelectDemo } from "./RoomPackeges";
import {
  FaTable,
  FaBed,
  FaShieldAlt,
  FaCar,
  FaWifi,
  FaBath,
  FaFire,
} from "react-icons/fa";

interface DummyContentProps {
  category: string;
  title: string;
  images: string[];
  room: CardData;
}

export const DummyContent: React.FC<DummyContentProps> = ({
  category,
  title,
  images,
  room,
}) => {
  const [step, setStep] = useState(1);
  const [userDetails, setUserDetails] = useState<{
    fullName: string;
    email: string;
  }>({
    fullName: "",
    email: "",
  });
  const amenities = [
    {
      label: "Table",
      icon: <FaTable className="text-[#ff7665] text-3xl mt-4" />,
    },
    { label: "Double", icon: <FaBed className="text-[#ff7665] text-3xl mt-4" /> },
    {
      label: "Security",
      icon: <FaShieldAlt className="text-[#ff7665] text-3xl mt-4" />,
    },
    {
      label: "Parking",
      icon: <FaCar className="text-[#ff7665] text-3xl mt-4" />,
    },
    {
      label: "Free Wifi",
      icon: <FaWifi className="text-[#ff7665] text-3xl mt-4" />,
    },
    {
      label: "Bathroom",
      icon: <FaBath className="text-[#ff7665] text-3xl mt-4" />,
    },
    {
      label: "Heater",
      icon: <FaFire className="text-[#ff7665] text-3xl mt-4" />,
    },
    {
      label: "Blanket",
      icon: <FaFire className="text-[#ff7665] text-3xl mt-4" />,
    },
  ];

  const handleNextStep = () => {
    if (step === 2) {
      setUserDetails({ fullName: "User Name", email: "user@example.com" });
    }
    setStep(step + 1);
  };

  return (
    <>
      <Timeline currentStep={step} />
      <div className="flex flex-col lg:flex-row lg:space-x-6 h-full lg:h-[373px] overflow-y-auto p-4 lg:p-14 lg:py-1">
        {step === 1 && (
          <div className="lg:w-1/2">
            <div className="ml-5">
              <SelectDemo />
            </div>
            <div className="-mt-36">
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
        <div className="lg:w-1/2 mt-1 lg:mb-1">
          <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl h-full">
            <h3 className="text-neutral-700 dark:text-neutral-200 text-xl font-bold mb-2">
              {category}
            </h3>
            <h4 className="text-neutral-700 dark:text-neutral-200 text-lg mb-8">
              {title}
            </h4>
            {step === 1 && (
              <div className="flex flex-wrap justify-between -mt-6">
                {amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="w-[70px] h-[70px] flex flex-col items-center bg-white rounded-lg border border-[#e8e8e8] p-1"
                  >
                    {amenity.icon}
                    <div className="mt-2 text-xs">{amenity.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
