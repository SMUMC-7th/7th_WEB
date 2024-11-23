import { create } from "zustand";
import cartItems from "../constants/cartItems.jsx";

const useCartStore = create((set) => ({
  cartItems: cartItems || [],
  amount: 0,
  total: 0,

  increase: (itemId) => {
    set((state) => ({
      cartItems: state.cartItems.map((cartItem) =>
        cartItem.id === itemId
          ? { ...cartItem, amount: cartItem.amount + 1 }
          : cartItem
      ),
    }));
  },
  decrease: (itemId) => {
    set((state) => ({
      cartItems: state.cartItems.map((cartItem) =>
        cartItem.id === itemId
          ? { ...cartItem, amount: cartItem.amount - 1 }
          : cartItem
      ),
    }));
  },
  removeItem: (itemId) => {
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== itemId),
    }));
  },
  clearCart: () => {
    set(() => ({
      cartItems: [],
    }));
  },
  calculateTotal: () => {
    set((state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      // state.amount = amount;
      // state.total = total;
      return { amount, total };
    });
  },
}));

export default useCartStore;
