"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/Nav-menu";
import Image from "next/image";

export function Navbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Nav className="top-2" />
    </div>
  );
}

function Nav({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        {/* Existing MenuItems */}
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        
        {/* New FAQs MenuItem */}
        <MenuItem setActive={setActive} active={active} item="FAQs">
          <div className="flex flex-col space-y-4 text-sm">
            <div>
              <h4 className="font-bold">What are the check-in and check-out times at The Valley guest house?</h4>
              <p>24 hours</p>
            </div>
            <div>
              <h4 className="font-bold">Is parking offered on site at The Valley guest house?</h4>
              <p>Yes</p>
            </div>
            <div>
              <h4 className="font-bold">Is The Valley guest house currently open?</h4>
              <p>Yes</p>
            </div>
            <div>
              <h4 className="font-bold">Does The Valley guest house have a restaurant on site?</h4>
              <p>Yes</p>
            </div>
            <div>
              <h4 className="font-bold">Does The Valley guest house offer free cancellation for a full refund?</h4>
              <p>Yes</p>
            </div>
            <div>
              <h4 className="font-bold">How far is The Valley guest house from the center of Maseru?</h4>
              <p>15 kilometers</p>
            </div>
            <div>
              <h4 className="font-bold">Is airport shuttle service offered by The Valley guest house?</h4>
              <p>No</p>
            </div>
            <div>
              <h4 className="font-bold">Are there opportunities to exercise at The Valley guest house?</h4>
              <p>No</p>
            </div>
            <div>
              <h4 className="font-bold">Are there any popular attractions, historical sites close to The Valley guest house?</h4>
              <p>Yes</p>
            </div>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
