import { create } from "zustand";
import { storage } from "../../../storage";
export const useAuthStore = create((set) => ({
  username : storage.getString('user.name'), 
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
}));
