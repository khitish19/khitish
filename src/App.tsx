import { BackgroundOrbs } from './components/background/BackgroundOrbs';
import { Header } from './components/header/Header';
import { Timeline } from './components/timeline/Timeline';
import { SkillsSection } from './components/skills/SkillsSection';
import { GlassPanel } from './components/ui/GlassPanel';
import resumeData from './data/resumeData';

function App() {
  return (
    <>
      <BackgroundOrbs />

      <div className="max-w-[1080px] mx-auto px-5 pt-10 pb-16 max-md:px-3 max-md:pt-6 max-sm:px-2 max-sm:pt-4">
        <Header profile={resumeData.profile} />

        <GlassPanel as="section" className="px-5 py-4 mb-5">
          <h2 className="text-xl font-bold">Career Timeline</h2>
          <p className="text-muted text-sm mt-1">
            Click a year → company → project to drill down from high-level career progression into
            project-level details.
          </p>
        </GlassPanel>

        <Timeline experience={resumeData.experience} />

        <SkillsSection skills={resumeData.skills} />
      </div>
    </>
  );
}

export default App;
