'use client';

import { slugify } from '@/lib/utils';

interface Heading {
  text: string;
}

interface TableOfContentsProps {
  headings: Heading[];
}

const TableOfContents = ({ headings }: TableOfContentsProps) => {
  if (headings.length === 0) return null;

  return (
    <div className="p-4 bg-secondary rounded-lg border">
      <h4 className="font-headline text-lg font-semibold mb-3">On This Page</h4>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.text}>
            <a
              href={`#${slugify(heading.text)}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
