import Link from 'next/link';
import { blogPosts } from '@/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { format } from 'date-fns';

export const metadata = {
  title: 'Blog | DevSite Spark',
  description: 'Thoughts and articles on web development, design, and technology.',
};

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <header className="text-center mb-12">
            <h1 className="font-headline text-4xl md:text-5xl font-bold">The DevSite Spark Blog</h1>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              A collection of articles about modern web development, programming, and tech insights.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <Card className="h-full flex flex-col transition-transform transform group-hover:-translate-y-2 group-hover:shadow-2xl">
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{post.title}</CardTitle>
                    <CardDescription>
                      <Badge variant="outline">{format(new Date(post.date), 'MMMM d, yyyy')}</Badge>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
