import React from 'react';
import { motion } from 'framer-motion';

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

function SkillsSection({ skills }) {
    return (
        <section className="skills-section glass">
            <h2>Skills & Technologies</h2>

            <div className="skills-group">
                <p className="skills-group__label">Languages & Packages</p>
                <motion.div
                    className="skills-group__tags"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {skills.languages.map((s) => (
                        <motion.span className="skill-tag" key={s} variants={item}>
                            {s}
                        </motion.span>
                    ))}
                </motion.div>
            </div>

            <div className="skills-group">
                <p className="skills-group__label">Cloud Platforms</p>
                <motion.div
                    className="skills-group__tags"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {skills.cloud.map((s) => (
                        <motion.span className="skill-tag" key={s} variants={item}>
                            {s}
                        </motion.span>
                    ))}
                </motion.div>
            </div>

            <div className="skills-group">
                <p className="skills-group__label">Interest Areas</p>
                <motion.div
                    className="skills-group__tags"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {skills.interests.map((s) => (
                        <motion.span className="skill-tag" key={s} variants={item}>
                            {s}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default SkillsSection;
