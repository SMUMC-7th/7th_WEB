import { createSlice } from '@reduxjs/toolkit';
import cartItmes from '../../constants/cartItems';

const initialState = {
    cartItems: cartItmes,
    amount: 0,
    total: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increase: (state, { payload }) => {
            // 내가 클릭한 음반의 ID를 가져옴
            const itemId = payload;
            // 그 ID를 통해서 전체 음반 중, 내가 클릭한 id랑 비교해서 같은 음반을 찾아냄
            const item = state.cartItems.find(
                (cartItem) => cartItem.id == itemId
            );
            item.amount += 1;
        },
        decrease: (state, { payload }) => {
            // 내가 클릭한 음반의 ID를 가져옴
            const itemId = payload;
            // 그 ID를 통해서 전체 음반 중, 내가 클릭한 id랑 비교해서 같은 음반을 찾아냄
            const item = state.cartItems.find(
                (cartItem) => cartItem.id == itemId
            );
            item.amount -= 1;
        },
        removeItem: (state, { payload }) => {
            const itemId = payload;
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== itemId
            );
        },
        clearCart: (state) => {
            state.cartItems = [];
        },

        carculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });

            state.amount = amount;
            state.total = total;
        },
    },
});

export default cartSlice.reducer;
export const { increase, decrease, removeItem, clearCart, carculateTotals } =
    cartSlice.actions;
