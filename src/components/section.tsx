'use client';

import { motion } from 'framer-motion';
import { ComponentProps } from 'react';

type SectionProps = ComponentProps<typeof motion.div> & {
  delay?: number;
};

export function Section({ delay = 0, children }: SectionProps) {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className="aurora-mb-6"
    >
      {children}
    </motion.div>
  );
}
