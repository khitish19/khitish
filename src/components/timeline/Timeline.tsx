import { useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { YearBlock } from './YearBlock';
import type { Experience } from '../../types/resume';

function groupByStartYear(experience: Experience[]): [string, Experience[]][] {
  const map = new Map<string, Experience[]>();

  for (const job of experience) {
    const year = String(job.startYear);
    if (!map.has(year)) map.set(year, []);
    map.get(year)!.push(job);
  }

  return [...map.entries()].sort((a, b) => Number(b[0]) - Number(a[0]));
}

interface TimelineProps {
  experience: Experience[];
}

export function Timeline({ experience }: TimelineProps) {
  const grouped = useMemo(() => groupByStartYear(experience), [experience]);

  return (
    <section className="flex flex-col gap-3" aria-label="Career timeline">
      <AnimatePresence initial={false}>
        {grouped.map(([year, companies], idx) => (
          <YearBlock key={year} year={year} companies={companies} defaultOpen={idx === 0} />
        ))}
      </AnimatePresence>
    </section>
  );
}
