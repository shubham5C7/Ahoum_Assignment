import { create } from "zustand";

interface User {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  location: string;
}

interface AuthStore {
  user: User | null;
  email: string;
  phoneNumber: string;
  otp: string;
  error: string;
  isLoggedIn: boolean;

  setEmail: (email: string) => void;
  setPhoneNumber: (phoneNumber: string) => void;
  setOtp: (otp: string) => void;
  setError: (error: string) => void;
  setUser: (user: User) => void;
  logout: () => void;
  resetAuth: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  email: "",
  phoneNumber: "",
  otp: "",
  error: "",
  isLoggedIn: false,

  setEmail: (email) => set({ email }),
  setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
  setOtp: (otp) => set({ otp }),
  setError: (error) => set({ error }),

  setUser: (user) => set({ user, isLoggedIn: true }),

  logout: () => set({ user: null, isLoggedIn: false }),

  resetAuth: () =>
    set({
      email: "",
      phoneNumber: "",
      otp: "",
      error: "",
    }),
}));