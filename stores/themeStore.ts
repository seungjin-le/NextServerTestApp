import { createStore } from 'zustand/vanilla'

export type ThemeState = {
  theme: string
}

export type ThemeActions = {
  setTheme: (theme: string) => void
}

export type ThemeStore = ThemeState & ThemeActions

export const defaultInitState: ThemeState = {
  theme: 'light'
}

export const createThemeStore = (initState: ThemeState = defaultInitState) => {
  return createStore<ThemeStore>()((set) => ({
    ...initState,
    setTheme: (theme: string) => set((state) => ({ theme })),
    resetTheme: () => set((state) => ({ theme: defaultInitState.theme }))
  }))
}
