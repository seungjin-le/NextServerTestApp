'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 1, ease: 'easeInOut' }
}
export default function PageTransition({ children }: { children: ReactNode }) {
  const path = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div key={path} {...variants}>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
