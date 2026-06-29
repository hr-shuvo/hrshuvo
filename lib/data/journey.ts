export interface JourneyItem {
  year: string;
  title: string;
  body: string;
  tags: string[];
}

export const journeyItems: JourneyItem[] = [
  {
    year: "2016",
    title: "First program, first proof",
    body: "Started Computer Science at Daffodil International University. Wrote my first programs in C and immediately understood that software is logic made tangible.",
    tags: ["C", "C++", "Algorithms", "Data Structures"],
  },
  {
    year: "2019",
    title: "500 problems. One lesson.",
    body: "Competitive programming took over. Solved 500+ problems across Codeforces, HackerRank, and UVA. Later — in 2022 — I'd reach Facebook Hacker Cup Round 1. The real lesson wasn't the problems themselves: constraints are the thing that forces elegant solutions.",
    tags: ["Competitive Programming", "Problem Solving", "Algorithms"],
  },
  {
    year: "2022",
    title: "First code that actually ran in a school",
    body: "Joined OnnoRokom Software Ltd as an Assistant Software Engineer. Built a school management system from scratch — students, attendance, grades. First time my code ran in production and actually mattered to real people.",
    tags: [".NET Core MVC", "MSSQL", "JavaScript", "Selenium"],
  },
  {
    year: "2023",
    title: "Built an OTA from scratch at A4Aero",
    body: "Moved to A4Aero as a Software Engineer. Built a complete OTA (Online Travel Agency) platform — user, agent, and admin modules — from the ground up. Designed REST APIs handling high traffic. Integrated flights, hotels, and payment systems. Learned what it means to build for scale.",
    tags: ["C#", ".NET Core", "Angular", "SQL Server", "REST API"],
  },
  {
    year: "2024",
    title: "Quit. Started building. No backup plan.",
    body: "Left employment to build my own products. No safety net. Just a problem worth solving and the confidence that I could solve it. Started Ezdu and Better IELTS simultaneously — managing product, architecture, deployment, and iteration all at once.",
    tags: ["Product Thinking", "System Design", "AWS", "Next.js"],
  },
  {
    year: "2025",
    title: "Two live products. Still building.",
    body: "Two live EdTech products in production. Ezdu and Better IELTS — built solo, deployed to real users, iterated on real feedback. I went from writing features for someone else's roadmap to owning the whole decision stack. Architecture, product, deployment, user research. That shift is irreversible.",
    tags: ["EdTech", "Full-Stack", "AI Integration", "Flutter"],
  },
];
