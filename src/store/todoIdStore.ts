import { create } from "zustand";

type Id = {
  id: number[];
  addId: (id: number) => void;
  removeId: (id: number) => void;
};

export const idsStore = create<Id>((set) => ({
  id: [],
  addId: (id: number) => set((state) => ({ id: [...state.id, id] })),
  removeId: (id: number) =>
    set((state) => ({ id: state.id.filter((item) => item !== id) })),
}));
