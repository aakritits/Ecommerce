import product1 from "./images/1.jpeg";
import product2 from "./images/product2.png";
import product3 from "./images/3.webp";
import product4 from "./images/4.jpeg";
import product5 from "./images/5.jpeg";
import product6 from "./images/6.jpeg";
import product7 from "./images/7.jpeg";
import product8 from "./images/8.avif";
import product9 from "./images/9.jpg";

const products = [
  {
    id: "1",
    name: "Wireless Headphones",
    category: "Electronics",
    description:
      "High-quality wireless headphones with noise cancellation and 12-hour battery life.",
    price: 99.99,
    image: product1,
    review: 2,
    popular: true,
    newArrival: false,
  },
  {
    id: "2",
    name: "Organic Green Tea",
    category: "Groceries",
    description:
      "A soothing blend of organic green tea leaves from the mountains of Himachal.",
    price: 15.5,
    image: product2,
    review: 2,
    popular: false,
    newArrival: true,
  },
  {
    id: "3",
    name: "Ergonomic Office Chair",
    category: "Furniture",
    description:
      "Comfortable ergonomic office chair with lumbar support and breathable mesh back.",
    price: 250.0,
    image: product3,
    review: 2,
    popular: true,
    newArrival: false,
  },
  {
    id: "4",
    name: "Wooden Rolling Pin",
    category: "Kitchenware",
    description:
      "Traditional wooden rolling pin ideal for baking and pasta making.",
    price: 20.75,
    image: product4,
    review: 5,
    popular: false,
    newArrival: true,
  },
  {
    id: "5",
    name: "Gaming Mouse",
    category: "Electronics",
    description:
      "High precision gaming mouse with customizable RGB lighting and 16000 DPI sensor.",
    price: 59.99,
    image: product5,
    review: 5,
    popular: true,
    newArrival: false,
  },
  {
    id: "6",
    name: "Yoga Mat",
    category: "Fitness",
    description:
      "Eco-friendly, non-slip yoga mat perfect for all types of yoga and pilates.",
    price: 35.0,
    image: product6,
    review: 5,
    popular: true,
    newArrival: false,
  },
  {
    id: "7",
    name: "Stainless Steel Water Bottle",
    category: "Fitness",
    description:
      "Durable stainless steel water bottle, keeps liquids cold or hot for up to 12 hours.",
    price: 25.0,
    image: product7,
    review: 5,
    popular: false,
    newArrival: true,
  },
  {
    id: "8",
    name: "Smart TV 4K",
    category: "Electronics",
    description:
      "Ultra HD Smart TV with high dynamic range and smart home compatibility.",
    price: 1200.0,
    image: product8,
    review: 5,
    popular: true,
    newArrival: false,
  },
  {
    id: "9",
    name: "Bluetooth Speaker",
    category: "Electronics",
    description:
      "Portable Bluetooth speaker with excellent sound quality and long battery life.",
    price: 45.99,
    image: product9,
    review: 5,
    popular: false,
    newArrival: true,
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
    review: 5,
    popular: false,
    newArrival: false,
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
    review: 5,
    popular: true,
    newArrival: false,
  },
  {
    id: "12",
    name: "Organic Coconut Oil",
    category: "Groceries",
    description:
      "Cold-pressed organic coconut oil, perfect for cooking, baking, and skincare.",
    price: 12.99,
    image: product2,
    review: 5,
    popular: false,
    newArrival: true,
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
    review: 5,
    popular: true,
    newArrival: false,
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
    review: 5,
    popular: false,
    newArrival: true,
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
    review: 5,
    popular: true,
    newArrival: false,
  },
  {
    id: "16",
    name: "Portable Power Bank",
    category: "Electronics",
    description: "Compact portable power bank with fast charging capabilities.",
    price: 29.99,
    image:
      "https://www.topbestproreview.com/wp-content/uploads/2020/12/1-9.jpg",
    review: 5,
    popular: false,
    newArrival: true,
  },
  {
    id: "17",
    name: "Reusable Silicone Food Storage Bags",
    category: "Kitchenware",
    description:
      "Eco-friendly reusable silicone food storage bags, a sustainable alternative to plastic.",
    price: 19.99,
    image: "https://www.hjcloseouts.com/wp-content/uploads/2021/01/lynmark.jpg",
    review: 5,
    popular: true,
    newArrival: false,
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
    review: 5,
    popular: false,
    newArrival: true,
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
    review: 5,
    popular: false,
    newArrival: true,
  },
  {
    id: "20",
    name: "Resistance Bands Set",
    category: "Fitness",
    description:
      "Set of resistance bands with varying levels of resistance for strength training.",
    price: 29.95,
    image: "http://www.fitstream.com/images/products/complete-band-pack.jpeg",
    review: 5,
    popular: true,
    newArrival: false,
  },
  {
    id: "21",
    name: "Leather Messenger Bag",
    category: "Fashion",
    description:
      "Stylish leather messenger bag with multiple compartments for laptops and accessories.",
    price: 89.99,
    image: product7,
    review: 5,
    popular: false,
    newArrival: true,
  },
  {
    id: "22",
    name: "Smart Thermostat",
    category: "Electronics",
    description:
      "Wi-Fi enabled smart thermostat that can be controlled via smartphone app.",
    price: 129.99,
    image: product5,
    review: 5,
    popular: true,
    newArrival: false,
  },
  {
    id: "23",
    name: "Vegetable Garden Kit",
    category: "Groceries",
    description:
      "Complete vegetable garden kit with seeds, soil, and tools for home gardening.",
    price: 25.0,
    image: product9,
    review: 5,
    popular: false,
    newArrival: true,
  },
  {
    id: "24",
    name: "Outdoor Patio Chair",
    category: "Furniture",
    description:
      "Comfortable outdoor patio chair with weather-resistant cushions and durable frame.",
    price: 179.99,
    image: product1,
    review: 5,
    popular: true,
    newArrival: false,
  },
];

export default products;
