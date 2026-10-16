export const FEATURES = {
  interactiveBackground: true,
  customCursor: true,
};

export const LINKS = {
  resume:
    "https://drive.google.com/file/d/1ytkK68_WDu2eYhNMQeFkpCDO0u835nRG/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/sukrit-siritip-82b976324",
  lineId: "@salvations666",
  line: "https://line.me/ti/p/~salvations666",
  github: "https://github.com/sukrit-siritip",
  email: "sukritsiritip@gmail.com",
};

export const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const PROFILE = {
  firstName: "Sukrit",
  lastName: "Siritip",
  role: "Frontend Developer",
  location: "Bangkok, Thailand",
  bio: "Building enterprise web platforms with Next.js and React — component libraries, reporting dashboards, and content platforms shipped end-to-end.",
  photo: "/images/grad-src.webp",
};

export const ABOUT = {
  lead: "Frontend Developer with a Software Engineering degree from Mae Fah Luang University, working with Next.js and React on large-scale enterprise systems — from shared component libraries to dashboards for operational and financial reporting.",
  body: "I care about the parts that make products hold together — a controlled design-system boundary over the UI framework, one API client that owns auth and token refresh, and editor output that renders pixel-identical on public pages.",
};

const STACK_AMS = ["HTML", "JavaScript", "CSS", "Next.js", "React", "Ant Design", "ApexCharts", "Axios", "SheetJS"];
const STACK_SAP = ["HTML", "JavaScript", "CSS", "Next.js", "React", "Ant Design", "EditorJS", "Axios"];

export const EXPERIENCE = [
  {
    title: "Frontend Developer",
    company: "NTT Data Business Solutions (Thailand)",
    dates: "May 2025 — Present",
    duration: "1 yr 6 mos",
    projects: [
      {
        name: "Application Management Service (AMS) Platform",
        paragraphs: [
          "Large-scale enterprise web application for IT service and support operations — ticket management, contract management, technician workforce management, and reporting. Developed and maintained the front-end, including a reusable component library layered on top of the UI framework and data visualization dashboards for operational and financial reporting. Responsibilities spanned feature development, state and API integration, and production debugging and performance fixes.",
        ],
        stack: STACK_AMS,
      },
      {
        name: "SAP & IT Expert Thailand",
        paragraphs: [
          "A full content/media web platform for a SAP and IT consulting firm, built with Next.js and React. The public site covers a home page, topic-categorized article hubs, article and event reading pages with likes, author-following, view tracking and weekly popularity rankings, global search, event listings, public author profiles, and a JWT auth flow with silent token refresh.",
          "The internal CMS adds an article-writing tool on a custom EditorJS integration with 15+ plugins (image/attachment upload, blank-line-preserving paragraphs), thumbnail upload with client-side aspect-ratio and resolution validation, schedule-publish date pickers, and autosave drafts with recovery and unsaved-changes guards — plus an admin console with multi-dimension filtering and cross-author ownership transfer, an event-setup flow with independent registration and event periods and a guided in-app tour for embedding Google Maps, homepage highlight curation, and personal content/profile dashboards.",
        ],
        stack: STACK_SAP,
      },
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "NTT Data Business Solutions (Thailand)",
    dates: "Jan 2025 — Apr 2025",
    duration: "4 mos",
    projects: [
      {
        name: "Application Management Service (AMS) Platform",
        paragraphs: [
          "Enterprise web application for IT service and support operations, built with Next.js, React, and Ant Design. Assisted in front-end development, contributing to select UI components and report pages under the guidance of the development team, and gained hands-on experience with component-based architecture and REST API integration.",
        ],
        stack: STACK_AMS,
      },
    ],
  },
];

export const PROJECTS = [
  {
    title: "SAP & IT Expert Thailand",
    link: { href: "https://sapexpertthailand.com", label: "sapexpertthailand.com ↗" },
    description:
      "Content and media platform with an internal CMS — articles, events, authors, and admin tooling.",
    images: [1, 2, 3, 4, 5].map((n) => `/images/sap-${n}.webp`),
    imagePosition: "50% 0%",
    stack: STACK_SAP,
  },
  {
    title: "AMS Platform",
    internalLabel: "Internal platform",
    description:
      "Internal IT service platform used by NTT DATA teams and their customers — tickets, contracts, technician workforce, and operational/financial reporting dashboards.",
    images: [1, 2, 3].map((n) => `/images/ams-${n}.webp`),
    imagePosition: "50% 50%",
    stack: STACK_AMS,
  },
];

export const SKILL_GROUPS = [
  { title: "Core", items: ["HTML", "CSS", "JavaScript", "Node.js", "Git"] },
  {
    title: "Frameworks",
    items: ["React", "Next.js", "Ant Design", "Tailwind CSS", "ApexCharts", "EditorJS", "Axios", "SheetJS"],
  },
  { title: "Tools", items: ["Figma", "VS Code", "Postman", "Sourcetree", "ClickUp"] },
];

export const EDUCATION = {
  years: "2021 — 2025",
  school: "Mae Fah Luang University",
  degree: "B.Eng. Software Engineering · School of Applied Digital Technology",
  gpax: "3.70",
};

export const CONTACT = {
  heading: "Open to frontend roles, especially in Bangkok and nearby areas.",
  body: "The fastest way to reach me is email — I usually reply within a day.",
  footerLeft: "© 2026 Sukrit Siritip",
  footerRight: "Built with Next.js habits, by hand.",
};
