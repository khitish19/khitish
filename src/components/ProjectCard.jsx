import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Chevron = ({ open }) => (
    <svg
        className={`project-trigger__chevron${open ? ' project-trigger__chevron--open' : ''}`}
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

/** Very simple markdown → JSX renderer for the details block */
function renderDetails(text) {
    const lines = text.split('\n');
    const elements = [];
    let listItems = [];
    let listKey = 0;

    const flushList = () => {
        if (listItems.length > 0) {
            elements.push(<ul key={`ul-${listKey++}`}>{listItems}</ul>);
            listItems = [];
        }
    };

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmed = line.trim();

        if (!trimmed) {
            flushList();
            continue;
        }

        // headings
        const h3Match = trimmed.match(/^###\s+(.+)/);
        if (h3Match) {
            flushList();
            elements.push(<h3 key={`h-${i}`}>{h3Match[1].replace(/\*+/g, '')}</h3>);
            continue;
        }

        // list items
        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
            const content = trimmed.slice(2);
            listItems.push(<li key={`li-${i}`} dangerouslySetInnerHTML={{ __html: boldify(content) }} />);
            continue;
        }

        // numbered list items
        const numMatch = trimmed.match(/^\d+\.\s+(.+)/);
        if (numMatch) {
            listItems.push(<li key={`li-${i}`} dangerouslySetInnerHTML={{ __html: boldify(numMatch[1]) }} />);
            continue;
        }

        // checkmark results
        if (trimmed.startsWith('✅')) {
            listItems.push(<li key={`li-${i}`}>{trimmed}</li>);
            continue;
        }

        // plain paragraph
        flushList();
        elements.push(<p key={`p-${i}`} dangerouslySetInnerHTML={{ __html: boldify(trimmed) }} />);
    }

    flushList();
    return elements;
}

function boldify(text) {
    return text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

function ProjectCard({ project }) {
    const [open, setOpen] = useState(false);

    return (
        <article className="project-card glass">
            <button
                className="project-trigger"
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
            >
                <span className="project-trigger__title">{project.title}</span>
                <Chevron open={open} />
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        className="project-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                        style={{ overflow: 'hidden' }}
                    >
                        <p className="project-content__description">{project.description}</p>

                        {project.technologies.length > 0 && (
                            <div className="tech-tags">
                                {project.technologies.map((tech) => (
                                    <span className="tech-tag" key={tech}>{tech}</span>
                                ))}
                            </div>
                        )}

                        {project.details ? (
                            <div className="project-details">
                                <span className="project-details__label">Deep Dive</span>
                                {renderDetails(project.details)}
                            </div>
                        ) : (
                            <p className="no-details">
                                Detailed drill-down for this project will be expanded as more details are added.
                            </p>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </article>
    );
}

export default ProjectCard;
