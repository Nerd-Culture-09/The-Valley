import React from 'react';
import { FaTable, FaBed, FaShieldAlt, FaCar, FaWifi, FaBath, FaFire, FaMicrophone } from 'react-icons/fa';
import BookForm from '../ui/Form';

const BookRoom = () => {
  return (
    <div className="relative mt-20  justify-center text-center ">
      <div className="text-black text-2xl font-semibold">
       North Valley
      </div>
      <div className="text-black text-lg font-bold">Room 01</div>
     
     <BookForm/>
    
 
    </div>
  );
}

export default BookRoom;
