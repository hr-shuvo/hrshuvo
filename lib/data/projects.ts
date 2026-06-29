export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  architecture: string;
  outcome: string;
  tech: string[];
  links: ProjectLink[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "ezdu",
    title: "Ezdu",
    tagline: "Gamified learning for academic education",
    problem:
      "Traditional academic learning platforms are passive and forgettable. Students consume content but don't retain it. There was no Duolingo for real academic subjects.",
    solution:
      "Built a gamified, Duolingo-inspired platform where students learn through streaks, challenges, and immediate feedback. AI-powered content structuring makes any topic into an engaging learning path.",
    architecture:
      ".NET Core API + Next.js frontend, MySQL for persistence, AWS S3 for content storage, LLM integration for content generation",
    outcome:
      "A fully functional EdTech platform live at ezdu.net, serving academic learners with AI-assisted content and gamified progression.",
    tech: [".NET Core", "Next.js", "Flutter", "MySQL", "AWS", "S3", "LLM", "TypeScript"],
    links: [{ label: "Visit Ezdu", url: "https://ezdu.net" }],
    featured: true,
  },
  {
    id: "better-ielts",
    title: "Better IELTS",
    tagline: "Real mock exam experience for IELTS preparation",
    problem:
      "IELTS preparation tools were either too expensive or too shallow. Learners had no way to experience a real exam environment with instant feedback and performance tracking.",
    solution:
      "Built a full mock exam platform with real-time calling features (speaking tests via WebSocket), automated scoring, performance analytics, and subscription management — all in one product.",
    architecture:
      ".NET Core API + Next.js, MySQL + Redis for data and caching, MinIO for file storage, SignalR/WebSocket for real-time communication, Stripe for payments, Docker + AWS for deployment",
    outcome:
      "A production-grade IELTS preparation platform live at betterielts.com with real-time speaking tests, mock exams, and subscription billing.",
    tech: [
      ".NET Core",
      "Next.js",
      "MySQL",
      "Redis",
      "MinIO",
      "SignalR",
      "WebSocket",
      "AWS",
      "Docker",
      "Stripe",
    ],
    links: [{ label: "Visit Better IELTS", url: "https://betterielts.com" }],
    featured: true,
  },
  {
    id: "school-management",
    title: "School Management System",
    tagline: "End-to-end school operations platform",
    problem:
      "Schools were managing students, attendance, and grades through disconnected tools — spreadsheets, paper records, and manual processes that didn't talk to each other.",
    solution:
      "Built a unified school management system covering student registration, daily attendance tracking, grade management, and reporting — giving teachers and administrators one place to manage everything.",
    architecture:
      ".NET Core MVC backend, MSSQL for data, JavaScript + Bootstrap for responsive UI, Selenium for automated test coverage",
    outcome:
      "A production system deployed at OnnoRokom Software Ltd, used by real schools with measurable reduction in administrative overhead and manual data entry.",
    tech: [".NET Core MVC", "MSSQL", "JavaScript", "Bootstrap", "Selenium", "Git"],
    links: [],
    featured: false,
  },
  {
    id: "ota-system",
    title: "A4Aero OTA Platform",
    tagline: "Full-stack online travel agency system",
    problem:
      "A growing travel agency needed a complete digital platform — not just a website, but a full operational system with separate modules for users, travel agents, and admins.",
    solution:
      "Designed and built the entire OTA system from scratch: booking flows, agent management, admin controls, and third-party API integrations for flights, hotels, and payment gateways.",
    architecture:
      "C# .NET Core REST API backend, Angular frontend, SQL Server, Git version control with feature-branch workflow",
    outcome:
      "A production OTA system handling real bookings, serving multiple user roles simultaneously with optimized APIs designed for high traffic.",
    tech: ["C#", ".NET Core", "Angular", "SQL Server", "REST API", "Git"],
    links: [],
    featured: false,
  },
];
