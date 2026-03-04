import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProjectCard } from '../components/timeline/ProjectCard';
import type { Project } from '../types/resume';

const mockProject: Project = {
  title: 'Test Project',
  description: 'A test project description.',
  technologies: ['Python', 'React', 'AWS'],
  details: null,
};

const mockProjectWithDetails: Project = {
  title: 'Detailed Project',
  description: 'A detailed project.',
  technologies: ['ML'],
  details: '### Situation\nSome situation details.',
};

describe('ProjectCard', () => {
  it('renders the project title', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('expands on click to show description and tech tags', async () => {
    const user = userEvent.setup();
    render(<ProjectCard project={mockProject} />);

    await user.click(screen.getByRole('button'));

    expect(screen.getByText('A test project description.')).toBeInTheDocument();
    expect(screen.getByText('Python')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('AWS')).toBeInTheDocument();
  });

  it('shows fallback when details is null', async () => {
    const user = userEvent.setup();
    render(<ProjectCard project={mockProject} />);

    await user.click(screen.getByRole('button'));

    expect(screen.getByText(/Detailed drill-down/)).toBeInTheDocument();
  });

  it('shows Deep Dive section when details exist', async () => {
    const user = userEvent.setup();
    render(<ProjectCard project={mockProjectWithDetails} />);

    await user.click(screen.getByRole('button'));

    expect(screen.getByText('Deep Dive')).toBeInTheDocument();
    expect(screen.getByText('Situation')).toBeInTheDocument();
  });
});
