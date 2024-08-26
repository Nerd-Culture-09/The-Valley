"use client";
import { useState, useEffect } from "react";

const NavigationBar = () => {
  const [state, setState] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigation = [
  
    { title: "Rooms", path: "javascript:void(0)" },
    { title: "Pricing", path: "javascript:void(0)" },
    { title: "About", path: "javascript:void(0)" },
    { title: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full h-[70px] fixed top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white shadow-lg"
      }`}
    >
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center leading justify-between md:py-5 md:block">
          <div className="-mt-5">
            <a href="javascript:voi(0)">
              <img
                src="/vlogo.png"
                width={120}
                height={50}
                alt="The Valley logo"
              />
            </a>
          </div>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => (
              <li key={idx} className="text-gray-600 hover:text-indigo-600">
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </nav>
  );
};

export default NavigationBar;
