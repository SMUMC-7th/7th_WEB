import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../constants/cartItems';

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // 1. 증가
    increase: (state, { payload }) => {
      // 내가 클릭한 음반의 id를 갖고옴
      const itemId = payload;
      // 그 id를 통해서, 전체 음반 중에, 내가 클릭한 id랑 비교해서 같은 음반을 찾아냄
      const item = state.cartItems.find((cartItem) => cartItem.id === itemId);
      // 내가 클릭한 아이템을 찾았으니, 수량을 증가시켜줌
      item.amount += 1;
    },

    // 2. 감소
    decrease: (state, { payload }) => {
      // 내가 클릭한 음반의 id를 갖고옴
      const itemId = payload;
      // 그 id를 통해서, 전체 음반 중에, 내가 클릭한 id랑 비교해서 같은 음반을 찾아냄
      const item = state.cartItems.find((cartItem) => cartItem.id === itemId);
      // 내가 클릭한 아이템을 찾았으니, 수량을 증가시켜줌
      item.amount -= 1;
    },

    // 3. 아이템 제거
    removeItem: (state, { payload }) => {
      const itemId = payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },

    // 4. 모든 아이템 제거 (clear)
    clearCart: (state) => {
      state.cartItems = [];
    },

    // 5. total을 계산 sum(각각의 아이템 * 수량)
    caculateTotals: (state) => {
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

export const { increase, decrease, removeItem, clearCart, caculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
