import { create } from 'zustand';
import cartItems from '../../constants/cartItems';

export const useCartStore = create((set) => ({
    cartItems: cartItems,
    amount: 0,
    total: 0,

    increase: (itemId) =>
        set((state) => ({
            cartItems: state.cartItems.map((item) =>
                item.id === itemId ? { ...item, amount: item.amount + 1 } : item
            ),
        })),

    decrease: (itemId) =>
        set((state) => ({
            cartItems: state.cartItems.map((item) =>
                item.id === itemId && item.amount > 1
                    ? { ...item, amount: item.amount - 1 }
                    : item
            ),
        })),

    removeItem: (itemId) =>
        set((state) => ({
            cartItems: state.cartItems.filter((item) => item.id !== itemId),
        })),

    clearCart: () =>
        set({
            cartItems: [],
        }),

    carculateTotals: () =>
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
