import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white p-8 gap-4 grid grid-cols-1 md:grid-cols-3 w-full">
      {/* Left Section */}
      <div className="grid grid-cols-1 text-white gap-2 sm:ml-0 md:ml-12 cursor-pointer">
        <span>Quick Links</span>
        <span>Privacy Policy</span>
        <span>Exchange and Return Policy</span>
      </div>
      {/* Middle Section */}
      <div className="grid grid-cols-1 text-white gap-2 md:ml-12 cursor-pointer">
        <span>Help</span>
        <span>About Us</span>
        <span>Contact Us</span>
      </div>
      {/* Right Section */}
      <div className="grid grid-cols-1 text-white gap-2 cursor-pointer md:col-span-1">
        <span>Paypal</span>
        <span>FAQ</span>
        <span>Share your experience</span>
      </div>
      {/* Copyright Section */}
      <div className="text-white sm:col-span-3 md:col-span-1 sm:ml-0 md:ml-12 mt-6">
        Copyright © 2024, Tradeverse, Powered by Shopify
      </div>
    </div>
  );
};

export default Footer;
