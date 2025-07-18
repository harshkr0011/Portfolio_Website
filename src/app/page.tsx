import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import ServicesSection from '@/components/sections/services';
import ProjectsSection from '@/components/sections/projects';
import BlogPreviewSection from '@/components/sections/blog-preview';
import ContactSection from '@/components/sections/contact';
import PortfolioTailorSection from '@/components/sections/portfolio-tailor';
import PhotoGallerySection from '@/components/sections/photo-gallery';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <PhotoGallerySection />
        <ServicesSection />
        <PortfolioTailorSection />
        <ProjectsSection />
        <BlogPreviewSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
