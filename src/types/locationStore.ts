import { create } from "zustand";

interface LocationStore {
  selectedLocation: string;
  setLocation: (location: string) => void;
  clearLocation: () => void;
}

export const useLocationStore = create<LocationStore>((set) => ({
  selectedLocation: "",
  setLocation: (location) => set({ selectedLocation: location }),
  clearLocation: () => set({ selectedLocation: "" }),
}));