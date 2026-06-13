import banana from "../assets/Bananas.png";
import apple from "../assets/Apples.png";
import redpepper from "../assets/redpepper.png";
import Ginger from "../assets/Ginger.png";
import pulses from "../assets/pluses.png";
import Rice from "../assets/Rice.png";
import beefbone from "../assets/BeefBone.png";
import broilerchicken from "../assets/Chicken.png";
import freshfruits from "../assets/Frash Fruits&Vegetable.png";
import cookingoilbottles from '../assets/Cooking Oils.png';
import cookingoil from "../assets/Cooking Oil & Ghee.png";
import meatfish from "../assets/Meat and Fish & Eggs.png";
import bakery from "../assets/Bakery & Snacks.png";
import beverages from "../assets/Beverages.png";
import dairyFish from '../assets/Dairy&Fish.png'

export const exclusiveOffers = [
  { id: 1, name: "Organic Bananas", quantity: "7pcs, Price", price: "4.99", image: banana },
  { id: 2, name: "Red Apple",       quantity: "1kg, Price",  price: "4.99", image: apple  },
  { id: 3, name: "Organic Bananas", quantity: "1kg, Price",  price: "4.99", image: banana },
];

export const bestSelling = [
  { id: 1, name: "Bell Pepper Red", quantity: "1kg, Price", price: "4.99", image: redpepper },
  { id: 2, name: "Ginger",          quantity: "250gm, Price", price: "4.99", image: Ginger },
   { id: 3, name: "Bell Pepper ", quantity: "1.5kg, Price", price: "4.99", image: redpepper },
];

export const groceryCategories = [
  { id: 1, name: "Pulses", bg: "bg-[#FFF3E5]" , image: pulses },
  { id: 2, name: "Rice",  bg: "bg-[#E5F5E5]" ,image: Rice },
];

export const groceryProducts = [
  { id: 1, name: "Beef Bone",       quantity: "1kg, Price", price: "4.99", image: beefbone },
  { id: 2, name: "Broiler Chicken", quantity: "1kg, Price", price: "4.99", image: broilerchicken },
   { id: 3, name: "Beef Bone",       quantity: "1kg, Price", price: "4.99", image: beefbone },
];

export const exploreCategories = [
  { id: 1, name: "Fresh Fruits & Vegetable", image: freshfruits,       bg: "bg-[#E8F5E9]", border: "border-[#D4EDDA]" },
  { id: 2, name: "Cooking Oil & Ghee",       image: cookingoil,        bg: "bg-[#FFF8E1]", border: "border-[#FFE082]" },
  { id: 3, name: "Meat & Fish",              image: meatfish,          bg: "bg-[#FCE4EC]", border: "border-[#F8BBD0]" },
  { id: 4, name: "Bakery & Snacks",          image: bakery,            bg: "bg-[#FFF3E0]", border: "border-[#FFE0B2]" },
  { id: 5, name: "Beverages",               image: beverages,         bg: "bg-[#E3F2FD]", border: "border-[#BBDEFB]" },
  { id: 6, name: "Cooking Oil Bottles",      image: cookingoilbottles, bg: "bg-[#FFF8E1]", border: "border-[#FFE082]" },
  { id: 7, name: "Cooking Oil & Ghee",       image: cookingoil,        bg: "bg-[#FFF8E1]", border: "border-[#FFE082]" },
  { id: 8, name: "Dairy & Fish",             image: dairyFish,         bg: "bg-[#E0F7FA]", border: "border-[#B2EBF2]" },
];