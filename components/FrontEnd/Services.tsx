import React from 'react';
import Link from 'next/link';

const Services = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-center text-black text-2xl font-bold mb-8">
        The Valley Branches
      </div>

      <div className="relative w-full max-w-screen-xl h-[821px] border-black/50 flex flex-col items-center gap-8 p-4">
        <div className="w-full max-w-screen-xl bg-[#f3f3f3]/40 rounded-[20px] flex justify-center items-center gap-20">
          
          {/* North Branch Container */}
          <Link href="/NorthRoomPage">
            <div className="w-[400px] h-[760px] rounded-[42px] overflow-hidden flex items-end relative cursor-pointer">
              <img 
                src="/north.jpg" 
                alt="North" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-black text-2xl font-bold ">
                North Branch
              </div>
            </div>
          </Link>

          {/* South Branch Container */}
          <Link href="/south">
            <div className="w-[400px] h-[760px] rounded-[42px] overflow-hidden flex items-end relative cursor-pointer">
              <img 
                src="./south.jpg" 
                alt="South" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-black text-2xl font-bold">
                South Branch
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
