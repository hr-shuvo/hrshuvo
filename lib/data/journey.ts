export interface JourneyItem {
  year: string;
  title: string;
  body: string;
  tags: string[];
}

export const journeyItems: JourneyItem[] = [
  {
    year: "2016",
    title: "C taught me that the computer does exactly what you say.",
    body: "Not what you meant. Exactly what you said. That gap — between intent and instruction — is where every bug lives. I've been thinking about it ever since.",
    tags: ["C", "C++", "Algorithms", "Data Structures"],
  },
  {
    year: "2019",
    title: "500 problems. Most of them wrong on the first try.",
    body: "Competitive programming on Codeforces, HackerRank, UVA. Nobody used the solutions. There was no user, no deployment. But the limits were real — time, memory, edge cases that break anything naive. I started to understand that a tight constraint doesn't block a good solution. It shapes one.",
    tags: ["Competitive Programming", "Algorithms", "Codeforces"],
  },
  {
    year: "2022",
    title: "First time a teacher used software I wrote to mark attendance.",
    body: "OnnoRokom Software Ltd. A school management system — students, attendance, grades. I remember realising the data in that database belonged to real children at a real school. A bug wasn't a failing test anymore. It was a teacher who couldn't do her job.",
    tags: [".NET Core MVC", "MSSQL", "JavaScript", "Selenium"],
  },
  {
    year: "2023",
    title: "Someone's flight booking depended on an API I wrote.",
    body: "A4Aero. I built the entire OTA platform — user, agent, admin — from scratch. Flights, hotels, payment gateways. The first production incident that woke me up at night changed how I think about uptime. It stopped being a technical metric.",
    tags: ["C#", ".NET Core", "Angular", "SQL Server"],
  },
  {
    year: "2024",
    title: "Gave up a salary to find out if I could build something people need.",
    body: "No co-founder. No funding. Started Ezdu and Better IELTS at the same time. When there's no one to escalate a decision to, you stop second-guessing and start deciding. Every architecture call, every product tradeoff, every deployment — mine. I found out I could.",
    tags: ["Next.js", "Flutter", "AWS", "System Design"],
  },
  {
    year: "2025",
    title: "Two products live. Harder than expected. More interesting than hoped.",
    body: "Ezdu and Better IELTS in production, with real users. The technical problems got solved. The harder ones — what to build next, what to cut, how to stay focused when everything feels urgent — those took longer to figure out and are still being figured out.",
    tags: ["EdTech", "Flutter", "AI Integration", "Product"],
  },
];
