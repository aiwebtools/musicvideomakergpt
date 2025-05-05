
import React from 'react';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { DropdownContent } from './animate-scenes/DropdownContent';

interface AnimateScenesDropdownProps {
  variant?: 'header' | 'footer';
}

export const AnimateScenesDropdown = ({ variant = 'header' }: AnimateScenesDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className={variant === 'header' 
            ? "font-medium border-neon-purple/70 bg-black/40 hover:bg-neon-purple/30 hover:border-neon-purple text-white rounded-md px-4 py-2 flex items-center gap-1 transition-all duration-300" 
            : "font-medium bg-black/40 border border-neon-purple/70 text-white hover:bg-neon-purple/30 hover:border-neon-purple rounded-md px-4 py-2 transition-all duration-300"}
        >
          Animate Your Scenes <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownContent />
    </DropdownMenu>
  );
};
