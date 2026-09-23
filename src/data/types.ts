export type IconName =
  | "web"
  | "app"
  | "software"
  | "design"
  | "ecommerce"
  | "custom"
  | "api"
  | "support"
  | "business"
  | "education"
  | "org"
  | "portal"
  | "platform"
  | "rocket"
  | "shield"
  | "layers"
  | "users"
  | "eye"
  | "handshake"
  | "compass"
  | "strategy"
  | "pen"
  | "build"
  | "launch"
  | "arrow"
  | "check"
  | "quote"
  | "phone"
  | "mail"
  | "whatsapp"
  | "location"
  | "linkedin"
  | "github"
  | "instagram"
  | "x"
  | "menu"
  | "close";

export interface Service {
  slug: string;
  icon: IconName;
  title: string;
  short: string;
  description: string;
  features: string[];
}

export interface Solution {
  slug: string;
  icon: IconName;
  title: string;
  description: string;
  outcomes: string[];
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  services: string[];
  stack: string[];
  cover: string;
  accent: string;
  overview: string;
  challenge: string;
  solution: string;
  development: string;
  results: { label: string; value: string }[];
  gallery: string[];
}

export interface ProcessStep {
  number: string;
  icon: IconName;
  title: string;
  description: string;
  activities: string[];
}

export interface Insight {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  cover: string;
  content: { heading: string; body: string }[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  initials: string;
}

export interface Industry {
  name: string;
  icon: IconName;
  description: string;
}

export interface TechGroup {
  label: string;
  items: string[];
}
