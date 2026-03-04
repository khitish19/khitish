import { motion } from 'framer-motion';
import { GlassPanel } from '../ui/GlassPanel';
import type { Skills } from '../../types/resume';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.04 },
  },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

interface SkillGroupProps {
  label: string;
  items: string[];
}

function SkillGroup({ label, items }: SkillGroupProps) {
  return (
    <div className="mb-4 last:mb-0">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">{label}</p>
      <motion.div
        className="flex flex-wrap gap-1.5"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {items.map((s) => (
          <motion.span
            className="inline-block px-3 py-1 rounded-full text-sm font-medium border border-border-accent text-accent transition-all duration-200 hover:bg-accent-dim hover:-translate-y-0.5"
            key={s}
            variants={item}
          >
            {s}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

interface SkillsSectionProps {
  skills: Skills;
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <GlassPanel as="section" className="mt-5 p-5">
      <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-sky-400 bg-clip-text text-transparent">
        Skills & Technologies
      </h2>
      <SkillGroup label="Languages & Packages" items={skills.languages} />
      <SkillGroup label="Cloud Platforms" items={skills.cloud} />
      <SkillGroup label="Interest Areas" items={skills.interests} />
    </GlassPanel>
  );
}
