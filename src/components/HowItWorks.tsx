
import { useState } from 'react';
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      title: "Upload Your Image",
      description: "Start by uploading a clear, high-quality image of yourself or the lead artist who will star in the music video.",
      image: "/placeholder.svg"
    },
    {
      title: "Choose Your Style & Vibe",
      description: "Select from various styles like Dreamy Fantasy, Urban Grit, Cyberpunk Neon, Vintage Retro, Romance, and more to set the tone for your music video.",
      image: "/placeholder.svg"
    },
    {
      title: "Create Your Scene Outline",
      description: "Work with the AI to develop a structured outline specifying settings, actions, mood, and costume changes for each scene in your music video.",
      image: "/placeholder.svg"
    },
    {
      title: "Generate Images",
      description: "The AI creates high-quality, cinematic images for each scene featuring you as the star, with perfect continuity between scenes.",
      image: "/placeholder.svg"
    },
    {
      title: "Animate Your Storyboard",
      description: "Use our recommended tools like Sora and KlingAI to animate your images and create a dynamic music video with your generated scenes.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-24 relative" id="how-it-works">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyber-primary/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyber-accent/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue">
            How It Works
          </h2>
          <p className="text-lg text-gray-300">
            Creating your professional music video with Music Video Maker GPT is easy and intuitive. Follow these steps to become the star of your own music video.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative aspect-video rounded-xl overflow-hidden glass border border-neon-purple/50">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center rounded-full bg-neon-purple/20 border border-neon-purple">
                    <span className="text-3xl font-bold text-neon-purple">{activeStep + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{steps[activeStep].title}</h3>
                  <p className="text-gray-300">{steps[activeStep].description}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 order-1 lg:order-2">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${activeStep === index ? 'glass border border-neon-purple' : 'hover:bg-cyber-dark/50'}`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activeStep === index ? 'bg-neon-purple text-white' : 'bg-cyber-dark/80 text-gray-400'}`}>
                    <span className="font-bold">{index + 1}</span>
                  </div>
                  <h3 className={`font-bold ${activeStep === index ? 'text-white' : 'text-gray-400'}`}>{step.title}</h3>
                </div>
              </div>
            ))}
            
            <div className="pt-6">
              <Button
                className="bg-gradient-to-r from-neon-purple to-neon-blue text-white hover:opacity-90 rounded-full px-8"
                asChild
              >
                <a 
                  href="https://chatgpt.com/g/g-6818b77ba8948191abb42058c0a48770-music-video-maker-gpt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Start Creating Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
