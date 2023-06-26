import { create } from "zustand";

// types
import type { Column } from "../types/column";

interface BearState {
  columns: Column[];
  setColumns: (columns: Column[]) => void;
}

const useGlobalContext = create<BearState>()((set) => ({
  columns: [],
  setColumns: (columns) => set(() => ({ columns })),
}));

export default useGlobalContext;
