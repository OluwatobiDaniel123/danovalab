import type { Service, Solution, Project, ProcessStep, Insight, Testimonial, Industry, TechGroup, IconName } from "./types";

export const services: Service[] = [
  {
    slug: "web-development",
    icon: "web",
    title: "Web Development",
    short: "Professional corporate websites, marketing sites, landing pages, and high-performance web experiences.",
    description:
      "We build fast, accessible, and search-optimized websites that represent businesses with clarity and convert visitors into customers.",
    features: ["Corporate & marketing sites", "Landing pages & portals", "Core Web Vitals optimized", "CMS integration"],
  },
  {
    slug: "web-applications",
    icon: "app",
    title: "Web Applications",
    short: "Custom web applications designed around specific business workflows and operational requirements.",
    description:
      "From dashboards to operational platforms, we engineer web applications that streamline complex workflows and scale with your business.",
    features: ["Custom dashboards", "Workflow automation", "Role-based access", "Real-time data"],
  },
  {
    slug: "business-software",
    icon: "software",
    title: "Business Software",
    short: "Internal systems, management platforms, CRM-style apps, and business automation tools.",
    description:
      "We replace spreadsheets and manual processes with tailored business software that gives teams control over operations and data.",
    features: ["CRM & admin systems", "Inventory & operations", "Reporting & analytics", "Process automation"],
  },
  {
    slug: "ui-ux-design",
    icon: "design",
    title: "UI/UX Design",
    short: "Modern user interfaces and intuitive digital experiences focused on usability and conversion.",
    description:
      "We design interfaces grounded in research and usability — clear hierarchy, accessible patterns, and conversion-focused layouts.",
    features: ["Product & interface design", "Design systems", "Usability testing", "Prototyping"],
  },
  {
    slug: "ecommerce",
    icon: "ecommerce",
    title: "E-Commerce",
    short: "Scalable online stores and commerce platforms with secure payment and order management workflows.",
    description:
      "We build commerce experiences that handle catalog, checkout, payments, and fulfillment — engineered for reliability and growth.",
    features: ["Storefront & checkout", "Payment integration", "Order management", "Inventory sync"],
  },
  {
    slug: "custom-software",
    icon: "custom",
    title: "Custom Software",
    short: "Purpose-built software solutions for businesses with unique technical requirements.",
    description:
      "When off-the-shelf tools don't fit, we design and build custom software shaped precisely around your operations and constraints.",
    features: ["Bespoke platforms", "APIs & microservices", "Data pipelines", "System modernization"],
  },
  {
    slug: "api-integration",
    icon: "api",
    title: "API & System Integration",
    short: "Connect business systems, payment gateways, databases, communication platforms, and third-party services.",
    description:
      "We integrate the tools your business depends on — payments, messaging, data sources, and internal systems — into one coherent flow.",
    features: ["Payment gateways", "Third-party APIs", "Data synchronization", "Webhooks & events"],
  },
  {
    slug: "maintenance-support",
    icon: "support",
    title: "Maintenance & Support",
    short: "Ongoing improvements, monitoring, bug fixes, security updates, and technical support.",
    description:
      "We partner after launch — monitoring performance, shipping improvements, patching security, and supporting your team.",
    features: ["Performance monitoring", "Security updates", "Bug fixes & improvements", "Technical support"],
  },
];

