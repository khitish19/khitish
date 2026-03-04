import { AnimatePresence, motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ExpandableSectionProps {
  open: boolean;
  children: ReactNode;
  className?: string;
  duration?: number;
}

export function ExpandableSection({
  open,
  children,
  className = '',
  duration = 0.3,
}: ExpandableSectionProps) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          className={className}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration, ease: [0.4, 0, 0.2, 1] }}
          style={{ overflow: 'hidden' }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
