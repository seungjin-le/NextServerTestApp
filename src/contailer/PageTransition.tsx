'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.5 } },
  exit: { opacity: 0 },
  transition: { duration: 0.5, ease: 'easeInOut' }
}
export default function PageTransition({ children }: { children: ReactNode }) {
  const path = usePathname()
  console.log(children)
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={path} {...variants} className="flex-1 flex flex-col">
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
