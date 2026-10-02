import type {
    Service,
    Solution,
    Project,
    ProcessStep,
    Insight,
    Testimonial,
    Industry,
    TechGroup,
    IconName,
} from "./types";

import xtiim from "../assesst/xtiim.png";
import IvyHotel from "../assesst/IvyHotel.png";
import hustle from "../assesst/hustle.png";
import chat from "../assesst/chat.png";

export const services: Service[] = [
    {
        slug: "web-development",
        icon: "web",
        title: "Web Development",
        short: "Professional corporate websites, marketing sites, landing pages, and high-performance web experiences.",
        description:
            "We build fast, accessible, and search-optimized websites that represent businesses with clarity and convert visitors into customers.",
        features: [
            "Corporate & marketing sites",
            "Landing pages & portals",
            "Core Web Vitals optimized",
            "CMS integration",
        ],
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
        outcomes: [
            "Centralized operations",
            "Customer & staff management",
            "Real-time reporting",
            "Automated workflows",
        ],
    },
    {
        slug: "education-technology",
        icon: "education",
        title: "Education Technology",
        description:
            "Platforms for schools, academies, training organizations, and educational institutions to manage learning and administration.",
        outcomes: [
            "Student & parent portals",
            "Course & enrollment management",
            "Assessments & grading",
            "Communication tools",
        ],
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
        slug: "hustle-hub-job-platform",
        title: "Hustle-Hub Job Platform",
        client: "Hustle-Hub",
        image: hustle,
        industry: "Jobs & Recruitment",
        summary:
            "A job-platform application designed to connect people with work opportunities through a dedicated web experience.",
        services: ["Web Application", "Frontend Development", "Backend/API Development"],
        stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "REST APIs"],
        cover: "job search platform web application interface",
        accent: "#d6a84f",
        overview:
            "Hustle-Hub was built as a job platform to help users discover and engage with work opportunities online.",
        challenge:
            "The application needed a clear interface for a job-seeking workflow and a backend to support application data and platform features.",
        solution:
            "Developed the job-platform experience and supporting application functionality, with the frontend and backend working together through APIs.",
        development:
            "The project uses a modern JavaScript stack, with React on the frontend and Node.js/Express APIs for server-side functionality. Only implemented features should be listed in the live project details.",
        results: [],
        gallery: [
            "job platform listings interface",
            "job seeker dashboard web app",
            "recruitment application interface",
        ],
    },

    {
        slug: "hotel-web-admin-portal",
        title: "Hotel Website & Admin Portal",
        client: "Hotel",
        image: IvyHotel,

        industry: "Hospitality",
        summary:
            "A hotel website and admin portal designed to showcase the property, services, rooms and manage website content.",
        services: ["Website Development", "Admin Portal", "Frontend Development", "API Integration"],
        stack: ["React", "JavaScript", "Node.js", "REST APIs"],
        cover: "modern hotel website and admin dashboard",
        accent: "#d6a84f",
        overview:
            "A complete hotel web platform combining a customer-facing website with an admin portal for managing hotel content and operations.",
        challenge:
            "The hotel needed a professional online presence where visitors could explore the property, view rooms and services, while administrators could manage website information from a centralized portal.",
        solution:
            "Built a responsive hotel website alongside an admin portal, connecting the frontend experience with backend APIs for managing and displaying dynamic hotel content.",
        development:
            "Implemented the website and administrative interface using React, JavaScript, Node.js and REST APIs, with a focus on responsive layouts, reusable components and reliable data management.",
        results: [],
        gallery: [
            "modern hotel website homepage",
            "hotel rooms and services page",
            "hotel admin dashboard interface",
            "hotel content management portal",
        ],
    },

    {
        slug: "xtiim-music-website",
        title: "XTiiM Music Website",
        client: "XTiiM",
        image: xtiim,

        industry: "Music & Entertainment",
        summary: "A responsive website for a music brand to present its releases, media, events, and online presence.",
        services: ["Website Development", "Responsive UI", "Content Presentation"],
        stack: ["React", "TypeScript", "JavaScript", "CSS"],
        cover: "music artist website releases events",
        accent: "#d6a84f",
        overview:
            "XTiiM needed a dedicated online presence where visitors could discover the artist and explore music-related content.",
        challenge:
            "The website needed to present the artist's brand and content clearly across desktop and mobile screens.",
        solution:
            "Built a responsive artist website focused on music releases, media, events, and helping audiences discover the artist online.",
        development:
            "The interface was developed with a component-based frontend and responsive layouts for different screen sizes.",
        results: [],
        gallery: ["music artist website homepage", "music releases website interface", "artist media website"],
    },
    {
        slug: "chatflow-messaging-app",
        title: "ChatFlow Real-Time Messaging App",
        client: "ChatFlow",
        image: chat,

        industry: "Communication",
        summary: "A real-time messaging application with conversation management and online/offline presence features.",
        services: ["Web Application", "Real-Time Features", "API Development"],
        stack: ["React", "TypeScript", "Socket.io", "Node.js", "Express", "Socket.IO", "MongoDB", "JWT"],
        cover: "real time messaging application chat interface",
        accent: "#d6a84f",
        overview: "ChatFlow was developed to provide a web-based space for users to communicate through conversations.",
        challenge:
            "A messaging interface needs responsive conversation views and timely updates to messages and user presence.",
        solution:
            "Built a chat experience with conversation management and real-time communication features, including online/offline presence.",
        development:
            "The application combines a React/TypeScript frontend with a Node.js backend and Socket.IO for real-time communication.",
        results: [],
        gallery: ["chat application conversation interface", "messaging app contact list", "real time chat web app"],
    },
    {
        slug: "school-management-portal",
        title: "School Management Portal",
        client: "School Management Portal",
        industry: "Education",
        image: "https://example.com/hotel-image.jpg",
        summary:
            "A web-based school management project for organizing school information and administrative workflows.",
        services: ["Web Application", "Dashboard Development", "API Integration"],
        stack: ["React", "JavaScript", "Node.js", "Express", "MongoDB", "REST APIs"],
        cover: "school management portal dashboard interface",
        accent: "#d6a84f",
        overview:
            "The project focused on bringing school-related information and administrative tasks into a web-based portal.",
        challenge:
            "School workflows need information to be organized in a consistent interface that staff can access and manage.",
        solution:
            "Developed a school management portal structure for presenting and managing school data through a web application.",
        development:
            "The application uses a JavaScript frontend/backend approach. Add specific modules such as attendance, results, fees, or parent access only where they are implemented in the actual project.",
        results: [],
        gallery: ["school management dashboard", "student records portal interface", "school administration web app"],
    },
    {
        slug: "htt-academy-website",
        title: "HTT Academy Website",
        client: "HTT Academy",
        industry: "Sports & Education",
        image: "https://example.com/hotel-image.jpg",
        summary:
            "Development and maintenance of the academy website, including responsive pages, programme information, and registration-related improvements.",
        services: ["Website Development", "UI Implementation", "Production Maintenance"],
        stack: ["React", "TypeScript", "JavaScript", "REST APIs", "Cloudflare"],
        cover: "football academy website training programmes",
        accent: "#d6a84f",
        overview:
            "HTT Academy needed a website that presents its programmes and academy information while supporting prospective player registrations.",
        challenge:
            "The site required ongoing feature work and dependable registration flows, alongside production routing, API, and deployment configuration.",
        solution:
            "Worked on the production website, responsive page updates, programme and centre information, and improvements to the registration experience.",
        development:
            "Frontend work uses React and TypeScript. Registration-related work includes form flow and validation, API integration, and production troubleshooting.",
        results: [],
        gallery: [
            "football academy website homepage",
            "sports academy programme page",
            "football academy registration form",
        ],
    },
    {
        slug: "htt-academy-registration-crm",
        title: "HTT Academy Registration & CRM Integration",
        client: "HTT Academy",
        industry: "Sports & Education",
        image: "https://example.com/hotel-image.jpg",
        summary:
            "A player registration workflow connected to HubSpot CRM through a lightweight Cloudflare Worker integration.",
        services: ["Workflow Development", "CRM Integration", "API Integration"],
        stack: ["React", "TypeScript", "HubSpot CRM", "Cloudflare Workers", "REST APIs"],
        cover: "registration workflow crm integration dashboard",
        accent: "#d6a84f",
        overview:
            "The academy registration process needed to capture player and parent or guardian details and pass registration records into the CRM.",
        challenge:
            "The workflow needed to collect registration information reliably and connect the website to HubSpot without requiring a larger custom CRM system.",
        solution:
            "Implemented registration steps for centre and programme selection, player and guardian details, review, and submission, with a Cloudflare Worker connecting the flow to HubSpot.",
        development:
            "The project combines a React/TypeScript registration interface with a lightweight Cloudflare Worker and HubSpot CRM integration. Payment and registration states should be described according to the deployed implementation.",
        results: [],
        gallery: [
            "academy registration form interface",
            "CRM registration workflow",
            "sports academy registration review page",
        ],
    },
    {
        slug: "fairshare-fintech",
        title: "FairShare Fintech Application",
        client: "FairShare",
        image: "https://example.com/hotel-image.jpg",
        industry: "Financial Technology",
        summary: "A fintech application project focused on a digital financial product experience.",
        services: ["Web Application", "Frontend Development", "API Integration"],
        stack: ["React", "JavaScript", "Node.js", "REST APIs"],
        cover: "fintech web application account dashboard",
        accent: "#d6a84f",
        overview:
            "FairShare was a fintech application project focused on presenting financial product workflows through a web interface.",
        challenge:
            "Financial product interfaces need clear navigation and careful presentation of account and transaction information.",
        solution:
            "Contributed to the application's web experience and implementation. Specific financial workflows should be documented only where confirmed in the project.",
        development:
            "Use the exact technologies and implemented features from the project repository when expanding this case study.",
        results: [],
        gallery: [
            "fintech dashboard interface",
            "financial web application screen",
            "digital finance product interface",
        ],
    },
    {
        slug: "elevate-bradford-events",
        title: "Elevate Bradford Events Website",
        client: "Elevate Bradford",
        industry: "Events",
        image: "https://example.com/hotel-image.jpg",
        summary:
            "An events website for presenting event information and giving visitors a clear path to explore event details and booking options.",
        services: ["Website Development", "Frontend Development", "Interactive UI"],
        stack: ["React", "TypeScript", "Vite", "CSS"],
        cover: "events website event cards booking interface",
        accent: "#d6a84f",
        overview:
            "Elevate Bradford needed an event-focused website where visitors could browse available experiences and view event details.",
        challenge:
            "Event information and booking options needed to be easy to find and interact with across screen sizes.",
        solution:
            "Implemented event listings, featured event sections, event detail views, and booking modal interactions for the available experiences.",
        development:
            "The frontend uses React, TypeScript, and Vite, with reusable components for event cards and interactive details.",
        results: [],
        gallery: ["events website homepage", "event listing cards interface", "event details booking modal"],
    },
    {
        slug: "artisan-hub",
        title: "ArtisanHub Service Marketplace",
        client: "ArtisanHub",
        image: "https://example.com/hotel-image.jpg",
        industry: "Services Marketplace",
        summary:
            "A marketplace application with account authentication, real-time chat, file uploads, and payment-related API workflows.",
        services: ["Web Application", "Backend Development", "API Documentation", "Integrations"],
        stack: [
            "TypeScript",
            "Node.js",
            "Sequelize",
            "PostgreSQL",
            "Supabase",
            "Socket.IO",
            "JWT",
            "Paystack",
            "Cloudinary",
        ],
        cover: "service marketplace dashboard messaging interface",
        accent: "#d6a84f",
        overview:
            "ArtisanHub was developed as a service marketplace with backend features supporting user accounts and communication.",
        challenge:
            "The application required structured API routes, secure authentication, real-time messaging, and integrations for common marketplace workflows.",
        solution:
            "Built backend functionality for authentication, real-time chat, uploads, email workflows, and Paystack payment/webhook handling.",
        development:
            "The backend uses TypeScript and Node.js with Sequelize and PostgreSQL, Socket.IO for real-time chat, JWT-based authentication, Cloudinary uploads, and API documentation.",
        results: [],
        gallery: ["service marketplace web app", "marketplace chat interface", "service provider dashboard"],
    },
    {
        slug: "tobago-reads",
        title: "Tobago Reads International Website",
        client: "Tobago Reads International",
        industry: "Charity & Nonprofit",
        image: "https://example.com/hotel-image.jpg",
        summary:
            "A website for a charity organization to communicate its mission and make its work easier to discover online.",
        services: ["Website Development", "Responsive Design", "Content Presentation"],
        stack: ["React", "JavaScript", "CSS"],
        cover: "charity literacy nonprofit organization website",
        accent: "#d6a84f",
        overview:
            "Tobago Reads International needed an online presence to introduce the organization and present its literacy-focused work to visitors.",
        challenge:
            "The website needed to communicate the organization's purpose and information in a clear, accessible format.",
        solution:
            "Built a responsive organization website with a content-led layout to help visitors learn about the charity and its work.",
        development:
            "The project focused on frontend implementation, responsive page layouts, and presenting organizational information clearly.",
        results: [],
        gallery: [
            "literacy charity website homepage",
            "nonprofit organization website content",
            "charity community website",
        ],
    },
    {
        slug: "support-cycle",
        title: "Support Cycle Web Application",
        client: "Support Cycle",
        industry: "Web Application",
        image: "https://example.com/hotel-image.jpg",
        summary: "A MERN-stack application built to support a focused digital service workflow.",
        services: ["Web Application", "Frontend Development", "Backend Development"],
        stack: ["MongoDB", "Express", "React", "Node.js", "JavaScript", "REST APIs"],
        cover: "web application dashboard interface",
        accent: "#d6a84f",
        overview: "Support Cycle was developed as a full-stack web application using the MERN stack.",
        challenge: "The application needed a connected frontend and backend to support its core user workflow.",
        solution:
            "Built application functionality using a React frontend and Node.js/Express backend backed by MongoDB.",
        development:
            "The project follows a MERN architecture. Add detailed feature descriptions after confirming the implemented modules in the codebase.",
        results: [],
        gallery: ["web app dashboard", "application user interface", "MERN stack application screen"],
    },
];

