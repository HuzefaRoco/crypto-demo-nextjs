import HeaderNavigation from "@/components/sections/header-navigation";
import HeroSection from "@/components/sections/hero-section";
import BrandsSection from "@/components/sections/brands-section";
import FeaturesSection from "@/components/sections/features-section";
import TokenSaleSection from "@/components/sections/token-sale-section";
import RoadmapSection from "@/components/sections/roadmap-section";
import TeamSection from "@/components/sections/team-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import AppDownloadSection from "@/components/sections/app-download-section";
import FaqSection from "@/components/sections/faq-section";
import BlogSection from "@/components/sections/blog-section";
import ContactSection from "@/components/sections/contact-section";
import NewsletterSection from "@/components/sections/newsletter-section";
import FooterSection from "@/components/sections/footer-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNavigation />
      
      <main>
        <HeroSection />
        
        <div className="py-20">
          <BrandsSection />
        </div>
        
        <FeaturesSection />
        
        <div className="py-20">
          <TokenSaleSection />
        </div>
        
        <RoadmapSection />
        
        <TeamSection />
        
        <div className="py-20">
          <TestimonialsSection />
        </div>
        
        <AppDownloadSection />
        
        <FaqSection />
        
        <div className="py-20">
          <BlogSection />
        </div>
        
        <ContactSection />
        
        <NewsletterSection />
      </main>
      
      <FooterSection />
    </div>
  );
}