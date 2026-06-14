import banana from '../assets/Bananas.png'
import apple from '../assets/Apples.png'
import redpepper from '../assets/redpepper.png'
import Ginger from '../assets/Ginger.png'
import pulses from '../assets/pluses.png'
import Rice from '../assets/Rice.png'
import beefbone from '../assets/BeefBone.png'
import broilerchicken from '../assets/Chicken.png'
import freshfruits from '../assets/Frash Fruits&Vegetable.png'
import cookingoilbottles from '../assets/Cooking Oils.png'
import cookingoil from '../assets/Cooking Oil & Ghee.png'
import meatfish from '../assets/Meat and Fish & Eggs.png'
import bakery from '../assets/Bakery & Snacks.png'
import beverages from '../assets/Beverages.png'
import dairyFish from '../assets/Dairy&Fish.png'
import appleGrapeJuice from '../assets/Apple&Grapejucie.png'
import cocaColaCan from '../assets/Cocacolacan.png'
import dietCoke from '../assets/DiteCock.png'
import eggNoodles2 from '../assets/EggNoodles (2).png'
import eggNoodles from '../assets/EggNoodles.png'
import mayonnaise from '../assets/MayonnalsEggless.png'
import eggPasta from '../assets/EggPasta.png'
import eggs from '../assets/Eggs.png'
import eggsBasket from '../assets/EggsBaskets.png'
import orangeJuice from '../assets/Orangejuice.png'
import pepsi from '../assets/pepsi.png'
import sprite from '../assets/Spirte.png'

//  Types ──

export interface Product {
  id: number
  name: string
  quantity: string
  price: string
  image: string
  description: string
}

export interface GroceryCategory {
  id: number
  name: string
  bg: string
  image: string
}

export interface ExploreCategory {
  id: number
  name: string
  image: string
  bg: string
  border: string
  description: string
}

//  Home Screen Data ─

export const exclusiveOffers: Product[] = [
  {
    id: 1,
    name: "Organic Bananas",
    quantity: "7pcs, Price",
    price: "4.99",
    image: banana,
    description:
      "Organic bananas are naturally sweet and rich in potassium, fiber, and vitamins. Perfect for a healthy snack or smoothie ingredient.",
  },
  {
    id: 2,
    name: "Red Apple",
    quantity: "1kg, Price",
    price: "4.99",
    image: apple,
    description:
      "Fresh red apples packed with antioxidants and dietary fiber. Great for heart health and keeping you energized throughout the day.",
  },
  {
    id: 3,
    name: "Organic Bananas",
    quantity: "1kg, Price",
    price: "4.99",
    image: banana,
    description:
      "Organic bananas are naturally sweet and rich in potassium, fiber, and vitamins. Perfect for a healthy snack or smoothie ingredient.",
  },
]

export const bestSelling: Product[] = [
  {
    id: 4,
    name: "Bell Pepper Red",
    quantity: "1kg, Price",
    price: "4.99",
    image: redpepper,
    description:
      "Vibrant red bell peppers rich in Vitamin C and antioxidants. Adds color and crunch to salads, stir-fries, and grilled dishes.",
  },
  {
    id: 5,
    name: "Ginger",
    quantity: "250gm, Price",
    price: "4.99",
    image: Ginger,
    description:
      "Fresh ginger root with a bold, spicy flavor. Known for its anti-inflammatory properties and benefits for digestion and immunity.",
  },
  {
    id: 6,
    name: "Bell Pepper",
    quantity: "1.5kg, Price",
    price: "4.99",
    image: redpepper,
    description:
      "Crisp and flavorful bell peppers, perfect for cooking or eating raw. A great source of vitamins A and C.",
  },
]

export const groceryCategories: GroceryCategory[] = [
  { id: 1, name: "Pulses", bg: "bg-[#FFF3E5]", image: pulses },
  { id: 2, name: "Rice", bg: "bg-[#E5F5E5]", image: Rice },
]

export const groceryProducts: Product[] = [
  {
    id: 7,
    name: "Beef Bone",
    quantity: "1kg, Price",
    price: "4.99",
    image: beefbone,
    description:
      "Premium quality beef bones perfect for making rich broths and soups. High in collagen and minerals that support joint and bone health.",
  },
  {
    id: 8,
    name: "Broiler Chicken",
    quantity: "1kg, Price",
    price: "4.99",
    image: broilerchicken,
    description:
      "Farm-fresh broiler chicken, tender and juicy. A great source of lean protein ideal for grilling, roasting, or curries.",
  },
  {
    id: 9,
    name: "Beef Bone",
    quantity: "1kg, Price",
    price: "4.99",
    image: beefbone,
    description:
      "Premium quality beef bones perfect for making rich broths and soups. High in collagen and minerals that support joint and bone health.",
  },
]

//  Explore Screen Data 

