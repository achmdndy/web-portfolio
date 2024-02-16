'use client';

import { AnimatePresence } from 'framer-motion';

export function FramerMotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence
      mode="wait"
      initial
      onExitComplete={() => {
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0 });
        }
      }}
    >
      {children}
    </AnimatePresence>
  );
}
