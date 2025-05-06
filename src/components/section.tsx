'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ComponentProps } from 'react';

type SectionProps = ComponentProps<typeof motion.div> & {
  delay?: number;
};

export function Section({ delay = 0, className, children }: SectionProps) {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className={cn('aurora-mb-6', className)}
    >
      {children}
    </motion.div>
  );
}
