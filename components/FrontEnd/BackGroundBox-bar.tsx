"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
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
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from "next/navigation"; // Import useRouter for redirection
import { ReservationProps } from "@/types/types";
import { createReservation, getAvailRooms } from "@/actions/rooms";
import SubmitButton from "../FormInputs/SubmitButton";
import { useToaster } from "@/hooks/use-toast";

export function BackGroundBoxBar() {
  const { toaster } = useToaster();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReservationProps>();
  const router = useRouter(); // Use the Next.js router for redirection

  // State for date, branch selection, and available rooms
  const [checkIn, setCheckIn] = useState<Date | undefined>();
  const [checkOut, setCheckOut] = useState<Date | undefined>();
  const [selectHour, setSelectHour] = useState<string | undefined>();
  const [selectMinute, setSelectMinute] = useState<string | undefined>();
  const [selectedHour, setSelectedHour] = useState<string | undefined>();
  const [selectedMinute, setSelectedMinute] = useState<string | undefined>();
  const [branch, setBranch] = useState<"North" | "South" | undefined>();
  const [numberOfRooms, setNumberOfRooms] = useState<number | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [availableRooms, setAvailableRooms] = useState<any[]>([]); // Updated to handle available rooms

  // Fetch available rooms on component mount
  useEffect(() => {
    const fetchAvailableRooms = async () => {
      const result = await getAvailRooms();
      if (result.status === 200) {
        setAvailableRooms(result.data ?? []); // Fallback to an empty array if result.data is null
      }
    };

    fetchAvailableRooms();
  }, []);

  // Submit function
  const onSubmit = async (data: ReservationProps) => {
    if (!branch) {
      toast.error("Please select a branch");
      return;
    }
    if (!checkIn || !checkOut) {
      toast.error("Please select both check-in and check-out dates");
      return;
    }

    setIsLoading(true);
    try {
      const reservationData = {
        ...data,
        checkIn,
        checkOut,
        branch, // Now guaranteed to be either "North" or "South"
        numberOfRooms: Number(numberOfRooms),
      };

      const result = await createReservation(reservationData);

      if (result.status === 201) {
        toast.success("Reservation created successfully");
        <Toaster />
        reset(); // Reset form after successful submission
        router.push("/");
      } else {
        toast.error(result.error || "Failed to create reservation");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden bg-slate-900 flex flex-col md:flex-row justify-center items-center"
      style={{ height: "auto", minHeight: "2.5cm" }}
    >
      <div className="absolute inset-0 w-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <form
        className="relative z-30 flex flex-col md:flex-row justify-start items-center gap-y-4 md:gap-y-0 gap-x-4 px-4 py-2 md:py-0"
        onSubmit={handleSubmit(onSubmit)} // Use handleSubmit to handle form submission
      >
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
          <span className="text-white text-sm mb-1">Select Room</span>
          <Select onValueChange={(value) => setBranch(value as "North" | "South")}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a Room" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Available Rooms</SelectLabel>
                {availableRooms.length > 0 ? (
                  availableRooms.map((room) => (
                    <SelectItem key={room.id} value={room.title}>
                      {room.title} - {room.category}
                    </SelectItem>
                  ))
                ) : (
                  <SelectItem disabled value="no_rooms">No rooms available</SelectItem>
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col">
          <span className="text-white text-sm mb-1">Full Name</span>
          <Input
            type="text"
            placeholder="Enter full name"
            {...register("fullName", { required: true })}
            className={`${errors.fullName ? 'border-red-500' : ''}`} // Highlight on error
          />
          {errors.fullName && <p className="text-red-500">Full name is required</p>}
        </div>

        <div className="flex flex-col">
          <span className="text-white text-sm mb-1">Number of People</span>
          <Input
            type="number"
            placeholder="Enter number"
            onChange={(e) => setNumberOfRooms(Number(e.target.value))}
          />
        </div>
        <div className="mt-6">
          <SubmitButton
            title="Reserve"
            isLoading={isLoading}
            LoadingTitle="Making A Reservation, please wait...."
          />
          <Toaster />
        </div>
      </form>
    </div>
  );
}
