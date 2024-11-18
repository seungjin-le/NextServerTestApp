'use client'

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { serverSide } from './page'
import { useHydrateAtoms } from 'jotai/utils'
import { useAtom } from 'jotai'
import countAtom from 'atom/countAtom'
import darkModeAtom from 'atom/theme'

export default function Index({ count }: { count: number }) {
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: () => serverSide()
  })
  const [counter, setCounter] = useAtom(countAtom)
  const [mode, setMode] = useAtom(darkModeAtom)
  useHydrateAtoms([[countAtom, count]])

  return (
    <div>
      <div className="w-full  text-center text-[20px] flex flex-row justify-center gap-[40px]">
        <div>{counter}</div>

        <div>{mode ? 'dark' : 'light'}</div>
      </div>
      <button className="px-[20px] py-[20px]" onClick={() => setCounter(counter + 1)}>
        +
      </button>
      <button className="px-[20px] py-[20px]" onClick={() => setMode(!mode)}>
        {mode ? 'dark' : 'light'}
      </button>
    </div>
  )
}
