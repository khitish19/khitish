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

  it('shows description and tech tags without clicking', () => {
    render(<ProjectCard project={mockProject} />);

    expect(screen.getByText('A test project description.')).toBeInTheDocument();
    expect(screen.getByText('Python')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('AWS')).toBeInTheDocument();
  });

  it('does not show Deep Dive button when details is null', () => {
    render(<ProjectCard project={mockProject} />);

    expect(screen.queryByText('Deep Dive')).not.toBeInTheDocument();
  });

  it('shows Deep Dive section on click when details exist', async () => {
    const user = userEvent.setup();
    render(<ProjectCard project={mockProjectWithDetails} />);

    await user.click(screen.getByRole('button'));

    expect(screen.getByText('Situation')).toBeInTheDocument();
  });
});
