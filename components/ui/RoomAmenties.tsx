import { FaBath, FaTv, FaWifi } from 'react-icons/fa';

const RoomAmenitiesCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 flex items-center justify-center">
          <div className="text-black text-3xl font-medium font-['Inter']">2</div>
        </div>
        <div className="ml-4 text-black text-3xl font-bold font-['Inter']">
          Our Room Amenities
        </div>
      </div>
      <div className="flex items-center mb-4">
        <FaBath className="w-12 h-12 text-blue-500" />
        <div className="ml-4 text-black text-3xl font-medium font-['Inter']">
          Bathroom
        </div>
      </div>
      <div className="flex items-center mb-4">
        <FaTv className="w-12 h-12 text-blue-500" />
        <div className="ml-4 text-black text-3xl font-medium font-['Inter']">
          TV
        </div>
      </div>
      <div className="flex items-center mb-4">
        <FaWifi className="w-12 h-12 text-blue-500" />
        <div className="ml-4 text-black text-3xl font-medium font-['Inter']">
          Free Wifi
        </div>
      </div>
      <div className="mt-6">
        <div className="w-full text-black text-[40px] font-bold font-['Inter']">
          North Branch
        </div>
        <div className="w-full text-black text-[35px] font-semibold font-['Inter']">
          Room 01
        </div>
      </div>
    </div>
  );
};

export default RoomAmenitiesCard;