export const processSteps: ProcessStep[] = [
    {
        number: "01",
        icon: "compass",
        title: "Discover",
        description:
            "We start by understanding the business, its users, goals, and the real problem behind the request.",
        activities: ["Stakeholder interviews", "User & market research", "Requirements mapping", "Success metrics"],
    },
    {
        number: "02",
        icon: "strategy",
        title: "Strategize",
        description:
            "We define the product structure, technology choices, scope, and a phased roadmap that manages risk.",
        activities: ["Product & scope definition", "Architecture decisions", "Roadmap & milestones", "Risk planning"],
    },
    {
        number: "03",
        icon: "pen",
        title: "Design",
        description:
            "We create the user experience, interface, and visual system — validated before a line of production code.",
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
        excerpt: "Practical automation that removes repetitive work — without buying tools nobody uses.",
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
        excerpt: "The interface decisions that guide visitors toward action — grounded in clarity, not tricks.",
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
        excerpt: "How to make technology decisions that support growth instead of creating future debt.",
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
        quote: "This is a placeholder testimonial. Replace it with a real quote from a client describing the outcome DanovaLab delivered, the working relationship, and the measurable result.",
        initials: "SC",
    },
    {
        name: "Testimonial placeholder",
        role: "Founder",
        company: "Sample Startup",
        quote: "This is a placeholder testimonial. Replace it with a real quote that speaks to how DanovaLab understood the business problem and delivered a solution that held up under real use.",
        initials: "SS",
    },
    {
        name: "Testimonial placeholder",
        role: "Executive Director",
        company: "Sample Organization",
        quote: "This is a placeholder testimonial. Replace it with a real quote from an organization DanovaLab has partnered with, focused on trust, communication, and long-term impact.",
        initials: "SO",
    },
];

