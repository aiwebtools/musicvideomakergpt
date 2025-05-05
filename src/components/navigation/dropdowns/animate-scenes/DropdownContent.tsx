
import React, { useState } from 'react';
import { 
  DropdownMenuContent,
  DropdownMenuSeparator 
} from "@/components/ui/dropdown-menu";
import { CollapsibleSection } from './CollapsibleSection';
import { DROPDOWN_SECTIONS } from './dropdownData';

interface DropdownContentProps {
  className?: string;
}

export const DropdownContent = ({ className }: DropdownContentProps) => {
  const [open, setOpen] = useState<string | null>(null);

  const toggleCollapsible = (id: string) => {
    setOpen(open === id ? null : id);
  };

  return (
    <DropdownMenuContent className={`glass border-neon-purple w-72 bg-black/90 backdrop-blur-md z-50 animate-fade-in ${className || ''}`}>
      {DROPDOWN_SECTIONS.map((section, index) => (
        <React.Fragment key={section.id}>
          <CollapsibleSection
            title={section.title}
            id={section.id}
            isOpen={open}
            onToggle={toggleCollapsible}
            links={section.links}
          />
          {index < DROPDOWN_SECTIONS.length - 1 && (
            <DropdownMenuSeparator className="bg-neon-purple/30" />
          )}
        </React.Fragment>
      ))}
    </DropdownMenuContent>
  );
};
