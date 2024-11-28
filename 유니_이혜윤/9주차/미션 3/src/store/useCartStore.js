import { create } from "zustand";
import cartItems from "../constants/cartItems";

const useCartStore = create((set) => ({
  cartItems: cartItems,
  amount: 0,
  total: 0,

  // 1. 증가
  increase: (itemId) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === itemId ? { ...item, amount: item.amount + 1 } : item
      ),
    })),

  // 2. 감소
  decrease: (itemId) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === itemId ? { ...item, amount: item.amount - 1 } : item
      ),
    })),

  // 3. 아이템 제거
  removeItem: (itemId) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== itemId),
    })),

  // 4. 모든 아이템 제거
  clearCart: () => set({ cartItems: [] }),

  // 5. total 계산
  calculateTotals: () =>
    set((state) => {
      let amount = 0;
      let total = 0;

      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });

      return { amount, total };
    }),
}));

export default useCartStore;
