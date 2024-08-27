import React from "react";
import FAQs from '@/components/FrontEnd/FAQs'; 

const About = () => {
  return (
    <section id="about" className="py-14">
      <div className="max-w-screen-xl mx-auto md:px-8">
        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
          <div className="flex-1 sm:hidden lg:block mt-[1cm]">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              className="md:max-w-lg sm:rounded-lg"
              alt="The Valley Guest House"
            />
          </div>
          <div className="max-w-xl px-4 space-y-3 mt-[1cm] sm:px-0 md:mt-0 lg:max-w-2xl">
            <h3 className="text-indigo-600 font-semibold mt-[2cm]">
              Welcome to The Valley Guest House
            </h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Experience Comfort and Hospitality in the Heart of Maseru
            </p>
            <p className="mt-3 text-gray-600">
              Located in Thetsane Lekhalong, Maseru, Lesotho, The Valley Guest House offers a unique and memorable stay with warm hospitality and exceptional service. Whether you're here for business or leisure, our guest house provides a comfortable retreat with all the amenities you need for a pleasant stay.
            </p>
            <p className="mt-3 text-gray-600">
              Our service area includes the beautiful surroundings of Maseru, ensuring that you have easy access to local attractions and activities. Our friendly staff is dedicated to making your stay as enjoyable and stress-free as possible.
            </p>
            <div className="mt-6 text-gray-800">
              <p className="font-semibold">Address:</p>
              <p>Thetsane Lekhalong, Maseru, Lesotho, 100</p>
              <p className="font-semibold mt-2">Service Area:</p>
              <p>Maseru, Lesotho</p>
              <p className="font-semibold mt-2">Mobile:</p>
              <p>5603 8339</p>
            </div>
            <a
              href="javascript:void(0)"
              className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium mt-6"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="mt-8">
          <FAQs />
        </div>
      </div>
    </section>
  );
};

export default About;
