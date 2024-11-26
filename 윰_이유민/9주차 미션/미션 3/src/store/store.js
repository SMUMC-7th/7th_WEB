import { create } from 'zustand';
import cartItems from './../constants/cartItems';

export const useStore = create((set) => ({
  // cartSLice.js에 정의했던 것들
  cartItems: cartItems,
  amount: 0,
  total: 0,

  // 1. 증가
  increase: (itemId) =>
    set((state) => ({
      cartItems: state.cartItems.map((e) => (e.id === itemId ? { ...e, amount: e.amount + 1 } : e)),
    })),
  // 2. 감소
  decrease: (itemId) =>
    set((state) => ({
      cartItems: state.cartItems.map((e) => (e.id === itemId ? { ...e, amount: e.amount - 1 } : e)),
    })),
  // 3. 아이템 제거
  removeItem: (itemId) =>
    set((state) => {
      const updatedCartItems = state.cartItems.filter((item) => item.id !== itemId);
      return { cartItems: updatedCartItems };
    }),
  // 4. 모든 아이템 제거 (clear)
  clearCart: () => set({ cartItems: [] }),
  // 5. total을 계산 sum(각각의 아이템 * 수량)
  caculateTotals: () =>
    set((state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      return { amount, total };
    }),

  // ModalSlice.js에 정의했던 것들
  isOpen: false,
  // 1. 모달을 열기
  openModal: () => set({ isOpen: true }),
  // 2. 모달을 닫기
  closeModal: () => set({ isOpen: false }),
}));
