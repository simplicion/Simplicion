// ============================================================================
// Simplicion — Constants & Static Content
// ============================================================================

import type {
  NavItem,
  Product,
  TechnologyCategory,
  Industry,
  ResearchArea,
  TimelineMilestone,
  Stat,
  SocialLink,
  FooterColumn,
  LabProject,
} from "@/types";

// ---------------------------------------------------------------------------
// Brand
// ---------------------------------------------------------------------------
export const BRAND = {
  name: "SIMPLICION",
  tagline: "Engineering Intelligence.",
  subtitle:
    "Building Technologies That Shape The Future.",
  description:
    "Building software, AI, cloud infrastructure, and intelligent technologies that empower the next generation of businesses and society.",
  url: "https://simplicion.com",
  founded: "2026",
} as const;

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------
export const NAV_ITEMS: NavItem[] = [
  { label: "Products", href: "/products" },
  { label: "Simplicion Labs", href: "/labs" },
  { label: "Company", href: "/company" },
  { label: "Careers", href: "/careers" },
];

// ---------------------------------------------------------------------------
// Products
// ---------------------------------------------------------------------------
export const PRODUCTS: Product[] = [
  {
    id: "pitchin180",
    name: "Pitchin180",
    tagline: "Founder Networking Platform",
    description:
      "Pitchin180 is an AI-powered founder networking platform by Simplicion. Connect founders, angel investors, mentors, and startups through intelligent matchmaking algorithms. Built to accelerate startup growth and professional networking.",
    status: "live",
    href: "https://pitchin180.com",
    icon: "network",
  },
  {
    id: "workspace",
    name: "Pitchin180 Workspace",
    tagline: "Business Operating System",
    description:
      "Pitchin180 Workspace is an AI-powered Business Operating System (BOS) for startups and growing businesses. It features an integrated CRM, HR management, finance tracking, project management, and automated documentation built by Simplicion.",
    status: "live",
    href: "https://workspace.pitchin180.com",
    icon: "layout-dashboard",
  },
  {
    id: "join-cab",
    name: "JoinCab",
    tagline: "Long-Distance Ride & Travel Community",
    description:
      "JoinCab is a long-distance ride-sharing and travel community app under development by Simplicion Labs. Book intercity rides, explore curated tour packages, and build a verified travel community with people on the same routes.",
    status: "under-development",
    href: "/labs/join-cab",
    icon: "car",
  },
];

// ---------------------------------------------------------------------------
// Statistics
// ---------------------------------------------------------------------------
export const STATS: Stat[] = [
  { label: "Founded", value: "2026", isNumeric: false },
  { label: "Products", value: "3", isNumeric: true },
  { label: "Countries", value: "Global", isNumeric: false },
  { label: "Technologies", value: "25", suffix: "+", isNumeric: true },
  { label: "Users", value: "Growing", isNumeric: false },
];

