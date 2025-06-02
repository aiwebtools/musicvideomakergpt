
const Disclaimer = () => {
  return (
    <section id="disclaimer" className="py-24 relative bg-cyber-darker overflow-hidden">
      {/* Divine background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20 animate-gradient-shift"></div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent animate-shimmer"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-xl animate-float-slow"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl animate-pulse-divine"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-full blur-lg animate-glow-intense"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 via-blue-300 to-cyan-300 animate-text-shimmer drop-shadow-2xl">
            Legal Disclaimer
          </h2>
          <p className="text-xl text-gray-200 drop-shadow-lg">
            Important information about using Music Video Maker GPT and the content it generates.
          </p>
        </div>
        
        <div className="glass-divine border border-gradient-divine rounded-2xl p-12 max-w-5xl mx-auto relative overflow-hidden shadow-divine">
          {/* Divine glow effects */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse-divine"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-glow-intense"></div>
          
          <div className="space-y-8 text-gray-200 relative z-10">
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-4 border border-purple-300/20">
              <p className="text-sm font-medium text-purple-200 mb-2">
                Website Disclaimer
              </p>
              <p className="text-sm text-gray-300">
                This website is for informational, educational, and research purposes only.
              </p>
            </div>
            
            <h3 className="text-2xl font-bold text-white drop-shadow-lg">Terms of Use</h3>
            <p className="text-lg leading-relaxed">
              Music Video Maker GPT is an AI-powered tool for generating music video scenes. By using this service, you agree to the following terms:
            </p>
            
            <h4 className="text-xl font-semibold text-white mt-8 drop-shadow-md">Content Generation & Ownership</h4>
            <ul className="list-disc pl-8 space-y-3 text-lg leading-relaxed">
              <li>
                All content generated through Music Video Maker GPT is created using AI technology. The service does not guarantee uniqueness of the content.
              </li>
              <li>
                You retain ownership of content you create using our service, provided you have legal right to use all inputs (such as personal images) used in the generation process.
              </li>
              <li>
                You are responsible for ensuring that your use of generated content does not infringe upon the rights of others, including copyright, trademark, privacy, or publicity rights.
              </li>
            </ul>
            
            <h4 className="text-xl font-semibold text-white mt-8 drop-shadow-md">Usage Restrictions</h4>
            <ul className="list-disc pl-8 space-y-3 text-lg leading-relaxed">
              <li>
                You may not use Music Video Maker GPT to generate content that is illegal, harmful, threatening, abusive, tortious, defamatory, or otherwise objectionable.
              </li>
              <li>
                You may not use the service to generate content that infringes or violates the intellectual property rights or other rights of third parties.
              </li>
              <li>
                You may not use generated content to impersonate others or to misrepresent your affiliation with any person or entity.
              </li>
            </ul>
            
            <h4 className="text-xl font-semibold text-white mt-8 drop-shadow-md">Liability Limitations</h4>
            <p className="text-lg leading-relaxed">
              Music Video Maker GPT and its affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses resulting from using our service or any content generated through it.
            </p>
            
            <h4 className="text-xl font-semibold text-white mt-8 drop-shadow-md">Privacy Policy</h4>
            <p className="text-lg leading-relaxed">
              Images uploaded for music video creation are used solely during your session and are not stored after completion. Your privacy and data protection are important to us. For detailed information, please refer to our <a href="https://openai.com/policies/privacy-policy/" className="text-cyan-300 hover:text-cyan-200 underline decoration-cyan-300/50 hover:decoration-cyan-200" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
            </p>
            
            <p className="mt-8 text-lg leading-relaxed">
              By using Music Video Maker GPT, you acknowledge that you have read, understood, and agree to be bound by these terms. We reserve the right to modify these terms at any time. For complete terms and conditions, visit our <a href="https://aiwebtools.lovable.app/disclaimers" className="text-cyan-300 hover:text-cyan-200 underline decoration-cyan-300/50 hover:decoration-cyan-200" target="_blank" rel="noopener noreferrer">Terms of Service</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
