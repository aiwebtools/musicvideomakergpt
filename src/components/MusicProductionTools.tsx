
const MusicProductionTools = () => {
  const tools = [
    {
      name: "SUNO",
      url: "https://suno.com/invite/@aiwebtools",
      description: "Generate original music with AI to power your music videos with high-quality soundtracks that perfectly match your creative vision."
    },
    {
      name: "UDIO",
      url: "https://www.udio.com",
      description: "Professional audio production tools to enhance, mix, and master your music for the perfect soundtrack to your AI-generated music videos."
    }
  ];

  return (
    <section className="py-24 relative bg-cyber-dark">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue">
            Music Production AI Tools
          </h2>
          <p className="text-lg text-gray-300">
            Create the perfect soundtrack for your music videos with these powerful AI music production tools. Compose original tracks or enhance your existing audio with state-of-the-art AI technology.
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

export default MusicProductionTools;
