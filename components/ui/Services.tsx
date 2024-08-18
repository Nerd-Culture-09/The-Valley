import React from 'react';

const Services = () => {
  return (
    <div>
     <div className="text-center text-black text-2xl font-bold font-['Inter']">
  SERVICES
</div>

      <div className="relative w-[1450px] h-[821px] border-black/50 flex-col justify-start items-start gap-2 inline-flex">
        <div className="w-[1450px] grow shrink basis-0 bg-[#f3f3f3]/40 rounded-[20px]" />

        {/* Room Image Container */}
        <div className="left-[214px] top-[50px] absolute justify-center items-end gap-2 inline-flex">
          <div className="w-[400px] h-[760px] rounded-[42px] overflow-hidden">
            <img 
              src="/dummy2.jpg" 
              alt="Room" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="left-[140px] top-[651px] absolute text-black text-4xl font-bold font-['Inter']">
            Rooms
          </div>
        </div>

        {/* Breakfast Image Container */}
        <div className="w-[400px] h-[760px] left-[822px] top-[50px] absolute flex-col justify-end items-center gap-2 flex">
          <div className="w-[408px] h-[760px] rounded-[42px] overflow-hidden">
            <img 
              src="./dummy1.jpg" 
              alt="Breakfast" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[182px] left-[109px] top-[646px] absolute text-black text-[32px] font-bold font-['Inter']">
            BreakFast
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
