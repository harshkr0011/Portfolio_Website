'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Eye, ChevronRight, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const missionVisionData = [
  {
    id: 'mission',
    title: 'My Mission',
    icon: Target,
    shortDesc: 'My mission is to build intelligent, scalable, and user-centric web applications that solve real-world problems. I leverage the latest in AI and Full-Stack technologies to deliver exceptional digital experiences.',
    points: [
      'I bridge the gap between complex functionality and seamless design.',
      'I solve real-world problems through innovative web applications.',
      'I fully leverage the latest in AI and Full-Stack technologies.',
      'I build robust, scalable systems that grow with your user needs.'
    ],
  },
  {
    id: 'vision',
    title: 'My Vision',
    icon: Eye,
    shortDesc: 'My vision is to shape the future of the web by integrating generative AI deeply into our everyday tools. I strive to create platforms that don’t just serve data, but actively assist you.',
    points: [
      'I create platforms that understand and assist users intelligently.',
      'I integrate generative AI seamlessly into everyday digital tools.',
      'I aim to shape the future of the web with forward-thinking solutions.',
      'I move beyond serving static data to providing actionable insights.'
    ],
  }
];

const MissionVisionSection = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section id="mission-vision" className="py-20 md:py-32 bg-secondary/10 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.3 }}
           transition={{ duration: 0.5 }}
        >
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-primary underline decoration-wavy decoration-primary/50 underline-offset-8 mb-6">
            My Mission & Vision
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            A look into my personal goals and future vision as a modern Full Stack Developer preparing for an AI-driven world.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 max-w-5xl mx-auto">
          {missionVisionData.map((item) => {
            const Icon = item.icon;
            const isExpanded = activeCard === item.id;
            const isCollapsed = activeCard !== null && !isExpanded;

            return (
              <div
                key={item.id}
                onClick={() => setActiveCard(isExpanded ? null : item.id)}
                className={cn(
                  "relative cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300 ease-in-out group flex flex-col",
                  "hover:border-primary border-border/50 hover:shadow-2xl hover:shadow-primary/20",
                  isExpanded 
                    ? "w-full md:flex-[5] block" 
                    : isCollapsed 
                      ? "flex w-full md:w-[80px] md:flex-none opacity-80 hover:opacity-100" 
                      : "w-full md:flex-1",
                  "bg-background/95"
                )}
              >
                <div className={cn("relative z-10 flex flex-col h-full", isCollapsed ? "p-4 md:p-8" : "p-6 md:p-8")}>
                  <div className={cn("flex items-center gap-4 transition-all duration-300 ease-in-out", isCollapsed ? "justify-center mb-0 md:mt-4" : "mb-4")}>
                    <Icon className={cn("text-primary flex-shrink-0 transition-all duration-300 ease-in-out", isExpanded ? "w-10 h-10 md:w-12 md:h-12" : isCollapsed ? "w-6 h-6 md:w-8 md:h-8" : "w-10 h-10")} />
                    
                    {/* Collapsed title for Mobile ONLY */}
                    {isCollapsed && (
                      <h3 className="font-headline text-lg font-bold whitespace-nowrap md:hidden text-muted-foreground group-hover:text-foreground">
                        {item.title}
                      </h3>
                    )}

                    {!isCollapsed && (
                      <h3 className="font-headline text-2xl md:text-3xl font-bold whitespace-nowrap animate-in fade-in duration-300">
                        {item.title}
                      </h3>
                    )}
                  </div>

                  {/* Collapsed title for Desktop ONLY */}
                  {isCollapsed && (
                    <div className="hidden md:flex flex-grow items-center justify-center pb-8 animate-in fade-in duration-300">
                      <div className="rotate-90 whitespace-nowrap text-xl font-headline tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
                        {item.title}
                      </div>
                    </div>
                  )}

                  {!isCollapsed && (
                    <div className="flex-grow flex flex-col animate-in fade-in duration-300">
                      <p className="text-muted-foreground text-base md:text-lg mb-4 leading-relaxed line-clamp-4 md:line-clamp-none">
                        {item.shortDesc}
                      </p>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="h-px w-full bg-border/50 my-4 md:my-6" />
                            <h4 className="font-semibold text-primary mb-4 text-lg">Key Focus Areas:</h4>
                            <ul className="space-y-4">
                              {item.points.map((point, idx) => (
                                <div 
                                  key={idx}
                                  className="flex items-start gap-3 text-muted-foreground md:text-lg animate-in slide-in-from-left-2 fade-in"
                                  style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'both', animationDuration: '400ms' }}
                                >
                                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                  <span>{point}</span>
                                </div>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      
                      {!isExpanded && (
                        <div className="mt-auto pt-4 md:pt-6 flex items-center text-primary font-medium text-sm group-hover:underline cursor-pointer">
                          Click to explore in detail <ChevronRight className="w-4 h-4 ml-1 md:transition-transform md:group-hover:translate-x-1" />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
