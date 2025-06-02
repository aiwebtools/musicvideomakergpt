
const Disclaimer = () => {
  return (
    <section id="disclaimer" className="py-24 relative bg-cyber-darker">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue">
            Legal Disclaimer
          </h2>
          <p className="text-lg text-gray-300">
            Important information about using Music Video Maker GPT and the content it generates.
          </p>
        </div>
        
        <div className="glass border border-neon-purple/30 rounded-xl p-8 max-w-4xl mx-auto">
          <div className="space-y-6 text-gray-300">
            <h3 className="text-xl font-bold text-white">Terms of Use</h3>
            <p>
              Music Video Maker GPT is an AI-powered tool for generating music video scenes. By using this service, you agree to the following terms:
            </p>
            
            <h4 className="text-lg font-semibold text-white mt-6">Content Generation & Ownership</h4>
            <ul className="list-disc pl-6 space-y-2">
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
            
            <h4 className="text-lg font-semibold text-white mt-6">Usage Restrictions</h4>
            <ul className="list-disc pl-6 space-y-2">
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
            
            <h4 className="text-lg font-semibold text-white mt-6">Liability Limitations</h4>
            <p>
              Music Video Maker GPT and its affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses resulting from using our service or any content generated through it.
            </p>
            
            <h4 className="text-lg font-semibold text-white mt-6">Privacy Policy</h4>
            <p>
              Images uploaded for music video creation are used solely during your session and are not stored after completion. Your privacy and data protection are important to us. For detailed information, please refer to our <a href="https://openai.com/policies/privacy-policy/" className="text-neon-blue hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
            </p>
            
            <p className="mt-6">
              By using Music Video Maker GPT, you acknowledge that you have read, understood, and agree to be bound by these terms. We reserve the right to modify these terms at any time. For complete terms and conditions, please visit our <a href="https://aiwebtools.lovable.app/disclaimers" className="text-neon-blue hover:underline" target="_blank" rel="noopener noreferrer">Terms of Service</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
