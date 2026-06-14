import { create } from "zustand";
interface CartItem {
  id: number; 
  name: string;
  quantity: string;
  price: string;
  image: string;
  description: string;
  count: number;
}

interface CartStore {
  items: CartItem[];
  addToCart: (product: Omit<CartItem, "count">) => void;
 removeFromCart: (id: number) => void; 
  increaseCount: (id: number) => void;  
  decreaseCount: (id: number) => void; 
  clearCart: () => void;
  totalPrice: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addToCart: (product) => {
    const existing = get().items.find((i) => i.id === product.id);
    if (existing) {
      set((state) => ({
        items: state.items.map((i) =>
          i.id === product.id ? { ...i, count: i.count + 1 } : i
        ),
      }));
    } else {
      set((state) => ({
        items: [...state.items, { ...product, count: 1 }],
      }));
    }
  },

  removeFromCart: (id) => {
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    }));
  },

  increaseCount: (id) => {
    set((state) => ({
      items: state.items.map((i) =>
        i.id === id ? { ...i, count: i.count + 1 } : i
      ),
    }));
  },

  decreaseCount: (id) => {
    set((state) => ({
      items: state.items
        .map((i) => (i.id === id ? { ...i, count: i.count - 1 } : i))
        .filter((i) => i.count > 0),
    }));
  },

  clearCart: () => set({ items: [] }),

  totalPrice: () => {
    return get().items.reduce(
      (sum, item) => sum + parseFloat(item.price) * item.count,
      0
    );
  },
}));