
export const FooterCopyright = () => {
  return (
    <div className="mt-12 pt-8 border-t border-neon-purple/20 flex flex-col md:flex-row items-center justify-between">
      <a 
        href="https://aiwebtools.lovable.app/?via=aiwebtools" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
      >
        © 2025 AI WEB TOOLS LLC All rights reserved.
      </a>
      
      <div className="flex space-x-4 mt-4 md:mt-0">
        <a 
          href="https://www.aiwebtools.ai" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-white transition-transform hover:scale-110 duration-300"
          aria-label="AiWebTools.Ai"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
            <path d="m9 12 2 2 4-4"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};
