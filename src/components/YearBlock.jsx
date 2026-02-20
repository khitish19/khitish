import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CompanyCard from './CompanyCard';

const Chevron = ({ open }) => (
    <svg
        className={`year-trigger__chevron${open ? ' year-trigger__chevron--open' : ''}`}
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

function YearBlock({ year, companies, defaultOpen = false }) {
    const [open, setOpen] = useState(defaultOpen);

    return (
        <article className="year-block glass">
            <button
                className="year-trigger"
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
            >
                <span className="year-trigger__year">{year}</span>
                <span className="year-trigger__count">
                    {companies.length} {companies.length === 1 ? 'company' : 'companies'}
                </span>
                <Chevron open={open} />
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        className="year-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        style={{ overflow: 'hidden' }}
                    >
                        {companies.map((company) => (
                            <CompanyCard key={company.company + company.dateRange} company={company} />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </article>
    );
}

export default YearBlock;
