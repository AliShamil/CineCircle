import { create } from "zustand";
import { storage } from "../../../storage";
export const useAuthStore = create((set) => ({
  isAuthorized: false,
  setIsAuthorized: (isAuthorized) => set({isAuthorized}),
}));
