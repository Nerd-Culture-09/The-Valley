"use client";
import React from "react";

const Footer = () => {
  const footerNavs = [
    {
      label: "Company",
      items: [
        { href: "javascript:void()", name: "Partners" },
        { href: "javascript:void()", name: "Blog" },
        { href: "javascript:void()", name: "Team" },
        { href: "javascript:void()", name: "Careers" },
      ],
    },
    {
      label: "Resources",
      items: [
        { href: "javascript:void()", name: "Contact" },
        { href: "javascript:void()", name: "Support" },
        { href: "javascript:void()", name: "Docs" },
        { href: "javascript:void()", name: "Pricing" },
      ],
    },
    {
      label: "About",
      items: [
        { href: "javascript:void()", name: "Terms" },
        { href: "javascript:void()", name: "License" },
        { href: "javascript:void()", name: "Privacy" },
        { href: "javascript:void()", name: "About Us" },
      ],
    },
  ];

  return (
    <footer className="text-gray-500 bg-transparent px-4 py-5 mx-auto md:px-8 border-t">
      <div className="gap-6 justify-between md:flex">
        {/* Footer Navigation */}
        <div className="flex-1">
          <div className="max-w-xs">
            <img src="/vlogo.png" className="w-32" alt="The Valley Guest House Logo" />
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <label className="block pt-4 pb-2">
              Sign up for discounts and more updates
            </label>
            <div className="max-w-sm flex items-center border rounded-md p-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2.5 outline-none"
              />
              <button className="p-2.5 rounded-md text-white bg-indigo-600 outline-none shadow-md focus:shadow-none sm:px-5">
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Footer Links */}
        <div className="flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
          {footerNavs.map((item, idx) => (
            <ul className="space-y-4" key={idx}>
              <h4 className="text-gray-800 font-medium">{item.label}</h4>
              {item.items.map((el, idx) => (
                <li key={idx}>
                  <a href={el.href} className="hover:underline hover:text-indigo-600">
                    {el.name}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Map Section */}
        <div className="flex-1">
          <div className="mt-10 md:mt-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d427.93005782607394!2d27.492784852319357!3d-29.304455527907236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e1!4m3!3m2!1d-29.3044156!2d27.4930644!4m3!3m2!1d-29.3100001!2d27.4799995!5e0!3m2!1sen!2s!4v1693156314791!5m2!1sen!2s"
              width="100%"
              height="200"
              loading="lazy"
              className="border rounded-md"
              style={{ border: 0 }}
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>
      </div>

      <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; 2024 The Valley Guest House All rights reserved.
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            {/* Social Media Icons */}
            {/* Your social media icons code here */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
