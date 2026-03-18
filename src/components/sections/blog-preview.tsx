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
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-primary underline decoration-wavy decoration-primary/50 underline-offset-8 mb-6">From My Blog</h2>
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

        <div className="text-center mt-4">
          <Link href="/blog" className="inline-block group/link">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 hover:scale-105 inline-flex items-center justify-center cursor-pointer">
              Visit The Blog
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/link:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
