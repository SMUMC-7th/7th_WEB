import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../constants/cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //1. 증가
    increase: (state, { payload }) => {
      const itemId = payload;
      const item = state.cartItems.find((cartItem) => cartItem.id === itemId);
      item.amount += 1;
    },
    //2. 감소
    decrease: (state, { payload }) => {
      const itemId = payload;
      const item = state.cartItems.find((cartItem) => cartItem.id === itemId);
      item.amount -= 1;
    },
    //3. 아이템 제거
    removeItem: (state, { payload }) => {
      const itemId = payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    //4. 모든 아이템 제거 (clear)
    clearCart: (state) => {
      state.cartItems = [];
    },
    //5. total 계산 SUM(각각의 아이템 * 수량)
    calculateTotal: (state) => {
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

export const { increase, decrease, removeItem, clearCart, calculateTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
