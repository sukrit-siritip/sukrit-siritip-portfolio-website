export const FEATURES = {
  interactiveBackground: true,
  customCursor: true,
};

export const LINKS = {
  resume:
    "https://drive.google.com/file/d/1jed8DGp1ApumsqjbSuP3DrLMALZTwfEs/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/sukrit-siritip-82b976324",
  lineId: "@salvations666",
  line: "https://line.me/ti/p/~salvations666",
  github: "https://github.com/sukrit-siritip",
  email: "sukritsiritip@gmail.com",
};

export const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "side", label: "Side Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const PROFILE = {
  firstName: "Sukrit",
  lastName: "Siritip",
  role: "Frontend Developer",
  location: "Bangkok, Thailand",
  bio: "Building enterprise web platforms with Next.js and React: component libraries, reporting dashboards, and content platforms shipped end-to-end.",
  photo: "/images/profile-suit.webp",
};

export const ABOUT = {
  lead: "Frontend Developer with a Software Engineering degree from Mae Fah Luang University, working with Next.js and React on large-scale enterprise systems, from shared component libraries to dashboards for operational and financial reporting.",
  body: "I care about the parts that make products hold together: a controlled design-system boundary over the UI framework, one API client that owns auth and token refresh, and editor output that renders pixel-identical on public pages.",
};

export const PROJECTS = [
  {
    title: "SAP & IT Expert Thailand",
    links: [{ href: "https://sapexpertthailand.com", label: "View live site", tone: "gold" }],
    description:
      "Content and media platform with an internal CMS for articles, events, authors, and admin tooling.",
    images: [1, 2, 3, 4, 5].map((n) => `/images/sap-${n}.webp`),
    imagePosition: "50% 0%",
    tags: ["HTML", "JavaScript", "CSS", "Next.js", "React", "Ant Design", "EditorJS", "Axios"],
    caseStudy: {
      challenge:
        "A SAP and IT consulting firm needed a place to publish articles and events, grow a following around its experts, and let a team of authors write and manage content on their own, without a developer in the loop for every post.",
      goal: "Ship a fast public site for readers and a CMS that makes writing, scheduling, and curating content simple, with editor output that looks exactly the same once published.",
      role: "Frontend Developer. Built the public site and the internal CMS end-to-end with Next.js and React.",
      period: { start: [2026, 2], end: null },
      responsibilities:
        "Built topic-based article hubs, reading pages with likes, author-following, view tracking and weekly rankings, global search, events, and author profiles. Implemented JWT auth with silent token refresh. Created an article editor on a custom EditorJS setup with 15+ plugins, thumbnail validation, scheduled publishing, and autosave drafts with recovery. Added an admin console with multi-filter search and ownership transfer, an event-setup flow with a guided Google Maps tour, and homepage highlight curation.",
    },
  },
  {
    title: "AMS Platform",
    label: "Enterprise platform",
    description:
      "Enterprise IT service platform used by NTT DATA teams and their customers, covering tickets, contracts, technician workforce, and operational/financial reporting dashboards.",
    images: [1, 2, 3].map((n) => `/images/ams-${n}.webp`),
    imagePosition: "50% 50%",
    tags: ["HTML", "JavaScript", "CSS", "Next.js", "React", "Ant Design", "ApexCharts", "Axios", "SheetJS"],
    caseStudy: {
      notice:
        "This project contains confidential company information, so only a high-level overview and mock-data screenshots can be shared here.",
      challenge:
        "Support teams handle a high volume of service requests, contracts, and technician schedules every day. Information was spread across many screens, making it slow to track work status and hard to get a clear view of operational and financial performance.",
      goal: "Give internal teams and customers one consistent place to manage requests and see the numbers that matter, with a UI that stays fast and familiar across every module.",
      role: "Frontend Developer. Joined as an intern and continued full-time, working on features, shared components, and reporting pages.",
      period: { start: [2025, 1], end: null },
      responsibilities:
        "Built a reusable component library on top of the UI framework so every module shares the same look and behavior. Developed dashboards and charts for operational and financial reporting, with Excel export. Integrated state and APIs across modules, and fixed production bugs and performance issues.",
    },
  },
];

