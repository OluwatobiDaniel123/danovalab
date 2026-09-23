import type { IconName } from "../data/types";

const paths: Record<IconName, React.ReactNode> = {
  web: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <circle cx="6" cy="6.5" r="0.5" fill="currentColor" />
      <circle cx="8" cy="6.5" r="0.5" fill="currentColor" />
    </>
  ),
  app: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 3v18M3 9h6" />
    </>
  ),
  software: (
    <>
      <path d="M14 4l-6 8 6 8" />
      <path d="M10 4l6 8-6 8" opacity="0.4" />
    </>
  ),
  design: (
    <>
      <path d="M12 19l7-7-3-3-7 7-3 3 3-3z" />
      <path d="M16 7l1-1" />
    </>
  ),
  ecommerce: (
    <>
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="18" cy="20" r="1.5" />
      <path d="M2 3h3l2.5 13h12l2-9H6" />
    </>
  ),
  custom: (
    <>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6 2 2 6-6a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2 2.5-2.5z" />
    </>
  ),
  api: (
    <>
      <path d="M8 7l-4 5 4 5M16 7l4 5-4 5M14 4l-4 16" />
    </>
  ),
  support: (
    <>
      <path d="M3 12a9 9 0 0 1 18 0v6a2 2 0 0 1-2 2h-3v-8h5M3 18v-2a2 2 0 0 1 2-2h3v8H5a2 2 0 0 1-2-2z" />
    </>
  ),
  business: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 13h18" />
    </>
  ),
  education: (
    <>
      <path d="M22 9L12 4 2 9l10 5 10-5z" />
      <path d="M6 11v5c0 1 2.5 3 6 3s6-2 6-3v-5" />
    </>
  ),
  org: (
    <>
      <circle cx="12" cy="6" r="3" />
      <path d="M5 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" />
    </>
  ),
  portal: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M13 3v18M3 9h6M3 15h6" />
    </>
  ),
  platform: (
    <>
      <path d="M12 2l9 5-9 5-9-5 9-5z" />
      <path d="M3 12l9 5 9-5M3 17l9 5 9-5" opacity="0.5" />
    </>
  ),
  rocket: (
    <>
      <path d="M5 15c-1 1-2 4-2 4s3-1 4-2m-2-2c2-1 4-3 6-5 3-3 4-7 4-7s-4 1-7 4c-2 2-4 4-5 6m2 2l3-3" />
      <circle cx="15" cy="9" r="1.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  layers: (
    <>
      <path d="M12 2l10 6-10 6L2 8l10-6z" />
      <path d="M2 14l10 6 10-6" opacity="0.5" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1" />
      <circle cx="17" cy="8" r="2.5" opacity="0.6" />
      <path d="M15 20v-1a3 3 0 0 1 3-3" opacity="0.6" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  handshake: (
    <>
      <path d="M11 17l2 2a1 1 0 0 0 1.5 0L17 16M3 8l4-3 4 3 3-2 7 5-7 4-3-2-4 3-4-3-4 3z" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M16 8l-2 6-6 2 2-6 6-2z" />
    </>
  ),
  strategy: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 14l3-3 3 2 5-6" />
      <circle cx="7" cy="14" r="1" fill="currentColor" />
    </>
  ),
  pen: (
    <>
      <path d="M12 19l7-7-3-3-7 7-3 3 3-3z" />
      <path d="M16 9l2-2" />
    </>
  ),
  build: (
    <>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6 2 2 6-6a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2 2.5-2.5z" />
    </>
  ),
  launch: (
    <>
      <path d="M5 15c-1 1-2 4-2 4s3-1 4-2m-2-2c2-1 4-3 6-5 3-3 4-7 4-7s-4 1-7 4c-2 2-4 4-5 6m2 2l3-3" />
      <circle cx="15" cy="9" r="1.5" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
  check: (
    <>
      <path d="M5 12l5 5L20 7" />
    </>
  ),
  quote: (
    <>
      <path d="M7 7h4v4c0 3-2 5-4 5v-2c1 0 2-1 2-3H7V7zM15 7h4v4c0 3-2 5-4 5v-2c1 0 2-1 2-3h-2V7z" />
    </>
  ),
  phone: (
    <>
      <path d="M5 4h4l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M3 21l1.5-4.5A8 8 0 1 1 12 20a8 8 0 0 1-4-1L3 21z" />
      <path d="M9 9c0 3 3 6 6 6l1-2-2-1-1 1c-1 0-2-1-2-2l1-1-1-2-2 1z" opacity="0.5" />
    </>
  ),
  location: (
    <>
      <path d="M12 22s8-7 8-13a8 8 0 0 0-16 0c0 6 8 13 8 13z" />
      <circle cx="12" cy="9" r="3" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 10v7" />
    </>
  ),
  github: (
    <>
      <path d="M9 19c-4 1.5-4-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.5-.3 5-1.2 5-5.5a4.3 4.3 0 0 0-1.2-3c.1-.3.5-1.5-.2-3 0 0-1-.3-3.3 1.2a11 11 0 0 0-6 0C6.3 2.3 5.3 2.6 5.3 2.6c-.7 1.5-.3 2.7-.2 3A4.3 4.3 0 0 0 4 8.6c0 4.3 2.5 5.2 5 5.5-.6.6-.6 1.2-.5 2V21" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </>
  ),
  x: (
    <>
      <path d="M4 4l16 16M20 4L4 20" />
    </>
  ),
  menu: (
    <>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12M18 6L6 18" />
    </>
  ),
};

interface IconProps {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}

export function Icon({ name, className = "w-6 h-6", strokeWidth = 1.6 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
