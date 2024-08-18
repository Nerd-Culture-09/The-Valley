"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { HoveredLink, Menu, MenuItem } from "./Nav-menu";

function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-5xl mx-auto z-50", className)}>
      <div className="h-[101px] px-[20px] sm:px-[49px] py-[10px] sm:py-[19px] bg-white rounded-[18px] justify-between items-center flex">
        {/* The Valley Guest House name centered */}
        <div className="w-[182px] h-[63px] relative text-center">
          <div className="text-[#64aef2] text-xl sm:text-[32px] font-bold font-['Inika'] leading-tight">
            The Valley<br />Guest House
          </div>
        </div>

        {/* Navbar items with dropdown functionality */}
        <Menu setActive={setActive} >
          <MenuItem setActive={setActive} active={active} item="Home">
            <HoveredLink href="/">Home</HoveredLink>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="About">
            <HoveredLink href="/about">About</HoveredLink>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Rooms">
            <div className="flex flex-col space-y-2 sm:space-y-4 text-xs sm:text-sm">
              <HoveredLink href="/rooms">Rooms</HoveredLink>
              <HoveredLink href="/breakfast">Breakfast</HoveredLink>
              <HoveredLink href="/bed">Bed</HoveredLink>
              <HoveredLink href="/beverages">Beverages</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Services">
            <HoveredLink href="/services">Services</HoveredLink>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Pricing">
            <div className="flex flex-col space-y-2 sm:space-y-4 text-xs sm:text-sm">
              <HoveredLink href="/pricing-1hour">1 Hour</HoveredLink>
              <HoveredLink href="/pricing-2hour">2 Hours</HoveredLink>
              <HoveredLink href="/pricing-daytime">Full Daytime</HoveredLink>
              <HoveredLink href="/pricing-nighttime">Full Nighttime</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default NavbarDemo;
