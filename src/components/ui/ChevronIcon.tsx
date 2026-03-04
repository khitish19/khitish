import { ChevronDown } from 'lucide-react';

interface ChevronIconProps {
  open: boolean;
  className?: string;
}

export function ChevronIcon({ open, className = 'w-5 h-5' }: ChevronIconProps) {
  return (
    <ChevronDown
      className={`shrink-0 text-muted transition-transform duration-300 ${open ? 'rotate-180' : ''} ${className}`}
    />
  );
}
