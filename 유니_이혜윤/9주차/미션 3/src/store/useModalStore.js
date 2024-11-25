import { create } from "zustand";

const useModalStore = create((set) => ({
  isOpen: false,

  // 1. 모달 open
  openModal: () => set({ isOpen: true }),

  // 2. 모달 close
  closeModal: () => set({ isOpen: false }),
}));

export default useModalStore;