export const solutions: Solution[] = [
  {
    slug: "business-management",
    icon: "business",
    title: "Business Management",
    description:
      "Systems that help organizations manage operations, customers, staff, and information from a single, reliable platform.",
    outcomes: ["Centralized operations", "Customer & staff management", "Real-time reporting", "Automated workflows"],
  },
  {
    slug: "education-technology",
    icon: "education",
    title: "Education Technology",
    description:
      "Platforms for schools, academies, training organizations, and educational institutions to manage learning and administration.",
    outcomes: ["Student & parent portals", "Course & enrollment management", "Assessments & grading", "Communication tools"],
  },
  {
    slug: "ecommerce-solutions",
    icon: "ecommerce",
    title: "E-Commerce",
    description:
      "Digital commerce platforms that simplify selling, payments, inventory, and customer management across channels.",
    outcomes: ["Optimized checkout", "Multi-channel sales", "Inventory & orders", "Customer accounts"],
  },
  {
    slug: "organization-nonprofit",
    icon: "org",
    title: "Organization & Nonprofit Solutions",
    description:
      "Websites and platforms that help organizations communicate their mission, manage programs, and engage their communities.",
    outcomes: ["Mission storytelling", "Program management", "Donations & memberships", "Community engagement"],
  },
  {
    slug: "customer-portals",
    icon: "portal",
    title: "Customer Portals",
    description:
      "Secure portals where customers, parents, members, staff, or partners can access information and self-service tools.",
    outcomes: ["Secure authentication", "Self-service access", "Document & data access", "Role-based permissions"],
  },
  {
    slug: "custom-platforms",
    icon: "platform",
    title: "Custom Platforms",
    description:
      "Purpose-built products designed around unique organizational workflows that no off-the-shelf tool can serve.",
    outcomes: ["Tailored architecture", "Bespoke workflows", "Scalable foundation", "Long-term ownership"],
  },
];

