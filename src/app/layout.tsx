'use client';

import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import ThreeDBackground from '@/components/3d/three-d-background';
import AnimatedCursor from '@/components/shared/animated-cursor';
import { useEffect } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('cursor-effects').then((mod) => {
        // @ts-ignore
        const FairyDustCursor = mod.FairyDustCursor || window.FairyDustCursor;
        if (FairyDustCursor) {
          new FairyDustCursor({
            colors: ['#60a5fa', '#a78bfa', '#f472b6', '#facc15', '#34d399'],
            elementCount: 24,
            zIndex: 9999,
          });
        }
      });
    }
  }, []);
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Source+Code+Pro:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/Favicon1.ico" />
      </head>
      <body className="font-body antialiased">
        <AnimatedCursor />
        <ThreeDBackground />
        <div className="relative z-10">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
