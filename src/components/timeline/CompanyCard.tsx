import { useState } from 'react';
import { GlassPanel } from '../ui/GlassPanel';
import { ChevronIcon } from '../ui/ChevronIcon';
import { ExpandableSection } from '../ui/ExpandableSection';
import { ProjectCard } from './ProjectCard';
import type { Experience } from '../../types/resume';

interface CompanyCardProps {
  company: Experience;
}

export function CompanyCard({ company }: CompanyCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <GlassPanel
      as="article"
      className="overflow-hidden transition-colors hover:border-border-accent"
    >
      <button
        className="w-full flex justify-between items-center gap-4 border-0 px-4 py-3 text-text-primary bg-gradient-to-r from-accent-2-dim to-transparent text-left cursor-pointer font-[inherit] text-[0.95rem] transition-colors hover:from-sky-500/[0.18]"
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-bold text-base">{company.company}</span>
        <span className="text-muted text-[0.82rem] text-right max-md:text-left max-md:w-full max-md:mt-0.5">
          {company.role} · {company.dateRange}
        </span>
        <ChevronIcon open={open} className="w-[18px] h-[18px]" />
      </button>

      <ExpandableSection open={open}>
        <div className="px-3 pb-3 flex flex-col gap-2.5">
          {company.projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </ExpandableSection>
    </GlassPanel>
  );
}
