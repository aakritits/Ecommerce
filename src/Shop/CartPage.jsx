import React from "react";
import { useCart } from "../cartcontext/CartContext";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ShoppingCart } from "phosphor-react";

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

      {cartItems.length > 0 ? (
        <div className="max-w-6xl mx-auto p-4">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-2xl p-6">
            <h1 className="text-left font-bold text-2xl text-gray-800 mb-8">
              Your Cart
            </h1>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-gray-300 py-5 px-5"
              >
                {/* Left Section */}
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-44 object-cover m-3"
                  />
                  <div className="ml-6">
                    <h2 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition duration-300 ">
                      {item.name}
                    </h2>
                    <p className="text-gray-700 font-bold text-sm mt-1">
                      Rs {item.price.toFixed(2)}
                    </p>
                    {/* Add or Remove */}
                    <div className="flex items-center space-x-3 my-3">
                      <button
                        onClick={() => removeFromCart(item)}
                        className="bg-red-100transition-all duration-300 font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-lg"
                      >
                        <span className="text-lg">−</span>
                      </button>
                      <input
                        type="number"
                        className="w-14 h-10 text-center border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                        value={item.quantity}
                        onChange={(e) =>
                          updatedCart(item, Number(e.target.value))
                        }
                        min="1"
                      />
                      <button
                        onClick={() => addToCart(item)}
                        className="hover:text-white transition-all duration-300 font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-lg"
                      >
                        <span className="text-lg">+</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Total Section */}
            <div className="mt-4 text-xl font-bold text-gray-800">
              Total:{" "}
              <span className="text-gray-600">
                Rs{" "}
                {cartItems
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </span>
            </div>

            {/* Buttons Section */}
            <div className="flex justify-between items-center mt-8">
              <button
                className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 hover:shadow-md transition duration-300 font-semibold"
                onClick={() => navigate("/")}
              >
                Continue Shopping
              </button>
              <Link
                to="/shippingdetails"
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 hover:shadow-md transition duration-300 font-semibold"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
          <span className="flex flex-col items-center text-lg font-semibold text-gray-600">
            <ShoppingCart className="mb-4 w-16 h-16 text-gray-400" />
            Your Cart is Empty
          </span>
          <Link
            to="/"
            className="mt-6 inline-block px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition duration-300 text-lg"
          >
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
