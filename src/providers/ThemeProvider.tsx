'use client'

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { CookieValueTypes, getCookie } from 'cookies-next'

interface ThemeProviderProps {
  children: React.ReactNode
  theme?: {
    value: string
    name: string
  }
}

export default function ThemeProvider({ children, theme }: ThemeProviderProps) {
  const cookie = getCookie('theme')
  const [themes, setThemes] = useState<string>('light')
  useEffect(() => {
    console.log(theme)
  }, [theme])
  useEffect(() => {
    setThemes((state) => state)
    console.log(cookie)
  }, [cookie])
  return <div className={`size-full ${themes}`}>{children}</div>
}
