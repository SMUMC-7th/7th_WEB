import { create } from "zustand";

type TState = {
  isOpen: boolean;
};

type TAction = {
  openModal: () => void;
  closeModal: () => void;
};

export const useSideModalStore = create<TState & TAction>((set) => ({
  isOpen: false,
  openModal: () => set((state) => ({ isOpen: true })),
  closeModal: () => set((state) => ({ isOpen: false })),
}));
