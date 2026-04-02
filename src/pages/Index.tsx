import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import ExperienceCertSection from "@/components/ExperienceCertSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";

import AnimatedSection from "@/components/AnimatedSection";

import BackgroundEffect from "@/components/BackgroundEffect";

const Index = () => (
  <div className="min-h-screen relative bg-background text-foreground transition-colors duration-500 isolate">
    <BackgroundEffect />
    <div className="relative z-10">
      <Navbar />
      <AnimatedSection id="hero" delay={0.1}>
        <HeroSection />
      </AnimatedSection>
      <AnimatedSection id="about" delay={0.1}>
        <AboutSection />
      </AnimatedSection>
      <AnimatedSection id="skills" delay={0.1}>
        <SkillsSection />
      </AnimatedSection>
      <AnimatedSection id="projects" delay={0.1}>
        <ProjectsSection />
      </AnimatedSection>
      <AnimatedSection id="education" delay={0.1}>
        <EducationSection />
      </AnimatedSection>
      <AnimatedSection id="experience" delay={0.1}>
        <ExperienceCertSection />
      </AnimatedSection>
      <AnimatedSection id="contact" delay={0.1}>
        <ContactSection />
      </AnimatedSection>
      <Footer />
      <ScrollToTop />
    </div>
  </div>
);

export default Index;
