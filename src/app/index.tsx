'use client'

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { serverSide } from './page'
import { useThemeStore } from '@/providers/themeStoreProvider'

export default function Index() {
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: () => serverSide()
  })
  const { theme, setTheme } = useThemeStore((state) => state)
  return (
    <div>
      <div className={'size-[500px] flex flex-col items-center justify-center'}>
        <div>{theme}</div>
        <div>
          <button onClick={() => setTheme('light')}>light</button>
          <button onClick={() => setTheme('dark')}>dark</button>
        </div>
      </div>
    </div>
  )
}
