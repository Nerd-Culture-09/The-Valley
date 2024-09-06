"use client";

import { useForm } from "react-hook-form"; // Form handling library
import TextInput from "@/components/FormInputs/TextInput"; // Custom text input component
import SubmitButton from "@/components/FormInputs/SubmitButton"; // Custom submit button component
import { useState } from "react"; // State management library
// import ImageInput from "@/components/FormInputs/ImageInput";
import { Button } from "../ui/button"; // Button component
import Link from "next/link"; // Link component from Next.js
import { X } from "lucide-react"; // Icon component from Lucide React
// import { createRoom } from "@/actions/rooms"; // API action for creating rooms
import toast from "react-hot-toast"; // Toast notification library
import { useRouter } from "next/navigation"; // Router hook from Next.js
import { Input } from "../ui/input";
// import { Room } from "@prisma/client"; // Room type from Prisma client

// Define the properties for creating a room
export type RoomProps = {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  price: string;
  amenities: string[];
};

export default function RoomForm2({
  title,
  // initialData,
}: {
  title: string;
  // initialData?: Room;
}) {
  // const edititingId = initialData?.id || ""; // Extracting editing ID from initial data
  const [isLoading, setIsLoading] = useState(false);
  // const initialImageUrl = initialData?.imageUrl || ""; // Initial image URL for image input
  // const [imageUrl, setImageUrl] = useState(initialImageUrl); // State for image URL

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RoomProps>({
    // defaultValues: {
    //   title: initialData?.title,
    //   description: initialData?.description,
    //   price: initialData?.price,
    //   category: initialData?.category,
    //   amenities: initialData?.amenities || [],
    // },
  });

  // const router = useRouter(); // Router instance

  // // Function to handle form submission
  // async function onSubmit(data: RoomProps) {
  //   setIsLoading(true); // Set loading state to true
  //   data.imageUrl = imageUrl; // Set image URL in form data

  //   console.log(data); // Log form data to console for debugging

  //   if (edititingId) {
  //     // Handle update room functionality here
  //     toast.success("Room Updated Successfully"); // Display success toast
  //   } else {
  //     await createRoom(data); // Call create room API
  //     toast.success("Room Created Successfully"); // Display success toast
  //   }

  //   reset(); // Reset form fields
  //   router.push("/dashboard/rooms"); // Redirect to rooms dashboard
  // }

  return (
    <div className="w-full max-w-xl shadow-sm rounded-md m-3 border border-gray-200 mx-auto">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm py-4 border-gray-200 dark:border-gray-600">
        <div className="flex items-center justify-between px-6">
          <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight">
            {title} {/* Display form title */}
          </h1>
          {/* Button to cancel form submission */}
          <Button type="button" asChild variant={"outline"}>
            <Link href="/dashboard/south">
              <X className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
      {/* Form for submitting room data */}
      <form  className="py-4 px-4 mx-auto">
        <div className="grid gap-4 grid-cols-2">
          {/* Text input for room title */}
          <TextInput
            label="Room Title"
            register={register}
            name="title"
            errors={errors}
            placeholder="Enter Room Title"
          />
          {/* Text input for room description */}
          <TextInput
            label="Room Description"
            register={register}
            name="description"
            errors={errors}
            placeholder="Enter Room Description"
          />
          {/* Image input for room */}
          {/* <ImageInput
            label="Room Image"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="roomImage"
          /> */}
          {/* Text input for price */}
          <TextInput
            label="Price (M)"
            register={register}
            name="price"
            errors={errors}
            placeholder="Enter Price"
          />
          {/* Text input for category */}
          <TextInput
            label="Category"
            register={register}
            name="category"
            errors={errors}
            placeholder="Enter Category (e.g., South or North)"
          />
        </div>

        {/* Amenities input */}
        <div className="my-4">
          <label className="block text-sm font-medium text-gray-700">
            Amenities
          </label>
          <Input
            {...register("amenities", { required: "Amenities are required" })}
            className="w-full px-3 py-2 mt-1 border rounded-md"
            placeholder="Enter amenities separated by commas (e.g., Bed, Wifi, Table)"
          />
          {errors.amenities && (
            <p className="text-sm text-red-600 mt-1">{errors.amenities.message}</p>
          )}
        </div>

        <div className="mt-8 flex justify-between gap-4 items-center">
          {/* Button to cancel form submission */}
          <Button asChild variant={"outline"}>
            <Link href="/dashboard/south">Cancel</Link>
          </Button>
          <SubmitButton
            title={"Create Room"}
            isLoading={isLoading}
            LoadingTitle={
              "Saving please wait..."
            }
          />
        </div>
      </form>
    </div>
  );
}
