import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/components/shared/product-card";

export interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (newItem) =>
        set((state) => {
          const id = String(newItem.id);
          const existingIndex = state.items.findIndex((i) => String(i.id) === id);

          if (existingIndex > -1) {
            const updatedItems = [...state.items];
            const currentItem = updatedItems[existingIndex];
            const nextQty = currentItem.quantity + (newItem.quantity || 1);

            if (nextQty <= 0) {
              return { items: state.items.filter((i) => String(i.id) !== id) };
            }

            updatedItems[existingIndex] = {
              ...currentItem,
              quantity: nextQty,
            };
            return { items: updatedItems };
          }

          return {
            items: [
              ...state.items,
              {
                ...newItem,
                id,
                quantity: newItem.quantity > 0 ? newItem.quantity : 1,
              },
            ],
          };
        }),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => String(i.id) !== String(id)),
        })),
      clearCart: () => set({ items: [] }),
    }),
    { name: "cart-storage" }
  )
);

interface WishlistStore {
  items: Product[];
  toggleWishlist: (product: Product) => void;
  isInWishlist: (id: string) => boolean;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      toggleWishlist: (product) => {
        const id = String(product.id);
        const exists = get().items.some((i) => String(i.id) === id);
        if (exists) {
          set({ items: get().items.filter((i) => String(i.id) !== id) });
        } else {
          set({ items: [...get().items, product] });
        }
      },
      isInWishlist: (id) => get().items.some((i) => String(i.id) === String(id)),
    }),
    { name: "wishlist-storage" }
  )
);
