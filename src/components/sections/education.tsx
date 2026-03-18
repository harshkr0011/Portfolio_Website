'use client';

import { education } from '@/data';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap, Building2, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Education = () => {
  return (
    <section id="education" className="py-20 relative border-t border-slate-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-primary mb-16 underline decoration-wavy decoration-primary/50 underline-offset-8">
          Education
        </h2>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[19px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-0 w-[2px] bg-primary/60" />

          {education.map((edu, idx) => {
            const isLeft = idx % 2 === 0;

            // Simplified institution name
            const shortInst = edu.institution.split('(')[0].trim();

            // Match description to the screenshot, fallback for the 3rd item
            let desc = '';
            if (idx === 0) {
              desc = "Currently pursuing B.Tech in Computer Science and Engineering with a strong academic performance, holding a CGPA of 7.28. Actively engaged in full stack development and emerging technologies.";
            } else if (idx === 1) {
              desc = "Completed Higher Secondary Education with a specialization in Science, achieving a percentage of 74.2%. Developed a strong foundation in mathematics, physics, and computer science.";
            } else {
              desc = `Completed foundational education with a strong focus on liberal arts and sciences, achieving a percentage of 64.2%. Participated in diverse extracurriculars to build teamwork and creative skills.`;
            }

            return (
              <motion.div 
                key={idx} 
                className={`relative flex items-center justify-between w-full mb-12 ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                
                {/* Empty Half spacer for Desktop Alternating Layout */}
                <div className="hidden md:block w-[45%]" />

                {/* Center Node on Line */}
                <div className="absolute left-5 md:left-1/2 -translate-x-1/2 top-8 md:top-8 w-4 h-4 rounded-full border-[2px] border-primary bg-[#171717] z-10" />

                {/* Content Card Half */}
                <div className="w-full md:w-[45%] pl-12 md:pl-0 flex flex-col mt-2 md:mt-0">
                  
                  {/* Date above card */}
                  <div className="flex items-center text-slate-400 font-mono text-xs md:text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2 opacity-70 text-primary" />
                    <span>{edu.duration}</span>
                  </div>

                  {/* Card Body */}
                  <div className="bg-background/40 backdrop-blur-md border border-primary/40 rounded-xl p-6 shadow-xl hover:border-primary transition-colors duration-300 relative group overflow-hidden">
                    {/* Subtle hover background highlight */}
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    
                    {/* Image Block */}
                    {edu.image && (
                      <div className="mb-5 rounded-lg overflow-hidden border border-primary/20 bg-background/20 relative w-full aspect-[2/1] sm:aspect-[21/9] z-10 group-hover:border-primary/50 transition-colors duration-300">
                        {edu.link ? (
                          <Link 
                            href={edu.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block w-full h-full relative"
                          >
                            <Image
                              src={edu.image}
                              alt={edu.institution + ' image'}
                              fill
                              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <ExternalLink className="text-primary w-8 h-8 drop-shadow-lg" />
                            </div>
                          </Link>
                        ) : (
                          <div className="w-full h-full relative">
                            <Image
                              src={edu.image}
                              alt={edu.institution + ' image'}
                              fill
                              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                            />
                          </div>
                        )}
                      </div>
                    )}

                    <div className="relative z-10">
                      <h3 className="text-lg md:text-xl font-bold text-slate-100 flex items-start gap-3 mb-2 leading-snug">
                        <GraduationCap className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <span>{edu.degree}</span>
                      </h3>
                      
                      <h4 className="text-slate-400 text-sm md:text-sm flex items-start gap-3 mb-4 font-medium">
                        <Building2 className="w-5 h-5 text-primary opacity-80 flex-shrink-0" />
                        <span>{shortInst}</span>
                      </h4>
                      
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
