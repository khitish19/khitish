import { CompanyCard } from './CompanyCard';
import type { Experience } from '../../types/resume';

interface YearBlockProps {
  year: string;
  companies: Experience[];
  defaultOpen?: boolean;
}

export function YearBlock({ companies }: YearBlockProps) {
  const hasCurrentRole = companies.some((c) => c.endYear === null);
  const minStart = Math.min(...companies.map((c) => c.startYear));
  const maxEnd = hasCurrentRole
    ? null
    : Math.max(...companies.map((c) => c.endYear ?? c.startYear));

  const rangeLabel = maxEnd === null ? `${minStart} — Present` : `${minStart} — ${maxEnd}`;

  return (
    <section>
      <div className="flex items-baseline gap-3 px-2 pb-3 mb-3 border-b border-border-subtle">
        <span className="text-xl font-extrabold bg-gradient-to-r from-teal-400 to-sky-400 bg-clip-text text-transparent">
          {rangeLabel}
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {companies.map((company) => (
          <CompanyCard key={company.company + company.dateRange} company={company} />
        ))}
      </div>
    </section>
  );
}
