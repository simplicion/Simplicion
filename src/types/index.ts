// ============================================================================
// Simplicion — Type Definitions
// ============================================================================

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: "live" | "in-development" | "coming-soon";
  href: string;
  icon: string;
}

export interface Technology {
  name: string;
  icon?: string;
}

export interface TechnologyCategory {
  category: string;
  items: Technology[];
}

export interface Industry {
  name: string;
  icon: string;
}

export interface ResearchArea {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  status: "completed" | "current" | "upcoming";
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
  isNumeric: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface FooterColumn {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}