export const exploreCategories: ExploreCategory[] = [
  {
    id: 1,
    name: "Fresh Fruits & Vegetable",
    image: freshfruits,
    bg: "bg-[#E8F5E9]",
    border: "border-[#D4EDDA]",
    description:
      "Handpicked fresh fruits and vegetables sourced daily. Packed with essential vitamins, minerals, and fiber to keep you healthy and energized.",
  },
  {
    id: 2,
    name: "Cooking Oil & Ghee",
    image: cookingoil,
    bg: "bg-[#FFF8E1]",
    border: "border-[#FFE082]",
    description:
      "Premium quality cooking oils and pure ghee for your everyday kitchen needs. Rich in healthy fats and perfect for frying, sautéing, and baking.",
  },
  {
    id: 3,
    name: "Meat & Fish",
    image: meatfish,
    bg: "bg-[#FCE4EC]",
    border: "border-[#F8BBD0]",
    description:
      "Fresh and hygienically sourced meat and fish. High in protein and omega-3 fatty acids, ideal for nutritious and delicious meals.",
  },
  {
    id: 4,
    name: "Bakery & Snacks",
    image: bakery,
    bg: "bg-[#FFF3E0]",
    border: "border-[#FFE0B2]",
    description:
      "Freshly baked breads, pastries, and a wide variety of snacks. Perfect for breakfast, tea time, or satisfying those mid-day cravings.",
  },
  {
    id: 5,
    name: "Beverages",
    image: beverages,
    bg: "bg-[#E3F2FD]",
    border: "border-[#BBDEFB]",
    description:
      "A refreshing range of drinks including juices, sodas, energy drinks, and more. Stay hydrated and refreshed throughout the day.",
  },
  {
    id: 6,
    name: "Cooking Oil Bottles",
    image: cookingoilbottles,
    bg: "bg-[#FFF8E1]",
    border: "border-[#FFE082]",
    description:
      "Bottled cooking oils in various sizes for every household need. Refined and pure options available for light, healthy, and flavorful cooking.",
  },
  {
    id: 7,
    name: "Eggs & Noodles",
    image: eggs,
    bg: "bg-[#FFF8E1]",
    border: "border-[#FFE082]",
    description:
      "Fresh eggs and a variety of noodles for your everyday cooking. Rich in protein and perfect for quick, nutritious meals.",
  },
  {
    id: 8,
    name: "Dairy & Fish",
    image: dairyFish,
    bg: "bg-[#E0F7FA]",
    border: "border-[#B2EBF2]",
    description:
      "Fresh dairy products and fish delivered straight to your door. Rich in calcium, protein, and essential nutrients for a balanced diet.",
  },
]

//  Category Products 

