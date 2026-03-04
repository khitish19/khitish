import type { ReactNode, ElementType } from 'react';

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export function GlassPanel({ children, className = '', as: Tag = 'div' }: GlassPanelProps) {
  return (
    <Tag
      className={`backdrop-blur-xl bg-panel border border-border-subtle rounded-2xl shadow-md ${className}`}
    >
      {children}
    </Tag>
  );
}
