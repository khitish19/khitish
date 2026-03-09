import { GlassPanel } from '../ui/GlassPanel';
import { ProjectCard } from './ProjectCard';
import type { Experience } from '../../types/resume';

interface CompanyCardProps {
  company: Experience;
}

export function CompanyCard({ company }: CompanyCardProps) {
  return (
    <GlassPanel as="article" className="overflow-hidden">
      <div className="px-5 py-3.5 bg-gradient-to-r from-accent-2-dim to-transparent">
        <div className="flex justify-between items-baseline gap-4 max-md:flex-col max-md:gap-1">
          <span className="font-bold text-base">{company.company}</span>
          <span className="text-muted text-[0.82rem] text-right max-md:text-left">
            {company.role} · {company.dateRange}
          </span>
        </div>
      </div>

      <div className="px-4 pb-4 pt-3 flex flex-col gap-3">
        {company.summary && (
          <p className="text-text-secondary text-[0.85rem] leading-relaxed px-0.5">
            {company.summary}
          </p>
        )}
        {company.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </GlassPanel>
  );
}
