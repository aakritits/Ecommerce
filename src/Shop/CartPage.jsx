import React from "react";
import { useCart } from "../cartcontext/CartContext";

const CartPage = () => {
  const { cartItems, addToCart } = useCart();

  return (
    <div>
      <h1 className="text-center font-bold m-6 text-2xl">Your Cart</h1>
      <div className="grid grid-cols-1 gap-7">
        {cartItems.map((item) => (
          <div key={item.id}>
            <div className="bg-white flex justify-center items-center h-48">
              <img
                src={item.image}
                alt={name}
                className="max-h-full max-w-full"
              />

              <div className="items-center text-center m-4">
                <span className="text-center text-xl font-semibold">
                  {item.name}
                </span>
                <div>${item.price}</div>
                <div className="">
                  <button>-</button>
                  <span className="m-2">{item.quantity}</span>
                  <button>+</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
