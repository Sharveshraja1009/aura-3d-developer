
import React from 'react';
import Navigation from '@/components/Navigation';
import ParticlesBackground from '@/components/ParticlesBackground';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticlesBackground />
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      
      <footer className="py-8 text-center text-muted-foreground border-t border-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <p>&copy; 2024 John Developer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