// ---------------------------------------------------------------------------
// Technologies
// ---------------------------------------------------------------------------
export const TECHNOLOGIES: TechnologyCategory[] = [
  {
    category: "Artificial Intelligence",
    items: [
      { name: "Machine Learning" },
      { name: "Generative AI" },
      { name: "LLMs" },
      { name: "Agentic AI" },
      { name: "Computer Vision" },
    ],
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      { name: "Cloud Computing" },
      { name: "SaaS" },
      { name: "Cybersecurity" },
      { name: "Blockchain" },
    ],
  },
  {
    category: "Hardware & IoT",
    items: [
      { name: "Robotics" },
      { name: "Automation" },
      { name: "Embedded Systems" },
      { name: "IoT" },
    ],
  },
  {
    category: "Data & Platforms",
    items: [
      { name: "Data Analytics" },
      { name: "Developer Tools" },
      { name: "Enterprise Platforms" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Industries
// ---------------------------------------------------------------------------
export const INDUSTRIES: Industry[] = [
  { name: "Healthcare", icon: "heart-pulse" },
  { name: "Education", icon: "graduation-cap" },
  { name: "Finance", icon: "landmark" },
  { name: "Retail", icon: "shopping-bag" },
  { name: "Manufacturing", icon: "factory" },
  { name: "Construction", icon: "building-2" },
  { name: "Transportation", icon: "truck" },
  { name: "Logistics", icon: "package" },
  { name: "Government", icon: "shield" },
  { name: "Media", icon: "tv" },
  { name: "Agriculture", icon: "sprout" },
  { name: "Energy", icon: "zap" },
  { name: "Telecommunications", icon: "radio" },
  { name: "Consumer Electronics", icon: "smartphone" },
];

// ---------------------------------------------------------------------------
// Research Areas
// ---------------------------------------------------------------------------
export const RESEARCH_AREAS: ResearchArea[] = [
  {
    id: "ai",
    name: "Artificial Intelligence",
    description:
      "Foundational and applied research in neural architectures, reasoning, and generalization.",
    icon: "brain",
  },
  {
    id: "robotics",
    name: "Robotics",
    description:
      "Intelligent robotic systems with perception, planning, and autonomous operation.",
    icon: "bot",
  },
  {
    id: "cloud",
    name: "Cloud Infrastructure",
    description:
      "Next-generation cloud computing, distributed systems, and scalable architecture.",
    icon: "cloud",
  },
  {
    id: "graph-ai",
    name: "Graph AI",
    description:
      "Graph neural networks, knowledge graphs, and relational reasoning systems.",
    icon: "git-branch",
  },
  {
    id: "distributed",
    name: "Distributed Systems",
    description:
      "Fault-tolerant, scalable systems for global-scale computation and data processing.",
    icon: "network",
  },
  {
    id: "multi-agent",
    name: "Multi-Agent Systems",
    description:
      "Cooperative and competitive multi-agent architectures for complex problem solving.",
    icon: "users",
  },
  {
    id: "llms",
    name: "Large Language Models",
    description:
      "Research in training, alignment, efficiency, and deployment of large language models.",
    icon: "message-square",
  },
  {
    id: "autonomous",
    name: "Autonomous Systems",
    description:
      "Self-governing systems that perceive, decide, and act in dynamic environments.",
    icon: "compass",
  },
  {
    id: "hci",
    name: "Human-Computer Interaction",
    description:
      "Designing intuitive, accessible, and human-centered interfaces and experiences.",
    icon: "monitor",
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    description:
      "Advanced threat detection, zero-trust architectures, and security by design.",
    icon: "shield-check",
  },
  {
    id: "edge",
    name: "Edge Computing",
    description:
      "Low-latency computation at the edge for real-time processing and IoT applications.",
    icon: "cpu",
  },
  {
    id: "quantum",
    name: "Quantum-Inspired Computing",
    description:
      "Hybrid classical-quantum algorithms and quantum-inspired optimization techniques.",
    icon: "atom",
  },
];

// ---------------------------------------------------------------------------
// Timeline
// ---------------------------------------------------------------------------
export const TIMELINE: TimelineMilestone[] = [
  {
    year: "2026",
    title: "Launch Pitchin180",
    description: "Founder networking platform goes live.",
    status: "completed",
  },
  {
    year: "2026",
    title: "Launch Workspace",
    description: "AI-powered business operating system for startups.",
    status: "current",
  },
  {
    year: "2027",
    title: "Build AI Infrastructure",
    description: "Internal AI compute and model training infrastructure.",
    status: "upcoming",
  },
  {
    year: "2028",
    title: "Expand Globally",
    description: "Multi-region deployment and international operations.",
    status: "upcoming",
  },
  {
    year: "2029",
    title: "Launch Robotics",
    description: "First robotics products and intelligent hardware.",
    status: "upcoming",
  },
  {
    year: "2030+",
    title: "Future Computing",
    description: "Quantum-inspired computing and next-generation platforms.",
    status: "upcoming",
  },
];

// ---------------------------------------------------------------------------
// Social Links
// ---------------------------------------------------------------------------
export const SOCIAL_LINKS: SocialLink[] = [
  { name: "LinkedIn", href: "https://linkedin.com/company/simplicion", icon: "linkedin" },
  { name: "GitHub", href: "https://github.com/simplicion", icon: "github" },
  { name: "X", href: "https://x.com/simplicion", icon: "twitter" },
];

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------
export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Products",
    links: [
      { label: "Pitchin180", href: "https://pitchin180.com" },
      { label: "Workspace", href: "https://workspace.pitchin180.com" },
      { label: "Labs", href: "/labs" },
    ],
  },
  {
    title: "Research",
    links: [
      { label: "Artificial Intelligence", href: "/research#ai" },
      { label: "Robotics", href: "/research#robotics" },
      { label: "Cloud Infrastructure", href: "/research#cloud" },
      { label: "All Research", href: "/research" },
    ],
  },
  {
    title: "Technology",
    links: [
      { label: "AI & ML", href: "/technology#ai" },
      { label: "Cloud", href: "/technology#cloud" },
      { label: "Platforms", href: "/technology#platforms" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "News", href: "/news" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Legal Links
// ---------------------------------------------------------------------------
export const LEGAL_LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Security", href: "/security" },
];

// ---------------------------------------------------------------------------
// Lab Projects
// ---------------------------------------------------------------------------
export const LAB_PROJECTS: LabProject[] = [
  {
    id: "snap-air",
    name: "SnapAir",
    tagline: "Gesture-based System Controller",
    description: "Control your entire computer through a single application using hand gestures, eye tracking, and voice commands.",
    fullDescription: "SnapAir is a revolutionary human-computer interface designed to eliminate the need for traditional peripherals. By installing a single application, users can navigate their entire operating system and applications using intuitive hand gestures, precise eye-tracking, and natural voice commands. Engineered for accessibility, presentation environments, and spatial computing interfaces, SnapAir represents the next generation of seamless digital interaction.",
    status: "development",
    image: "/og-image.png"
  },
  {
    id: "snap-cli",
    name: "SnapCLI",
    tagline: "Infrastructure Development Toolkit",
    description: "Instantly bootstrap complex software architectures, from ecommerce to ride-sharing, with production-ready base infrastructure.",
    fullDescription: "SnapCLI is the ultimate developer productivity toolkit. Whether you're building a massively scalable ecommerce platform or a real-time ride-sharing application (like Rapido), SnapCLI provides the foundational architecture in seconds. It automatically provisions authentication, database schemas, and API gateways while adhering to strict High-Level Design (HLD) and Low-Level Design (LLD) principles. The generated codebase provides an enterprise-grade engineering base, saving months of initial setup time.",
    status: "development",
    image: "/og-image.png"
  },
];
