"use client";
import React from "react";
import { DatePickerWithPresets1 } from "./checkout-calander";
import { SelectBranch } from "./select-north-south";
import { DatePickerWithPresets2 } from "./checkin-calander";
import { InputWithButton } from "./numberOfPeople"; // Import the InputWithButton component

export function BackGroundBoxBar() {
  return (
    <div
      className="relative w-full overflow-hidden bg-slate-900 flex flex-row justify-start items-center"
      style={{ height: "2.5cm" }} // Adjusted height to 2.5cm
    >
      <div className="absolute inset-0 w-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      {/* Flex container to align all elements */}
      <div className="relative z-30 flex flex-row justify-start items-center gap-x-4 px-4">
        {/* Date Picker and Time Picker Section */}
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-1">Check In</span>
          <DatePickerWithPresets2 />
        </div>

        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-1">Check Out</span>
          <DatePickerWithPresets1 />
        </div>

        {/* Select Branch Dropdown */}
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-1">Select Branch</span>
          <SelectBranch />
        </div>

        {/* Input and Reserve Button Section */}
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-1">Number of People</span>
          <InputWithButton />
        </div>
      </div>
    </div>
  );
}
