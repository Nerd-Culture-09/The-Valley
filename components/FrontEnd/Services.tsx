import React from 'react';

const Services = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-center text-black text-2xl font-bold mb-8">
        The Valley Branches
      </div>

      <div className="relative w-full max-w-screen-xl h-[821px] border-black/50 flex flex-col items-center gap-8 p-4">
        <div className="w-full max-w-screen-xl bg-[#f3f3f3]/40 rounded-[20px] flex justify-center items-center gap-20">
          {/* Container for Room Image */}
          <div className="w-[400px] h-[760px] rounded-[42px] overflow-hidden flex items-end relative">
            <img 
              src="/north.jpg" 
              alt="North" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-black text-2xl font-bold ">
              North Branch
            </div>
          </div>

          {/* Container for Breakfast Image */}
          <div className="w-[400px] h-[760px] rounded-[42px] overflow-hidden flex items-end relative">
            <img 
              src="./south.jpg" 
              alt="South" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-black text-2xl font-bold">
              South Branch
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
