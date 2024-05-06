import React, { useState } from "react";
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex sticky top-0 items-center justify-between bg-gray-900 py-4 px-4 ">
      <Link to="/" className="text-white text-lg font-bold mr-8">
        Shop
      </Link>
      <div className="flex text-white text-lg font-bold">
        <Link to="/cart" className="text-white">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
