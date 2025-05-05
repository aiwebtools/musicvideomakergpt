
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const videoRef = useRef<HTMLIFrameElement>(null);
  
  return (
    <section className="relative overflow-hidden pt-16 pb-20">
      {/* Background elements - removed static grid in favor of CyberGrid component */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker via-cyber-dark/90 to-cyber-darker -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-tertiary/20 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block p-1 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue rounded-lg mb-4">
              <div className="px-3 py-1 bg-cyber-darker/80 rounded text-sm font-medium text-white">
                Full-Blown Music Video & Music Production Creative Suite
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue">
                Music Video Maker GPT
              </span>
            </h1>
            
            <p className="text-lg text-gray-300 max-w-xl">
              Transform yourself into the star of cinematic-quality music videos with our cutting-edge AI director. 
              Build scene-by-scene visuals where <span className="text-neon-purple">you and even your band</span> are featured in vivid, 
              realistic scenes tied to your music.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                className="bg-gradient-to-r from-neon-purple to-neon-blue text-white hover:opacity-90 rounded-full px-8 py-6 text-lg"
                asChild
              >
                <a 
                  href="https://chatgpt.com/g/g-6818b77ba8948191abb42058c0a48770-music-video-maker-gpt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Create Your Music Video
                </a>
              </Button>
              
              <Button
                variant="outline"
                className="border-neon-purple text-neon-purple hover:bg-neon-purple/20 rounded-full px-8 py-6 text-lg"
                asChild
              >
                <a href="#how-it-works">
                  How It Works
                </a>
              </Button>
            </div>
            
            <div className="text-sm text-gray-400 pt-2">
              <p>Powered by GPT-4o for high-fidelity image generation</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden border-2 border-neon-purple neon-glow">
              <iframe
                ref={videoRef}
                className="w-full h-full"
                src="https://www.youtube.com/embed/rBQTUrvHcR8?si=mTNmC364Ahk1hEeQ&autoplay=1&mute=0&controls=1&rel=0&showinfo=0"
                title="Music Video Maker GPT Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="absolute bottom-4 right-4 bg-black/70 px-2 py-1 rounded text-xs text-white">
                Music Video Based On a True Story
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border border-neon-blue rounded-full animate-pulse-soft opacity-25"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border border-neon-pink rounded-full animate-pulse-soft opacity-25"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
