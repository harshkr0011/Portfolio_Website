"use client";

import { certifications } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);
  
  return (
    <section id="certifications" className="py-16 md:py-20 relative border-t border-slate-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-primary mb-16 underline decoration-wavy decoration-primary/50 underline-offset-8">
          Certifications
        </h2>
        
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch w-full max-w-6xl">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className={`bg-background/40 backdrop-blur-md border border-white/5 rounded-xl overflow-hidden shadow-2xl flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-primary/10 hover:border-white/10 group ${
                  !showAll && index >= 6 ? 'hidden' : 
                  !showAll && index >= 3 ? 'hidden sm:flex' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              >
                {/* Image Banner */}
                {cert.image && (
                  <div className="relative w-full aspect-[16/9] overflow-hidden bg-background/20">
                    {cert.link ? (
                      <Link 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-full h-full"
                      >
                        <Image
                          src={cert.image}
                          alt={cert.name + ' certificate image'}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </Link>
                    ) : (
                      <Image
                        src={cert.image}
                        alt={cert.name + ' certificate image'}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                  </div>
                )}

                {/* Card Content */}
                <div className="p-4 md:p-5 flex flex-col flex-grow">
                  {cert.link ? (
                    <Link href={cert.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      <h3 className="text-lg md:text-xl font-bold text-white mb-1.5 font-headline tracking-wide leading-tight">{cert.name}</h3>
                    </Link>
                  ) : (
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1.5 font-headline tracking-wide leading-tight">{cert.name}</h3>
                  )}
                  
                  <p className="text-sm text-gray-400 mb-4 flex-grow leading-snug">
                    Issued by <span className="text-gray-300 font-medium">{cert.issuer}</span>
                  </p>
                  
                  <div className="flex flex-col gap-1 mt-auto">
                    <p className="text-xs text-gray-500 font-medium">Issued: {cert.issued}</p>
                    {cert.credentialId && (
                      <p className="text-xs text-gray-500 font-medium truncate" title={cert.credentialId}>
                        ID: <span className="font-mono text-gray-400 tracking-wider inline-block max-w-[150px] align-bottom truncate">{cert.credentialId}</span>
                      </p>
                    )}
                  </div>

                  {cert.link && (
                    <div className="mt-4 pt-3 border-t border-white/5">
                      <Link href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors group/link">
                        Verify Certificate
                        <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                      </Link>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {certifications.length > 3 && (
          <div className="flex justify-center mt-12">
            <button
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 hover:scale-105 group inline-flex items-center justify-center"
              onClick={() => setShowAll((v) => !v)}
            >
              {showAll ? 'View Less' : 'View All Certifications'}
              {showAll ? (
                <ChevronUp className="ml-2 h-5 w-5 transition-transform group-hover:-translate-y-1" />
              ) : (
                <ChevronDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
