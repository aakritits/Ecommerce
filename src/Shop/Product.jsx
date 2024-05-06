import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { id, name, category, description, image, price } = props.data;

  // Prevent the Link action when the Add to Cart button is clicked
  const handleClick = (event) => {
    event.preventDefault(); // This prevents the link from being activated
    event.stopPropagation(); // This stops the click event from bubbling up to the link
    console.log("Add to cart clicked for", id); // Placeholder for add to cart functionality
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 mb-4 mt-4 flex flex-col">
      <Link
        to={`/product/${id}`}
        className="no-underline text-black flex flex-col flex-1"
      >
        <div className="bg-white flex justify-center items-center h-48">
          <img src={image} alt={name} className="max-h-full max-w-full" />
        </div>
        <div className="m-5 flex-1 flex flex-col justify-between">
          <div>
            <span className="block font-bold">{name}</span>
            <span className="block">{price}</span>
          </div>
        </div>
      </Link>
      <button
        onClick={handleClick}
        className="bg-black text-white rounded-full p-2 mt-2"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
