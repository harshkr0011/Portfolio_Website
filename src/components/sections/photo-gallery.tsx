"use client";

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui/carousel";
import React from 'react';

const photos = [
  '/photo1.jpg',
  '/photo2.jpg',
  '/photo3.jpg',
  '/photo4.jpg',
  '/photo6.jpg',
  '/photo7.jpg',
  '/photo8.jpg',
  '/photo9.jpg',
  '/photo10.jpg',
  // Add more image paths as needed (these should be in your public folder)
];

const PhotoGallerySection = () => {
  return (
    <section id="photos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-8">Photo Gallery</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {photos.map((src, idx) => (
              <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Image
                    src={src}
                    alt={`Photo ${idx + 1}`}
                    width={400}
                    height={400}
                    className="object-cover w-full h-96 rounded-lg shadow-lg"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          <CarouselDots className="mt-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default PhotoGallerySection;
