'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

interface Variants {
  initial: { opacity: number }
  animate: { opacity: number; transition: { duration: number; ease: string } }
  exit: { opacity: number; transition: { duration: number; ease: string } }
}

const variants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
  exit: { opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }
}
export default function PageTransition({ children }: PageTransitionProps) {
  const path: string = usePathname()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={path}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        className="flex-1 flex flex-col"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
