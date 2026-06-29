export interface JourneyItem {
  year: string;
  title: string;
  body: string;
  tags: string[];
}

export const journeyItems: JourneyItem[] = [
  {
    year: "2016",
    title: "The Beginning",
    body: "Started Computer Science at Daffodil International University. Wrote my first programs in C and immediately understood that software is logic made tangible.",
    tags: ["C", "C++", "Algorithms", "Data Structures"],
  },
  {
    year: "2019",
    title: "The Obsession",
    body: "Competitive programming took over. Solved 500+ problems on CodeForces, HackerRank, and UVA. Advanced to Facebook Hacker Cup 2022 Round 1. Learned that constraints force creativity.",
    tags: ["Competitive Programming", "Problem Solving", "Algorithms"],
  },
  {
    year: "2022",
    title: "First Real Job",
    body: "Joined OnnoRokom Software Ltd as an Assistant Software Engineer. Built a school management system from scratch — students, attendance, grades. First time my code ran in production and actually mattered to real people.",
    tags: [".NET Core MVC", "MSSQL", "JavaScript", "Selenium"],
  },
  {
    year: "2023",
    title: "Leveling Up",
    body: "Moved to A4Aero as a Software Engineer. Built a complete OTA (Online Travel Agency) platform — user, agent, and admin modules — from the ground up. Designed REST APIs handling high traffic. Integrated flights, hotels, and payment systems. Learned what it means to build for scale.",
    tags: ["C#", ".NET Core", "Angular", "SQL Server", "REST API"],
  },
  {
    year: "2024",
    title: "Going Independent",
    body: "Left employment to build my own products. No safety net. Just a problem worth solving and the confidence that I could solve it. Started Ezdu and Better IELTS simultaneously — managing product, architecture, deployment, and iteration all at once.",
    tags: ["Product Thinking", "System Design", "AWS", "Next.js"],
  },
  {
    year: "2025",
    title: "The Architect",
    body: "Two live EdTech products. Real users. Real feedback. The journey from writing code to thinking in systems, from shipping features to making product decisions. This is where I am now — and where I intend to stay.",
    tags: ["EdTech", "Full-Stack", "AI Integration", "Product Builder"],
  },
];
