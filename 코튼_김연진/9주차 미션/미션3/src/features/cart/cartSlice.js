import { create } from 'zustand';
import cartItems from '../../constants/cartItems';

export const useCartStore = create((set) => ({
    cartItems: cartItems,
    amount: 0,
    total: 0,

    increase: (itemId) =>
        set((state) => {
            const item = state.cartItems.find(
                (cartItem) => cartItem.id === itemId
            );
            if (item) item.amount += 1;
            return { cartItems: [...state.cartItems] };
        }),

    decrease: (itemId) =>
        set((state) => {
            const item = state.cartItems.find(
                (cartItem) => cartItem.id === itemId
            );
            if (item && item.amount > 1) item.amount -= 1;
            return { cartItems: [...state.cartItems] };
        }),

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
