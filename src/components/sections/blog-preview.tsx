import Link from 'next/link';
import { blogPosts } from '@/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';

const BlogPreviewSection = () => {
  const recentPosts = blogPosts.slice(0, 2);

  return (
    <section id="blog-preview" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-4">From My Blog</h2>
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          I enjoy sharing my knowledge and writing about technology. Here are my latest articles.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {recentPosts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <Card className="h-full transition-transform transform group-hover:-translate-y-2 group-hover:shadow-2xl">
                <CardHeader>
                  <CardTitle className="font-headline">{post.title}</CardTitle>
                  <CardDescription>
                    <Badge variant="outline">{format(new Date(post.date), 'MMMM d, yyyy')}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <Button variant="outline" size="lg" className="group">
              Visit The Blog
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
