import React from "react";
import { ShoppingCart } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import uglogo from "../images/ug-cakes-web-logo-small.webp";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="sticky top-0 bg-gray-900 py-4 px-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-white text-lg font-bold">
          <img
            src={uglogo}
            alt="Logo"
            className="w-16 sm:w-24 md:w-32 lg:w-40 h-auto"
          />
        </Link>
        <button
          className="text-white mr-5 rounded-full "
          onClick={() => navigate("/categories")}
        >
          Shop By Categories
        </button>
      </div>
      <div className="flex items-center">
        <div className="sm:hidden mr-3">
          <a
            href="https://play.google.com/store/apps?hl=en&gl=US"
            target="_blank"
            className=" text-white rounded-full hover:bg-slate-600 transition duration-300 sm:hidden"
          >
            Download App
          </a>
        </div>
        <div className="text-white text-lg font-bold">
          <Link to="/cart">
            <ShoppingCart size={32} className="text-white" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
