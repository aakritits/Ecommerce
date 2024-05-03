import React from "react";

const Product = (props) => {
  const { id, name, category, description, image, price } = props.data;
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 mb-4 mt-4 flex flex-col">
      <div className="bg-white flex justify-center items-center h-48">
        {/* Fixed height container */}
        <img src={image} alt={name} className="max-h-full max-w-full" />{" "}
        {/* Image is constrained within container */}
      </div>
      <div className="m-5">
        <span className="block font-bold">{name}</span>
        <span className="block">{price}</span>
      </div>
      <button className="bg-black text-white rounded-full p-2">
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
