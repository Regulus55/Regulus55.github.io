import { create } from "zustand";

interface ThemeState {
  isDayMode: boolean;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  isDayMode: true,
  toggleTheme: () => set((state) => ({ isDayMode: !state.isDayMode })),
}));
