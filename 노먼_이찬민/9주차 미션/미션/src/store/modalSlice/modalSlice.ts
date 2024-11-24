import { createSelector, createSlice } from "@reduxjs/toolkit";
import cartItems from "../../mocks/cartItems";
import { TCartItem } from "../../mocks/cartItems";

export type StateModalType = {
  isModalOpen: boolean;
};
// export type ActionType = {};

const initialState: StateModalType = {
  isModalOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
