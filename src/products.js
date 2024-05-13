import product1 from "./images/1.jpeg";
import product4 from "./images/4.jpeg";
import product5 from "./images/5.jpeg";
import product6 from "./images/6.jpeg";
import product7 from "./images/7.jpeg";
import product8 from "./images/8.avif";

const products = [
  {
    id: "1",
    name: "Wireless Headphones",
    category: "Electronics",
    description:
      "High-quality wireless headphones with noise cancellation and 12-hour battery life.",
    price: 99.99,
    image: product1,
  },
  {
    id: "2",
    name: "Organic Green Tea",
    category: "Groceries",
    description:
      "A soothing blend of organic green tea leaves from the mountains of Himachal.",
    price: 15.5,
    image: "https://bigbearkh.com/wp-content/uploads/2021/01/B07P9VBYD4.jpg",
  },
  {
    id: "3",
    name: "Ergonomic Office Chair",
    category: "Furniture",
    description:
      "Comfortable ergonomic office chair with lumbar support and breathable mesh back.",
    price: 250.0,
    image:
      "https://i5.walmartimages.com/asr/d74f9558-9369-4f91-842a-10df88d7d083_2.09a3f71391cdfb6b7fedda8e44266a30.jpeg",
  },
  {
    id: "4",
    name: " Wooden Rolling Pin",
    category: "Kitchenware",
    description:
      "Traditional wooden rolling pin ideal for baking and pasta making.",
    price: 20.75,
    image: product4,
  },
  {
    id: "5",
    name: "Gaming Mouse",
    category: "Electronics",
    description:
      "High precision gaming mouse with customizable RGB lighting and 16000 DPI sensor.",
    price: 59.99,
    image: product5,
  },
  {
    id: "6",
    name: "Yoga Mat",
    category: "Fitness",
    description:
      "Eco-friendly, non-slip yoga mat perfect for all types of yoga and pilates.",
    price: 35.0,
    image: product6,
  },
  {
    id: "7",
    name: "Stainless Steel Water Bottle",
    category: "Fitness",
    description:
      "Durable stainless steel water bottle, keeps liquids cold or hot for up to 12 hours.",
    price: 25.0,
    image: product7,
  },
  {
    id: "8",
    name: "Smart TV 4K",
    category: "Electronics",
    description:
      "Ultra HD Smart TV with high dynamic range and smart home compatibility.",
    price: 1200.0,
    image: product8,
  },
  {
    id: "9",
    name: "Bluetooth Speaker",
    category: "Electronics",
    description:
      "Portable Bluetooth speaker with excellent sound quality and long battery life.",
    price: 45.99,
    image: "https://eezepc.com/wp-content/uploads/2019/09/A3391Z11-2.jpg",
  },
  {
    id: "10",
    name: "Electric Kettle",
    category: "Kitchenware",
    description:
      "Fast boiling electric kettle with auto shut-off and boil dry protection.",
    price: 29.99,
    image:
      "https://assets.epicurious.com/photos/5ad6389443f92a3268c0b8c5/5:4/w_6780,h_5424,c_limit/The-Best-Electric-Kettle-11042018.jpg",
  },

  {
    id: "11",
    name: "Wireless Gaming Headset",
    category: "Electronics",
    description:
      "Immersive wireless gaming headset with surround sound and noise cancellation.",
    price: 149.99,
    image:
      "https://www.bhphotovideo.com/images/images1500x1500/astro_gaming_939_001673_a50_wireless_headset_with_1527191.jpg",
  },
  {
    id: "12",
    name: "Organic Coconut Oil",
    category: "Groceries",
    description:
      "Cold-pressed organic coconut oil, perfect for cooking, baking, and skincare.",
    price: 12.99,
    image:
      "https://anviearth.com/wp-content/uploads/2021/05/0H3A1970-scaled.jpg",
  },
  {
    id: "13",
    name: "Adjustable Standing Desk",
    category: "Furniture",
    description:
      "Electric adjustable standing desk with memory presets and spacious desktop.",
    price: 399.0,
    image:
      "https://www.yestobuy.com.au/assets/alt_6/HASD-114E-WHDF-WODB-140.jpg?20200707064747",
  },
  {
    id: "14",
    name: "Professional Chef's Knife",
    category: "Kitchenware",
    description:
      "High-quality professional chef's knife made from Damascus steel.",
    price: 99.5,
    image:
      "https://cdn-s3.touchofmodern.com/products/001/515/425/9758db8684aa03d43e3bc8c35d72951c_large.jpg?1559348985",
  },
  {
    id: "15",
    name: "Fitness Tracker Watch",
    category: "Fitness",
    description:
      "Waterproof fitness tracker watch with heart rate monitor and GPS tracking.",
    price: 79.99,
    image:
      "https://ozodeal.com/wp-content/uploads/2020/01/smart-watch-with-all-day-blood-pressure-heart-rate-monitor-waterproof-fitness-tracker-for-men-women-kids-1024x1024.jpg",
  },
  {
    id: "16",
    name: "Portable Power Bank",
    category: "Electronics",
    description: "Compact portable power bank with fast charging capabilities.",
    price: 29.99,
    image:
      "https://www.topbestproreview.com/wp-content/uploads/2020/12/1-9.jpg",
  },
  {
    id: "17",
    name: "Reusable Silicone Food Storage Bags",
    category: "Kitchenware",
    description:
      "Eco-friendly reusable silicone food storage bags, a sustainable alternative to plastic.",
    price: 19.99,
    image: "https://www.hjcloseouts.com/wp-content/uploads/2021/01/lynmark.jpg",
  },
  {
    id: "18",
    name: "Wireless Charging Pad",
    category: "Electronics",
    description:
      "Qi-certified wireless charging pad compatible with all Qi-enabled devices.",
    price: 24.99,
    image:
      "https://www.bhphotovideo.com/images/images2500x2500/belkin_f7u027dqwht_boostup_wireless_charging_pad_1377117.jpg",
  },
  {
    id: "19",
    name: "Vegetable Spiralizer",
    category: "Kitchenware",
    description:
      "Handheld vegetable spiralizer for creating healthy vegetable noodles and garnishes.",
    price: 14.95,
    image:
      "https://www.thespruceeats.com/thmb/IkS7WrgajctMs_3HOwuDRVEDMuc=/1500x1500/filters:fill(auto,1)/Zyliss_Spiralizers_Spiralizer_HeroSquare-dcea548fb9554e4295b531995f143769.jpg",
  },
  {
    id: "20",
    name: "Resistance Bands Set",
    category: "Fitness",
    description:
      "Set of resistance bands with varying levels of resistance for strength training.",
    price: 29.95,
    image: "http://www.fitstream.com/images/products/complete-band-pack.jpeg",
  },

  {
    id: "21",
    name: "Leather Messenger Bag",
    category: "Fashion",
    description:
      "Stylish leather messenger bag with multiple compartments for laptops and accessories.",
    price: 89.99,
    image:
      "https://cdn.shopify.com/s/files/1/1884/8161/products/2_Holtz_Leather_messenger_bag_brifecase_The_No._1860_EXPRESS_-_Fine_Leather_Messenger_Bag_Mens_Briefcase_NEW_1800x1800.jpg?v=1569064547",
  },
  {
    id: "22",
    name: "Digital Camera",
    category: "Electronics",
    description:
      "High-resolution digital camera with advanced autofocus and image stabilization.",
    price: 499.0,
    image:
      "https://cdn.shopify.com/s/files/1/0091/4119/0735/products/PNDMCFZ2500_16539.jpg?v=1591734438",
  },
  {
    id: "23",
    name: "Indoor Plant Set",
    category: "Home & Garden",
    description:
      "Set of indoor plants including succulents, cacti, and air-purifying varieties.",
    price: 39.99,
    image:
      "https://www.yourhomeandgarden.co.nz/wp-content/uploads/2019/03/Top10IndoorPlants_YHG_main.jpg",
  },
  {
    id: "24",
    name: "Wireless Earbuds",
    category: "Electronics",
    description:
      "True wireless earbuds with Bluetooth connectivity and immersive sound quality.",
    price: 79.99,
    image:
      "https://www.bassheadspeakers.com/wp-content/uploads/2019/11/Falwedi-True-Wireless-Earbuds-for-iPhone.jpg",
  },
  {
    id: "25",
    name: "Cookware Set",
    category: "Kitchenware",
    description:
      "Complete cookware set including pots, pans, and utensils for all your cooking needs.",
    price: 149.0,
    image:
      "https://i5.walmartimages.com/asr/22b0d4e3-8e16-4d49-8add-1cec79023f48.d07b14fc58ff9a5253cc0ed39a6433fe.jpeg",
  },
  {
    id: "26",
    name: "Smart Thermostat",
    category: "Home & Garden",
    description:
      "Wi-Fi enabled smart thermostat with programmable settings and energy-saving features.",
    price: 129.99,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61sPMq0N6nL._AC_SL1500_.jpg",
  },
  {
    id: "27",
    name: "Portable Espresso Maker",
    category: "Kitchenware",
    description: "Compact portable espresso maker for coffee lovers on the go.",
    price: 49.95,
    image:
      "https://cdn-s3.touchofmodern.com/products/001/869/216/94a1d74ce7d18d68656e02c1f38f2d7c_large.jpg?1591119296",
  },
  {
    id: "28",
    name: "Travel Backpack",
    category: "Travel",
    description:
      "Durable travel backpack with TSA-approved laptop compartment and anti-theft features.",
    price: 69.99,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/715fjbcihnL._SL1050_.jpg",
  },
  {
    id: "29",
    name: "Wireless Charging Stand",
    category: "Electronics",
    description:
      "Wireless charging stand compatible with smartphones, smartwatches, and earbuds.",
    price: 34.99,
    image: "https://m.media-amazon.com/images/I/41aYSKpcqJL.jpg",
  },
  {
    id: "30",
    name: "Memory Foam Mattress",
    category: "Furniture",
    description:
      "Premium memory foam mattress with cooling gel technology for a comfortable night's sleep.",
    price: 799.0,
    image:
      "https://i5.walmartimages.com/asr/2c0b9a15-41ed-4ed9-b488-398f13d3713d_3.4f8f2b67ce944616e771a9b5c6f584a3.jpeg",
  },
  {
    id: "31",
    name: "Home Security Camera System",
    category: "Home & Garden",
    description:
      "Wireless home security camera system with motion detection and night vision.",
    price: 199.99,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71nRYHxdhPL._SL1500_.jpg",
  },
  {
    id: "32",
    name: "Portable Blender",
    category: "Kitchenware",
    description:
      "Compact portable blender for making smoothies, shakes, and juices on the go.",
    price: 39.95,
    image:
      "https://i5.walmartimages.com/asr/f3585bc8-c2de-430f-829c-ae666021773f_1.8ba1fcc76dc4a906d97d1228ae9c45d5.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
  },
];
export default products;