export const projects: Project[] = [
  {
    slug: "northwind-academy-portal",
    title: "Northwind Academy Learning Portal",
    client: "Northwind Academy",
    industry: "Education",
    summary:
      "A unified learning and administration platform connecting students, parents, and staff across a growing academy network.",
    services: ["Web Application", "UI/UX Design", "API Integration"],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Supabase"],
    cover: "education portal dashboard students",
    accent: "#3b6bff",
    overview:
      "Northwind Academy needed to replace fragmented spreadsheets and paper records with a single platform that could manage students, enrollment, assessments, and parent communication across multiple campuses.",
    challenge:
      "Administrators were losing hours to manual record-keeping, parents had no visibility into progress, and teachers maintained separate, inconsistent systems. The academy needed one source of truth that was simple enough for non-technical staff to use daily.",
    solution:
      "We designed a role-based portal with distinct experiences for administrators, teachers, students, and parents. Enrollment, grading, attendance, and communication flow through one connected system, with real-time notifications keeping every party informed.",
    development:
      "The platform is built on React and TypeScript with a Node.js API layer over PostgreSQL. Supabase handles authentication and row-level security, ensuring each user only accesses data appropriate to their role. The architecture supports multi-campus expansion without rework.",
    results: [
      { label: "Admin time saved", value: "60%" },
      { label: "Parent engagement", value: "+3x" },
      { label: "Campuses onboarded", value: "5" },
      { label: "Uptime", value: "99.9%" },
    ],
    gallery: ["learning portal dashboard", "student gradebook interface", "parent mobile view education"],
  },
  {
    slug: "verde-marketplace-commerce",
    title: "Verde Marketplace Commerce Platform",
    client: "Verde Goods",
    industry: "E-Commerce",
    summary:
      "A scalable commerce platform powering multi-vendor sales, secure checkout, and real-time inventory across regions.",
    services: ["E-Commerce", "Web Development", "API Integration"],
    stack: ["React", "Node.js", "PostgreSQL", "Paystack", "Cloudinary"],
    cover: "ecommerce store checkout product grid",
    accent: "#10d39a",
    overview:
      "Verde Goods wanted to move from a single-brand store to a multi-vendor marketplace, enabling independent sellers to list products while keeping checkout, fulfillment, and payouts unified.",
    challenge:
      "The existing store couldn't handle multiple sellers, split payouts, or regional inventory. Manual reconciliation was creating delays and eroding seller trust.",
    solution:
      "We built a marketplace architecture with seller onboarding, per-vendor dashboards, split payments, and automated payout scheduling. Inventory syncs in real time, and buyers experience a single, cohesive checkout regardless of how many sellers are in their cart.",
    development:
      "React powers the storefront and seller dashboards. A Node.js service layer manages orders, payouts, and inventory over PostgreSQL. Paystack handles split payments, and Cloudinary delivers optimized product imagery.",
    results: [
      { label: "Sellers onboarded", value: "120+" },
      { label: "Checkout conversion", value: "+42%" },
      { label: "Payout accuracy", value: "100%" },
      { label: "Page load", value: "1.1s" },
    ],
    gallery: ["marketplace storefront", "seller dashboard analytics", "checkout flow ecommerce"],
  },
  {
    slug: "atlas-operations-management",
    title: "Atlas Operations Management System",
    client: "Atlas Logistics",
    industry: "Business Management",
    summary:
      "An internal operations platform replacing spreadsheets with real-time tracking, reporting, and automated workflows.",
    services: ["Business Software", "Custom Software", "API Integration"],
    stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL"],
    cover: "logistics dashboard operations analytics",
    accent: "#5a8eff",
    overview:
      "Atlas Logistics managed dispatch, fleet, and client billing across disconnected spreadsheets, leading to errors and slow reporting.",
    challenge:
      "Operations managers had no real-time view of fleet status, invoicing was manual, and reporting required days of compilation each month.",
    solution:
      "We built a centralized operations system with live fleet tracking, automated invoicing, and a reporting layer that surfaces key metrics on demand. Dispatchers, finance, and management each get a tailored view of the same data.",
    development:
      "The frontend is React with TypeScript; the backend is Node.js and Express over PostgreSQL. Role-based access controls ensure sensitive financial data is isolated, and an event-driven architecture keeps dispatch and billing in sync.",
    results: [
      { label: "Reporting time", value: "-85%" },
      { label: "Invoice errors", value: "-92%" },
      { label: "Dispatch efficiency", value: "+35%" },
      { label: "Monthly reports", value: "Real-time" },
    ],
    gallery: ["operations dispatch dashboard", "fleet tracking map", "invoicing interface logistics"],
  },
  {
    slug: "lumina-nonprofit-platform",
    title: "Lumina Foundation Community Platform",
    client: "Lumina Foundation",
    industry: "Nonprofit",
    summary:
      "A mission-driven platform for program management, donations, and community engagement across chapters.",
    services: ["Web Development", "UI/UX Design", "API Integration"],
    stack: ["React", "TypeScript", "Supabase", "Cloudinary"],
    cover: "nonprofit community website donation",
    accent: "#34e3b0",
    overview:
      "Lumina Foundation needed a digital home that communicated its mission while managing programs, donations, and volunteer engagement across regional chapters.",
    challenge:
      "The foundation's website was static and disconnected from its programs. Donations were processed manually, and chapters had no way to manage their own activities.",
    solution:
      "We built a platform that tells the foundation's story clearly while giving each chapter tools to manage programs, events, and volunteers. Donations flow through a secure, automated pipeline with instant receipts.",
    development:
      "React and TypeScript form the frontend, with Supabase providing authentication, database, and storage. Chapter administrators get scoped permissions, and Cloudinary serves optimized imagery for storytelling.",
    results: [
      { label: "Online donations", value: "+210%" },
      { label: "Active chapters", value: "18" },
      { label: "Volunteer signups", value: "+140%" },
      { label: "Receipt automation", value: "100%" },
    ],
    gallery: ["nonprofit homepage mission", "chapter program dashboard", "donation flow community"],
  },
  {
    slug: "pulse-sports-analytics",
    title: "Pulse Sports Performance Analytics",
    client: "Pulse Sports Club",
    industry: "Sports",
    summary:
      "A performance analytics platform turning athlete data into actionable insights for coaches and management.",
    services: ["Web Application", "Custom Software", "UI/UX Design"],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
    cover: "sports analytics dashboard athletes performance",
    accent: "#3b6bff",
    overview:
      "Pulse Sports Club wanted to move from subjective assessments to data-driven performance management across its academy and senior teams.",
    challenge:
      "Coaches tracked athletes in notebooks, data was scattered, and there was no way to compare performance over time or across squads.",
    solution:
      "We built an analytics platform that captures match and training data, visualizes trends, and gives coaches and management a shared view of each athlete's development.",
    development:
      "React with TypeScript powers the dashboards. A Node.js API with Prisma and PostgreSQL manages athlete data, with role-based access separating coaching staff from management.",
    results: [
      { label: "Athletes tracked", value: "240+" },
      { label: "Coach time per report", value: "-70%" },
      { label: "Squads managed", value: "12" },
      { label: "Data accuracy", value: "98%" },
    ],
    gallery: ["sports athlete performance dashboard", "team analytics charts", "coach mobile view sports"],
  },
  {
    slug: "harbor-saas-billing",
    title: "Harbor SaaS Billing & Subscription Engine",
    client: "Harbor Cloud",
    industry: "SaaS",
    summary:
      "A subscription billing engine handling plans, usage metering, invoicing, and dunning for a growing SaaS product.",
    services: ["Custom Software", "API Integration", "Business Software"],
    stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL"],
    cover: "saas billing dashboard subscription",
    accent: "#10d39a",
    overview:
      "Harbor Cloud needed to replace a manual billing process with a subscription engine that could meter usage, automate invoicing, and handle failed payments gracefully.",
    challenge:
      "Usage-based billing was calculated manually, failed payments weren't retried, and finance had no reliable forecast of recurring revenue.",
    solution:
      "We built a billing engine that meters usage in real time, generates accurate invoices, and runs an automated dunning sequence. Finance gets a live view of MRR, churn, and outstanding revenue.",
    development:
      "The engine runs on Node.js and Express with PostgreSQL for transactional integrity. React dashboards expose billing data to finance and customer success, with webhooks integrating the customer-facing app.",
    results: [
      { label: "Failed payment recovery", value: "+58%" },
      { label: "Billing accuracy", value: "100%" },
      { label: "MRR visibility", value: "Real-time" },
      { label: "Manual work", value: "-90%" },
    ],
    gallery: ["saas billing dashboard", "subscription plans interface", "revenue analytics charts"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    icon: "compass",
    title: "Discover",
    description: "We start by understanding the business, its users, goals, and the real problem behind the request.",
    activities: ["Stakeholder interviews", "User & market research", "Requirements mapping", "Success metrics"],
  },
  {
    number: "02",
    icon: "strategy",
    title: "Strategize",
    description: "We define the product structure, technology choices, scope, and a phased roadmap that manages risk.",
    activities: ["Product & scope definition", "Architecture decisions", "Roadmap & milestones", "Risk planning"],
  },
  {
    number: "03",
    icon: "pen",
    title: "Design",
    description: "We create the user experience, interface, and visual system — validated before a line of production code.",
    activities: ["UX flows & wireframes", "Interface design", "Design system", "Prototyping & validation"],
  },
  {
    number: "04",
    icon: "build",
    title: "Build",
    description: "We develop, integrate, test, and refine — shipping in iterations with continuous feedback.",
    activities: ["Iterative development", "Integrations & APIs", "Quality assurance", "Performance tuning"],
  },
  {
    number: "05",
    icon: "launch",
    title: "Launch & Grow",
    description: "We deploy, monitor, and continue improving — partnering beyond release as the product grows.",
    activities: ["Deployment & monitoring", "Analytics & insights", "Ongoing improvements", "Long-term support"],
  },
];

export const insights: Insight[] = [
  {
    slug: "building-better-business-websites",
    title: "Building Better Business Websites: What Actually Matters",
    category: "Web Development",
    excerpt:
      "A business website is a tool, not a brochure. The decisions that separate effective sites from expensive ones.",
    date: "2026-07-14",
    readTime: "6 min read",
    author: "DanovaLab",
    cover: "modern business website laptop",
    content: [
      {
        heading: "Purpose before aesthetics",
        body: "Most business websites fail not because they look bad, but because they were built without a clear purpose. Before a single pixel is designed, a site needs to answer what it should do: generate leads, build credibility, enable self-service, or close sales. Every section should trace back to one of those outcomes.",
      },
      {
        heading: "Speed is a feature",
        body: "Performance directly affects conversion and credibility. A site that loads in under two seconds communicates competence; one that takes five communicates the opposite. Optimizing images, reducing JavaScript, and serving from a modern edge network are not technical luxuries — they are business decisions.",
      },
      {
        heading: "Structure for the visitor",
        body: "Visitors arrive with a question. The architecture of the site should answer that question as quickly as possible. Clear navigation, logical hierarchy, and scannable content let a prospect find what they need without thinking about the interface itself.",
      },
      {
        heading: "Maintainability is ownership",
        body: "A site that only the original developer can update is a liability. Building on a structured, documented foundation means the business owns its digital presence and can evolve it without starting over.",
      },
    ],
  },
  {
    slug: "digital-transformation-that-sticks",
    title: "Digital Transformation That Actually Sticks",
    category: "Digital Transformation",
    excerpt:
      "Why most digital transformation efforts stall — and the practical patterns that help organizations follow through.",
    date: "2026-06-28",
    readTime: "8 min read",
    author: "DanovaLab",
    cover: "digital transformation team office",
    content: [
      {
        heading: "Start with a real workflow",
        body: "Transformation fails when it begins with a platform rather than a problem. The initiatives that succeed identify a specific, painful workflow and improve it measurably. Momentum compounds from there.",
      },
      {
        heading: "Bring users into the process",
        body: "The people who will use a system daily are the best source of truth about what it needs to do. Involving them early prevents the most expensive failure: building something polished that no one adopts.",
      },
      {
        heading: "Ship in phases",
        body: "Big-bang launches are high-risk and slow to deliver value. Phased delivery lets a business capture returns sooner, learn from real usage, and adjust before committing to the next phase.",
      },
    ],
  },
  {
    slug: "website-performance-as-business-asset",
    title: "Website Performance Is a Business Asset",
    category: "Performance",
    excerpt:
      "How page speed, Core Web Vitals, and reliability translate directly into revenue, trust, and search visibility.",
    date: "2026-06-02",
    readTime: "5 min read",
    author: "DanovaLab",
    cover: "website performance analytics speed",
    content: [
      {
        heading: "Speed converts",
        body: "Studies consistently show that faster sites convert better. Reducing load time from five seconds to two can lift conversion by double-digit percentages. Performance is one of the few optimizations that improves both user experience and the bottom line simultaneously.",
      },
      {
        heading: "Search rewards speed",
        body: "Modern search engines factor Core Web Vitals into rankings. A fast, stable site is more likely to be visible to the exact audience searching for what you offer.",
      },
      {
        heading: "Reliability builds trust",
        body: "A site that is consistently available and responsive signals that the business behind it is reliable. Downtime and slowness quietly erode credibility with every visitor who experiences them.",
      },
    ],
  },
  {
    slug: "business-automation-without-the-hype",
    title: "Business Automation Without the Hype",
    category: "Business Automation",
    excerpt:
      "Practical automation that removes repetitive work — without buying tools nobody uses.",
    date: "2026-05-18",
    readTime: "7 min read",
    author: "DanovaLab",
    cover: "business automation workflow software",
    content: [
      {
        heading: "Automate the boring, not the complex",
        body: "The best automation candidates are repetitive, rule-based, and error-prone: invoicing, notifications, data entry, reconciliation. Automating these frees people to do work that actually requires judgment.",
      },
      {
        heading: "Integrate before you automate",
        body: "Automation fails when the underlying systems don't talk to each other. Connecting your tools — payments, CRM, inventory, communication — is the foundation that makes meaningful automation possible.",
      },
      {
        heading: "Keep humans in the loop",
        body: "The most effective automation augments people rather than replacing them entirely. Keeping a human checkpoint at key decisions prevents small errors from compounding into large ones.",
      },
    ],
  },
  {
    slug: "ux-design-for-conversion",
    title: "UX Design for Conversion, Not Just Aesthetics",
    category: "UX Design",
    excerpt:
      "The interface decisions that guide visitors toward action — grounded in clarity, not tricks.",
    date: "2026-04-30",
    readTime: "6 min read",
    author: "DanovaLab",
    cover: "ux design interface wireframe",
    content: [
      {
        heading: "Clarity beats cleverness",
        body: "Visitors don't convert because they're impressed; they convert because they understand. A clear value proposition, obvious next steps, and a frictionless path to action outperform any visual flourish.",
      },
      {
        heading: "Reduce cognitive load",
        body: "Every choice you ask a visitor to make is a chance for them to leave. Limiting options, grouping related actions, and surfacing the most important path reduces the mental effort required to act.",
      },
      {
        heading: "Design the empty states",
        body: "The moments where nothing happens — an empty cart, a blank dashboard, a submitted form — are where most experiences break down. Designing those moments intentionally is what separates a complete product from a partial one.",
      },
    ],
  },
  {
    slug: "technology-strategy-for-growing-businesses",
    title: "Technology Strategy for Growing Businesses",
    category: "Technology Strategy",
    excerpt:
      "How to make technology decisions that support growth instead of creating future debt.",
    date: "2026-04-08",
    readTime: "8 min read",
    author: "DanovaLab",
    cover: "technology strategy business growth",
    content: [
      {
        heading: "Choose for the next phase, not the final one",
        body: "Over-engineering for a future that may never arrive is as costly as under-engineering for the present. The right choice is the one that serves the current phase while leaving a clear path to the next.",
      },
      {
        heading: "Own your data",
        body: "Businesses that depend on closed platforms for their core data are renting their own foundation. Structuring your data layer so it remains portable is a strategic decision, not just a technical one.",
      },
      {
        heading: "Plan for maintainability",
        body: "The cost of software is not in building it; it's in living with it. Choosing technologies and patterns that can be maintained, extended, and handed off protects the investment long after launch.",
      },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Testimonial placeholder",
    role: "Operations Director",
    company: "Sample Client",
    quote:
      "This is a placeholder testimonial. Replace it with a real quote from a client describing the outcome DanovaLab delivered, the working relationship, and the measurable result.",
    initials: "SC",
  },
  {
    name: "Testimonial placeholder",
    role: "Founder",
    company: "Sample Startup",
    quote:
      "This is a placeholder testimonial. Replace it with a real quote that speaks to how DanovaLab understood the business problem and delivered a solution that held up under real use.",
    initials: "SS",
  },
  {
    name: "Testimonial placeholder",
    role: "Executive Director",
    company: "Sample Organization",
    quote:
      "This is a placeholder testimonial. Replace it with a real quote from an organization DanovaLab has partnered with, focused on trust, communication, and long-term impact.",
    initials: "SO",
  },
];

export const industries: Industry[] = [
  { name: "Education", icon: "education", description: "Learning platforms, school management, and parent engagement tools." },
  { name: "E-Commerce", icon: "ecommerce", description: "Storefronts, marketplaces, and commerce operations at scale." },
  { name: "Sports", icon: "rocket", description: "Performance analytics, club management, and athlete development." },
  { name: "Entertainment", icon: "platform", description: "Content platforms, ticketing, and audience experiences." },
  { name: "Nonprofits", icon: "org", description: "Mission platforms, donations, and community program management." },
  { name: "Professional Services", icon: "business", description: "Client portals, scheduling, and practice management systems." },
  { name: "Startups", icon: "launch", description: "MVPs, scalable architecture, and product engineering from day one." },
  { name: "Small & Medium Businesses", icon: "software", description: "Operations software, automation, and digital presence." },
];

export const techGroups: TechGroup[] = [
  { label: "Frontend", items: ["React", "TypeScript", "JavaScript", "Vite", "Tailwind CSS"] },
  { label: "Backend", items: ["Node.js", "Express", "REST APIs", "PostgreSQL", "Prisma"] },
  { label: "Platform & Data", items: ["Supabase", "MongoDB", "Cloudinary", "Cloud infrastructure"] },
  { label: "Payments & Integrations", items: ["Paystack", "Stripe", "Webhooks", "Third-party APIs"] },
  { label: "DevOps & Delivery", items: ["Git", "Vercel", "CI/CD", "Monitoring"] },
];

export const trustStrip = [
  "Digital Strategy",
  "Product Design",
  "Web Development",
  "Software Engineering",
  "Business Solutions",
];

export const whyDanovaLab = [
  {
    icon: "business" as IconName,
    title: "Business-Focused Development",
    description:
      "We don't build technology for technology's sake. Every decision traces back to a real business objective.",
  },
  {
    icon: "layers" as IconName,
    title: "Modern Engineering",
    description:
      "We use current development practices and technologies to create reliable, maintainable digital products.",
  },
  {
    icon: "rocket" as IconName,
    title: "Scalable Architecture",
    description:
      "Solutions are designed with future growth and long-term maintainability in mind, not just the first release.",
  },
  {
    icon: "eye" as IconName,
    title: "User-Centered Design",
    description:
      "Every interface is built to be intuitive, accessible, and easy to use — for real people doing real work.",
  },
  {
    icon: "shield" as IconName,
    title: "Transparent Process",
    description:
      "Clients always understand what is being built, why it's being built, and what comes next.",
  },
  {
    icon: "handshake" as IconName,
    title: "Long-Term Partnership",
    description:
      "DanovaLab is a technology partner — not a one-time contractor that disappears after launch.",
  },
];
