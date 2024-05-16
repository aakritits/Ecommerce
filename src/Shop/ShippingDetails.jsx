import React, { useState } from "react";
import { useCart } from "../cartcontext/CartContext";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const ShippingDetails = () => {
  const [values, setValues] = useState({
    firstName: "",
    address: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { cartItems, totalAmount, setCartItems } = useCart();
  const navigate = useNavigate();

  const changeFirstname = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };

  const changeaddress = (event) => {
    setValues({ ...values, address: event.target.value });
  };

  const changephone = (event) => {
    setValues({ ...values, phone: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleClearStorage = () => {
    // Clear local storage
    localStorage.removeItem("cartItems");

    // Update state to reflect the cleared cart and navigate to home
    setCartItems([]);
    navigate("/");
  };

  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-between">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Shipping Details</title>
        <meta
          name="description"
          content="E-commerce App using React JS and Tailwind CSS"
        />
        <meta
          name="keywords"
          content="Ecommerce App, React JS, Tailwind CSS, Checkout Page"
        />
      </Helmet>
      <div className="w-full lg:w-1/2 p-4 lg:p-8 md:w-[630px] md:p-8">
        <div className="space-y-4 bg-gray-900 p-6 lg:p-12 rounded-lg shadow-xl text-white">
          <span className="font-semibold">Shipping Details</span>
          <form onSubmit={handleSubmit}>
            {submitted && values.firstName && values.address && values.phone ? (
              <div className="text-green-600">
                Thank you for ordering! Your order will be dispatched shortly.
              </div>
            ) : null}

            <input
              value={values.firstName}
              onChange={changeFirstname}
              type="text"
              placeholder="First Name"
              className="block mt-6 text-black w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
              name="firstName"
              required
            />
            {submitted && !values.firstName ? (
              <span className="text-red-600">Please Enter a First Name</span>
            ) : null}

            <input
              value={values.address}
              onChange={changeaddress}
              className="block  mt-6 w-full text-black px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
              type="text"
              placeholder="Address"
              name="address"
              required
            />
            {submitted && !values.address ? (
              <span className="text-red-600">Please Enter an Address</span>
            ) : null}

            <input
              value={values.phone}
              onChange={changephone}
              className="block  mt-6 w-full text-black px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
              type="number"
              placeholder="Phone"
              name="phone"
              required
            />
            {submitted && !values.phone ? (
              <span className="text-red-600">Please Enter a Phone Number</span>
            ) : null}
            <div className="flex">
              <button className=" w-full  mt-6 px-2 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Submit
              </button>
              <button
                className="px-2  py-2 w-full mt-6 rounded-md ml-2 bg-blue-600"
                onClick={handleClearStorage}
              >
                Finish
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="w-full lg:w-1/2 p-4 lg:p-12 flex flex-col space-y-4">
        <span className="text-xl font-semibold">
          Total Amount: ${totalAmount.toFixed(2)}{" "}
        </span>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="bg-white flex justify-start items-center space-x-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-24 w-24 object-contain"
            />
            <div>
              <span className="text-xl font-semibold">{item.name}</span>
              <div className="font-semibold">${item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShippingDetails;
