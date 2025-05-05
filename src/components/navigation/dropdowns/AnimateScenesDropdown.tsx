
import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

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
            ? "font-medium border-neon-purple/70 bg-black/40 hover:bg-neon-purple/30 hover:border-neon-purple text-white rounded-md px-4 py-2 flex items-center gap-1" 
            : "font-medium bg-black/40 border border-neon-purple/70 text-white hover:bg-neon-purple/30 hover:border-neon-purple rounded-md px-4 py-2 transition-all duration-200"}
        >
          Animate Your Scenes <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="glass border-neon-purple w-72 bg-black/90 backdrop-blur-md z-50">
        <Collapsible className="w-full">
          <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-3 text-lg font-medium hover:bg-neon-purple/20">
            <span>Image to Video Generators</span>
            <ChevronDown className="h-5 w-5 ml-2 transition-transform ui-open:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-black/70">
            <DropdownMenuItem className="px-4 py-2.5 hover:bg-neon-purple/20">
              <a 
                href="https://aistudio.google.com/generate-video" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                Google VEO
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem className="px-4 py-2.5 hover:bg-neon-purple/20">
              <a 
                href="https://www.sora.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                SORA
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem className="px-4 py-2.5 hover:bg-neon-purple/20">
              <a 
                href="https://klingai.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                KLING
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem className="px-4 py-2.5 hover:bg-neon-purple/20">
              <a 
                href="https://hailuoai.video" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                HAILUO
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem className="px-4 py-2.5 hover:bg-neon-purple/20">
              <a 
                href="https://higgsfield.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                HIGGSFIELD
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem className="px-4 py-2.5 hover:bg-neon-purple/20">
              <a 
                href="https://runwayml.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                RunwayML
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem className="px-4 py-2.5 hover:bg-neon-purple/20">
              <a 
                href="https://pika.art" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                PIKA LABS
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem className="px-4 py-2.5 hover:bg-neon-purple/20">
              <a 
                href="https://texttovideoprompter.lovable.app/?via=aiwebtools" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                Text To Video Prompt Generator GPT
              </a>
            </DropdownMenuItem>
          </CollapsibleContent>
        </Collapsible>

        <DropdownMenuSeparator className="bg-neon-purple/30" />

        <Collapsible className="w-full">
          <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-3 text-lg font-medium hover:bg-neon-purple/20">
            <span>Music & FX Generation</span>
            <ChevronDown className="h-5 w-5 ml-2 transition-transform ui-open:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-black/70">
            <DropdownMenuItem className="px-4 py-2.5 hover:bg-neon-purple/20">
              <a 
                href="https://suno.com/invite/@aiwebtools" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                SUNO Music Generator
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem className="px-4 py-2.5 hover:bg-neon-purple/20">
              <a 
                href="https://www.udio.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                UDIO Music Generator
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem className="px-4 py-2.5 hover:bg-neon-purple/20">
              <a 
                href="https://elevenlabs.io/?from=kennybastian5304" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                Eleven Labs Voice & Sound Effect Generator
              </a>
            </DropdownMenuItem>
          </CollapsibleContent>
        </Collapsible>

        <DropdownMenuSeparator className="bg-neon-purple/30" />

        <Collapsible className="w-full">
          <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-3 text-lg font-medium hover:bg-neon-purple/20">
            <span>Lipsync</span>
            <ChevronDown className="h-5 w-5 ml-2 transition-transform ui-open:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-black/70">
            <DropdownMenuItem className="px-4 py-2.5 hover:bg-neon-purple/20">
              <a 
                href="https://www.hedra.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                HEDRA
              </a>
            </DropdownMenuItem>
          </CollapsibleContent>
        </Collapsible>

        <DropdownMenuSeparator className="bg-neon-purple/30" />

        <Collapsible className="w-full">
          <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-3 text-lg font-medium hover:bg-neon-purple/20">
            <span>Editing Tools</span>
            <ChevronDown className="h-5 w-5 ml-2 transition-transform ui-open:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-black/70">
            <DropdownMenuItem className="px-4 py-2.5 hover:bg-neon-purple/20">
              <a 
                href="https://www.runway.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                Runway
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem className="px-4 py-2.5 hover:bg-neon-purple/20">
              <a 
                href="https://www.capcut.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                CapCut
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem className="px-4 py-2.5 hover:bg-neon-purple/20">
              <a 
                href="https://download.wondershare.com/filmora_full846.exe?_gl=1*5tb5lz*_ga*MjEyMDY2ODg1OC4xNzQ2Mzc1ODk0*_ga_24WTSJBD5B*czE3NDYzNzU4OTMkbzEkZzEkdDE3NDYzNzU5MDAkajU0JGwwJGg0NzQwMjI0NjY.*_gcl_au*MTYxNzMzMTQ1Ni4xNzQ2Mzc1ODk1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                Download Filmora Editing Software
              </a>
            </DropdownMenuItem>
          </CollapsibleContent>
        </Collapsible>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
