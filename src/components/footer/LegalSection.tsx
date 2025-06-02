
export const LegalSection = () => {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold mb-3">Legal</h3>
      <div className="space-y-2">
        <a 
          href="https://openai.com/policies/privacy-policy/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block text-sm text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1"
        >
          Privacy Policy
        </a>
        <a 
          href="https://aiwebtools.lovable.app/disclaimers" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block text-sm text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1"
        >
          Terms of Service
        </a>
      </div>
    </div>
  );
};
