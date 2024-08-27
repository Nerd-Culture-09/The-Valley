"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function DatePickerWithPresets1() {
  const [date, setDate] = React.useState<Date>();
  const [time, setTime] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");
  const [popoverOpen, setPopoverOpen] = React.useState(false); // State to control popover open/close

  // Function to handle closing popover with validation
  const handleConfirmSelection = () => {
    if (!date || !time) {
      setError("Please select both a date and a time.");
    } else {
      setError(""); // Clear error if everything is selected
      setPopoverOpen(false); // Close popover
    }
  };

  return (
    <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
          onClick={() => setPopoverOpen(!popoverOpen)} // Toggle popover state
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}{" "}
          {time && `at ${time}`}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
        <Select
          onValueChange={(value) => {
            setDate(addDays(new Date(), parseInt(value)));
            setError(""); // Clear error when date is selected
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="0">Today</SelectItem>
            <SelectItem value="1">Tomorrow</SelectItem>
            <SelectItem value="3">In 3 days</SelectItem>
            <SelectItem value="7">In a week</SelectItem>
          </SelectContent>
        </Select>
        <div className="rounded-md border">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(selectedDate) => {
              setDate(selectedDate);
              setError(""); // Clear error when date is selected
            }}
          />
        </div>

        {/* Time Picker Section */}
        <div className="flex space-x-2 mt-2">
          {/* Hour Picker */}
          <Select
            onValueChange={(value) =>
              setTime((prev) => {
                const newTime = `${value}:${prev.split(":")[1] || "00"}`;
                setError(""); // Clear error when time is selected
                return newTime;
              })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Hour" />
            </SelectTrigger>
            <SelectContent>
              {[...Array(24)].map((_, i) => (
                <SelectItem key={i} value={i.toString().padStart(2, "0")}>
                  {i.toString().padStart(2, "0")}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Minute Picker */}
          <Select
            onValueChange={(value) =>
              setTime((prev) => {
                const newTime = `${prev.split(":")[0] || "00"}:${value}`;
                setError(""); // Clear error when time is selected
                return newTime;
              })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Minute" />
            </SelectTrigger>
            <SelectContent>
              {["00", "15", "30", "45"].map((minute) => (
                <SelectItem key={minute} value={minute}>
                  {minute}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 mt-2">{error}</p>}

        {/* Confirm Button */}
        <Button onClick={handleConfirmSelection} className="mt-2">
          Confirm
        </Button>
      </PopoverContent>
    </Popover>
  );
}
