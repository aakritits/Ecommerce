import product1 from "./images/1.jpeg";
import product2 from "./images/2.jpeg";
import product3 from "./images/3.jpeg";
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
    image: product2,
  },
  {
    id: "3",
    name: "Ergonomic Office Chair",
    category: "Furniture",
    description:
      "Comfortable ergonomic office chair with lumbar support and breathable mesh back.",
    price: 250.0,
    image: product3,
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
    image: "https://example.com/images/product9.jpg",
  },
  {
    id: "10",
    name: "Electric Kettle",
    category: "Kitchenware",
    description:
      "Fast boiling electric kettle with auto shut-off and boil dry protection.",
    price: 29.99,
    image: "https://example.com/images/product10.jpg",
  },

  {
    id: "11",
    name: "Wireless Gaming Headset",
    category: "Electronics",
    description:
      "Immersive wireless gaming headset with surround sound and noise cancellation.",
    price: 149.99,
    image: "https://example.com/images/product11.jpg",
  },
  {
    id: "12",
    name: "Organic Coconut Oil",
    category: "Groceries",
    description:
      "Cold-pressed organic coconut oil, perfect for cooking, baking, and skincare.",
    price: 12.99,
    image: "https://example.com/images/product12.jpg",
  },
  {
    id: "13",
    name: "Adjustable Standing Desk",
    category: "Furniture",
    description:
      "Electric adjustable standing desk with memory presets and spacious desktop.",
    price: 399.0,
    image: "https://example.com/images/product13.jpg",
  },
  {
    id: "14",
    name: "Professional Chef's Knife",
    category: "Kitchenware",
    description:
      "High-quality professional chef's knife made from Damascus steel.",
    price: 99.5,
    image: "https://example.com/images/product14.jpg",
  },
  {
    id: "15",
    name: "Fitness Tracker Watch",
    category: "Fitness",
    description:
      "Waterproof fitness tracker watch with heart rate monitor and GPS tracking.",
    price: 79.99,
    image: "https://example.com/images/product15.jpg",
  },
  {
    id: "16",
    name: "Portable Power Bank",
    category: "Electronics",
    description: "Compact portable power bank with fast charging capabilities.",
    price: 29.99,
    image: "https://example.com/images/product16.jpg",
  },
  {
    id: "17",
    name: "Reusable Silicone Food Storage Bags",
    category: "Kitchenware",
    description:
      "Eco-friendly reusable silicone food storage bags, a sustainable alternative to plastic.",
    price: 19.99,
    image: "https://example.com/images/product17.jpg",
  },
  {
    id: "18",
    name: "Wireless Charging Pad",
    category: "Electronics",
    description:
      "Qi-certified wireless charging pad compatible with all Qi-enabled devices.",
    price: 24.99,
    image: "https://example.com/images/product18.jpg",
  },
  {
    id: "19",
    name: "Vegetable Spiralizer",
    category: "Kitchenware",
    description:
      "Handheld vegetable spiralizer for creating healthy vegetable noodles and garnishes.",
    price: 14.95,
    image: "https://example.com/images/product19.jpg",
  },
  {
    id: "20",
    name: "Resistance Bands Set",
    category: "Fitness",
    description:
      "Set of resistance bands with varying levels of resistance for strength training.",
    price: 29.95,
    image: "https://example.com/images/product20.jpg",
  },

  {
    id: "21",
    name: "Leather Messenger Bag",
    category: "Fashion",
    description:
      "Stylish leather messenger bag with multiple compartments for laptops and accessories.",
    price: 89.99,
    image: "https://example.com/images/product21.jpg",
  },
  {
    id: "22",
    name: "Digital Camera",
    category: "Electronics",
    description:
      "High-resolution digital camera with advanced autofocus and image stabilization.",
    price: 499.0,
    image: "https://example.com/images/product22.jpg",
  },
  {
    id: "23",
    name: "Indoor Plant Set",
    category: "Home & Garden",
    description:
      "Set of indoor plants including succulents, cacti, and air-purifying varieties.",
    price: 39.99,
    image: "https://example.com/images/product23.jpg",
  },
  {
    id: "24",
    name: "Wireless Earbuds",
    category: "Electronics",
    description:
      "True wireless earbuds with Bluetooth connectivity and immersive sound quality.",
    price: 79.99,
    image: "https://example.com/images/product24.jpg",
  },
  {
    id: "25",
    name: "Cookware Set",
    category: "Kitchenware",
    description:
      "Complete cookware set including pots, pans, and utensils for all your cooking needs.",
    price: 149.0,
    image: "https://example.com/images/product25.jpg",
  },
  {
    id: "26",
    name: "Smart Thermostat",
    category: "Home & Garden",
    description:
      "Wi-Fi enabled smart thermostat with programmable settings and energy-saving features.",
    price: 129.99,
    image: "https://example.com/images/product26.jpg",
  },
  {
    id: "27",
    name: "Portable Espresso Maker",
    category: "Kitchenware",
    description: "Compact portable espresso maker for coffee lovers on the go.",
    price: 49.95,
    image: "https://example.com/images/product27.jpg",
  },
  {
    id: "28",
    name: "Travel Backpack",
    category: "Travel",
    description:
      "Durable travel backpack with TSA-approved laptop compartment and anti-theft features.",
    price: 69.99,
    image: "https://example.com/images/product28.jpg",
  },
  {
    id: "29",
    name: "Wireless Charging Stand",
    category: "Electronics",
    description:
      "Wireless charging stand compatible with smartphones, smartwatches, and earbuds.",
    price: 34.99,
    image: "https://example.com/images/product29.jpg",
  },
  {
    id: "30",
    name: "Memory Foam Mattress",
    category: "Furniture",
    description:
      "Premium memory foam mattress with cooling gel technology for a comfortable night's sleep.",
    price: 799.0,
    image: "https://example.com/images/product30.jpg",
  },
  {
    id: "31",
    name: "Home Security Camera System",
    category: "Home & Garden",
    description:
      "Wireless home security camera system with motion detection and night vision.",
    price: 199.99,
    image: "https://example.com/images/product31.jpg",
  },
  {
    id: "32",
    name: "Portable Blender",
    category: "Kitchenware",
    description:
      "Compact portable blender for making smoothies, shakes, and juices on the go.",
    price: 39.95,
    image: "https://example.com/images/product32.jpg",
  },
  {
    id: "33",
    name: "Fitness Foam Roller",
    category: "Fitness",
    description:
      "High-density foam roller for self-myofascial release and muscle recovery after workouts.",
    price: 24.99,
    image: "https://example.com/images/product33.jpg",
  },
  {
    id: "34",
    name: "Wireless Security Alarm System",
    category: "Home & Garden",
    description:
      "DIY wireless security alarm system with smartphone app control and customizable alerts.",
    price: 149.95,
    image: "https://example.com/images/product34.jpg",
  },
  {
    id: "35",
    name: "Stainless Steel Cookware Set",
    category: "Kitchenware",
    description:
      "Premium stainless steel cookware set with non-stick coating and ergonomic handles.",
    price: 199.0,
    image: "https://example.com/images/product35.jpg",
  },
  {
    id: "36",
    name: "Smart Doorbell",
    category: "Home & Garden",
    description:
      "Wi-Fi enabled smart doorbell with video camera and two-way audio communication.",
    price: 129.99,
    image: "https://example.com/images/product36.jpg",
  },
  {
    id: "37",
    name: "Bluetooth Car Kit",
    category: "Automotive",
    description:
      "Bluetooth car kit for hands-free calling and wireless music streaming in your car.",
    price: 29.99,
    image: "https://example.com/images/product37.jpg",
  },
  {
    id: "38",
    name: "Wireless Charging Mouse Pad",
    category: "Electronics",
    description:
      "Mouse pad with built-in wireless charging pad for smartphones and other Qi-enabled devices.",
    price: 39.99,
    image: "https://example.com/images/product38.jpg",
  },
  {
    id: "39",
    name: "Yoga Block Set",
    category: "Fitness",
    description:
      "Set of yoga blocks made from high-density foam for support and stability in yoga poses.",
    price: 19.99,
    image: "https://example.com/images/product39.jpg",
  },
  {
    id: "40",
    name: "Smart LED Light Bulbs",
    category: "Home & Garden",
    description:
      "Wi-Fi enabled smart LED light bulbs with adjustable brightness and color temperature.",
    price: 19.99,
    image: "https://example.com/images/product40.jpg",
  },
];
export default products;
