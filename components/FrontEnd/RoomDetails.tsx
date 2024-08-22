"use client"
import React from 'react';
import RoomInfo from './RoomInfo';
import { RoomCarouselDemo } from './RoomCarousel';
import NavigationBar from './NavigiationBar';// Corrected from 'NavigiationBar'


const RoomDetails = () => {
    return (
        <>
            <NavigationBar />
            <div className="mt-20 container mx-auto px-4">
                <div className="flex flex-col lg:flex-row lg:space-x-8">
                    <div className="lg:w-1/2">
                        <RoomCarouselDemo />
                    </div>
                    <div className="lg:w-1/2 mt-8 lg:mt-0">
                        <RoomInfo />
                    </div>
                </div>
            </div>
        </>
    );
}

export default RoomDetails;
