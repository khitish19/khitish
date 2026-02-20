import React from 'react';
import Header from './components/Header';
import Timeline from './components/Timeline';
import SkillsSection from './components/SkillsSection';
import resumeData from './data/resumeData';

function App() {
    return (
        <>
            {/* floating background orbs */}
            <div className="bg-orbs">
                <div className="bg-orb bg-orb--1" />
                <div className="bg-orb bg-orb--2" />
                <div className="bg-orb bg-orb--3" />
            </div>

            <div className="app-shell">
                <Header profile={resumeData.profile} />

                <section className="section-title glass">
                    <h2>Career Timeline</h2>
                    <p>
                        Click a year → company → project to drill down from high-level
                        career progression into project-level details.
                    </p>
                </section>

                <Timeline experience={resumeData.experience} />

                <SkillsSection skills={resumeData.skills} />
            </div>
        </>
    );
}

export default App;
