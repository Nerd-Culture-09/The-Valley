import NorthRooms from '@/components/FrontEnd/NorthRoom';
import React from 'react';

function NorthRoomsPage() { // Renamed for clarity
  return (
    <div className='md-bg-black'> {/* Ensure 'md-bg-black' is correct or change to 'bg-black' */}
        <NorthRooms />
    </div>
  );
}

export default NorthRoomsPage;
