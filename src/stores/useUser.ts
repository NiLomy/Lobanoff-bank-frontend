import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { TokenType } from "@/types";

interface MyState {
  access: string | null;
  refresh: string | null;
  id: string | null;
  setTokens: (s: TokenType) => void;
  clear: () => void;
  setId: (i: string) => void;
}

export const useUser = create<MyState>()(
  persist(
    (set, get) => ({
      access: null,
      refresh: null,
      id: null,
      setTokens: (s) => {
        if (s.accessToken) set({ access: s.accessToken });
        if (s.refreshToken) set({ refresh: s.refreshToken });
      },
      clear: () => set({ access: null, refresh: null, id: null }),
      setId: (i) => set({ id: i }),
    }),
    {
      name: "lobanoff-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