export const industries: Industry[] = [
    {
        name: "Education",
        icon: "education",
        description: "Learning platforms, school management, and parent engagement tools.",
    },
    {
        name: "E-Commerce",
        icon: "ecommerce",
        description: "Storefronts, marketplaces, and commerce operations at scale.",
    },
    {name: "Sports", icon: "rocket", description: "Performance analytics, club management, and athlete development."},
    {name: "Entertainment", icon: "platform", description: "Content platforms, ticketing, and audience experiences."},
    {name: "Nonprofits", icon: "org", description: "Mission platforms, donations, and community program management."},
    {
        name: "Professional Services",
        icon: "business",
        description: "Client portals, scheduling, and practice management systems.",
    },
    {
        name: "Startups",
        icon: "launch",
        description: "MVPs, scalable architecture, and product engineering from day one.",
    },
    {
        name: "Small & Medium Businesses",
        icon: "software",
        description: "Operations software, automation, and digital presence.",
    },
];

export const techGroups: TechGroup[] = [
    {label: "Frontend", items: ["React", "TypeScript", "JavaScript", "Vite", "Tailwind CSS"]},
    {label: "Backend", items: ["Node.js", "Express", "REST APIs", "PostgreSQL", "Prisma"]},
    {label: "Platform & Data", items: ["Supabase", "MongoDB", "Cloudinary", "Cloud infrastructure"]},
    {label: "Payments & Integrations", items: ["Paystack", "Stripe", "Webhooks", "Third-party APIs"]},
    {label: "DevOps & Delivery", items: ["Git", "Vercel", "CI/CD", "Monitoring"]},
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
        description: "Clients always understand what is being built, why it's being built, and what comes next.",
    },
    {
        icon: "handshake" as IconName,
        title: "Long-Term Partnership",
        description: "DanovaLab is a technology partner — not a one-time contractor that disappears after launch.",
    },
];
