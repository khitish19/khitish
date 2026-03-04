import { useState } from 'react';
import { GlassPanel } from '../ui/GlassPanel';
import { ChevronIcon } from '../ui/ChevronIcon';
import { ExpandableSection } from '../ui/ExpandableSection';
import { renderDetails } from '../../lib/markdown';
import type { Project } from '../../types/resume';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <GlassPanel
      as="article"
      className="overflow-hidden transition-colors hover:border-purple-500/25 hover:shadow-sm"
    >
      <button
        className="w-full flex justify-between items-center gap-3 border-0 px-3.5 py-2.5 text-text-primary bg-purple-500/[0.06] text-left cursor-pointer font-[inherit] text-sm transition-colors hover:bg-purple-500/[0.12]"
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-semibold">{project.title}</span>
        <ChevronIcon open={open} className="w-4 h-4" />
      </button>

      <ExpandableSection open={open} duration={0.28}>
        <div className="px-3.5 pb-3.5 pt-1">
          <p className="text-text-secondary text-sm leading-relaxed mb-3">{project.description}</p>

          {project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.technologies.map((tech) => (
                <span
                  className="inline-block bg-sky-500/10 text-link border border-sky-500/20 rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors hover:bg-sky-500/15 hover:text-sky-200"
                  key={tech}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {project.details ? (
            <div className="mt-2 p-3.5 bg-white/[0.03] border border-border-subtle rounded-lg text-[0.85rem] leading-relaxed">
              <span className="block text-xs font-bold uppercase tracking-widest text-accent mb-2">
                Deep Dive
              </span>
              {renderDetails(project.details)}
            </div>
          ) : (
            <p className="text-muted text-sm italic">
              Detailed drill-down for this project will be expanded as more details are added.
            </p>
          )}
        </div>
      </ExpandableSection>
    </GlassPanel>
  );
}
