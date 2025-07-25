
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
      title: "Upload Your Photo",
      description: "Upload a clear photo of yourself to become the star of your music video. Privacy protected - images only used during your session."
    },
    {
      icon: <VideoIcon className="h-10 w-10 text-neon-blue" />,
      title: "Choose Video Style",
      description: "Select from music video styles: Dreamy Fantasy, Urban Grit, Cyberpunk Neon, Vintage Retro, Romance, and more."
    },
    {
      icon: <PenTool className="h-10 w-10 text-neon-pink" />,
      title: "Music Video Planning",
      description: "Create scene-by-scene music video outlines with settings, actions, mood, and costume changes for each shot."
    },
    {
      icon: <Image className="h-10 w-10 text-neon-purple" />,
      title: "Generate Video Scenes",
      description: "Generate high-quality images for each music video scene with you seamlessly integrated as the lead performer."
    },
    {
      icon: <Music className="h-10 w-10 text-neon-blue" />,
      title: "Band Performance Shots",
      description: "Create consistent band performance scenes throughout your music video with matching members, outfits, and staging."
    },
    {
      icon: <Layout className="h-10 w-10 text-neon-pink" />,
      title: "Complete Music Video Kit",
      description: "Get a full music video storyboard with scene images, plus optional extras like video posters and behind-the-scenes shots."
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
            Music Video Creation Features
          </h2>
          <p className="text-lg text-gray-300">
            Everything you need to create professional <strong>music videos</strong> featuring yourself as the star performer.
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
