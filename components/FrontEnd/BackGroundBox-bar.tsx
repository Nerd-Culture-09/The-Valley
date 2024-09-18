"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DatePickerInput } from "../FormInputs/DatePickerInput";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TextInput from "../FormInputs/TextInput";
import { useForm } from "react-hook-form";
import { RegisterInputProps } from "@/types/types";
import { format } from "date-fns"; // Use date-fns for formatting or comparing dates

interface RoomReservation {
  checkIn: {
    date: Date | undefined;
    hour: string | undefined;
    minute: string | undefined;
  };
  checkOut: {
    date: Date | undefined;
    hour: string | undefined;
    minute: string | undefined;
  };
  branch: "North" | "South" | undefined;
  fullName: string;
  numberOfRooms: number | undefined;
}

export function BackGroundBoxBar() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterInputProps>();

  const [checkIn, setCheckIn] = useState<Date | undefined>();
  const [checkOut, setCheckOut] = useState<Date | undefined>();
  const [selectHour, setSelectHour] = useState<string | undefined>();
  const [selectMinute, setSelectMinute] = useState<string | undefined>();
  const [selectedHour, setSelectedHour] = useState<string | undefined>();
  const [selectedMinute, setSelectedMinute] = useState<string | undefined>();
  const [branch, setBranch] = useState<"North" | "South" | undefined>();
  const [numberOfRooms, setNumberOfRooms] = useState<number | undefined>();

  const [errorMessage, setErrorMessage] = useState<string>("");

  const validateAndSubmit = (data: RegisterInputProps) => {
    // Validate if required fields are filled
    if (!checkIn || !checkOut || !branch || !numberOfRooms || !data.fullName) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    // Ensure number of rooms is positive
    if (numberOfRooms <= 0) {
      setErrorMessage("Number of rooms must be greater than zero.");
      return;
    }

    // Compare check-in and check-out times
    const checkInTime = new Date(checkIn);
    if (selectHour && selectMinute) {
      checkInTime.setHours(Number(selectHour));
      checkInTime.setMinutes(Number(selectMinute));
    }

    const checkOutTime = new Date(checkOut);
    if (selectedHour && selectedMinute) {
      checkOutTime.setHours(Number(selectedHour));
      checkOutTime.setMinutes(Number(selectedMinute));
    }

    if (checkOutTime <= checkInTime) {
      setErrorMessage("Check-out time must be later than check-in time.");
      return;
    }

    // Reset error message after validations
    setErrorMessage("");

    // Create reservation object
    const reservation: RoomReservation = {
      checkIn: {
        date: checkIn,
        hour: selectHour,
        minute: selectMinute,
      },
      checkOut: {
        date: checkOut,
        hour: selectedHour,
        minute: selectedMinute,
      },
      branch: branch,
      fullName: data.fullName,
      numberOfRooms: numberOfRooms,
    };

    console.log("Reservation:", reservation);
    
    // For now, we'll log it. You can replace this with an API call:
    // e.g., await submitReservation(reservation)
  };

  return (
    <div
      className="relative w-full overflow-hidden bg-slate-900 flex flex-col md:flex-row justify-center items-center"
      style={{ height: "auto", minHeight: "2.5cm" }}
    >
      <div className="absolute inset-0 w-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <div className="relative z-30 flex flex-col md:flex-row justify-start items-center gap-y-4 md:gap-y-0 gap-x-4 px-4 py-2 md:py-0">
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

        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-1">Select Branch</span>
          <Select onValueChange={(value) => setBranch(value as "North" | "South")}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a Branch" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>North or South</SelectLabel>
                <SelectItem value="North">North</SelectItem>
                <SelectItem value="South">South</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col">
          <span className="text-white text-sm ml-10">Full Names</span>
          <div className="flex w-full max-w-sm items-center">
            <Input
                type="name"
                placeholder="Enter full Names"
                onChange={(e) => setNumberOfRooms(Number(e.target.value))}
              />
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-white text-sm mb-1 ml-10">Number of Rooms</span>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              type="number"
              placeholder="Enter number"
              onChange={(e) => setNumberOfRooms(Number(e.target.value))}
            />
            <Button
              className="bg-white text-gray-900 hover:text-white border boder-gray-950"
              onClick={handleSubmit(validateAndSubmit)}
            >
              Reserve
            </Button>
          </div>
        </div>
      </div>

      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
}
