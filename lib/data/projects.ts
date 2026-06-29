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
    tagline: "Gamified academic learning, mobile-first",
    problem:
      "Every EdTech tool I looked at was built around passive consumption — watch, read, quiz, forget. The mechanics that make consumer apps sticky hadn't been taken seriously in academic learning. Nobody had built the product layer for retention, only for content delivery.",
    solution:
      "Built the whole thing solo: .NET Core API, Flutter mobile app as the primary client, Next.js web companion, and an LLM pipeline that turns any academic topic into structured, gamified lessons. Designed and discarded two gamification systems before one held under real use.",
    architecture:
      ".NET Core API · Flutter (primary) · Next.js · MySQL · Redis · AWS S3 · LLM pipeline",
    outcome:
      "Live at ezdu.net. Real users, real retention data. A custom backend with an LLM content pipeline — not a CMS with a quiz plugin on top.",
    tech: [".NET Core", "Flutter", "Next.js", "MySQL", "Redis", "AWS", "TypeScript"],
    links: [{ label: "Visit Ezdu", url: "https://ezdu.net" }],
    featured: true,
  },
  {
    id: "better-ielts",
    title: "Better IELTS",
    tagline: "IELTS preparation with real exam conditions",
    problem:
      "IELTS prep tools were either expensive coaching or shallow quiz apps. Neither replicated the experience of sitting the actual exam — timed, pressured, with speaking assessed in real time. The gap between practice and test day was still enormous.",
    solution:
      "Real-time speaking tests over WebSocket via SignalR, automated scoring, full mock exams, performance analytics across sessions, and Stripe-integrated subscriptions. Each feature came from a specific learner need, not a feature list.",
    architecture:
      ".NET Core API · Next.js · MySQL · Redis · MinIO · SignalR · Stripe · Docker · AWS",
    outcome:
      "Live at betterielts.com. Real-time speaking tests, mock exams, subscription billing — the full product.",
    tech: [".NET Core", "Next.js", "MySQL", "Redis", "SignalR", "Stripe", "Docker", "AWS"],
    links: [{ label: "Visit Better IELTS", url: "https://betterielts.com" }],
    featured: true,
  },
  {
    id: "school-management",
    title: "School Management System",
    tagline: "Student records, attendance, grades — unified",
    problem:
      "Schools were tracking students through a combination of spreadsheets, paper, and institutional memory. Nothing connected. Reports were compiled by hand.",
    solution:
      "A single system for student registration, daily attendance, grade management, and automated reporting. One place for everything.",
    architecture: ".NET Core MVC · MSSQL · JavaScript · Bootstrap · Selenium",
    outcome:
      "Deployed at OnnoRokom Software Ltd, running in multiple schools. The first system I built where a bug meant a teacher couldn't do her job.",
    tech: [".NET Core MVC", "MSSQL", "JavaScript", "Bootstrap", "Selenium"],
    links: [],
    featured: false,
  },
  {
    id: "ota-system",
    title: "A4Aero OTA Platform",
    tagline: "Booking, agents, and admin — one system",
    problem:
      "A4Aero needed operational infrastructure, not just a website. Three user types — travelers, agents, admins — with different permissions, workflows, and views. Plus live integrations with flight and hotel APIs that fail in unpredictable ways.",
    solution:
      "Designed and built the entire system from schema to deployment. Booking flows, agent management, admin controls, third-party API integrations. One engineer, full ownership.",
    architecture: "C# .NET Core REST API · Angular · SQL Server",
    outcome:
      "In production. Someone is booking a flight through an API I designed right now.",
    tech: ["C#", ".NET Core", "Angular", "SQL Server", "REST API"],
    links: [],
    featured: false,
  },
];
