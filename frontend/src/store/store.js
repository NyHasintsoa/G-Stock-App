import { create } from "zustand";

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

export { useCartStore };
