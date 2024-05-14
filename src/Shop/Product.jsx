import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../cartcontext/CartContext";
import { Helmet } from "react-helmet";

const Product = (props) => {
  const { id, name, image, price } = props.data;
  const { addToCart, cartItems } = useCart();
  const item = cartItems.find((item) => item.id === id);

  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    addToCart(props.data);
  };

  const quantity = item ? item.quantity : null;

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 mb-4 mt-4 flex flex-col">
      <Helmet>
        <meta charSet="utf-8" />
        <title>E-Commerce App</title>
        <meta
          name="description"
          content="E-commerce App using React JS and Tailwind CSS"
        />
        <meta name="keywords" content="Ecommerce App, React JS, Tailwind CSS" />
      </Helmet>
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
        Add To Cart {quantity}
      </button>
    </div>
  );
};

export default Product;
