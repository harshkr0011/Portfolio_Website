"use client";

import { certifications } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);
  
  return (
    <section id="certifications" className="py-16 md:py-20 bg-gray-900">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
                <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch w-full max-w-4xl">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className={`bg-gray-800 p-6 pr-40 rounded-lg shadow-lg max-w-md w-full px-4 h-full flex flex-col relative transition-transform duration-300 hover:scale-105 hover:shadow-2xl focus-within:scale-105 focus-within:shadow-2xl ${
                  !showAll && index >= 4 ? 'hidden' : 
                  !showAll && index >= 2 ? 'hidden md:block' : ''
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {cert.image && (
                  <div className="absolute top-4 right-4 w-32 aspect-[4/3] rounded-lg overflow-hidden border-2 border-primary bg-background">
                    {cert.link ? (
                      <Link 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-full h-full transition-transform hover:scale-105"
                      >
                        <Image
                          src={cert.image}
                          alt={cert.name + ' certificate image'}
                          fill
                          className="object-cover cursor-pointer"
                        />
                      </Link>
                    ) : (
                      <Image
                        src={cert.image}
                        alt={cert.name + ' certificate image'}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                )}
                <h3 className="text-xl font-bold">{cert.name}</h3>
                <p className="text-lg text-gray-300">{cert.issuer}</p>
                <p className="text-sm text-gray-400">Issued: {cert.issued}</p>
                {cert.credentialId && (
                  <p className="text-sm text-gray-400">
                    Credential ID: {cert.credentialId}
                  </p>
                )}
                {cert.skills && (
                  <div className="mt-4">
                    <h4 className="font-semibold">Skills:</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {cert.skills.map((skill, i) => (
                        <span key={i} className="bg-gray-700 px-2 py-1 rounded-md text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        {certifications.length > 2 && (
          <div className="flex justify-center mt-6">
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

export default Certifications;
