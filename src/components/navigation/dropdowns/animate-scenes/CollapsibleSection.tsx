
import React from 'react';
import { ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

interface CollapsibleSectionProps {
  title: string;
  id: string;
  isOpen: string | null;
  onToggle: (id: string) => void;
  links: Array<{ url: string; label: string }>;
}

export const CollapsibleSection = ({ 
  title, 
  id, 
  isOpen, 
  onToggle, 
  links 
}: CollapsibleSectionProps) => {
  return (
    <Collapsible className="w-full" open={isOpen === id} onOpenChange={() => onToggle(id)}>
      <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-3 text-lg font-medium hover:bg-neon-purple/20 transition-colors duration-300">
        <span>{title}</span>
        <ChevronDown className={`h-5 w-5 ml-2 transition-transform duration-300 ${isOpen === id ? 'rotate-180' : ''}`} />
      </CollapsibleTrigger>
      <CollapsibleContent className="bg-black/70 animate-accordion-down">
        {links.map((link, index) => (
          <DropdownMenuItem 
            key={index} 
            className="px-4 py-2.5 hover:bg-neon-purple/20 transition-colors duration-200"
          >
            <a 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full"
            >
              {link.label}
            </a>
          </DropdownMenuItem>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};
