'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ListFilter } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const allTags = ['All', ...Array.from(new Set(projects.flatMap(p => p.tags)))];

const ProjectsSection = () => {
  const [activeTag, setActiveTag] = useState('All');
  const [sortMethod, setSortMethod] = useState('Latest');

  const filteredProjects = useMemo(() => {
    const filtered = activeTag === 'All'
      ? projects
      : projects.filter(p => p.tags.includes(activeTag));

    return filtered.sort((a, b) => {
      if (sortMethod === 'Alphabetical') {
        return a.title.localeCompare(b.title);
      }
      // Default to 'Latest'
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, [activeTag, sortMethod]);

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-4">My Work</h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Here's a selection of projects I've worked on. Feel free to explore and see my skills in action.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <div className="flex justify-center flex-wrap gap-2">
            {allTags.map(tag => (
              <Button
                key={tag}
                variant={activeTag === tag ? 'default' : 'outline'}
                onClick={() => setActiveTag(tag)}
                className="rounded-full px-4 py-2 text-sm"
              >
                {tag}
              </Button>
            ))}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="rounded-full">
                <ListFilter className="mr-2 h-4 w-4" />
                Sort by: {sortMethod}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Sort Projects</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={sortMethod} onValueChange={setSortMethod}>
                <DropdownMenuRadioItem value="Latest">Latest</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Alphabetical">Alphabetical</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>


        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-2xl group">
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
                  <CardFooter>
                    <Link href={`/projects/${project.slug}`} className="w-full">
                      <Button variant="outline" className="w-full group/button">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
