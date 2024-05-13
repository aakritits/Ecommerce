import React from "react";
import { useCart } from "../cartcontext/CartContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const CartPage = () => {
  const { cartItems, addToCart, removeFromCart, updatedCart } = useCart();
  const navigate = useNavigate();

  return (
    <div>
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
      <h1 className="text-center font-bold m-6 text-2xl">Your Cart</h1>
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-7 p-2">
          {cartItems.map((item) => (
            <div key={item.id}>
              <div className="bg-white flex justify-center items-center h-48">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-full max-w-full"
                />
                <div className="items-center text-center mt-6 ml-4">
                  <span className="text-center text-xl font-semibold">
                    {item.name}
                  </span>
                  <div className="font-semibold">${item.price}</div>
                  <div className="text-sm">
                    <button onClick={() => removeFromCart(item)}>-</button>
                    <input
                      className="m-1 w-1/6 ml-5 mr-0"
                      value={item.quantity}
                      onChange={(e) =>
                        updatedCart(item, Number(e.target.value))
                      }
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

            <Link
              to="/shippingdetails"
              className="px-4 py-3 bg-gray-900 rounded-md text-white ml-2"
            >
              Checkout
            </Link>
          </div>
        </div>
      ) : (
        <span className="text-center block font-semibold mt-6">
          Your Cart is Empty
        </span>
      )}
    </div>
  );
};

export default CartPage;
