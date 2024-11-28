import { createSelector, createSlice } from "@reduxjs/toolkit";
import cartItems from "../../mocks/cartItems";
import { TCartItem } from "../../mocks/cartItems";
import { create } from "zustand";

// store의 타입을 정의해준다.
type TModalStore = {
  isModalOpen: boolean;
  setIsModalOpen: (curr: boolean) => void;
};

export const useModalStore = create<TModalStore>((set) => ({
  // 초깃값
  isModalOpen: false,
  setIsModalOpen: (curr) => {
    set((_) => ({
      isModalOpen: curr,
    }));
  },
}));
