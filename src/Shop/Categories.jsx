import React from "react";
import { useCategory } from "../cartcontext/CategoryContext";
import { useNavigate } from "react-router-dom";
import {
  FaMobileAlt,
  FaPlane,
  FaShoppingCart,
  FaChair,
  FaUtensils,
  FaTshirt,
  FaDumbbell,
} from "react-icons/fa";
import { PiPlant } from "react-icons/pi";

const Categories = () => {
  const categories = [
    {
      name: "Fitness",
      image:
        "https://play-lh.googleusercontent.com/_ou9KwByr_il3Zt6KzsioYI-LArpFMh5T6H2zYMhfJDI2C_DREqXUvEM3Ui88lzqmA=w240-h480-rw",
      icon: <FaDumbbell size={20} />,
    },
    {
      name: "Fashion",
      image:
        "https://cdn.shopify.com/s/files/1/1884/8161/products/2_Holtz_Leather_messenger_bag_brifecase_The_No._1860_EXPRESS_-_Fine_Leather_Messenger_Bag_Mens_Briefcase_NEW_1800x1800.jpg?v=1569064547",
      icon: <FaTshirt size={20} />,
    },
    {
      name: "Home & Garden",
      image:
        "https://www.thespruce.com/thmb/bQ1T58-5jNrhejn7suDUJc4N8gg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/201359006_264618455413992_3636675762881710481_n-7d814eb3c9b34b13a875e4d6d567dcc8.jpg",
      icon: <PiPlant size={20} />,
    },
    {
      name: "Electronics",
      image:
        "https://www.bassheadspeakers.com/wp-content/uploads/2019/11/Falwedi-True-Wireless-Earbuds-for-iPhone.jpg",
      icon: <FaMobileAlt size={20} />,
    },
    {
      name: "Travel",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/715fjbcihnL._SL1050_.jpg",
      icon: <FaPlane size={20} />,
    },
    {
      name: "Groceries",
      image:
        "https://cdn.prod.website-files.com/603cffd4503d70116b6b1da5/63e695f0dbbe99042f0f048b_groceries.png",
      icon: <FaShoppingCart size={20} />,
    },
    {
      name: "Furniture",
      image:
        "https://www.yestobuy.com.au/assets/alt_6/HASD-114E-WHDF-WODB-140.jpg?20200707064747",
      icon: <FaChair size={20} />,
    },
    {
      name: "Kitchenware",
      image:
        "https://i5.walmartimages.com/asr/f3585bc8-c2de-430f-829c-ae666021773f_1.8ba1fcc76dc4a906d97d1228ae9c45d5.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
      icon: <FaUtensils size={20} />,
    },
  ];

  const { setSelectedCategory } = useCategory();
  const navigate = useNavigate();

  const handleCategory = (category) => {
    setSelectedCategory(category.name);
    navigate(`/category/${category.name.toLowerCase()}`);
  };

  return (
    <div className="flex flex-col items-center h-screen bg-gray-50 px-6 sm:px-12 py-12 z-0">
      <h1 className="md:text-3xl font-bold text-gray-800 mb-2">
        Explore Our Categories
      </h1>
      <p className="text-gray-600 text-center mb-8 max-w-md">
        Discover a variety of products by browsing through different categories.
        Click on a category to explore more!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 z-0 w-full max-w-4xl">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => handleCategory(category)}
            className="flex flex-col items-center bg-white hover:bg-blue-50 text-gray-800 font-medium py-6 px-5 rounded-lg shadow-md transform transition duration-300 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
            aria-label={`Explore ${category.name} category`}
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-24 h-24 object-cover rounded-full mb-4 shadow-sm"
            />
            <div className="text-center flex items-center gap-2">
              <span>{category.icon}</span>
              <figcaption className="text-lg">{category.name}</figcaption>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
