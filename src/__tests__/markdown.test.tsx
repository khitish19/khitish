import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { renderDetails } from '../lib/markdown';

describe('renderDetails', () => {
  it('renders h3 headings from ### syntax', () => {
    const elements = renderDetails('### Situation');
    const { container } = render(<div>{elements}</div>);
    const h3 = container.querySelector('h3');
    expect(h3).toBeInTheDocument();
    expect(h3!.textContent).toBe('Situation');
  });

  it('renders unordered list items from - syntax', () => {
    const elements = renderDetails('- First item\n- Second item');
    const { container } = render(<div>{elements}</div>);
    const items = container.querySelectorAll('li');
    expect(items).toHaveLength(2);
    expect(items[0].textContent).toBe('First item');
  });

  it('renders numbered list items', () => {
    const elements = renderDetails('1. Step one\n2. Step two');
    const { container } = render(<div>{elements}</div>);
    const items = container.querySelectorAll('li');
    expect(items).toHaveLength(2);
    expect(items[0].textContent).toBe('Step one');
  });

  it('renders bold text with ** syntax', () => {
    const elements = renderDetails('This has **bold** text');
    const { container } = render(<div>{elements}</div>);
    const strong = container.querySelector('strong');
    expect(strong).toBeInTheDocument();
    expect(strong!.textContent).toBe('bold');
  });

  it('renders checkmark items', () => {
    const elements = renderDetails('✅ Success');
    const { container } = render(<div>{elements}</div>);
    const li = container.querySelector('li');
    expect(li).toBeInTheDocument();
    expect(li!.textContent).toContain('Success');
  });

  it('returns empty array for empty input', () => {
    const elements = renderDetails('');
    expect(elements).toHaveLength(0);
  });
});
