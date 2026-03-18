import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Github, Lightbulb, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import RelatedProjects from '@/components/projects/related-projects';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const { title, tags, details, slug } = project;
  const { longDescription, features, images, dataAiHints, testimonials, challenge, solution } = details;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <Link href="/#projects">
              <Button variant="ghost">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <header>
                <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">{title}</h1>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </header>

              <Carousel className="w-full shadow-lg rounded-lg overflow-hidden border">
                <CarouselContent>
                  {images.map((src, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-video relative">
                         <Image 
                            src={src} 
                            alt={`${title} screenshot ${index + 1}`} 
                            fill 
                            className="object-cover"
                            data-ai-hint={dataAiHints[index]}
                         />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
              
              <section>
                 <p className="text-lg text-muted-foreground">{longDescription}</p>
              </section>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-secondary/50">
                    <CardHeader className="flex-row items-center gap-4">
                        <Target className="w-8 h-8 text-primary"/>
                        <CardTitle className="font-headline text-2xl">The Challenge</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{challenge}</p>
                    </CardContent>
                </Card>
                <Card className="bg-secondary/50">
                    <CardHeader className="flex-row items-center gap-4">
                        <Lightbulb className="w-8 h-8 text-primary"/>
                        <CardTitle className="font-headline text-2xl">The Solution</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{solution}</p>
                    </CardContent>
                </Card>
              </div>

              {testimonials && testimonials.length > 0 && (
                <section>
                    <h3 className="font-headline text-2xl font-semibold mb-6">Testimonials</h3>
                    <div className="space-y-4">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="bg-secondary/50">
                            <CardContent className="p-6">
                                <blockquote className="text-lg italic relative">
                                  <span className="absolute -left-4 -top-2 text-6xl text-primary/20 font-serif">“</span>
                                  {testimonial.quote}
                                </blockquote>
                                <p className="text-right mt-4 font-medium text-primary">- {testimonial.name}, {testimonial.title}</p>
                            </CardContent>
                        </Card>
                    ))}
                    </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
               <div className="sticky top-24 space-y-6">
                 <Card>
                   <CardHeader>
                     <CardTitle className="font-headline">Project Info</CardTitle>
                   </CardHeader>
                   <CardContent className="space-y-4">
                     <div>
                       <h4 className="font-semibold mb-2">Key Features</h4>
                       <ul className="list-disc list-inside text-muted-foreground space-y-1">
                         {features.map((feature, index) => (
                           <li key={index}>{feature}</li>
                         ))}
                       </ul>
                     </div>
                     <div className="flex flex-col space-y-2 pt-4">
                       <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                         <Button className="w-full">
                           <ExternalLink className="mr-2 h-4 w-4" />
                           Live Demo
                         </Button>
                       </Link>
                       <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                         <Button variant="outline" className="w-full">
                           <Github className="mr-2 h-4 w-4" />
                           View Code
                         </Button>
                       </Link>
                     </div>
                   </CardContent>
                 </Card>
               </div>
            </aside>
          </div>
          
          <RelatedProjects currentProjectSlug={slug} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
