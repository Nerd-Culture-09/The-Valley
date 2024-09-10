// import { getRooms } from '@/actions/rooms';
import PannelHeader from '@/components/Dashboard/PanelHeader';
// import RoomCard from '@/components/Dashboard/RoomCard'; // Importing the RoomCard component to display individual rooms
import NewButton from '@/components/FormInputs/NewButton';
import { ScrollArea } from '@/components/ui/scroll-area';
import { LayoutGrid } from 'lucide-react'; // Importing LayoutGrid icon from lucide-react for panel header icon
import React from 'react'; // Importing React for JSX rendering

export default async function page() {
  // Fetching rooms data from the server
//   const rooms = (await getRooms()).data || [];

  return (
    <div>
      {/* Main grid layout for the page */}
      <div className="grid grid-cols-12">
        {/* Left column (hidden on large screens) */}
        <div className="lg:col-span-4 col-span-full py-3 border-r border-gray-100">
          <div className="flex items-center justify-between">
            {/* Panel header for Rooms */}
            <PannelHeader 
              title='Rooms' 
              count={"0"} 
              icon={LayoutGrid}
            />
            {/* New button for creating a new room (visible on small screens) */}
            <div className="lg:hidden">
              <NewButton title='New Room' href='/dashboard/south/new'/>
            </div>
          </div>
          {/* Scrollable area for displaying rooms */}
          <div className="px-3">
            {/* <ScrollArea className="h-96 w-full">
              {rooms.map((room) => (
                <RoomCard key={room.title} room={room} />
              ))}
            </ScrollArea> */}
          </div>
        </div>
        
        {/* Right column (visible on large screens) */}
        <div className="lg:col-span-8 col-span-full hidden lg:block">
          {/* Header section with a new button for creating a new room */}
          <div className="py-2 px-4 border-b border-gray-200 flex items-center justify-end">
            <div className="flex items-center gap-4">
              <NewButton title='New Room' href='/dashboard/south/new'/>
            </div>
          </div>

          {/* Display panel for showing room statistics and options */}
          <div className="flex h-1/2 items-center justify-center py-10">
            <div className='py-4 px-6 text-center border-white shadow-md rounded-md flex flex-col items-center gap-1 text-sm'>
              <LayoutGrid/> {/* Icon representing rooms */}
                <div className="py-3">
                  {" "}
                  {/* Information about the number of rooms */}
                  <p>Create A New Room.</p>
                </div>
              {/* Button for creating a new room */}
              <NewButton title='New Room' href="/dashboard/south/new"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