export const SIDE_PROJECTS = [
  {
    title: "Skin Showdown",
    links: [
      { href: "https://github.com/sukrit-siritip/SkinShowdown", label: "GitHub", icon: "github" },
      { href: "https://skin-showdown-sukritsiritip.vercel.app/", label: "View live demo", tone: "gold" },
    ],
    description:
      "A fully functional skin marketplace for Hunt: Showdown with auth, cart and checkout, reviews, and an admin back office, backed by a 900+ item catalogue.",
    images: [1, 2, 3].map((n) => `/images/skin-${n}.webp`),
    imagePosition: "50% 0%",
    aspect: "16 / 10",
    tags: ["Next.js", "React", "Tailwind CSS", "Ant Design", "Supabase", "PostgreSQL", "Vercel", "Claude Code"],
    caseStudy: {
      challenge:
        "Build a believable, fully functional skin marketplace for Hunt: Showdown, not just a static mockup but a real storefront with auth, cart/checkout, reviews, and a proper admin back office. The catalogue needed real content at scale (900+ items), which meant sourcing and normalizing third-party data under an open license, reconciling messy real-world naming and categorization against a strict Postgres schema, all on a bleeding-edge stack (Next.js 16, React 19, Tailwind v4, Ant Design v6) with real breaking-change gotchas along the way.",
      goal: "Ship a portfolio centerpiece that shows full-stack range: a polished, responsive storefront matching a hand-crafted design spec, a secure Supabase data layer (RLS, audit logging, role-gated access), and admin tooling a non-technical store operator could run day to day.",
      role: "Sole developer and product owner. Drove scope, UX, architecture, and schema decisions, directed and reviewed implementation paired with Claude Code as an AI coding partner, and handled deployment and data sourcing end to end.",
      duration: { range: "September - October 2026", note: "~5 weeks, part-time" },
      responsibilities: [
        "Designed and built the storefront: catalogue with search, filter, and sort, item detail pages, cart, checkout with redeemable codes, reviews, favorites, and purchase history on Next.js 16 (App Router) and React 19.",
        "Built a role-gated admin back office: content management with image upload and processing, stock and redemption code management, homepage event/hero content (including YouTube embeds), and a full staff audit log.",
        "Modeled and iterated the Postgres schema in Supabase: RLS policies, triggers, generated fields, and a full category-taxonomy redesign as requirements evolved.",
        "Sourced and normalized 900+ real catalogue items from an external wiki under CC BY-SA, including automated image background removal and license attribution.",
        "Deployed and maintain the live app on Vercel with Supabase as the backend.",
      ],
    },
  },
];

export const EXPERIENCE = [
  {
    title: "Frontend Developer",
    company: "NTT Data Business Solutions (Thailand)",
    period: { start: [2025, 5], end: null },
    projects: [
      {
        name: "Application Management Service (AMS) Platform",
        paragraphs: [
          "Large-scale enterprise web application for IT service and support operations, covering ticket management, contract management, technician workforce management, and reporting. Developed and maintained the front-end, including a reusable component library layered on top of the UI framework and data visualization dashboards for operational and financial reporting. Responsibilities spanned feature development, state and API integration, and production debugging and performance fixes.",
        ],
      },
      {
        name: "SAP & IT Expert Thailand",
        paragraphs: [
          "A full content/media web platform for a SAP and IT consulting firm, built with Next.js and React. The public site covers a home page, topic-categorized article hubs, article and event reading pages with likes, author-following, view tracking and weekly popularity rankings, global search, event listings, public author profiles, and a JWT auth flow with silent token refresh.",
          "The internal CMS adds an article-writing tool on a custom EditorJS integration with 15+ plugins (image/attachment upload, blank-line-preserving paragraphs), thumbnail upload with client-side aspect-ratio and resolution validation, schedule-publish date pickers, and autosave drafts with recovery and unsaved-changes guards. It also includes an admin console with multi-dimension filtering and cross-author ownership transfer, an event-setup flow with independent registration and event periods and a guided in-app tour for embedding Google Maps, homepage highlight curation, and personal content/profile dashboards.",
        ],
      },
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "NTT Data Business Solutions (Thailand)",
    period: { start: [2025, 1], end: [2025, 4] },
    projects: [
      {
        name: "Application Management Service (AMS) Platform",
        paragraphs: [
          "Enterprise web application for IT service and support operations, built with Next.js, React, and Ant Design. Assisted in front-end development, contributing to select UI components and report pages under the guidance of the development team, and gained hands-on experience with component-based architecture and REST API integration.",
        ],
      },
    ],
  },
];

export const SKILL_GROUPS = [
  { title: "Core", items: ["HTML", "CSS", "JavaScript", "Node.js", "Git"] },
  {
    title: "Frameworks",
    items: ["React", "Next.js", "Ant Design", "Tailwind CSS", "ApexCharts", "EditorJS", "Axios", "SheetJS"],
  },
  {
    title: "Tools",
    items: ["Figma", "FigJam", "VS Code", "Postman", "Sourcetree", "ClickUp", "Jira", "Claude AI"],
  },
];

export const EDUCATION = {
  years: "2021 - 2025",
  school: "Mae Fah Luang University",
  degree: "B.Eng. Software Engineering · School of Applied Digital Technology",
  gpax: "3.70",
};

export const CONTACT = {
  heading: "Open to frontend roles, especially in Bangkok and nearby areas.",
  body: "The fastest way to reach me is email. I usually reply within a day.",
  footerLeft: "© 2026 Sukrit Siritip",
  footerRight: "Thank you for taking the time to visit. I look forward to working with you.",
};
