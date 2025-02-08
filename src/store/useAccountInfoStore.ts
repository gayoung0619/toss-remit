import { create } from "zustand";

type AccountState = {
  selectAccount: number;
  setSelectedAccount: (id: number) => void;
  selectTarget: number;
  setSelectedTarget: (id: number) => void;
  money: number;
  setMoney: (account: number) => void
};

export const useAccountStore = create<AccountState>((set) => ({
  selectAccount: 0,
  setSelectedAccount: (id: number) => set({ selectAccount: id }),
  selectTarget: 0,
  setSelectedTarget: (id: number) => set( {selectTarget: id }),
  money: 0,
  setMoney: (account: number) => set({ money: account })
}));