'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'

import { createThemeStore, type ThemeStore } from 'stores/themeStore'

export const themeStore = createThemeStore()

export type ThemeStoreApi = ReturnType<typeof createThemeStore>

export const ThemeStoreContext = createContext<ThemeStoreApi | undefined>(undefined)

export interface ThemeStoreProviderProps {
  children: ReactNode
}

export const ThemeStoreProvider = ({ children }: ThemeStoreProviderProps) => {
  const storeRef = useRef<ThemeStoreApi>()
  if (!storeRef.current) {
    storeRef.current = createThemeStore()
  }

  return <ThemeStoreContext.Provider value={storeRef.current}>{children}</ThemeStoreContext.Provider>
}

export const useThemeStore = <T,>(selector: (store: ThemeStore) => T): T => {
  const themeStoreContext = useContext(ThemeStoreContext)

  if (!themeStoreContext) {
    throw new Error(`useCounterStore must be used within CounterStoreProvider`)
  }

  return useStore(themeStoreContext, selector)
}
