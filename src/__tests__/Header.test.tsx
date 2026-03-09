import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from '../components/header/Header';
import type { Profile } from '../types/resume';

const mockProfile: Profile = {
  name: 'Test User',
  title: 'Data Scientist',
  linkedin: 'https://linkedin.com/in/testuser',
  education: {
    institution: 'MIT',
    degree: 'B.S. Computer Science',
    location: 'Cambridge, MA',
    year: 2020,
  },
  bio: 'A test bio description.',
  tags: ['AI', 'ML'],
};

describe('Header', () => {
  it('renders the profile name', () => {
    render(<Header profile={mockProfile} />);
    expect(screen.getByText('Test User')).toBeInTheDocument();
  });

  it('renders LinkedIn as a contact link', () => {
    render(<Header profile={mockProfile} />);
    const link = screen.getByText('Connect on LinkedIn');
    expect(link).toBeInTheDocument();
    expect(link.closest('a')).toHaveAttribute('href', 'https://linkedin.com/in/testuser');
  });

  it('renders the bio', () => {
    render(<Header profile={mockProfile} />);
    expect(screen.getByText('A test bio description.')).toBeInTheDocument();
  });

  it('renders education info', () => {
    render(<Header profile={mockProfile} />);
    expect(screen.getByText(/MIT/)).toBeInTheDocument();
    expect(screen.getByText(/B\.S\. Computer Science/)).toBeInTheDocument();
  });

  it('renders tags as eyebrow text', () => {
    render(<Header profile={mockProfile} />);
    expect(screen.getByText('AI · ML')).toBeInTheDocument();
  });
});
