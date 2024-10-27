import React from "react";
import { useCart } from "../cartcontext/CartContext";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const CartPage = () => {
  const { cartItems, addToCart, removeFromCart, updatedCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cart Items</title>
        <meta
          name="description"
          content="E-commerce App using React JS and Tailwind CSS"
        />
        <meta
          name="keywords"
          content="Ecommerce App, React JS, Tailwind CSS, Cart Page"
        />
      </Helmet>

      <h1 className="text-center font-bold text-4xl text-gray-800 mb-8">
        Your Cart
      </h1>

      {cartItems.length > 0 ? (
        <div className="max-w-6xl mx-auto p-2">
          <div className="bg-white rounded-lg shadow-lg p-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-gray-200 py-6"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-contain rounded-md"
                  />
                  <div className="ml-4">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h2>
                    <p className="text-gray-600 font-bold">
                      Rs {item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => removeFromCart(item)}
                    className="bg-gray-200 hover:bg-red-500 text-gray-700 hover:text-white transition duration-300 font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-md"
                  >
                    <span className="text-lg">−</span>
                  </button>
                  <input
                    type="number"
                    className="w-16 h-8 text-center border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-400 transition duration-300"
                    value={item.quantity}
                    onChange={(e) => updatedCart(item, Number(e.target.value))}
                    min="1"
                  />
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-gray-200 hover:bg-green-500 text-gray-700 hover:text-white transition duration-300 font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-md"
                  >
                    <span className="text-lg">+</span>
                  </button>
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center mt-6">
              <button
                className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition"
                onClick={() => navigate("/")}
              >
                Continue Shopping
              </button>
              <Link
                to="/shippingdetails"
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 transition"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center mt-10">
          <span className="block text-lg font-semibold text-gray-600">
            Your Cart is Empty
          </span>
          <Link
            to="/"
            className="mt-4 inline-block px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition"
          >
            Start Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
