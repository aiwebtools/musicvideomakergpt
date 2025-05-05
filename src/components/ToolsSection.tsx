
const ToolsSection = () => {
  const tools = [
    {
      name: "Sora",
      url: "https://www.sora.com",
      description: "Use Sora to animate your AI-generated images and bring your music video scenes to life with dynamic movement and effects."
    },
    {
      name: "KlingAI",
      url: "https://www.klingai.com",
      description: "Transform your still images into dynamic video scenes with KlingAI's animation technology, perfect for music video creation."
    },
    {
      name: "Suno",
      url: "https://www.suno.ai",
      description: "Generate original music to accompany your visuals, or create a soundtrack that perfectly matches your music video concept."
    },
    {
      name: "VideoLeap",
      url: "https://www.videoleapapp.com/",
      description: "Professional video editing app with advanced effects, transitions, and tools to perfect your music videos."
    }
  ];

  return (
    <section className="py-24 relative bg-cyber-darker">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue">
            Recommended Tools
          </h2>
          <p className="text-lg text-gray-300">
            Complete your music video creation process with these powerful partner tools. After generating your music video scenes, use these platforms to animate your images and create stunning soundtracks.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <a 
              key={index}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass border border-neon-purple/30 rounded-xl p-8 hover:border-neon-purple transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue flex items-center justify-center text-white font-bold text-xl">
                  {tool.name.charAt(0)}
                </div>
                <h3 className="ml-4 text-2xl font-bold text-white group-hover:text-neon-purple transition-colors">
                  {tool.name}
                </h3>
              </div>
              <p className="text-gray-300">{tool.description}</p>
              <div className="mt-4 text-neon-blue group-hover:underline">
                Visit {tool.name} →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
