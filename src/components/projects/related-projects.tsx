'use client';

import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

interface RelatedProjectsProps {
  currentProjectSlug: string;
}

const RelatedProjects = ({ currentProjectSlug }: RelatedProjectsProps) => {
  const currentProject = projects.find(p => p.slug === currentProjectSlug);

  if (!currentProject) {
    return null;
  }

  const related = projects.filter(p => {
    // Exclude the current project
    if (p.slug === currentProjectSlug) return false;
    // Find projects that share at least one tag
    return p.tags.some(tag => currentProject.tags.includes(tag));
  }).slice(0, 3); // Show up to 3 related projects

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="mt-20 pt-16 border-t">
      <h2 className="font-headline text-3xl font-bold text-center mb-12">Related Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {related.map(project => (
          <Card key={project.slug} className="h-full flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-2xl group">
            <div className="relative overflow-hidden">
              <div className="aspect-video relative">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={project.dataAiHint}
                />
              </div>
            </div>
            <CardHeader>
              <CardTitle className="pt-4 font-headline">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardContent>
                <Link href={`/projects/${project.slug}`} className="w-full">
                  <Button variant="outline" className="w-full group/button">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                  </Button>
                </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default RelatedProjects;
