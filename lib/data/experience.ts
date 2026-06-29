export interface ExperienceItem {
  id: string;
  company: string;
  logoSrc?: string;           // real logo path in /public
  logoAccent: string;         // brand color for placeholder
  role: string;
  type: "Full-time" | "Contract" | "Freelance";
  period: string;
  duration: string;
  location: string;
  url?: string;
  tagline: string;            // one-line company description
  story: string;              // narrative paragraph — my time there
  responsibilities: string[];
  achievements: string[];
  tech: string[];
  projects: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "a4aero",
    company: "A4Aero",
    logoSrc: "/a4aero-logo.png",
    logoAccent: "#e11d48",
    role: "Full-Stack Software Engineer",
    type: "Full-time",
    period: "2023 – 2024",
    duration: "~1 year",
    location: "Dhaka, Bangladesh",
    url: "https://a4aero.com",
    tagline: "Online travel agency platform — flights, hotels, and agent management.",
    story:
      "A4Aero needed an entire operational platform built from scratch — not a website, but infrastructure. Three distinct user types (travelers, agents, admins), live integrations with flight and hotel APIs that fail in unpredictable ways, and payment flows that couldn't have bugs. I owned the architecture, the schema, and every deployment. The first production incident that woke me up at night changed how I think about uptime permanently.",
    responsibilities: [
      "Designed and built the full OTA system — user portal, agent dashboard, admin panel — end to end.",
      "Integrated third-party flight and hotel booking APIs with error handling and retry logic.",
      "Built role-based access control across three user types with distinct permission models.",
      "Owned the database schema design, API contracts, and deployment pipeline.",
    ],
    achievements: [
      "Delivered the entire platform as a solo engineer within timeline.",
      "Designed a schema that handled multi-role permissions without a single breaking migration in production.",
      "Reduced API failure impact by implementing circuit-breaker patterns on all third-party integrations.",
    ],
    tech: ["C#", ".NET Core", "Angular", "SQL Server", "REST API", "Azure"],
    projects: ["A4Aero OTA Platform"],
  },
  {
    id: "onnorokom",
    company: "OnnoRokom Software",
    logoSrc: "/onnorokom-logo.jpg",
    logoAccent: "#2563eb",
    role: "Software Engineer",
    type: "Full-time",
    period: "2022 – 2023",
    duration: "~1 year",
    location: "Dhaka, Bangladesh",
    url: "https://onnorokomsoftware.com",
    tagline: "One of Bangladesh's largest software conglomerates — ERP, education, healthcare.",
    story:
      "My first production system. I built a school management platform used by real teachers with real students. The moment I realised the data in that database belonged to actual children at an actual school, everything changed. A bug wasn't a failing test anymore — it was a teacher who couldn't mark attendance. That shift in perspective has informed every system I've designed since.",
    responsibilities: [
      "Built a school management system covering student registration, attendance tracking, and grade management.",
      "Developed automated report generation replacing manual spreadsheet processes.",
      "Wrote Selenium-based test automation for regression coverage.",
      "Collaborated with school staff to understand workflows and translate them into system features.",
    ],
    achievements: [
      "System deployed across multiple schools — first production software I built that real people depended on daily.",
      "Reduced manual reporting time significantly through automated grade and attendance exports.",
      "Introduced automated test coverage that caught regressions before they reached teachers.",
    ],
    tech: [".NET Core MVC", "MSSQL", "JavaScript", "Bootstrap", "Selenium"],
    projects: ["School Management System"],
  },
];
