'use client'

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { serverSide } from './page'
import { setCookie } from 'cookies-next'
import axios from 'axios'
import { useRouter } from 'next/navigation'

export default function Index() {
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: () => serverSide()
  })
  const router = useRouter()
  const handleOnClickTheme: (theme: string) => void = async (theme: string) => {
    await setCookie('theme', theme)
    const root = document.getElementsByTagName('html')[0]
    root.className = `size-full ${theme}`
  }

  const testClick = async () => {
    const res = await axios.get('/api/v1/user')
  }

  return (
    <div>
      <div className={'size-[500px] flex flex-col items-center justify-center'}>
        <div className={'bg-default  flex flex-row items-center gap-[20px]'}>
          <button onClick={() => handleOnClickTheme('light')}>light</button>
          <button onClick={() => handleOnClickTheme('dark')}>dark</button>
          <button onClick={() => testClick()}>test</button>
        </div>
        <button onClick={() => router.push('/test')}>Go to Test</button>
      </div>
    </div>
  )
}
