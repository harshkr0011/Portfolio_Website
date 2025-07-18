import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { AIWelcome } from '../ai-welcome';

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-4">
        <div className="bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 bg-background/20 dark:bg-background/50 border border-gray-200/30 dark:border-white/10 rounded-2xl shadow-2xl p-8 md:p-12">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
            Crafting Digital Excellence
          </h1>
          <div className="max-w-xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
            <AIWelcome />
          </div>
          <a href="#contact">
            <Button size="lg" className="group">
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
