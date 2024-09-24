"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
interface ConfirmationPageProps {
  userDetails: {
    fullName: string;
    email: string;
    phone: string;
    payment: string;
  };
}

export const ConfirmationPage: React.FC<ConfirmationPageProps> = ({
  userDetails,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="p-4">
      <h3 className="text-xl font-bold mb-4">Booking Confirmation</h3>
      <div className="mb-4">
        <h4 className="text-lg font-semibold">Your Details</h4>
        <p><span className="text-green-600 font-bold">Full Name:</span> {userDetails.fullName}</p>
        <p><span className="text-green-600 font-bold">Email:</span> {userDetails.email}</p>
        <p><span className="text-green-600 font-bold">Phone Number:</span> {userDetails.phone}</p>
        <p><span className="text-green-600 font-bold">Payment Method:</span> {userDetails.payment}</p>
      </div>
      <Button onClick={() => setIsVisible(true)}>Confirm Booking</Button>
      {isVisible && (
        <p className="text-green-600 font-bold">
          Your booking has been confirmed!
        </p>
      )}
    </div>
  );
};


// const Step = ({ title }: { title: string }) => {
//   return (
//     <li className="flex gap-2 items-start">
//       <CheckIcon />
//       <p className="text-black">{title}</p>
//     </li>
//   );
// };

// <div className="text-neutral-900 mt-1 relative z-20">
//               Follow these steps to pay for your room:
//               <ul className="list-none mt-2">
//                 <Step title="Are you paying with Mpesa or Ecocash?" />
//                 <Step title="Mpesa Merchant(12345) / Ecocash Merchant(12345)" />
//                 <Step title="Make Payment To Any Convinient Merchant" />
//                 <Step title="Take a screenshot" />
//                 <Step title="Send it here (56120463) via WhatsApp" />
//                 <Step title="All Done!" />
//               </ul>
//             </div>