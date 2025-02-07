import { create } from "zustand";

export const useTabStore = create((set) => ({
  selectedTab: 0,
  setSelectedTab: (index) => set({ selectedTab: index })
}));