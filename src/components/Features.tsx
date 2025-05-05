
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
      description: "Start by uploading a high-quality image of yourself or the lead artist. Your privacy is protected - images are only used during your session."
    },
    {
      icon: <VideoIcon className="h-10 w-10 text-neon-blue" />,
      title: "Choose Your Style",
      description: "Select from a variety of video styles including Dreamy Fantasy, Urban Grit, Cyberpunk Neon, Vintage Retro, Romance, and more."
    },
    {
      icon: <PenTool className="h-10 w-10 text-neon-pink" />,
      title: "Scene Planning",
      description: "Create a structured outline for your music video with settings, actions, mood, atmosphere, props, and costumes for each scene."
    },
    {
      icon: <Image className="h-10 w-10 text-neon-purple" />,
      title: "AI Image Generation",
      description: "Our AI generates cinematic-grade images for each scene with you seamlessly integrated, maintaining perfect visual continuity."
    },
    {
      icon: <Music className="h-10 w-10 text-neon-blue" />,
      title: "Band Performance Scenes",
      description: "Every third scene showcases your band performing with consistent members, attire, and facial features across all scenes."
    },
    {
      icon: <Layout className="h-10 w-10 text-neon-pink" />,
      title: "Final Assembly",
      description: "Get a complete storyboard with scene-by-scene images, plus optional extras like a music video poster or behind-the-scenes photos."
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
            Features & Capabilities
          </h2>
          <p className="text-lg text-gray-300">
            Music Video Maker GPT combines cutting-edge AI technology with cinematic expertise to create professional-quality music videos featuring you as the star.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className="glass border border-neon-purple/30 rounded-xl p-6 hover:border-neon-purple/70 transition-all duration-300 hover:transform hover:translate-y-[-5px]"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
