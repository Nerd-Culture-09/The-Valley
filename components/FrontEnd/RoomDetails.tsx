"use client"
import React from 'react';
import NavigationBar from './NavigiationBar';
import { motion } from 'framer-motion';
import { ImagesSlider } from '../ui/Image-slider';
import RoomAmenitiesCard from '../ui/RoomAmenties';

const RoomDetails = ()=>
{
    const images = [
        "/dummy1.jpg",
        "/dummy2.jpg",
        "/dummy3.jpg",
      ];
    return(
        <>
        <NavigationBar/>
        <ImagesSlider className="h-[40rem] w-full" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        
      </motion.div>
    </ImagesSlider>
   <RoomAmenitiesCard/>
</>
    )
}
export  default RoomDetails;