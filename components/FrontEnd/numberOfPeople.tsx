"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function InputWithButton() {
  const [numberOfRooms, setNumberOfRooms] = useState("");
  const router = useRouter();

  const handleReserve = () => {
    if (numberOfRooms) {
      // Navigate to the NorthBranch page with the numberOfRooms as a query parameter
      router.push(`/northbranch?rooms=${numberOfRooms}`);
    } else {
      alert("Please enter the number of rooms.");
    }
  };

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="text"
        placeholder="Enter number of rooms"
        value={numberOfRooms}
        onChange={(e) => setNumberOfRooms(e.target.value)}
      />
      <Button  onClick={handleReserve} className="bg-white text-gray-900 hover:text-white border boder-gray-950">
        Reserve
      </Button>
    </div>
  );
}
