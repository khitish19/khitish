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
    summary: null,
    projects: [{ title: 'Project A1', description: 'Desc', technologies: [], details: null }],
  },
  {
    company: 'Company B',
    role: 'Developer',
    location: 'SF',
    dateRange: '2020 – 2023',
    startYear: 2020,
    endYear: 2023,
    summary: null,
    projects: [{ title: 'Project B1', description: 'Desc', technologies: [], details: null }],
  },
  {
    company: 'Company C',
    role: 'Intern',
    location: 'LA',
    dateRange: '2020 – 2020',
    startYear: 2020,
    endYear: 2020,
    summary: null,
    projects: [{ title: 'Project C1', description: 'Desc', technologies: [], details: null }],
  },
];

describe('Timeline', () => {
  it('renders year blocks for each unique start year', () => {
    render(<Timeline experience={mockExperience} />);
    expect(screen.getByText('2023 — Present')).toBeInTheDocument();
    expect(screen.getByText('2020 — 2023')).toBeInTheDocument();
  });

  it('groups companies under the same year', () => {
    render(<Timeline experience={mockExperience} />);
    expect(screen.getByText('Company B')).toBeInTheDocument();
    expect(screen.getByText('Company C')).toBeInTheDocument();
  });

  it('renders most recent year first', () => {
    render(<Timeline experience={mockExperience} />);
    const sections = screen.getAllByText(/^\d{4}\s—/);
    expect(sections[0].textContent).toBe('2023 — Present');
    expect(sections[1].textContent).toBe('2020 — 2023');
  });
});
