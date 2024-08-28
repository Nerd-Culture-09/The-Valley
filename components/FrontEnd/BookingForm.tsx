"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "../ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@radix-ui/react-select";

// Import the date pickers
import { DatePickerWithPresets1 } from "@/components/FrontEnd/checkout-calander";
import { DatePickerWithPresets2 } from "@/components/FrontEnd/checkin-calander";

interface FormPageProps {
  onNext: () => void;
}

export const FormPage: React.FC<FormPageProps> = ({ onNext }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(); // Navigate to the booking confirmation page
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        {/* Full Name Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        {/* Phone Number Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        {/* Check-in Date Picker */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Check-in Date
          </label>
          <DatePickerWithPresets1 />
        </div>

        {/* Check-out Date Picker */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Check-out Date
          </label>
          <DatePickerWithPresets2 />
        </div>

        {/* Booking for Checkbox */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Booking for:
          </label>
          <div className="flex items-center space-x-2 text-gray-700">
            <Checkbox id="terms" />
            <label htmlFor="terms" className="text-sm font-medium leading-none text-gray-700">
              Myself
            </label>
          </div>
          <div className="flex items-center mt-1 space-x-2 text-gray-700">
            <Checkbox id="terms" />
            <label htmlFor="terms" className="text-sm font-medium leading-none text-gray-700">
              Someone Else
            </label>
          </div>
        </div>

        {/* Payment Method Selection */}
        <div className="mb-4">
          <label className="block mt-2 text-sm font-medium text-gray-700">
            Select Payment Method
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Select Payment Method</option>
            <option value="ecocash">Ecocash - Merchant Code: 64382 Names: Valley Maseru</option>
            <option value="mpesa">Mpesa</option>
          </select>
        </div>

        {/* Submit Button */}
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
