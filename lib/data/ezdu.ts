export const ezduData = {
  tagline: "Gamified learning for academic education — mobile-first",
  url: "https://ezdu.net",

  problem: {
    headline: "Education is broken. Not the content — the experience.",
    body: [
      "Students sit through lectures, read textbooks, and forget 80% of it within a week. The problem isn't intelligence — it's engagement. Academic learning tools have been designed for compliance, not for the brain.",
      "Duolingo proved that gamification works for language learning. Nobody had applied that same depth of thinking to real academic subjects — mathematics, science, history, programming.",
      "That gap was Ezdu's reason to exist.",
    ],
  },

  vision: {
    headline: "Learn anything. Remember everything.",
    body: "Ezdu is building the learning infrastructure for the next generation of students — adaptive, gamified, and powered by AI. Mobile is the primary surface: learning happens in pockets of time, not at a desk. The goal is not just to help students pass exams, but to make learning something they actually want to do.",
  },

  challenges: [
    {
      title: "AI Content Pipeline",
      description:
        "How do you turn any academic topic into structured, gamified learning content? We built an LLM-powered pipeline that generates lessons, questions, and feedback loops automatically.",
      solved: "LLM integration with custom prompt engineering and content validation",
    },
    {
      title: "Gamification Without Distraction",
      description:
        "Streaks, XP, and challenges must motivate — not distract. Finding the right balance between engagement mechanics and actual learning was a product design challenge as much as an engineering one.",
      solved: "Iterative UX testing and data-driven progression design",
    },
    {
      title: "Scalable Content Management",
      description:
        "Academic content is richly structured — text, formulas, images, code. Building a CMS that handles all these types while staying performant required careful schema design.",
      solved: "MySQL with flexible content schema, S3 for assets, CDN for delivery",
    },
    {
      title: "Cross-Platform Consistency",
      description:
        "The React Native mobile app is the primary client — the web app is a companion surface. Both must feel native to their platform while sharing the same API and data layer. Progress, streaks, and state must be identical regardless of which surface the user is on.",
      solved: "Single .NET Core API consumed by both clients, shared business logic, platform-specific UX layers",
    },
    {
      title: "Real-time Progress Sync",
      description:
        "User progress must feel instant — no lag between completing a lesson and seeing your streak update. On mobile especially, this must work smoothly even on slower connections.",
      solved: "Optimistic UI updates, background sync via API, push notifications via FCM/APNs",
    },
  ],

  lessons: [
    "Premature optimization delays shipping. Ship first, optimize what hurts.",
    "Users don't care about your stack. They care about whether the thing works.",
    "Data modeling is product design. A bad schema costs you six months later.",
    "The hardest problems in a product are usually not technical.",
    "Building alone forces clarity. Every decision is yours — and every mistake teaches you something.",
  ],

  roadmap: [
    { phase: "Now", milestone: "Core learning engine live — web + mobile apps in active development" },
    { phase: "Q3 2025", milestone: "Mobile app (React Native) public launch — the primary Ezdu experience" },
    { phase: "Q4 2025", milestone: "Teacher dashboard and custom course creation" },
    { phase: "2026", milestone: "Institutional partnerships and offline-first mobile mode" },
  ],
};
