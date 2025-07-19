'use client';

import { education } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const [showAll, setShowAll] = useState(false);
  
  return (
    <section id="education" className="py-16 md:py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="space-y-8">
          {(showAll ? education : education.slice(0, 2)).map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 md:p-10 p-4 rounded-lg shadow-lg max-w-screen-md mx-auto relative transition-transform duration-300 hover:scale-105 hover:shadow-2xl focus-within:scale-105 focus-within:shadow-2xl flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Responsive image positioning */}
              {edu.image && (
                <div
                  className="md:absolute md:top-4 md:right-4 md:w-52 md:aspect-[4/3] w-48 aspect-[4/3] md:h-auto md:mb-0 mx-auto mb-4 rounded-lg overflow-hidden border-2 border-primary bg-background flex-shrink-0"
                >
                  {/* Mobile: 4:3 aspect ratio, md+: fill */}
                  {edu.link ? (
                    <Link 
                      href={edu.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full h-full transition-transform hover:scale-105"
                    >
                      <Image
                        src={edu.image}
                        alt={edu.institution + ' image'}
                        width={192}
                        height={144}
                        className="object-cover w-full h-full cursor-pointer"
                      />
                    </Link>
                  ) : (
                    <Image
                      src={edu.image}
                      alt={edu.institution + ' image'}
                      width={192}
                      height={144}
                      className="object-cover w-full h-full"
                    />
                  )}
                </div>
              )}
              <div className="flex flex-col md:pr-56">
                <h3 className="text-xl font-bold">{edu.institution}</h3>
                <div className="text-base text-gray-300 mb-2 whitespace-pre-line">
                  {edu.degree}
                  {edu.duration ? `\n${edu.duration}` : ''}
                  {edu.grade ? `\nGrade: ${edu.grade}` : ''}
                </div>
                {/* Skills and Activities as grid */}
                {(edu.skills || edu.activities) && (
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {edu.skills && (
                      <div>
                        <h4 className="font-semibold">Skills:</h4>
                        <ul className="list-disc list-inside">
                          {edu.skills.map((skill, i) => (
                            <li key={i}>{skill}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {edu.activities ? (
                      <div>
                        <h4 className="font-semibold">Activities:</h4>
                        <ul className="list-disc list-inside">
                          {edu.activities.map((activity, i) => (
                            <li key={i}>{activity}</li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div className="flex items-center h-full text-gray-400 italic">
                        <span>No activities listed.</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        {education.length > 2 && (
          <div className="flex justify-center mt-8">
            <button
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold shadow hover:bg-primary/90 transition"
              onClick={() => setShowAll((v) => !v)}
            >
              {showAll ? 'View Less' : 'View More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;
