
import { useEffect, useRef } from 'react';

const CyberGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initial resize
    resizeCanvas();
    
    // Handle window resize
    window.addEventListener('resize', resizeCanvas);

    // Grid properties
    const gridSize = 40;
    let offset = 0;
    let mouseX = 0;
    let mouseY = 0;

    // Mouse move event listener
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation
    const animate = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Move grid
      offset += 0.3;
      if (offset > gridSize) offset = 0;

      // Calculate responsive grid dimensions
      const numCellsX = Math.ceil(canvas.width / gridSize) + 1;
      const numCellsY = Math.ceil(canvas.height / gridSize) + 1;
      
      // Mouse influence radius
      const radius = 300;
      
      // Draw grid
      ctx.strokeStyle = '#5e21ba22'; // Base purple with low opacity
      ctx.lineWidth = 1;

      // Draw vertical lines
      for (let i = 0; i < numCellsX; i++) {
        const x = i * gridSize - offset;
        
        // Calculate distance from mouse
        const distX = Math.abs(x - mouseX);
        if (distX < radius) {
          // Increase opacity based on proximity to mouse
          const opacity = Math.max(0.1, 1 - distX / radius);
          ctx.strokeStyle = `rgba(115, 30, 240, ${opacity * 0.5})`;
          ctx.lineWidth = 1.5;
        } else {
          ctx.strokeStyle = '#5e21ba22';
          ctx.lineWidth = 1;
        }
        
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Draw horizontal lines
      for (let i = 0; i < numCellsY; i++) {
        const y = i * gridSize - offset;
        
        // Calculate distance from mouse
        const distY = Math.abs(y - mouseY);
        if (distY < radius) {
          // Increase opacity based on proximity to mouse
          const opacity = Math.max(0.1, 1 - distY / radius);
          ctx.strokeStyle = `rgba(115, 30, 240, ${opacity * 0.5})`;
          ctx.lineWidth = 1.5;
        } else {
          ctx.strokeStyle = '#5e21ba22';
          ctx.lineWidth = 1;
        }
        
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw glow at mouse position
      const gradient = ctx.createRadialGradient(
        mouseX, mouseY, 0,
        mouseX, mouseY, radius
      );
      gradient.addColorStop(0, 'rgba(191, 20, 255, 0.3)');
      gradient.addColorStop(0.5, 'rgba(98, 0, 255, 0.1)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, radius, 0, Math.PI * 2);
      ctx.fill();

      // Continue animation
      requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-20 pointer-events-none"
    />
  );
};

export default CyberGrid;
