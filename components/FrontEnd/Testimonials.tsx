import * as React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"; 
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SignupFormDemo } from "./sign-up"; 

export default function Testimonial() {
  const testimonials = [
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Mswati",
      title: "Guest",
      quote: "lijo tse monate hakaaalo.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Lejone",
      title: "Guest",
      quote: "tshebeletso tse monate haakaalo.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "John",
      title: "DevOp engineer",
      quote: "who seeks after it and wants to have it, simply because it is the valley.",
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl sm:text-center md:mx-auto">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            See what others are saying about us
          </h3>
          <p className="mt-3 text-gray-600">The Valley guest house</p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, idx) => (
              <li key={idx} className="bg-gray-100 p-4 rounded-xl">
                <figure>
                  <div className="flex items-center gap-x-4">
                    <img src={item.avatar} className="w-16 h-16 rounded-full" />
                    <div>
                      <span className="block text-gray-800 font-semibold">{item.name}</span>
                      <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                    </div>
                  </div>
                  <blockquote>
                    <p className="mt-6 text-gray-700">{item.quote}</p>
                  </blockquote>
                </figure>
              </li>
            ))}
          </ul>
        </div>
        {/* Add Popover with Textarea and Button */}
        <div className="mt-8">
          <Popover>
            <PopoverTrigger asChild>
              <Button className="w-full">Review</Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="grid w-full gap-2">
                <Textarea placeholder="Type your message here." />
                <SignupFormDemo /> {/* Your sign-up form component */}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </section>
  );
}
