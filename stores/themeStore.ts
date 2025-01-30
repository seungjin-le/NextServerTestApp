import { createStore } from 'zustand/vanilla'
import { persist, createJSONStorage } from 'zustand/middleware'

/**
 * 테마 색상
 * theme {string} - light, dark
 */
export type ThemeState = {
  theme: string
}

export type ThemeActions = {
  setTheme: (theme: string) => void
}

export type ThemeStore = ThemeState & ThemeActions

/**
 * 테마
 * */
export const defaultInitState: ThemeState = {
  theme: 'light'
}

export const createThemeStore = (initState: ThemeState = defaultInitState) => {
  return createStore<ThemeStore>()(
    persist(
      (set) => ({
        ...initState,
        setTheme: (theme: string) => set((state) => ({ theme })),
        resetTheme: () => set((state) => ({ theme: defaultInitState.theme }))
      }),
      {
        name: 'theme',
        storage: createJSONStorage(() => sessionStorage),
        onRehydrateStorage: (state) => {
          return (nextState) => {
            if (nextState) nextState.setTheme(nextState.theme)
          }
        }
      }
    )
  )
}
