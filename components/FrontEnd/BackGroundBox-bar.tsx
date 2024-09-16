"use client";
import React, { useState } from "react";
import { SelectBranch } from "./select-north-south";
import { InputWithButton } from "./numberOfPeople";
import { DatePickerInput } from "../FormInputs/DatePickerInput";

export function BackGroundBoxBar() {
  const [checkIn, setCheckIn] = useState<Date | undefined>();
  const [checkOut, setCheckOut] = useState<Date | undefined>();

  const [selectedHour, setSelectedHour] = useState<string | undefined>();
  const [selectedMinute, setSelectedMinute] = useState<string | undefined>();

  const [selectHour, setSelectHour] = useState<string | undefined>();
  const [selectMinute, setSelectMinute] = useState<string | undefined>();
  return (
    <div
      className="relative w-full overflow-hidden bg-slate-900 flex flex-col md:flex-row justify-center items-center"
      style={{ height: "auto", minHeight: "2.5cm" }}
    >
      <div className="absolute inset-0 w-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      {/* Flex container to align all elements */}
      <div className="relative z-30 flex flex-col md:flex-row justify-start items-center gap-y-4 md:gap-y-0 gap-x-4 px-4 py-2 md:py-0">
        {/* Date Picker and Time Picker Section */}
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-1">Check In</span>
            <DatePickerInput
            date={checkIn}
            setDate={setCheckIn}
            selectedHour={selectHour}
            setSelectedHour={setSelectHour}
            selectedMinute={selectMinute}
            setSelectedMinute={setSelectMinute}
            title=""
          />
        </div>

        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-1">Check Out</span>
            <DatePickerInput
              date={checkOut}
              setDate={setCheckOut}
              selectedHour={selectedHour}
              setSelectedHour={setSelectedHour}
              selectedMinute={selectedMinute}
              setSelectedMinute={setSelectedMinute}
              title=""
            />
        </div>

        {/* Select Branch Dropdown */}
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-1">Select Branch</span>
          <SelectBranch />
        </div>

        {/* Input and Reserve Button Section */}
        <div className="flex flex-col">
          <span className="text-white text-sm mb-1 ml-10">Number of Rooms</span>
          <InputWithButton />
        </div>
      </div>
    </div>
  );
}
