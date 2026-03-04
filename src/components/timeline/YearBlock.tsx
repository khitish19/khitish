import { useState } from 'react';
import { GlassPanel } from '../ui/GlassPanel';
import { ChevronIcon } from '../ui/ChevronIcon';
import { ExpandableSection } from '../ui/ExpandableSection';
import { CompanyCard } from './CompanyCard';
import type { Experience } from '../../types/resume';

interface YearBlockProps {
  year: string;
  companies: Experience[];
  defaultOpen?: boolean;
}

export function YearBlock({ year, companies, defaultOpen = false }: YearBlockProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <GlassPanel as="article" className="overflow-hidden">
      <button
        className="w-full flex justify-between items-center gap-4 border-0 px-5 py-3.5 text-text-primary bg-gradient-to-r from-accent-dim to-transparent text-left cursor-pointer font-[inherit] text-base transition-colors hover:from-teal-400/[0.22] max-md:flex-wrap"
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="text-xl font-extrabold bg-gradient-to-r from-teal-400 to-sky-400 bg-clip-text text-transparent">
          {year}
        </span>
        <span className="text-muted text-sm font-medium">
          {companies.length} {companies.length === 1 ? 'company' : 'companies'}
        </span>
        <ChevronIcon open={open} />
      </button>

      <ExpandableSection open={open} duration={0.35}>
        <div className="px-4 pb-4 flex flex-col gap-3">
          {companies.map((company) => (
            <CompanyCard key={company.company + company.dateRange} company={company} />
          ))}
        </div>
      </ExpandableSection>
    </GlassPanel>
  );
}
