
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConsentModal from '@/components/ConsentModal';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import ToolsSection from '@/components/ToolsSection';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Disclaimer from '@/components/Disclaimer';
import CTA from '@/components/CTA';
import CyberGrid from '@/components/CyberGrid';
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [showConsent, setShowConsent] = useState(false);
  const { toast } = useToast();
  
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
      title: "Welcome to Music Video Maker GPT!",
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
        <Testimonials />
        <FAQ />
        <Disclaimer />
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
