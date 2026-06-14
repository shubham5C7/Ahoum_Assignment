import { create } from "zustand";
import {
  exclusiveOffers,
  bestSelling,
  groceryProducts,
  categoryProducts,
} from "../data/products";

interface Product {
  id: number;
  name: string;
  quantity: string;
  price: string;
  image: string;
  description: string;
}

interface ProductStore {
  products: Product[];
  loading: boolean;
  fetchProducts: () => void;
}

const allCategoryProducts = Object.values(categoryProducts).flat();

const allProducts: Product[] = [
  ...exclusiveOffers,
  ...bestSelling,
  ...groceryProducts,
  ...allCategoryProducts,
].filter(
  (product, index, self) =>
    index === self.findIndex((p) => p.id === product.id)
);

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  loading: false,

  fetchProducts: () => {
    set({ loading: true });
    setTimeout(() => {
      set({ products: allProducts, loading: false });
    }, 800);
  },
}));