import type { ReactNode } from 'react';

function boldify(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, '<strong class="text-text-primary">$1</strong>');
}

export function renderDetails(text: string): ReactNode[] {
  const lines = text.split('\n');
  const elements: ReactNode[] = [];
  let listItems: ReactNode[] = [];
  let listKey = 0;

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`ul-${listKey++}`} className="pl-5 my-1 space-y-1">
          {listItems}
        </ul>,
      );
      listItems = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      flushList();
      continue;
    }

    const h3Match = trimmed.match(/^###\s+(.+)/);
    if (h3Match) {
      flushList();
      elements.push(
        <h3 key={`h-${i}`} className="text-sm font-bold text-text-primary mt-3 mb-1 first:mt-0">
          {h3Match[1].replace(/\*+/g, '')}
        </h3>,
      );
      continue;
    }

    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      const content = trimmed.slice(2);
      listItems.push(
        <li
          key={`li-${i}`}
          className="text-text-secondary"
          dangerouslySetInnerHTML={{ __html: boldify(content) }}
        />,
      );
      continue;
    }

    const numMatch = trimmed.match(/^\d+\.\s+(.+)/);
    if (numMatch) {
      listItems.push(
        <li
          key={`li-${i}`}
          className="text-text-secondary"
          dangerouslySetInnerHTML={{ __html: boldify(numMatch[1]) }}
        />,
      );
      continue;
    }

    if (trimmed.startsWith('\u2705')) {
      listItems.push(
        <li key={`li-${i}`} className="text-text-secondary">
          {trimmed}
        </li>,
      );
      continue;
    }

    flushList();
    elements.push(
      <p
        key={`p-${i}`}
        className="text-text-secondary my-1"
        dangerouslySetInnerHTML={{ __html: boldify(trimmed) }}
      />,
    );
  }

  flushList();
  return elements;
}
