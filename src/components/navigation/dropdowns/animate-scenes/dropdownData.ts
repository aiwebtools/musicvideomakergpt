
interface LinkItem {
  url: string;
  label: string;
}

interface SectionData {
  id: string;
  title: string;
  links: LinkItem[];
}

export const DROPDOWN_SECTIONS: SectionData[] = [
  {
    id: 'video',
    title: 'Image to Video Generators',
    links: [
      { url: "https://aistudio.google.com/generate-video", label: "Google VEO" },
      { url: "https://www.sora.com", label: "SORA" },
      { url: "https://klingai.com", label: "KLING" },
      { url: "https://hailuoai.video", label: "HAILUO" },
      { url: "https://higgsfield.ai", label: "HIGGSFIELD" },
      { url: "https://runwayml.com", label: "RunwayML" },
      { url: "https://pika.art", label: "PIKA LABS" },
      { url: "https://texttovideoprompter.lovable.app/?via=aiwebtools", label: "Text To Video Prompt Generator GPT" }
    ]
  },
  {
    id: 'music',
    title: 'Music & FX Generation',
    links: [
      { url: "https://suno.com/invite/@aiwebtools", label: "SUNO Music Generator" },
      { url: "https://www.udio.com", label: "UDIO Music Generator" },
      { url: "https://elevenlabs.io/?from=kennybastian5304", label: "Eleven Labs Voice & Sound Effect Generator" }
    ]
  },
  {
    id: 'lipsync',
    title: 'Lipsync',
    links: [
      { url: "https://www.hedra.com", label: "HEDRA" }
    ]
  },
  {
    id: 'editing',
    title: 'Editing Tools',
    links: [
      { url: "https://www.capcut.com", label: "CapCut" },
      { url: "https://download.wondershare.com/filmora_full846.exe?_gl=1*5tb5lz*_ga*MjEyMDY2ODg1OC4xNzQ2Mzc1ODk0*_ga_24WTSJBD5B*czE3NDYzNzU4OTMkbzEkZzEkdDE3NDYzNzU5MDAkajU0JGwwJGg0NzQwMjI0NjY.*_gcl_au*MTYxNzMzMTQ1Ni4xNzQ2Mzc1ODk1", label: "Download Filmora Editing Software" }
    ]
  }
];
