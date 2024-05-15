import React from "react";
import { useCategory } from "../cartcontext/CategoryContext";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      name: "Fitness",
      image:
        "https://ozodeal.com/wp-content/uploads/2020/01/smart-watch-with-all-day-blood-pressure-heart-rate-monitor-waterproof-fitness-tracker-for-men-women-kids-1024x1024.jpg",
    },
    {
      name: "Fashion",
      image:
        "https://cdn.shopify.com/s/files/1/1884/8161/products/2_Holtz_Leather_messenger_bag_brifecase_The_No._1860_EXPRESS_-_Fine_Leather_Messenger_Bag_Mens_Briefcase_NEW_1800x1800.jpg?v=1569064547",
    },
    {
      name: "Home & Garden",
      image:
        "https://www.yourhomeandgarden.co.nz/wp-content/uploads/2019/03/Top10IndoorPlants_YHG_main.jpg",
    },
    {
      name: "Electronics",
      image:
        "https://www.bassheadspeakers.com/wp-content/uploads/2019/11/Falwedi-True-Wireless-Earbuds-for-iPhone.jpg",
    },
    {
      name: "Travel",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/715fjbcihnL._SL1050_.jpg",
    },
    {
      name: "Groceries",
      image:
        "https://anviearth.com/wp-content/uploads/2021/05/0H3A1970-scaled.jpg",
    },
    {
      name: "Furniture",
      image:
        "https://www.yestobuy.com.au/assets/alt_6/HASD-114E-WHDF-WODB-140.jpg?20200707064747",
    },
    {
      name: "Kitchenware",
      image:
        "https://i5.walmartimages.com/asr/f3585bc8-c2de-430f-829c-ae666021773f_1.8ba1fcc76dc4a906d97d1228ae9c45d5.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
    },
  ];

  const { setSelectedCategory } = useCategory();

  const navigate = useNavigate();

  const handleCategory = (category) => {
    setSelectedCategory(category.name);
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 px-12 mt-5">
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => handleCategory(category)}
          className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-6 px-5 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 transition duration-300 w-full text-center my-3 flex flex-col items-center"
        >
          <img
            src={category.image}
            alt={category.name}
            className="w-20 h-20 object-cover mb-2"
          />{" "}
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default Categories;
