import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const transition = {
  initial: { opacity: 0, filter: "blur(10px)" },
  animate: { opacity: 1, filter: "blur(0px)" },
  exit: { opacity: 0, filter: "blur(10px)" },
  transition: {
    duration: 0.4,
  },
};

export default function PageTransition({ children }: { children: ReactNode }): ReactNode {
  const router = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={router} className="size-full" {...transition}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
