import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Product {
  id: number;
  title: string;
  name: string;
  description: string;
  price: number;
  image: {
    url: string;
    alt: string;
  };
}

interface CartItem extends Product {
  quantity: number;
}

type CartStore = {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
};

const useCartStore = create(
  persist<CartStore>(
    (set) => ({
      items: [],
      addItem: (product) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.id === product.id);
          if (existingItem) {
            return {
              items: state.items.map((i) => (i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i)),
            };
          }
          return { items: [...state.items, { ...product, quantity: 1 }] };
        }),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),
      updateQuantity: (id, quantity) =>
        set((state) => ({
          items: state.items.map((i) => (i.id === id ? { ...i, quantity } : i)),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
    }
  )
);

export default useCartStore;
