import React from "react";
import { useCart } from "../cartcontext/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems, addToCart, removeFromCart, updatedCart } = useCart();
  const navigate = useNavigate(); // Initialize useNavigate hook

  return (
    <div>
      <h1 className="text-center font-bold m-6 text-2xl">Your Cart</h1>
      <div className="grid grid-cols-1 gap-7 p-2">
        {cartItems.map((item) => (
          <div key={item.id}>
            <div className="bg-white flex justify-center items-center h-48">
              <img
                src={item.image}
                alt={name}
                className="max-h-full max-w-full"
              />

              <div className="items-center text-center mt-6 ml-4">
                <span className="text-center text-xl font-semibold">
                  {item.name}
                </span>
                <div className="font-semibold">${item.price}</div>
                <div className="mt-2 text-sm">
                  <button onClick={() => removeFromCart(item)}>-</button>

                  <input
                    className="m-2 w-1/6 ml-4 mr-0"
                    value={item.quantity}
                    onChange={(e) => updatedCart(item, e.target.value)}
                  />

                  <button onClick={() => addToCart(item)}>+</button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="text-center">
          <button
            className="px-4 py-3 bg-gray-900 rounded-md text-white mr-2"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
          <button className="px-4 py-3 bg-gray-900 rounded-md text-white ml-2">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
