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

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (cart) => {
    set({
      cart
    });
  },
  remoteCart: () => {
    set();
  }
}));

export { useCartStore, useAccountStore };
