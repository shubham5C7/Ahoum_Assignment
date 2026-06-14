
export const OrderStatus = {
  Pending: "pending",
  Accepted: "accepted",
  Failed: "failed",
} as const;

export type OrderStatus = typeof OrderStatus[keyof typeof OrderStatus];

export const ProductCategory = {
  FreshFruits: "Fresh Fruits & Vegetable",
  CookingOil: "Cooking Oil & Ghee",
  MeatFish: "Meat & Fish",
  Bakery: "Bakery & Snacks",
  Beverages: "Beverages",
  Eggs: "Eggs & Noodles",
  Dairy: "Dairy & Fish",
} as const;

export type ProductCategory = typeof ProductCategory[keyof typeof ProductCategory];