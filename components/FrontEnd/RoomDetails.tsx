import React from 'react';
import NavigationBar from './NavigiationBar';

const RoomDetails = ()=>
{
    return(
        <>
        <NavigationBar/>
    <div className="w-12 h-12 relative" />
        <div className="w-60 h-[86px] text-black text-3xl font-medium font-['Inter']">Maseru, Lesotho</div>
        <div className="text-black text-3xl font-bold font-['Inter']">Location Details</div>
        <div className="w-[1095px] h-[102px] text-black text-3xl font-medium font-['Inter']">We are situated at Thetsane Lekhalong right behind Roadside Public Bar</div>
        <div className="text-black text-3xl font-medium font-['Inter']">2</div>
        <div className="w-12 h-12 relative" />  
        <div className="text-black text-3xl font-bold font-['Inter']">Our Room Amenities</div>
        <div className="w-[165px] h-[29px] text-black text-3xl font-medium font-['Inter']">Bathroom</div>
        <div className="w-[60px] h-[60px] relative" />
        <div className="w-12 h-12 relative" />
        <div className="w-12 h-12 relative" />
        <div className="text-black text-3xl font-medium font-['Inter']">TV</div>
        <div className="w-12 h-12 relative" />
        <div className="text-black text-3xl font-medium font-['Inter']">Free Wifi</div>
        <div className="w-[456px] h-[88px] relative">
        <div className="w-[456px] h-[88px] left-0 top-0 absolute"><span className="text-black text-[40px] font-bold font-['Inter']">North Branch<br/></span><span className="text-black text-[35px] font-semibold font-['Inter']">Room 01</span></div>
    </div>
</>
    )
}
export  default RoomDetails;