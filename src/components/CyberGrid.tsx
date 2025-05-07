
import React from 'react';

// Simple background grid component for cyberpunk aesthetic
const CyberGrid = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-10">
      <div className="absolute inset-0 grid grid-cols-12 gap-4">
        {Array(12).fill(0).map((_, i) => (
          <div key={i} className="col-span-1 h-full border-r border-neon-purple/30"></div>
        ))}
      </div>
      <div className="absolute inset-0 grid grid-rows-12 gap-4">
        {Array(12).fill(0).map((_, i) => (
          <div key={i} className="row-span-1 w-full border-b border-neon-purple/30"></div>
        ))}
      </div>
    </div>
  );
};

export default CyberGrid;
