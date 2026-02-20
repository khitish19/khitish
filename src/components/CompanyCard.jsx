import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Chevron = ({ open }) => (
    <svg
        className={`company-trigger__chevron${open ? ' company-trigger__chevron--open' : ''}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <polyline points="6 9 12 15 18 9" />
    </svg>
);

function CompanyCard({ company }) {
    const [open, setOpen] = useState(false);

    return (
        <article className="company-card glass">
            <button
                className="company-trigger"
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
            >
                <span className="company-trigger__name">{company.company}</span>
                <span className="company-trigger__meta">
                    {company.role} · {company.dateRange}
                </span>
                <Chevron open={open} />
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        className="company-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        style={{ overflow: 'hidden' }}
                    >
                        {company.projects.map((project) => (
                            <ProjectCard key={project.title} project={project} />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </article>
    );
}

export default CompanyCard;