export const categoryProducts: Record<string, Product[]> = {
  "Fresh Fruits & Vegetable": [
    {
      id: 101,
      name: "Red Apple",
      quantity: "1kg, Price",
      price: "4.99",
      image: apple,
      description:
        "Fresh red apples packed with antioxidants and dietary fiber. Great for heart health and keeping you energized throughout the day.",
    },
    {
      id: 102,
      name: "Organic Bananas",
      quantity: "7pcs, Price",
      price: "3.99",
      image: banana,
      description:
        "Organic bananas naturally sweet and rich in potassium, fiber, and vitamins. Perfect for a healthy snack or smoothie.",
    },
    {
      id: 103,
      name: "Bell Pepper Red",
      quantity: "1kg, Price",
      price: "4.99",
      image: redpepper,
      description:
        "Vibrant red bell peppers rich in Vitamin C and antioxidants. Adds color and crunch to salads and stir-fries.",
    },
    {
      id: 104,
      name: "Ginger",
      quantity: "250gm, Price",
      price: "2.99",
      image: Ginger,
      description:
        "Fresh ginger root with bold spicy flavor. Known for anti-inflammatory properties and benefits for digestion.",
    },
  ],

  "Cooking Oil & Ghee": [
    {
      id: 201,
      name: "Cooking Oil",
      quantity: "1L, Price",
      price: "5.99",
      image: cookingoil,
      description:
        "Premium quality cooking oil perfect for frying, sautéing and baking. Light and healthy for everyday use.",
    },
    {
      id: 202,
      name: "Cooking Oil Bottle",
      quantity: "2L, Price",
      price: "9.99",
      image: cookingoilbottles,
      description:
        "Pure refined cooking oil in a convenient bottle. Ideal for deep frying and everyday cooking needs.",
    },
    {
      id: 203,
      name: "Pure Ghee",
      quantity: "500gm, Price",
      price: "8.99",
      image: cookingoil,
      description:
        "Traditional pure ghee crafted for authentic flavor. A kitchen staple that enhances the taste of every dish.",
    },
  ],

  "Meat & Fish": [
    {
      id: 301,
      name: "Beef Bone",
      quantity: "1kg, Price",
      price: "4.99",
      image: beefbone,
      description:
        "Premium quality beef bones perfect for making rich broths and soups. High in collagen and minerals.",
    },
    {
      id: 302,
      name: "Broiler Chicken",
      quantity: "1kg, Price",
      price: "4.99",
      image: broilerchicken,
      description:
        "Farm-fresh broiler chicken, tender and juicy. A great source of lean protein ideal for grilling or curries.",
    },
    {
      id: 303,
      name: "Meat & Fish Pack",
      quantity: "1kg, Price",
      price: "12.99",
      image: meatfish,
      description:
        "Fresh and hygienically sourced meat and fish combo. High in protein and omega-3 fatty acids.",
    },
  ],

  "Bakery & Snacks": [
    {
      id: 401,
      name: "Bakery Pack",
      quantity: "500gm, Price",
      price: "3.99",
      image: bakery,
      description:
        "Freshly baked breads and pastries. Perfect for breakfast, tea time, or satisfying mid-day cravings.",
    },
    {
      id: 402,
      name: "Snack Mix",
      quantity: "250gm, Price",
      price: "2.49",
      image: bakery,
      description:
        "A crunchy mix of savory snacks perfect for any time of day. Great for parties and gatherings.",
    },
  ],

  "Beverages": [
    {
      id: 501,
      name: "Diet Coke",
      quantity: "355ml, Price",
      price: "1.99",
      image: dietCoke,
      description:
        "Refreshing sugar-free Diet Coke with the classic Coca-Cola taste. Zero calories, full flavor.",
    },
    {
      id: 502,
      name: "Sprite Can",
      quantity: "325ml, Price",
      price: "1.50",
      image: sprite,
      description:
        "Crisp and refreshing lemon-lime flavored sparkling drink. Perfect for quenching your thirst.",
    },
    {
      id: 503,
      name: "Apple & Grape Juice",
      quantity: "2L, Price",
      price: "15.99",
      image: appleGrapeJuice,
      description:
        "A delicious blend of fresh apple and grape juice. Rich in natural vitamins and minerals.",
    },
    {
      id: 504,
      name: "Orange Juice",
      quantity: "2L, Price",
      price: "15.99",
      image: orangeJuice,
      description:
        "Freshly squeezed orange juice packed with Vitamin C. Great for a healthy morning boost.",
    },
    {
      id: 505,
      name: "Coca Cola Can",
      quantity: "325ml, Price",
      price: "4.99",
      image: cocaColaCan,
      description:
        "The classic Coca-Cola taste in a convenient can. Perfectly carbonated and refreshingly cold.",
    },
    {
      id: 506,
      name: "Pepsi Can",
      quantity: "330ml, Price",
      price: "4.99",
      image: pepsi,
      description:
        "Bold and refreshing Pepsi Cola in a handy can. Great taste with every sip.",
    },
  ],

  "Cooking Oil Bottles": [
    {
      id: 601,
      name: "Sunflower Oil",
      quantity: "1L, Price",
      price: "5.99",
      image: cookingoilbottles,
      description:
        "Light sunflower oil ideal for frying and baking. High smoke point and neutral flavor.",
    },
    {
      id: 602,
      name: "Olive Oil",
      quantity: "500ml, Price",
      price: "11.99",
      image: cookingoilbottles,
      description:
        "Extra virgin olive oil rich in healthy monounsaturated fats. Perfect for salads and light cooking.",
    },
  ],

  "Eggs & Noodles": [
    {
      id: 701,
      name: "Eggs",
      quantity: "12pcs, Price",
      price: "3.99",
      image: eggs,
      description:
        "Farm-fresh eggs rich in protein and essential vitamins. Perfect for breakfast and baking.",
    },
    {
      id: 702,
      name: "Eggs Basket",
      quantity: "30pcs, Price",
      price: "8.99",
      image: eggsBasket,
      description:
        "A convenient basket of fresh eggs. Great value for families and daily cooking needs.",
    },
    {
      id: 703,
      name: "Egg Noodles",
      quantity: "250gm, Price",
      price: "2.99",
      image: eggNoodles,
      description:
        "Soft and delicious egg noodles perfect for soups, stir-fries, and pasta dishes.",
    },
    {
      id: 704,
      name: "Egg Noodles Pack",
      quantity: "500gm, Price",
      price: "4.99",
      image: eggNoodles2,
      description:
        "Family-size egg noodle pack. Quick to cook and versatile for many recipes.",
    },
    {
      id: 705,
      name: "Egg Pasta",
      quantity: "500gm, Price",
      price: "3.49",
      image: eggPasta,
      description:
        "Classic egg pasta made with wholesome ingredients. Great for Italian-style dishes.",
    },
    {
      id: 706,
      name: "Mayonnaise Eggless",
      quantity: "300gm, Price",
      price: "2.99",
      image: mayonnaise,
      description:
        "Creamy eggless mayonnaise perfect for sandwiches, salads, and dips.",
    },
  ],

  "Dairy & Fish": [
    {
      id: 801,
      name: "Dairy & Fish Pack",
      quantity: "1kg, Price",
      price: "9.99",
      image: dairyFish,
      description:
        "Fresh dairy products and fish delivered straight to your door. Rich in calcium, protein and nutrients.",
    },
    {
      id: 802,
      name: "Fresh Fish",
      quantity: "500gm, Price",
      price: "6.99",
      image: dairyFish,
      description:
        "Fresh catch of the day, cleaned and ready to cook. High in omega-3 fatty acids and lean protein.",
    },
  ],
}