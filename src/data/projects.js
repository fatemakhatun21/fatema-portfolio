/**
 * Projects Central Data Store
 * All project data, features, challenges, roadmaps, and links are centralized here.
 * Draft items are explicitly labeled [Draft / Editable] to distinguish them from verified data.
 * Missing URLs are marked as null, keeping corresponding buttons disabled until real links are provided.
 */

export const projectsData = [
  {
    slug: "fitlog",
    title: "FitLog",
    category: "Health & Fitness Application",
    tagline: "Personal fitness and workout routine tracking web application.",
    description:
      "FitLog is a personal fitness tracking application designed to help individuals record workout sessions, monitor exercise routines, and maintain structured health habits. Built with a focus on responsive interface design and seamless user interaction.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
    screenshot: "/fitlog.png",
    hasScreenshot: true,
    liveUrl: null, // Disabled until verified URL is supplied
    githubUrl: null, // Disabled until verified URL is supplied
    status: "Active Development",
    features: [
      {
        title: "Workout Session Logging",
        description: "[Draft / To be updated by author] Record daily exercise routines, sets, reps, and physical activities in an organized log.",
        isDraft: true,
      },
      {
        title: "Progress & Consistency Tracker",
        description: "[Draft / To be updated by author] Visual indicators to monitor workout consistency over days and weeks.",
        isDraft: true,
      },
      {
        title: "Mobile-First Responsive Layout",
        description: "Optimized responsive interface ensuring seamless usability on mobile devices during workouts as well as desktops.",
        isDraft: false,
      },
    ],
    challenges: [
      {
        title: "State Management for Dynamic Workouts",
        description: "[Draft / To be updated by author] Managing active workout states, dynamic sets, and timer counters across components without unnecessary re-renders.",
        isDraft: true,
      },
      {
        title: "Intuitive Mobile UX for Fast Inputs",
        description: "[Draft / To be updated by author] Crafting quick-tap inputs that minimize interaction friction while users are actively exercising.",
        isDraft: true,
      },
    ],
    futureImprovements: [
      {
        title: "Backend & User Authentication Integration",
        description: "[Draft / To be updated by author] Connect with Node.js and MongoDB backend to enable secure user accounts, profiles, and cloud data persistence.",
        isDraft: true,
      },
      {
        title: "Analytics Charts & Exercise Metrics",
        description: "[Draft / To be updated by author] Implement visual progress charts using modern charting libraries to track volume and personal records over time.",
        isDraft: true,
      },
      {
        title: "Offline PWA Support",
        description: "[Draft / To be updated by author] Cache workout data locally so users can log sessions even in gyms with poor network connectivity.",
        isDraft: true,
      },
    ],
  },
  {
    slug: "bazardor",
    title: "BazarDor",
    category: "Commodity & Market Tracker",
    tagline: "Daily commodity pricing and grocery market rate monitoring platform.",
    description:
      "BazarDor is a dedicated web platform developed to track and display daily market commodity prices and grocery rates. It aims to empower consumers and local vendors with transparent price data to assist in household budgeting and purchasing decisions.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Node.js", "MongoDB"],
    screenshot: "/bazardor.png",
    hasScreenshot: true,
    liveUrl: null,
    githubUrl: null,
    status: "Active Development",
    features: [
      {
        title: "Categorized Commodity Directory",
        description: "[Draft / To be updated by author] Clean organization of essential daily groceries, vegetables, grains, and kitchen commodities.",
        isDraft: true,
      },
      {
        title: "Instant Search and Item Filtering",
        description: "[Draft / To be updated by author] Fast real-time search capabilities allowing users to find specific market products quickly.",
        isDraft: true,
      },
      {
        title: "Transparent Price Listings",
        description: "High-contrast layout designed for effortless readability on all screen sizes, presenting market data clearly.",
        isDraft: false,
      },
    ],
    challenges: [
      {
        title: "Market Data Organization",
        description: "[Draft / To be updated by author] Structuring commodity datasets to handle frequent unit changes, category classifications, and price variances across different markets.",
        isDraft: true,
      },
      {
        title: "Fast Mobile Data Accessibility",
        description: "[Draft / To be updated by author] Ensuring fast loading speeds and low bandwidth consumption for mobile shoppers checking prices on the go.",
        isDraft: true,
      },
    ],
    futureImprovements: [
      {
        title: "Crowdsourced Price Verification",
        description: "[Draft / To be updated by author] Allow local shoppers to submit real-time market receipt data with community verification.",
        isDraft: true,
      },
      {
        title: "Historical Price Trend Visualizations",
        description: "[Draft / To be updated by author] Add interactive line graphs displaying 30-day and 90-day price trends for key staple goods.",
        isDraft: true,
      },
      {
        title: "Multi-Language Support (Bangla & English)",
        description: "[Draft / To be updated by author] Introduce native Bangla language localization to make the platform accessible to a wider community of local consumers.",
        isDraft: true,
      },
    ],
  },
  {
    slug: "devstack",
    title: "DevStack",
    category: "Developer Tools & Resources Hub",
    tagline: "Curated tech stack and modern web development tool directory.",
    description:
      "DevStack is a developer-centric curation hub highlighting modern tools, libraries, frameworks, and productivity resources. It organizes essential web technologies into a structured guide to help developers discover and select optimal stacks for their projects.",
    technologies: ["Next.js", "React.js", "JavaScript", "Tailwind CSS"],
    screenshot: "/devstack.png",
    hasScreenshot: true,
    liveUrl: null,
    githubUrl: null,
    status: "Active Development",
    features: [
      {
        title: "Ecosystem Tech Categorization",
        description: "[Draft / To be updated by author] Structured categorization covering Frontend, Backend, Databases, Testing, and Deployment utilities.",
        isDraft: true,
      },
      {
        title: "Developer Ergonomic UI",
        description: "Dark-themed aesthetic tailored for developer comfort, featuring high-contrast typography and subtle violet accents.",
        isDraft: false,
      },
      {
        title: "Direct Resource Navigation",
        description: "[Draft / To be updated by author] Quick links to official documentation, GitHub repositories, and package installation guides.",
        isDraft: true,
      },
    ],
    challenges: [
      {
        title: "Taxonomy & Directory Architecture",
        description: "[Draft / To be updated by author] Creating an intuitive hierarchical organization system that classifies multi-purpose developer tools accurately.",
        isDraft: true,
      },
      {
        title: "Consistent Dark-Mode Design System",
        description: "[Draft / To be updated by author] Designing subtle border glows and readable code font pairings that remain visually balanced across various device screens.",
        isDraft: true,
      },
    ],
    futureImprovements: [
      {
        title: "Interactive Starter Template Generator",
        description: "[Draft / To be updated by author] Enable users to select their favorite stack combinations and copy ready-to-run setup CLI commands.",
        isDraft: true,
      },
      {
        title: "Community Submissions & Voting",
        description: "[Draft / To be updated by author] Allow fellow developers to submit new libraries and upvote recommended developer tools.",
        isDraft: true,
      },
      {
        title: "CLI Companion Tool",
        description: "[Draft / To be updated by author] Build a lightweight terminal CLI to search DevStack directory directly from the command line.",
        isDraft: true,
      },
    ],
  },
];

export function getProjectBySlug(slug) {
  return projectsData.find((p) => p.slug === slug);
}
