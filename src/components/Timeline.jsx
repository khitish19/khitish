import React, { useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import YearBlock from './YearBlock';

function groupByStartYear(experience) {
    const map = new Map();

    for (const job of experience) {
        const year = String(job.startYear);
        if (!map.has(year)) map.set(year, []);
        map.get(year).push(job);
    }

    return [...map.entries()].sort((a, b) => Number(b[0]) - Number(a[0]));
}

function Timeline({ experience }) {
    const grouped = useMemo(() => groupByStartYear(experience), [experience]);

    return (
        <section className="timeline" aria-label="Career timeline">
            <AnimatePresence initial={false}>
                {grouped.map(([year, companies], idx) => (
                    <YearBlock
                        key={year}
                        year={year}
                        companies={companies}
                        defaultOpen={idx === 0}
                    />
                ))}
            </AnimatePresence>
        </section>
    );
}

export default Timeline;
