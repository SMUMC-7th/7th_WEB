import { create } from "zustand";

interface AuthState {
  isLoggedIn: boolean;
  setIsLoggedIn: (loggedIn: boolean) => void;
}

const useAuthStore = create<AuthState>(
  (set: (partial: Partial<AuthState>) => void) => ({
    isLoggedIn: false,
    setIsLoggedIn: (loggedIn: boolean) => set({ isLoggedIn: loggedIn }),
  })
);

export default useAuthStore;
