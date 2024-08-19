import React from "react";

const SpecialOffer = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 flex flex-col lg:flex-row gap-8">
      <div className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <div className="text-blue-500 text-2xl lg:text-3xl font-medium">Special Offers</div>
          
        </div>
        <h2 className="text-black text-3xl lg:text-4xl font-medium mb-4">Best offer of the month</h2>
        <p className="text-gray-800 text-xl lg:text-1xl">Experience Fantastic Benefits and Obtain Better Rates When You Make a Direct Booking on Our Official Website</p>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start">
        <img
          className="w-full h-60 lg:h-72 rounded-xl object-cover mb-4"
          src="./dummy2.jpg"
          alt="Special Offer"
        />
        <h3 className="text-black text-2xl font-bold mb-2">Couple Package Night Rest</h3>
        <div className="flex items-baseline mb-2">
          <span className="text-black text-3xl font-bold">M250</span>
          <span className="text-gray-700 text-lg font-normal ml-2">/night</span>
        </div>
      {/*}  <div className="flex items-center mb-4">
          <span className="text-gray-700 text-sm font-bold">Room</span>
          <span className="text-black text-base font-semibold ml-auto">2</span>
        </div>**/}
        <p className="text-gray-700 text-sm">Indulge in a Memorable One-Time Romantic Night for Two</p>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start">
        <img
          className="w-full h-60 lg:h-72 rounded-xl object-cover mb-4"
          src=".\dummy1.jpg"
          alt="Special Offer"
        />
        <h3 className="text-black text-2xl font-bold mb-2">Couple Package Day Rest</h3>
        <div className="flex items-baseline mb-2">
          <span className="text-black text-3xl font-bold">M100</span>
          <span className="text-gray-700 text-lg font-normal ml-2">/2 hours</span>
        </div>
       {/*} <div className="flex items-center mb-4">
          <span className="text-gray-700 text-sm font-bold">Room Number</span>
          <span className="text-black text-base font-semibold ml-auto">Will Be Allocated After Booking</span>
        </div>*/}
        <p className="text-gray-700 text-sm">Indulge in a Memorable One-Time Romantic DayTime for Two</p>
      </div>
    </div>
  );
};

export default SpecialOffer;
