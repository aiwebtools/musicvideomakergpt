
import { Button } from "@/components/ui/button";
import { Music4, Youtube } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker to-cyber-dark/90 -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyber-tertiary/10 rounded-full blur-[150px] -z-10"></div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto glass border border-neon-purple rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue"></div>
          <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full border border-neon-blue opacity-20 animate-spin-slow"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full border border-neon-pink opacity-20 animate-spin-slow"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue">
            Ready to Star in Your Own Music Video?
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your music into stunning visuals with Music Video Maker Studio. 
            Create professional-quality music videos where you're the star.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://chatgpt.com/g/g-6818b77ba8948191abb42058c0a48770-music-video-maker-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="golden-button flex items-center justify-center gap-2 text-lg"
            >
              <Music4 className="h-5 w-5" />
              <span>Music Video Maker GPT</span>
            </a>
            
            <Button
              variant="outline"
              className="border-neon-purple text-neon-purple hover:bg-neon-purple/20 rounded-full px-8 py-6 text-lg"
              asChild
            >
              <a 
                href="https://www.aiwebtools.ai" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Explore More AI Tools
              </a>
            </Button>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-white transition-colors duration-300 inline-flex items-center gap-2"
            >
              Thank You For Using Music Video Maker Studio Presented by AiWebTools.Ai
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
