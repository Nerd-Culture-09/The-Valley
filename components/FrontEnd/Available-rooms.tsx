import React from 'react';

const AvailableRooms = () => {
  return (
    <section
      className="self-stretch flex flex-col items-center justify-center pt-0 px-[54px] pb-[241px] box-border max-w-full text-left text-13xl text-deepskyblue mq450:pb-[102px] mq450:box-border mq1100:pb-[157px] mq1100:box-border mq1275:pl-[27px] mq1275:pr-[27px] mq1275:box-border"
    >
      <div className="w-full max-w-[1307.5px] flex flex-col items-start justify-center gap-[50px] mq750:gap-[25px]">
        <div className="self-stretch flex flex-row items-start justify-between gap-5 mq750:flex-wrap">
          <h1 className="m-0 relative text-inherit font-medium mq450:text-lgi mq750:text-7xl">
            AVAILABLE ROOMS
          </h1>
          <h1 className="m-0 relative text-inherit font-bold font-[inherit] inline-block min-w-[123px] mq450:text-lgi mq750:text-7xl">
            View all
          </h1>
        </div>

        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] mq750:gap-[25px]">
          <div className="shadow-[0px_4px_60px_rgba(0,_53,_101,_0.25)] rounded-23xl bg-white flex flex-col items-start justify-start pt-5 pb-[49px] pl-5 pr-[19px] box-border gap-x-7 gap-y-2">
            <img
              className="w-full h-[280px] rounded-3xl object-cover"
              loading="lazy"
              alt=""
              src="/dummy1.jpg"
            />
            <div className="w-full flex flex-col items-end justify-start gap-[35px] mq450:gap-[17px]">
              <div className="w-full flex flex-col items-start justify-start gap-3">
                <b className="relative inline-block min-w-[98px]">NORTH BRANCH</b>
                <div className="w-full flex flex-col items-start justify-start gap-5 text-5xl text-gray-200">
                  <div className="w-full flex flex-row items-start justify-start gap-3 mq450:flex-wrap">
                    <h3 className="m-0 relative text-black font-bold text-2xl">
                      Couple Package Night Rest
                    </h3>
                    <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0 text-base">
                      <div className="flex flex-row items-start justify-start gap-2">
                        <img className="h-4 w-[12.2px]" alt="" src="/vector-1.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full relative text-xs text-black">
                    Indulge in a Memorable One-Time Romantic Dinner for Two
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-row items-start justify-center py-0 pl-[21px] pr-5 text-17xl text-black">
                <b className="relative inline-block min-w-[104px] mq450:text-3xl mq750:text-10xl">
                  M250 /night
                </b>
              </div>
            </div>
          </div>



          {/* Add more room items here in the same structure as above */}
          <div className="shadow-[0px_4px_60px_rgba(0,_53,_101,_0.25)] rounded-23xl bg-white flex flex-col items-start justify-start pt-5 pb-[49px] pl-5 pr-[19px] box-border gap-x-7 gap-y-2">
            <a href="/room-details" >
            <img
              className="w-full h-[280px] rounded-3xl object-cover"
              loading="lazy"
              alt=""
              src="/dummy2.jpg"
            />
            </a>
            <div className="w-full flex flex-col items-end justify-start gap-[35px] mq450:gap-[17px]">
              <div className="w-full flex flex-col items-start justify-start gap-3">
                <b className="relative inline-block min-w-[98px]">NORTH BRANCH</b>
                <div className="w-full flex flex-col items-start justify-start gap-5 text-5xl text-gray-200">
                  <div className="w-full flex flex-row items-start justify-start gap-3 mq450:flex-wrap">
                    <h3 className="m-0 relative text-black font-bold text-2xl">
                      Couple Package Night Rest
                    </h3>
                    <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0 text-base">
                      <div className="flex flex-row items-start justify-start gap-2">
                        <img className="h-4 w-[12.2px]" alt="" src="/vector.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full relative text-xs text-black">
                    Indulge in a Memorable One-Time Romantic Dinner for Two
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-row items-start justify-center py-0 pl-[21px] pr-5 text-17xl text-black">
                <b className="relative inline-block min-w-[104px] mq450:text-3xl mq750:text-10xl">
                  M250 /night
                </b>
              </div>
            </div>
          </div>
        </div>

        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] mq750:gap-[25px]">
          <div className="shadow-[0px_4px_60px_rgba(0,_53,_101,_0.25)] rounded-23xl bg-white flex flex-col items-start justify-start pt-5 pb-[49px] pl-5 pr-[19px] box-border gap-x-7 gap-y-2">
            <img
              className="w-full h-[280px] rounded-3xl object-cover"
              loading="lazy"
              alt=""
              src="/dummy1.jpg"
            />
            <div className="w-full flex flex-col items-end justify-start gap-[35px] mq450:gap-[17px]">
              <div className="w-full flex flex-col items-start justify-start gap-3">
                <b className="relative inline-block min-w-[98px]">NORTH BRANCH</b>
                <div className="w-full flex flex-col items-start justify-start gap-5 text-5xl text-gray-200">
                  <div className="w-full flex flex-row items-start justify-start gap-3 mq450:flex-wrap">
                    <h3 className="m-0 relative text-black font-bold text-2xl">
                      Couple Package Night Rest
                    </h3>
                    <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0 text-base">
                      <div className="flex flex-row items-start justify-start gap-2">
                        <img className="h-4 w-[12.2px]" alt="" src="/vector-1.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full relative text-xs text-black">
                    Indulge in a Memorable One-Time Romantic Dinner for Two
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-row items-start justify-center py-0 pl-[21px] pr-5 text-17xl text-black">
                <b className="relative inline-block min-w-[104px] mq450:text-3xl mq750:text-10xl">
                  M250 /night
                </b>
              </div>
            </div>
          </div>
          </div>
      </div>
    </section>
  );
};

export default AvailableRooms;
