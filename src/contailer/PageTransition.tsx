'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

const variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { duration: 0.5, ease: 'linear' }
}
export default function PageTransition({ children }: { children: ReactNode }) {
  const path = usePathname()

  return (
    <div className="relative size-full">
      <AnimatePresence>
        <motion.div key={path} {...variants} className="absolute size-full left-0 top-0">
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
