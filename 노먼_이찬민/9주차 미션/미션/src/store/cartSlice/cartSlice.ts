import { createSelector, createSlice } from "@reduxjs/toolkit";
import cartItems from "../../mocks/cartItems";
import { TCartItem } from "../../mocks/cartItems";

export type StateType = {
  list: TCartItem[];
  totalAmount?: number;
  totalPrice?: number;
};
// export type ActionType = {};

const initialState: StateType = {
  list: cartItems,
  // .reduce((acc, item)=>로직, 초깃값)
  totalAmount: cartItems.reduce((acc, item) => acc + item.amount, 0),
  totalPrice: cartItems.reduce((acc, item) => acc + Number(item.price), 0),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    increaseAmount: (state, action: PayloadAction<string>) => {
      state.list = state.list.map((item) => {
        return item.id === action.payload
          ? { ...item, amount: item.amount + 1 }
          : item;
      });
      // console.log(action.payload.id);
    },
    decreaseAmount: (state, action: PayloadAction<string>) => {
      state.list = state.list.map((item) => {
        return item.id === action.payload
          ? { ...item, amount: item.amount - 1 }
          : item;
      });
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
    setTotalAmount: (state) => {
      state.totalAmount = state.list.reduce(
        (acc, item) => acc + item.amount,
        0
      );
      state.totalPrice = state.list.reduce(
        (acc, item) => acc + Number(item.price) * item.amount,
        0
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { increaseAmount, decreaseAmount, removeItem, setTotalAmount } =
  cartSlice.actions;

export default cartSlice.reducer;
