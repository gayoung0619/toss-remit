import { create } from "zustand";

type AccountState = {
  selectAccountId: number;
  setSelectedAccountId: (id: number) => void;
  selectAccountName: string;
  setSelectedAccountName: (name: string) => void;
  selectMoney: number;
  setSelectedMoney: (id: number) => void;
  selectTargetAccount: string;
  setSelectedTargetAccount: (account: string) => void;
  selectTargetId: number;
  setSelectedTargetId: (id: number) => void;
  money: number;
  setMoney: (account: number) => void
};

export const useAccountStore = create<AccountState>((set) => ({
  selectAccountId: 0,
  setSelectedAccountId: (id: number) => set({ selectAccountId: id }),
  selectAccountName: "",
  setSelectedAccountName: (name: string) => set({ selectAccountName: name }),
  selectMoney: 0,
  setSelectedMoney: (account: number) => set({ selectMoney: account }),
  selectTargetAccount: "",
  setSelectedTargetAccount: (account: string) => set({ selectTargetAccount: account }),
  selectTargetId: 0,
  setSelectedTargetId: (id: number) => set({ selectTargetId: id }),
  money: 0,
  setMoney: (account: number) => set({ money: account })
}));