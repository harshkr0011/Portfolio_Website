
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import Logo from './logo';
import { cn } from '@/lib/utils';

export const navItems = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinks = ({ inSheet }: { inSheet?: boolean }) => (
    <>
      {navItems.map((item) => {
        const isExternal = item.href.startsWith('/');
        const LinkComponent = isExternal ? Link : 'a';
        return (
          <LinkComponent
            key={item.label}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              inSheet ? "block py-2 text-lg" : ""
            )}
            onClick={() => inSheet && setIsMobileMenuOpen(false)}
          >
            {item.label}
          </LinkComponent>
        );
      })}
    </>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-sm border-b' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
          <span className="font-headline text-lg font-bold">Harsh Kumar</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLinks />
        </nav>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background">
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                <SheetDescription className="sr-only">
                    A menu of links to navigate the site.
                </SheetDescription>
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-4 border-b">
                   <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <Logo />
                    <span className="font-headline text-lg font-bold">Harsh Kumar</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col gap-4 p-4">
                  <NavLinks inSheet />
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
