
const Testimonials = () => {
  const testimonials = [
    {
      quote: "Music Video Maker GPT transformed my song into a visual masterpiece. The AI accurately captured my style and created scenes I never could have imagined!",
      name: "Alex J.",
      role: "Independent Artist",
      image: "/placeholder.svg"
    },
    {
      quote: "As a music producer, I needed promo visuals quickly. This tool generated a complete storyboard in under an hour that looked like it took days to create.",
      name: "Samantha T.",
      role: "Music Producer",
      image: "/placeholder.svg"
    },
    {
      quote: "The band performance scenes were incredibly consistent. Every member looked like themselves in each shot. Perfect for our album launch materials.",
      name: "Marcus D.",
      role: "Band Manager",
      image: "/placeholder.svg"
    },
    {
      quote: "I was amazed at how accurately the AI placed me in each scene. The continuity between different settings was flawless, and the visual quality was stunning.",
      name: "Jordan R.",
      role: "Songwriter",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker via-cyber-dark/90 to-cyber-darker -z-10"></div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue">
            What Artists Are Saying
          </h2>
          <p className="text-lg text-gray-300">
            Music creators around the world are using Music Video Maker GPT to bring their songs to life visually.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass border border-neon-purple/30 rounded-xl p-6 relative overflow-hidden group hover:border-neon-purple/70 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-neon-purple/20 to-transparent rounded-bl-3xl -z-10"></div>
              
              <div className="mb-6">
                <svg className="h-8 w-8 text-neon-purple opacity-60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <p className="text-gray-100 mb-6 italic">"{testimonial.quote}"</p>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="font-medium text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
