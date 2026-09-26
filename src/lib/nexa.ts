export const BRAND = {
  name: "Nexa",
  tagline: "Intelligence, reimagined.",
  year: 2026,
};

export const LINKS = {
  telegram: "https://t.me/Pixel_Ping",
  youtube: "https://www.youtube.com/channel/ShadowDrop-024",
};

export const SECTIONS = {
  home: "home",
  intelligence: "intelligence",
  capabilities: "capabilities",
  ecosystem: "ecosystem",
  community: "community",
  journal: "journal",
  about: "about",
} as const;

export type SectionId = (typeof SECTIONS)[keyof typeof SECTIONS];

export const NAV_LINKS: { label: string; id: string }[] = [
  { label: "Home", id: SECTIONS.home },
  { label: "Intelligence", id: SECTIONS.intelligence },
  { label: "Capabilities", id: SECTIONS.capabilities },
  { label: "Ecosystem", id: SECTIONS.ecosystem },
  { label: "About", id: SECTIONS.about },
];

export const MENU_LINKS: { label: string; id: string }[] = [
  { label: "Home", id: SECTIONS.home },
  { label: "Intelligence", id: SECTIONS.intelligence },
  { label: "Capabilities", id: SECTIONS.capabilities },
  { label: "Journal", id: SECTIONS.journal },
  { label: "About", id: SECTIONS.about },
];

export const EASE_EXPO = "cubic-bezier(0.19, 1, 0.22, 1)";
