
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Music4 } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const videoRef = useRef<HTMLIFrameElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Force video to play after component mounts
    const timer = setTimeout(() => {
      if (videoRef.current) {
        // Try to reload the iframe with autoplay settings
        const currentSrc = videoRef.current.src;
        videoRef.current.src = ''; 
        videoRef.current.src = currentSrc;
      }
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="relative overflow-hidden pt-28 md:pt-40 pb-16 md:pb-20">
      {/* Background elements - removed static grid in favor of CyberGrid component */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker via-cyber-dark/90 to-cyber-darker -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-tertiary/20 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6 text-center lg:text-left">
            <header>
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight ${isMobile ? 'text-center' : ''}`}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue">
                  Music Video Maker Studio
                </span>
              </h1>
              
              <div className={`inline-block p-1 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue rounded-lg mb-2 mt-2 ${isMobile ? 'mx-auto' : ''}`}>
                <div className="px-3 py-1 bg-cyber-darker/80 rounded text-sm font-medium text-white">
                  AI Web Tools - Full-Blown Music Video & Music Production Creative Suite
                </div>
              </div>
            </header>
            
            <p className={`text-lg text-gray-300 max-w-xl ${isMobile ? 'mx-auto text-center' : ''}`}>
              Create professional <strong>music videos</strong> where you're the star. Upload your photo, choose your style, 
              and generate cinematic scenes featuring you with our <strong>AI music video maker</strong>.
            </p>
            
            <div className={`flex flex-wrap gap-4 pt-2 ${isMobile ? 'justify-center' : ''}`}>
              <a 
                href="https://chatgpt.com/g/g-6818b77ba8948191abb42058c0a48770-music-video-maker-gpt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="golden-button flex items-center gap-2 text-lg"
                aria-label="Access Music Video Maker GPT - AI Web Tools"
              >
                <Music4 className="h-5 w-5" />
                <span>Music Video Maker GPT</span>
              </a>
              
              <Button
                variant="outline"
                className="border-neon-purple text-neon-purple hover:bg-neon-purple/20 hover:border-neon-purple rounded-full px-6 py-5 text-base"
                asChild
              >
                <a href="#how-it-works" aria-label="Learn how our AI video creation works">
                  How It Works
                </a>
              </Button>
            </div>
            
            <div className={`text-sm text-gray-400 pt-1 ${isMobile ? 'text-center' : ''}`}>
              <p>Professional music video creation | GPT-4o powered</p>
            </div>
          </div>
          
          <div className="relative mt-6 md:mt-0">
            <div className="aspect-video rounded-lg overflow-hidden border-2 border-neon-purple neon-glow">
              <iframe
                ref={videoRef}
                className="w-full h-full"
                src="https://www.youtube.com/embed/rBQTUrvHcR8?autoplay=1&mute=0&enablejsapi=1&origin=https://musicvideomakerstudio.com&hd=1"
                title="Music Video Maker Studio Demo - AI Web Tools Video Creation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div className="absolute bottom-4 right-4 bg-black/70 px-2 py-1 rounded text-xs text-white">
                AI-Generated Music Video Demo
              </div>
            </div>
            
            {/* Decorative elements */}
            {!isMobile && (
              <>
                <div className="absolute -top-6 -right-6 w-24 h-24 border border-neon-blue rounded-full animate-pulse-soft opacity-25"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 border border-neon-pink rounded-full animate-pulse-soft opacity-25"></div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
