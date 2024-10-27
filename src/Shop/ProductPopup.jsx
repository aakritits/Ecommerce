// ProductPopup.js
import React from 'react';
import { FaTimes } from 'react-icons/fa';

const ProductPopup = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full transform transition-transform duration-300 ease-out scale-95 hover:scale-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-red-500 transition duration-200">
            <FaTimes className="w-6 h-6" />
          </button>
        </div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-contain rounded-lg mb-6"
        />
        <p className="text-xl text-gray-700 font-semibold">Price: Rs {product.price.toFixed(2)}</p>
        {/* Additional product details could go here */}
        <button
          onClick={onClose}
          className="mt-8 w-full bg-gray-900 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg shadow-md transition duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductPopup;
