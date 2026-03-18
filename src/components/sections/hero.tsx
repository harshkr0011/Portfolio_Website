import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { AIWelcome } from '../ai-welcome';
import BlurText from '@/components/shared/BlurText';

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-4">
        <div className="bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 bg-background/20 dark:bg-background/50 border border-gray-200/30 dark:border-white/10 rounded-2xl shadow-2xl p-8 md:p-12">
          <BlurText
            text="Crafting Digital Excellence"
            delay={150}
            animateBy="words"
            direction="top"
            className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 text-center w-full"
          />
          <div className="max-w-xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
            <AIWelcome />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8">
            <a href="#contact">
              <Button size="lg" className="group">
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="/HK_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="group">
                Download CV
              </Button>
            </a>
            <div className="flex items-center gap-4 ml-0 sm:ml-2 mt-4 sm:mt-0">
               <a href="https://github.com/harshkr0011" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-all duration-300 shadow-sm hover:-translate-y-1">
                 <Github className="w-5 h-5" />
               </a>
               <a href="https://www.linkedin.com/in/harsh-kumar-1b359b21a/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-all duration-300 shadow-sm hover:-translate-y-1">
                 <Linkedin className="w-5 h-5" />
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
