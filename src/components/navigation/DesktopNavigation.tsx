
import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Music4 } from "lucide-react";
import { AnimateScenesDropdown } from './dropdowns/AnimateScenesDropdown';
import { OtherToolsDropdown } from './dropdowns/OtherToolsDropdown';

const DesktopNavigation = () => {
  return (
    <nav className="hidden md:flex items-center gap-3">
      <AnimateScenesDropdown />
      
      <a 
        href="https://chatgpt.com/g/g-6818b77ba8948191abb42058c0a48770-music-video-maker-gpt" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="golden-button flex items-center gap-2"
      >
        <Music4 className="h-5 w-5" />
        <span>Music Video Maker Studio</span>
      </a>

      <OtherToolsDropdown />

      <a 
        href="https://www.aiwebtools.ai" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="font-medium bg-black/40 border border-neon-yellow/70 text-white hover:bg-neon-yellow/30 hover:border-neon-yellow rounded-md px-4 py-2 transition-all duration-200"
      >
        More AI Tools
      </a>
    </nav>
  );
};

export default DesktopNavigation;
