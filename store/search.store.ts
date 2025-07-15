import { create } from "zustand";

interface IGlobalSearchStore {
    keyword: string
    setKeyword: (keyword: string) => void
}

export const useGlobalSearch = create<IGlobalSearchStore>()(
    (set) => ({
        keyword: "",
        setKeyword: (keyword: string) => set({ keyword }),
    }))