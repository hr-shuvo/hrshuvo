export const ezduData = {
  tagline: "I built Ezdu because I couldn't find the thing I wanted to exist.",
  url: "https://ezdu.net",

  problem: {
    headline: "Students aren't forgetting because they're lazy. The tools are built wrong.",
    body: [
      "The pattern repeats: read the chapter, answer the questions, pass the test, forget it in three weeks. It's not a motivation problem. Passive consumption doesn't build retention — it just creates the feeling of having learned.",
      "Consumer apps figured this out. Streaks, spaced repetition, immediate feedback — these mechanics work because the cognitive science behind them is real. But nobody had applied them seriously to actual school subjects. EdTech has produced a lot of content. It hasn't produced better learning.",
      "That's what Ezdu is trying to fix.",
    ],
  },

  vision: {
    headline: "Learn anything. Remember everything.",
    body: "Ezdu generates structured, gamified lessons from any academic topic and adapts to how a student is actually progressing. Learning happens on mobile, in short sessions, not at a desk with a textbook. The goal isn't just passing exams — it's retention. The two aren't the same thing, and most tools don't treat them differently.",
  },

  stackDecisions: [
    {
      choice: "Flutter as the primary client, not a web app.",
      reason: "Learning happens in stolen minutes — on the bus, between classes. A web app that requires sitting at a desk was solving the wrong problem. Flutter gave us one codebase that runs on Android and iOS without the feel of a web view.",
    },
    {
      choice: "All business logic in the .NET Core API, not in the clients.",
      reason: "When Flutter is the primary client and Next.js is the companion, any logic that lives in both places will eventually diverge. Streak calculation, lesson progression, gamification rules — all server-side. The clients render. They don't decide.",
    },
    {
      choice: "MySQL over a NoSQL store.",
      reason: "Academic content looks unstructured but isn't. Lessons belong to topics, topics to subjects, subjects to curricula. Those relationships are load-bearing. A document store would have made every query a migration in disguise.",
    },
    {
      choice: "LLM pipeline with validation layers, not a prompt-and-ship approach.",
      reason: "A lesson with one wrong fact destroys trust. The pipeline generates, checks factual structure, validates formatting, and rewrites selectively before anything touches the database. It's slower than a single API call. It's what makes the content usable.",
    },
  ],

  challenges: [
    {
      title: "Gamification that actually motivates",
      description:
        "A progress bar on a quiz isn't gamification. The real problem was designing mechanics that create genuine motivation — streaks that feel earned, progression that reflects actual mastery, not just time spent. Two systems were thrown away before the third one held.",
      solved: "Iterated with real users, not hypotheses. The design that worked looked nothing like the first version.",
    },
    {
      title: "An LLM pipeline that doesn't lie",
      description:
        "Generating a lesson is straightforward. Generating one that's factually accurate, pedagogically coherent, and consistently formatted across every subject is the hard part. One wrong fact in a chemistry lesson ends trust. The pipeline needed validation layers, not just a prompt.",
      solved: "Multi-step generation with output checking and selective rewriting before anything touches the database.",
    },
    {
      title: "A schema that survives the product",
      description:
        "Academic content is structurally messy: formulas, code blocks, diagrams, multilingual text, multiple question types. The database schema needed to handle all of it without becoming expensive to query. A wrong decision here compounds over months.",
      solved: "Designed the schema three times on paper. The third version is still running.",
    },
    {
      title: "One API, two clients, no drift",
      description:
        "The Flutter app is the primary surface. The web app is secondary. Both consume the same .NET Core API. Progress, streaks, state — identical regardless of device. Any divergence in business logic between clients would eventually cause a data consistency problem.",
      solved: "All business logic lives in the API. The clients render, they don't decide.",
    },
    {
      title: "Progress sync that feels instant",
      description:
        "Complete a lesson, see the streak update — on mobile, on a slow connection. A visible delay between finishing and seeing the result breaks the reward loop. The loop is what keeps someone coming back.",
      solved: "Optimistic UI updates on the client, background sync against the API. The user sees the result before confirmation.",
    },
  ],

  lessons: [
    "Get it in front of users before it's ready. The gap between what you think they need and what they actually do is only visible after shipping.",
    "The database schema you design on day one is still with you on day three hundred.",
    "The hardest decisions weren't technical. They were about what not to build.",
    "Working alone removes the option of blaming someone else. That's clarifying.",
    "Most users will never read an error message, a tooltip, or a modal. Design for the person who skips everything.",
  ],

  roadmapStatement: {
    headline: "Two things shipped. Two things in progress.",
    body: "The Flutter app is live on iOS and Android. The LLM content pipeline is running in production. Next: a teacher dashboard for course creation and per-student tracking. After that: offline-first mobile for low-connectivity classrooms. The sequence is deliberate — teachers are the distribution channel for getting into schools.",
  },
};
