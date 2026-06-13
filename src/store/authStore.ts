import { create } from "zustand";

interface AuthStore {
  phoneNumber: string;
  otp: string;
  error: string;

  setPhoneNumber: (phoneNumber: string) => void;
  setOtp: (otp: string) => void;
  setError: (error: string) => void;

  resetAuth: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  phoneNumber: "",
  otp: "",
  error: "",

  setPhoneNumber: (phoneNumber) => set({ phoneNumber }),

  setOtp: (otp) => set({ otp }),

  setError: (error) => set({ error }),

  resetAuth: () =>
    set({
      phoneNumber: "",
      otp: "",
      error: "",
    }),
}));