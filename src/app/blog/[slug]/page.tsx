import { notFound } from 'next/navigation';
import { blogPosts } from '@/data';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import PostBody from '@/components/blog/post-body';
import TableOfContents from '@/components/blog/table-of-contents';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return {};
  }
  return {
    title: `${post.title} | DevSite Spark`,
    description: post.excerpt,
  };
}

const getHeadings = (content: string) => {
    const headingLines = content.split('\n').filter(line => line.match(/^##\s/));
    return headingLines.map(line => ({
        text: line.replace(/^##\s/, ''),
    }));
};


export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const headings = getHeadings(post.content);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <article>
            <header className="text-center mb-12">
              <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
              <div className="text-muted-foreground">
                <Badge variant="secondary">{format(new Date(post.date), 'MMMM d, yyyy')}</Badge>
              </div>
            </header>

            <div className="grid lg:grid-cols-4 gap-8 md:gap-12">
              <aside className="hidden lg:block lg:col-span-1">
                <div className="sticky top-24">
                  <TableOfContents headings={headings} />
                </div>
              </aside>
              <div className="lg:col-span-3">
                <PostBody content={post.content} />
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
