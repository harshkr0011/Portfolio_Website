"use client";

import CircularGallery from '@/components/shared/CircularGallery';

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

const galleryItems = photos.map((src, idx) => ({ image: src, text: `Photo ${idx + 1}` }));

const PhotoGallerySection = () => {
  return (
    <section id="photos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-8">Photo Gallery</h2>
        <div style={{ height: '600px', position: 'relative' }}>
          <CircularGallery items={galleryItems} bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
        </div>
      </div>
    </section>
  );
};

export default PhotoGallerySection;
