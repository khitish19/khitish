import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SkillsSection } from '../components/skills/SkillsSection';
import type { Skills } from '../types/resume';

const mockSkills: Skills = {
  languages: ['Python', 'SQL', 'C++'],
  cloud: ['AWS', 'GCP'],
  interests: ['ML', 'NLP'],
};

describe('SkillsSection', () => {
  it('renders the section heading', () => {
    render(<SkillsSection skills={mockSkills} />);
    expect(screen.getByText('Skills & Technologies')).toBeInTheDocument();
  });

  it('renders all three skill group labels', () => {
    render(<SkillsSection skills={mockSkills} />);
    expect(screen.getByText('Languages & Packages')).toBeInTheDocument();
    expect(screen.getByText('Cloud Platforms')).toBeInTheDocument();
    expect(screen.getByText('Interest Areas')).toBeInTheDocument();
  });

  it('renders correct number of skill tags', () => {
    render(<SkillsSection skills={mockSkills} />);
    expect(screen.getByText('Python')).toBeInTheDocument();
    expect(screen.getByText('SQL')).toBeInTheDocument();
    expect(screen.getByText('C++')).toBeInTheDocument();
    expect(screen.getByText('AWS')).toBeInTheDocument();
    expect(screen.getByText('GCP')).toBeInTheDocument();
    expect(screen.getByText('ML')).toBeInTheDocument();
    expect(screen.getByText('NLP')).toBeInTheDocument();
  });
});
