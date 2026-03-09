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
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <GlassPanel
      as="article"
      className="overflow-hidden border-purple-500/15 hover:border-purple-500/25 transition-colors"
    >
      <div className="px-3.5 py-3">
        <h4 className="font-semibold text-sm text-text-primary mb-1.5">{project.title}</h4>
        <p className="text-text-secondary text-sm leading-relaxed mb-3">{project.description}</p>

        {project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-2">
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

        {project.details && (
          <>
            <button
              className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-teal-300 transition-colors cursor-pointer bg-transparent border-0 p-0 font-[inherit]"
              type="button"
              onClick={() => setDetailsOpen((v) => !v)}
              aria-expanded={detailsOpen}
            >
              <span>Deep Dive</span>
              <ChevronIcon open={detailsOpen} className="w-3.5 h-3.5" />
            </button>

            <ExpandableSection open={detailsOpen} duration={0.28}>
              <div className="mt-2 p-3.5 bg-white/[0.03] border border-border-subtle rounded-lg text-[0.85rem] leading-relaxed">
                {renderDetails(project.details)}
              </div>
            </ExpandableSection>
          </>
        )}
      </div>
    </GlassPanel>
  );
}
