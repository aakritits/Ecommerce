import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2 text-white">TradeVerse</h2>{" "}
          <p className="text-sm text-gray-400">
            Your resource for online shopping
          </p>
        </div>
        <div className="flex justify-center mb-4">
          <a href="#" className="mx-2 text-sm text-gray-400 hover:underline">
            Blog
          </a>
          <a href="#" className="mx-2 text-sm text-gray-400 hover:underline">
            {" "}
            About
          </a>
          <a href="#" className="mx-2 text-sm text-gray-400 hover:underline">
            {" "}
            Contact
          </a>
        </div>
        <div className="mb-4 ml-6">
          <a href="#" className="mx-2 text-sm text-gray-400 hover:underline">
            Terms & Conditions
          </a>
          <br />
          <a
            href="#"
            className="mx-2 mt-2 text-sm text-gray-400 hover:underline"
          >
            Privacy Policy
          </a>
          <p className="text-sm mt-6 text-gray-400">All Rights Reserved ©</p>{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
