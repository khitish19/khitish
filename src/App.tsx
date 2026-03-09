import { BackgroundOrbs } from './components/background/BackgroundOrbs';
import { Header } from './components/header/Header';
import { Timeline } from './components/timeline/Timeline';
import { SkillsSection } from './components/skills/SkillsSection';
import resumeData from './data/resumeData';

function App() {
  return (
    <>
      <BackgroundOrbs />

      <div className="max-w-[1080px] mx-auto px-5 pt-10 pb-16 max-md:px-3 max-md:pt-6 max-sm:px-2 max-sm:pt-4">
        <Header profile={resumeData.profile} />

        <Timeline experience={resumeData.experience} />

        <SkillsSection skills={resumeData.skills} />
      </div>
    </>
  );
}

export default App;
