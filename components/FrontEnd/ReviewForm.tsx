"use client"

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import TextInput from "../FormInputs/TextInput";
import { useForm } from "react-hook-form";
import { ReviewProps } from "@/types/types";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { createReview } from "@/actions/users";
import SubmitButton from "../FormInputs/SubmitButton";
import { TextAreaInput } from "../FormInputs/TextAreaInput";

export default function Review() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState:{errors},
  } = useForm<ReviewProps>();
  const router = useRouter(); // useRouter hook for routing

  async function onSubmit (data: ReviewProps) {
    try {
      const user = await createReview(data); 
      if (user && user.status === 200) {
        console.log("Review submitted successfully");
        reset(); // Reset form
        setIsLoading(false); // Stop loading
        toast.success("Review Sent successfully"); 
        router.push("/");
        console.log(user.data);
      } else {
        console.log(user.error);
      }
    } catch (error) {
      console.log(error); // Log any errors
    }
  }

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to The Valley Guest House
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Subscribe for more updates and promotions
      </p>

      <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
          <TextInput
              label="Full Names"
              register={register}
              name="fullName"
              errors={errors}
              placeholder={"John Doe"}
            />
          </LabelInputContainer>
          <LabelInputContainer>
          <TextInput
              label="Email Address"
              register={register}
              name="email"
              type="email"
              errors={errors}
              placeholder="johndoe03@gmail.com"
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
        <TextInput
              label="Occupation"
              register={register}
              name="occupation"
              errors={errors}
              placeholder={"Software Engineer"}
            />
            <TextAreaInput 
            label="Message/Review" 
            register={register} 
            name="message" 
            errors={errors}
            />        
            </LabelInputContainer>

          <SubmitButton
              title="Review"
              isLoading={isLoading}
              LoadingTitle="Sending Review, please wait...."
            />

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
