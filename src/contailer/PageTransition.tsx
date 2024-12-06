'use client'

import { motion } from 'framer-motion'
import { ReactNode, useEffect, useState } from 'react'

const pageVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
}

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
}

export default function PageTransition({ children }: { children: ReactNode }) {
  const [mount, setMount] = useState<boolean>(false)
  useEffect(() => {
    setMount(true)
  }, [])
  return <div className={`${mount ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>{children}</div>
}
