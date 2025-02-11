import { create } from "zustand";

type TabState = {
  selectedTab: number;
  setSelectedTab: (index: number) => void;
};

export const useTabStore = create<TabState>((set) => ({
  selectedTab: 0,
  setSelectedTab: (index) => set({ selectedTab: index })
}));