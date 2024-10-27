// ProductDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import products from "../products";
import { useCart } from "../cartcontext/CartContext";

const ProductDetail = () => {
  const { id } = useParams();

  const product = products.find((p) => p.id === id);
  const { addToCart, cartItems } = useCart();
  const item = cartItems.find((item) => item.id === id);

  if (!product) {
    return <div className="text-center text-xl mt-16">Product not found!</div>;
  }

  const quantity = item ? item.quantity : null;

  return (
    <div className="mx-auto max-w-5xl p-6 mt-10">
      <div className="flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden">
        <div className="md:w-1/2 p-4 flex justify-center items-center ">
          <img
            src={product.image}
            alt={product.name}
            className="object-contain h-96 w-full "
          /> 
        </div>
        <div className="md:w-1/2 p-6">
          <div className="text-4xl font-bold text-gray-800">{product.name}</div>
          <div className="text-lg mt-4 text-gray-600 leading-relaxed">
            {product.description}
          </div>
          <div className="text-2xl font-semibold text-gray-900 mt-6">
            Rs {product.price.toFixed(2)}
          </div>
          <button
            className="mt-6 bg-black text-white font-medium rounded-full px-6 py-3 transition duration-200 hover:bg-gray-800 flex items-center relative"
            onClick={() => addToCart(product)}
          >
            Add to Cart
            {quantity > 0 && (
              <span className="ml-2 text-xs bg-red-500 text-white rounded-full px-2 py-1 absolute -top-2 -right-2">
                {quantity}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
