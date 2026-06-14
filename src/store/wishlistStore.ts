import { create } from "zustand";

interface WishlistItem {
    id: string;
  name: string;
  quantity: string;
  price: string;
  image: string;
  description: string;
}

interface WishlistStore {
  items: WishlistItem[];
  addToWishlist: (product: WishlistItem) => void;
removeFromWishlist: (id: string) => void;  
isWishlisted: (id: string) => boolean; 
}

export const useWishlistStore = create<WishlistStore>((set, get) => ({
  items: [],

  addToWishlist: (product) => {
    const exists = get().items.find((i) => i.id === product.id);
    if (!exists) {
      set((state) => ({ items: [...state.items, product] }));
    }
  },

  removeFromWishlist: (id) => {
    set((state) => ({ items: state.items.filter((i) => i.id !== id) }));
  },

  isWishlisted: (id) => !!get().items.find((i) => i.id === id),
}));