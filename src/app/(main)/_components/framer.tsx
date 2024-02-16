'use client';

import { motion } from 'framer-motion';

export function Framer({ children }: { children: React.ReactNode }) {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={{
        hidden: { opacity: 0, x: 0, y: 20 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 20 },
      }}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      className="aurora-relative"
    >
      {children}
    </motion.article>
  );
}
