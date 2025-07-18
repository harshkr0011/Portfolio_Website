'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter, Youtube, Mail, ArrowUp } from 'lucide-react';
import Logo from './logo';
import { navItems } from '@/components/shared/header';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import DynamicTimestamp from './dynamic-timestamp';
import BackToTopButton from './back-to-top-button';
import { motion } from 'framer-motion';

const socialLinks = [
  { href: 'https://twitter.com', label: 'Twitter', icon: Twitter },
  { href: 'https://github.com/harshtech20', label: 'GitHub', icon: Github },
  { href: 'https://www.linkedin.com/in/harsh-kumar-1b359b21a/', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://youtube.com', label: 'YouTube', icon: Youtube },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-background/50 backdrop-filter backdrop-blur-lg border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1: Logo and Brand */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Logo />
              <span className="font-headline text-xl font-bold">Harsh Kumar</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Crafting digital excellence from frontend finesse to backend brilliance.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col items-center">
            <h3 className="font-headline text-lg font-semibold mb-4">Navigate</h3>
            <ul className="space-y-2">
              {navItems.map((item) => {
                 const LinkComponent = item.href.startsWith('/') ? Link : 'a';
                 return (
                    <li key={item.label}>
                      <LinkComponent
                        href={item.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {item.label}
                      </LinkComponent>
                    </li>
                 )
              })}
                <li>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-primary">Resume</a>
                </li>
            </ul>
          </div>

          {/* Column 3: Contact & Social */}
          <div className="flex flex-col items-center md:items-end">
             <h3 className="font-headline text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4">
               <Mail className="h-4 w-4" />
               <a href="mailto:harshkr0011@gmail.com">harshkr0011@gmail.com</a>
            </div>
            <div className="flex items-center gap-4">
              <TooltipProvider>
                {socialLinks.map((social) => (
                  <Tooltip key={social.label}>
                    <TooltipTrigger asChild>
                      <motion.a
                        href={social.href}
                        aria-label={social.label}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        <social.icon className="h-6 w-6" />
                      </motion.a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{social.label}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>
        </div>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
             <p>&copy; {year} Harsh Kumar. All rights reserved.</p>
             <DynamicTimestamp />
          </div>
        </motion.div>
      </div>
      <BackToTopButton />
    </footer>
  );
};

export default Footer;
