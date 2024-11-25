import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    // 1. 모달 open
    openModal: (state, action) => {
      console.log(action);
      state.isOpen = true;
    },

    // 2. 모달 close
    closeModal: (state, action) => {
      console.log(action);
      console.log(action);

      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
