"use client"
import React, { useState } from "react";
import DatePickerWithRange from "../ui/DatePicker";
export default function Book() {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  return (
    <div className="w-full max-w-[1194px] mx-auto h-auto bg-[#e9f3f6] rounded-[42px] flex flex-col justify-center items-center gap-8 p-8">
      {/* Title and Subtitle */}
      <div className="text-center">
        <div className="text-black text-[32px] font-medium font-['Inter']">Book a Room</div>
        <div className="text-[#5d5d5d] text-base font-medium font-['Inter']">
          Discover the perfect space for you!
        </div>
      </div>

      {/* Date and Person Selection */}
      <div className="flex flex-wrap justify-center gap-8 w-full">
        {/* Date Selection */}
        <div className="flex flex-col items-start gap-2 w-full sm:w-auto">
          <div className="text-black text-base font-bold font-['Inter']">Date</div>
          <div className="relative w-full sm:w-[265px] h-[60px] bg-white rounded-xl flex items-center px-4">
            {/*<input
              type="date"
              className="w-full h-full bg-transparent border-none focus:outline-none text-[#1e1e1e] text-base font-semibold font-['Inter']"
            />*/}
            <DatePickerWithRange/>
          </div>
        </div>

        {/* Person Selection */}
        <div className="flex flex-col items-start gap-2 w-full sm:w-auto">
          <div className="text-black text-base font-bold font-['Inter']">Person</div>
          <div className="relative w-full sm:w-[265px] h-[60px] bg-white rounded-xl flex justify-between items-center px-4">
            {/* Adults Dropdown */}
            <div className="flex items-center gap-2">
              <label htmlFor="adults" className="text-[#1e1e1e] text-base font-semibold font-['Inter']">
                Adults
              </label>
              <select
  id="adults"
  value={adults}
  onChange={(e) => setAdults(parseInt(e.target.value))}
  className="bg-transparent border-none focus:outline-none text-black text-base font-semibold font-['Inter']"
>
  {Array.from(Array(10).keys()).map((n) => (
    <option key={n} value={n + 1}>
      {n + 1}
    </option>
  ))}
</select>

            </div>

            {/* Children Dropdown */}
            <div className="flex items-center gap-2">
              <label htmlFor="children" className="text-[#1e1e1e] text-base font-semibold font-['Inter']">
                Children
              </label>
              

                <select
                     id="children"
                     value={children}
                     onChange={(e) => setChildren(parseInt(e.target.value))}
                     className="bg-transparent border-none focus:outline-none text-black text-base font-semibold font-['Inter']"
                >
                    {Array.from(Array(10).keys()).map((n) => (
                    <option key={n} value={n}>
                    {n}
                    </option>
                     ))}
                </select>

            </div>
          </div>
        </div>
      </div>

      {/* Book Now Button */}
      <div className="w-full flex justify-center">
        <button className="px-8 py-[15px] bg-[#64aef2] rounded-xl text-white text-2xl font-bold font-['Inter']">
          BOOK NOW
        </button>
      </div>
    </div>
  );
};
