"use client";
import React from "react";
import { Button } from "@/components/ui/button";

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
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
