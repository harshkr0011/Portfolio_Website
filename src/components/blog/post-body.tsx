'use client';

import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import { slugify } from '@/lib/utils';
import Image from 'next/image';

const PostBody = ({ content }: { content: string }) => {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none font-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ node, ...props }) => {
            const children = props.children ? props.children.toString() : '';
            const id = slugify(children);
            return <h2 id={id} {...props} className="font-headline" />;
          },
          h3: ({ node, ...props }) => {
            const children = props.children ? props.children.toString() : '';
            const id = slugify(children);
            return <h3 id={id} {...props} className="font-headline" />;
          },
          p: ({ node, ...props }) => <p className="text-muted-foreground" {...props} />,
          a: ({ node, ...props }) => <a className="text-primary hover:underline" {...props} />,
          img: ({node, ...props}) => {
             return <Image src={props.src || ""} alt={props.alt || ""} width={1200} height={800} className="rounded-lg shadow-md" data-ai-hint="blog post image" />
          },
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                style={vscDarkPlus}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className="bg-muted text-foreground font-code rounded-md px-1 py-0.5" {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default PostBody;
