'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

const variants = {
  animate: { opacity: 1, blur: 0 },
  exit: { opacity: 0, blur: -100 },
  transition: { duration: 0.5 }
}
export default function PageTransition({ children }: { children: ReactNode }) {
  const path = usePathname()

  return (
    <div className="relative size-full">
      <AnimatePresence mode="sync" initial={false}>
        <motion.div key={path} {...variants}>
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
