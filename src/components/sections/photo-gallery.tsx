"use client";

import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import React from 'react';

const photos = [
  '/photo1.jpg',
  '/photo2.jpg',
  '/photo3.jpg',
  // Add more image paths as needed (these should be in your public folder)
];

const PhotoGallerySection = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 3, spacing: 16 },
    breakpoints: {
      '(max-width: 1024px)': {
        slides: { perView: 2, spacing: 12 },
      },
      '(max-width: 768px)': {
        slides: { perView: 1, spacing: 8 },
      },
    },
    loop: true,
  });

  return (
    <section id="photos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-8">Photo Gallery</h2>
        <div ref={sliderRef} className="keen-slider">
          {photos.map((src, idx) => (
            <div key={idx} className="keen-slider__slide">
              <Image
                src={src}
                alt={`Photo ${idx + 1}`}
                width={400}
                height={400}
                className="object-cover w-full h-64 rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallerySection; 