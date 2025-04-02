import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAccountStore = create(
  persist(
    (set) => ({
      account: null,
      setAccount: (account) => set({ account })
    }),
    {
      name: import.meta.env.VITE_ACCOUNT_STORAGE || "account"
    }
  )
);

const useCartStore = create(
  persist(
    (set) => ({
      carts: [],
      addToCart: (newProduct) => {
        set((state) => {
          const carts = [...state.carts];
          carts.forEach((cart, index) => {
            if (cart.id === newProduct.id) {
              newProduct.qte += parseInt(cart.qte);
              carts.splice(index, 1);
              return;
            }
          });
          carts.push(newProduct);
          return {
            carts
          };
        });
      },
      removeCart: () => {
        set({
          carts: []
        });
      },
      deleteProduct: (productIndex) => {
        set((state) => {
          const carts = [...state.carts];
          carts.splice(productIndex, 1);
          return {
            carts
          };
        });
      }
    }),
    {
      name: import.meta.env.VITE_CART_STORAGE || "cart_store"
    }
  )
);

export { useCartStore, useAccountStore };
