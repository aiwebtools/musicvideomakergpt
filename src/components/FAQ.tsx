
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "How does Music Video Maker GPT work?",
      answer: "Music Video Maker GPT uses advanced AI to create cinematic music video scenes featuring you as the star. You upload an image of yourself, choose a style, and work with the AI to create a scene-by-scene outline. The AI then generates high-quality images for each scene with you seamlessly integrated, maintaining visual continuity throughout the video."
    },
    {
      question: "Is my uploaded image stored or shared?",
      answer: "No. Your privacy is our priority. Images are used only during your session to generate the music video scenes and are not stored on our servers once your session is complete. We do not share or use your images for any other purposes."
    },
    {
      question: "What styles of music videos can I create?",
      answer: "You can create music videos in various styles including Dreamy Fantasy, Urban Grit, Cyberpunk Neon, Vintage Retro, Romance, Punk Rock, and more. You can also create custom styles by describing your vision to the AI."
    },
    {
      question: "How many scenes can I create for my music video?",
      answer: "By default, the AI generates 10-50 scenes for your music video, but this is adjustable based on your needs. Every third scene typically shows your band performing, maintaining consistent appearances across all performance scenes."
    },
    {
      question: "Can I edit or modify scenes after they're created?",
      answer: "Yes. After each scene is generated, you can request modifications to adjust settings, outfits, actions, or atmosphere before moving to the next scene. The AI will ask for your feedback to ensure each scene matches your vision."
    },
    {
      question: "How do I turn the still images into a moving video?",
      answer: "After generating your scenes, you can use tools like Sora and KlingAI to animate your images, turning them into dynamic video clips. You can also generate music with Suno.ai or Udio.com to complete your music video."
    },
    {
      question: "What image quality can I expect?",
      answer: "Music Video Maker GPT generates hyper-realistic 4K images by default, ensuring high visual consistency, correct attire, and accurate facial representation across all scenes. Each image is created with cinematic-grade realism."
    },
    {
      question: "Do I need technical skills to use this tool?",
      answer: "No. Music Video Maker GPT is designed to be user-friendly. The AI guides you through the entire process, asking relevant questions to help create your music video scenes. No technical or design skills are required."
    }
  ];

  return (
    <section id="faq" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-300">
            Get answers to common questions about Music Video Maker GPT and how it can help you create stunning music videos.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass border border-neon-purple/30 rounded-xl overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-white hover:text-neon-purple">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
