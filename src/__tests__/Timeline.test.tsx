import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Timeline } from '../components/timeline/Timeline';
import type { Experience } from '../types/resume';

const mockExperience: Experience[] = [
  {
    company: 'Company A',
    role: 'Engineer',
    location: 'NYC',
    dateRange: '2023 – Current',
    startYear: 2023,
    endYear: null,
    projects: [{ title: 'Project A1', description: 'Desc', technologies: [], details: null }],
  },
  {
    company: 'Company B',
    role: 'Developer',
    location: 'SF',
    dateRange: '2020 – 2023',
    startYear: 2020,
    endYear: 2023,
    projects: [{ title: 'Project B1', description: 'Desc', technologies: [], details: null }],
  },
  {
    company: 'Company C',
    role: 'Intern',
    location: 'LA',
    dateRange: '2020 – 2020',
    startYear: 2020,
    endYear: 2020,
    projects: [{ title: 'Project C1', description: 'Desc', technologies: [], details: null }],
  },
];

describe('Timeline', () => {
  it('renders year blocks for each unique start year', () => {
    render(<Timeline experience={mockExperience} />);
    expect(screen.getByText('2023')).toBeInTheDocument();
    expect(screen.getByText('2020')).toBeInTheDocument();
  });

  it('groups companies under the same year', () => {
    render(<Timeline experience={mockExperience} />);
    // 2020 should show 2 companies
    expect(screen.getByText('2 companies')).toBeInTheDocument();
    // 2023 should show 1 company
    expect(screen.getByText('1 company')).toBeInTheDocument();
  });

  it('renders most recent year first', () => {
    render(<Timeline experience={mockExperience} />);
    const yearTexts = screen.getAllByText(/^\d{4}$/);
    expect(yearTexts[0].textContent).toBe('2023');
    expect(yearTexts[1].textContent).toBe('2020');
  });
});
