import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../cartcontext/CartContext";
import { Helmet } from "react-helmet";
import { FaCartPlus } from "react-icons/fa"; 
import { AiOutlineEye } from "react-icons/ai"; 
import ProductPopup from "./ProductPopup"; 

const Product = (props) => {
  const { id, name, image, price } = props.data;
  const { addToCart, cartItems } = useCart();
  const item = cartItems.find((item) => item.id === id);
  
  const [isPopupVisible, setIsPopupVisible] = useState(false); 

  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    addToCart(props.data);
  };

  const quantity = item ? item.quantity : 0;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col  hover:bg-gray-200">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{name} - E-Commerce App</title>
        <meta
          name="description"
          content={`Check out the ${name} on our E-commerce platform.`}
        />
        <meta
          name="keywords"
          content="Ecommerce, Product, React, Tailwind CSS"
        />
      </Helmet>
      <Link
        to={`/product/${id}`}
        className="flex flex-col flex-1 no-underline text-black"
      >
        <div className="flex justify-center items-center h-48 ">
          <img
            src={image}
            alt={name}
            className="object-contain max-h-full max-w-full"
          />
        </div>
        <div className="m-4 flex-1 flex flex-col justify-between">
          <div>
            <span className="block font-bold text-lg">{name}</span>
            <span className="block text-gray-700 text-base">
              Rs {price.toFixed(2)}
            </span>
          </div>
        </div>
      </Link>
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleClick}
          className="bg-black text-white rounded-full px-4 py-2 mb-4 transition hover:bg-gray-700 flex items-center relative"
        >
          <FaCartPlus />
          {quantity > 0 && (
            <span className="absolute text-xs top-0 right-0 transform translate-x-1 -translate-y-1 bg-red-500 text-white rounded-full px-1">
              {quantity}
            </span>
          )}
        </button>

        <button
          onClick={() => setIsPopupVisible(true)} // Show popup on click
          className="bg-black text-white rounded-full px-4 py-2 mb-4 transition hover:bg-gray-700 flex items-center"
        >
          <AiOutlineEye />
        </button>
      </div>

      {/* Popup for product details */}
      {isPopupVisible && (
        <ProductPopup
          product={{ id, name, image, price }} // Pass product data to popup
          onClose={() => setIsPopupVisible(false)} // Close popup function
        />
      )}
    </div>
  );
};

export default Product;
