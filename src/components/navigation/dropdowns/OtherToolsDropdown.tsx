
import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export const OtherToolsDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="font-medium border-neon-pink/70 bg-black/40 hover:bg-neon-pink/30 hover:border-neon-pink text-white rounded-md px-4 py-2">
          Other Creative Production AI Tools
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="glass border-neon-purple w-56 bg-black/90 backdrop-blur-md">
        <DropdownMenuItem className="hover:bg-neon-purple/20">
          <a 
            href="https://moviemakerstudio.lovable.app/?via=aiwebtools" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full"
          >
            AI Movie Production Studio
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-neon-purple/20">
          <a 
            href="https://stagemasterai.lovable.app/?via=aiwebtools" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full"
          >
            Stage Master AI Suite for the Performing Arts
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
