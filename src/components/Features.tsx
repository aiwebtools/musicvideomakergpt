
import { 
  UploadCloud, 
  VideoIcon, 
  Music, 
  Image, 
  PenTool, 
  Layout 
} from "lucide-react";

const Features = () => {
  const featuresData = [
    {
      icon: <UploadCloud className="h-10 w-10 text-neon-purple" />,
      title: "Upload Your Image",
      description: "Start by uploading a high-quality image of yourself or the lead artist. Our AI web tools ensure your privacy is protected - images are only used during your session."
    },
    {
      icon: <VideoIcon className="h-10 w-10 text-neon-blue" />,
      title: "Choose Your AI Video Style",
      description: "Select from a variety of AI-generated video styles including Dreamy Fantasy, Urban Grit, Cyberpunk Neon, Vintage Retro, Romance, and more with our advanced AI tools."
    },
    {
      icon: <PenTool className="h-10 w-10 text-neon-pink" />,
      title: "AI Scene Planning",
      description: "Create a structured outline for your music video with AI-powered settings, actions, mood, atmosphere, props, and costumes for each scene using cutting-edge artificial intelligence."
    },
    {
      icon: <Image className="h-10 w-10 text-neon-purple" />,
      title: "AI Image Generation",
      description: "Our AI web tools generate cinematic-grade images for each scene with you seamlessly integrated, maintaining perfect visual continuity through advanced machine learning."
    },
    {
      icon: <Music className="h-10 w-10 text-neon-blue" />,
      title: "AI Band Performance Scenes",
      description: "Every third scene showcases your band performing with consistent members, attire, and facial features across all scenes powered by AI technology."
    },
    {
      icon: <Layout className="h-10 w-10 text-neon-pink" />,
      title: "Final AI Assembly",
      description: "Get a complete AI-generated storyboard with scene-by-scene images, plus optional extras like a music video poster or behind-the-scenes photos."
    },
  ];

  return (
    <section className="py-24 bg-cyber-dark relative" id="features">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid -z-0"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-cyber-darker to-transparent -z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cyber-darker to-transparent -z-0"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue">
            AI Web Tools Features & Capabilities
          </h2>
          <p className="text-lg text-gray-300">
            Music Video Maker GPT combines cutting-edge <strong>AI web tools</strong> and <strong>artificial intelligence technology</strong> with cinematic expertise to create professional-quality music videos featuring you as the star using advanced AI tools.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <article 
              key={index} 
              className="glass border border-neon-purple/30 rounded-xl p-6 hover:border-neon-purple/70 transition-all duration-300 hover:transform hover:translate-y-[-5px]"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
