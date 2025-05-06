
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/footer';
import ConsentModal from '@/components/ConsentModal';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import ToolsSection from '@/components/ToolsSection';
import MusicProductionTools from '@/components/MusicProductionTools';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Disclaimer from '@/components/Disclaimer';
import CTA from '@/components/CTA';
import CyberGrid from '@/components/CyberGrid';
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const [showConsent, setShowConsent] = useState(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Check if user has already accepted the terms
    const hasAccepted = localStorage.getItem('consentAccepted');
    
    if (!hasAccepted) {
      setShowConsent(true);
    }
  }, []);
  
  const handleAccept = () => {
    localStorage.setItem('consentAccepted', 'true');
    setShowConsent(false);
    toast({
      title: "Welcome to Music Video Maker Studio!",
      description: "Start creating your professional music video now.",
    });
  };
  
  const handleDecline = () => {
    toast({
      variant: "destructive",
      title: "Consent Required",
      description: "You must accept the terms to use this website.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <CyberGrid />
      <Header />
      
      <ConsentModal 
        open={showConsent} 
        onAccept={handleAccept} 
        onDecline={handleDecline} 
      />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        <HowItWorks />
        <ToolsSection />
        <MusicProductionTools />
        <Testimonials />
        <FAQ />
        <Disclaimer />
        <CTA />
        
        {/* Ideogram Image Section */}
        <section className="py-12 md:py-16 px-4 overflow-hidden relative">
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center">
              <div className={`${isMobile ? 'w-full' : 'max-w-4xl w-full'}`}>
                <div className="relative rounded-2xl overflow-hidden border-4 border-neon-purple/30 shadow-2xl shadow-neon-purple/30">
                  <img 
                    src="https://ideogram.ai/assets/image/lossless/response/TiaFDh0wRKaB-TpDEpoF0Q" 
                    alt="Music Video Maker Studio Visualization" 
                    className="w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm text-center text-white/70">
                      Visualization powered by Ideogram AI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
