import { Project } from "../components/Projectcard";

export const projects: Project[] = [
  {
    id: "1",
    name: "DevMetrics",
    description:
      "GitHub analytics dashboard that visualizes contributor patterns and code health metrics",
    problem:
      "Built a comprehensive GitHub analytics tool that helps teams understand their development patterns, identify bottlenecks, and track code quality trends over time",
    techStack: [
      "React",
      "TypeScript",
      "D3.js",
      "Node.js",
      "GitHub API",
      "PostgreSQL",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MDIxOTg3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    liveUrl: "https://devmetrics-demo.vercel.app",
    sourceUrl: "https://github.com/yourusername/devmetrics",
    overview:
      "DevMetrics analyzes GitHub repositories to provide actionable insights about code health, team velocity, and contribution patterns. I built this after struggling to understand our team's workflow in a hackathon project. It processes commit history, PR data, and code changes to generate meaningful visualizations that help teams improve their development process.",
    features: [
      "Analyzes 10,000+ commits in under 3 seconds using optimized batch processing",
      "Custom D3.js visualizations for commit patterns, code churn, and contributor activity",
      "Automated code health scoring based on test coverage, PR review depth, and bug frequency",
      "Real-time PR review time tracking (average team review time, bottleneck detection)",
      "Webhook integration for automatic updates when new commits are pushed",
      "Caching layer that reduced GitHub API calls by 85% using smart invalidation",
    ],
    challenges: [
      "GitHub API rate limiting - implemented intelligent caching and batch requests to stay within 5,000 req/hour limit",
      "Processing large repos efficiently - optimized database queries with proper indexing, reduced query time from 12s to 2.8s",
      "Creating meaningful metrics from raw git data - researched academic papers on code quality metrics",
      "Handling private repos securely - implemented OAuth flow without storing tokens, only session-based access",
    ],
    learnings: [
      "Advanced D3.js techniques for interactive time-series visualizations with 60fps animations",
      "GitHub REST and GraphQL APIs - when to use each for optimal performance",
      "Database indexing strategies that improved query performance by 4x",
      "Rate limiting patterns and exponential backoff for external API integration",
      "OAuth 2.0 flow implementation and security best practices",
    ],
  },
  {
    id: "2",
    name: "CodeSnippet Vault",
    description:
      "Smart code snippet manager with instant search and automatic syntax highlighting",
    problem:
      "Created a lightning-fast snippet manager for developers who want to save and retrieve code snippets faster than searching through old projects or bookmarks",
    techStack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Shiki",
      "Tailwind CSS",
    ],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZWRpdG9yJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MDExMjEzMnww&ixlib=rb-4.1.0&q=80&w=1080",
    liveUrl: "https://snippet-vault.vercel.app",
    sourceUrl: "https://github.com/yourusername/snippet-vault",
    overview:
      "CodeSnippet Vault is a developer tool I built for myself that became useful enough to share. It uses fuzzy search to find snippets instantly, automatic language detection with Shiki for beautiful syntax highlighting, and a keyboard-first interface that makes saving/retrieving code feel effortless. Search results appear in <100ms for libraries with 500+ snippets.",
    features: [
      "Sub-100ms fuzzy search using optimized trie data structure with ~500 snippets",
      "Automatic language detection for 150+ programming languages using AST analysis",
      "Keyboard shortcuts for everything (Cmd+K to search, Cmd+N for new snippet, Cmd+C to copy)",
      "Smart tag suggestions based on code content using TF-IDF algorithm",
      "One-click copy with syntax preserved (handles 15,000+ copies/day in testing)",
      "Collection system to organize snippets by project or category",
      "Export to Gist or Markdown for sharing with team members",
    ],
    challenges: [
      "Making search feel instant - implemented debouncing, indexing, and memoization to achieve <100ms response",
      "Language detection without heavy ML models - built a lightweight AST parser that's 95% accurate",
      "Syntax highlighting performance - lazy loading and virtualization for collections with 1000+ snippets",
      "Building a keyboard-first UI that's still discoverable - added contextual tooltips and progressive disclosure",
    ],
    learnings: [
      "Search optimization techniques: inverted indices, fuzzy matching algorithms, and query debouncing",
      "Working with Abstract Syntax Trees for language detection",
      "Shiki integration for VS Code-quality syntax highlighting",
      "Building keyboard-driven UIs with proper accessibility (ARIA labels, focus management)",
      "Next.js App Router with server components for optimal performance",
    ],
  },
  {
    id: "3",
    name: "RealtimeCollab",
    description:
      "Lightweight collaborative text editor with conflict-free synchronization",
    problem:
      "Built a real-time collaborative editor to deeply understand CRDT algorithms and WebSocket architecture used by tools like Figma and Google Docs",
    techStack: ["React", "TypeScript", "WebSocket", "Yjs", "Node.js", "Redis"],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtpbmd8ZW58MXx8fHwxNzcwMTk4MjU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    liveUrl: "https://realtimecollab.vercel.app",
    sourceUrl: "https://github.com/yourusername/realtimecollab",
    overview:
      "RealtimeCollab is my deep dive into understanding how real-time collaboration actually works. Instead of using a library blindly, I implemented CRDT (Conflict-free Replicated Data Types) from scratch to understand the underlying algorithms, then switched to Yjs for production. Supports 50+ concurrent users per document with sub-50ms synchronization latency.",
    features: [
      "True real-time sync with <50ms latency for up to 50 concurrent users",
      "Conflict-free editing using Yjs CRDT - no data loss even with simultaneous edits",
      "Live cursors showing each user's position and selections with unique colors",
      "Presence awareness - see who's online, what they're editing, and when they last typed",
      "Operational transformation for undo/redo that works across multiple users",
      "Redis-backed persistence ensuring no data loss on server restart",
      "Automatic reconnection with state recovery after network interruption",
    ],
    challenges: [
      "Understanding CRDT algorithms - read academic papers and implemented a basic version before using Yjs",
      "WebSocket scaling - handling 50+ concurrent connections per document without server overload",
      "Managing complex state synchronization between client and server",
      "Implementing proper cursor synchronization with smooth animations",
      "Handling edge cases: network failures, server restarts, zombie connections",
    ],
    learnings: [
      "CRDT algorithms (Yjs internally uses YATA) and why they're superior to OT for some use cases",
      "WebSocket lifecycle management, heartbeats, and graceful degradation",
      "Redis pub/sub patterns for horizontal scaling",
      "Performance profiling with Chrome DevTools - identified and fixed 3 major memory leaks",
      "State management patterns for distributed systems",
    ],
  },
  {
    id: "4",
    name: "BundleWatch",
    description:
      "Webpack bundle analyzer that tracks JavaScript bundle size trends over time",
    problem:
      "Created a tool that monitors bundle size across commits and sends alerts when bundles grow unexpectedly, preventing production performance regressions",
    techStack: [
      "Node.js",
      "TypeScript",
      "Webpack",
      "Chart.js",
      "GitHub Actions",
      "SQLite",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmb3JtYW5jZSUyMG1vbml0b3Jpbmd8ZW58MXx8fHwxNzcwMjE1MTAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    liveUrl: "https://bundlewatch-demo.vercel.app",
    sourceUrl: "https://github.com/yourusername/bundlewatch",
    overview:
      "BundleWatch was born from a real problem: I pushed a PR that accidentally increased our bundle size by 400KB because I imported an entire library instead of a single function. This tool prevents that by analyzing webpack stats, tracking bundle size history, and integrating with CI/CD to block PRs that add too much weight. It's saved me from shipping bloated code multiple times since.",
    features: [
      "Tracks bundle size across every commit with 1KB precision",
      "GitHub Action integration - automatically comments on PRs with size impact",
      "Configurable thresholds - fails CI if bundle grows by >5% (customizable)",
      "Interactive visualizations showing bundle composition and growth trends over time",
      "Identifies largest dependencies and suggests lighter alternatives (e.g., date-fns vs moment.js)",
      "Compression comparison - shows gzipped and brotli sizes",
      "Historical data showing bundle size evolution over 1000+ commits",
    ],
    challenges: [
      "Parsing webpack stats JSON (500KB+) efficiently without blocking",
      "Creating meaningful size alerts - too sensitive creates noise, too lenient misses issues",
      "Integrating with GitHub API for PR comments without annoying the team",
      "Storing historical data efficiently in SQLite (optimized schema reduced storage by 60%)",
      "Visualizing bundle composition in an intuitive, actionable way",
    ],
    learnings: [
      "Webpack internals and bundle analysis techniques",
      "GitHub Actions workflow creation and CI/CD pipeline integration",
      "SQLite optimization for time-series data (proper indexes, VACUUM, and WAL mode)",
      "Bundle size optimization strategies (tree-shaking, code splitting, dynamic imports)",
      "Building developer tools that integrate into existing workflows",
    ],
  },
  {
    id: "5",
    name: "APICache Pro",
    description:
      "Smart caching proxy for REST APIs with automatic invalidation and analytics",
    problem:
      "Developed an intelligent caching layer that sits between frontend apps and APIs, reducing API calls by 70% and cutting response times from 800ms to 45ms",
    techStack: [
      "Node.js",
      "TypeScript",
      "Redis",
      "Express",
      "Bull Queue",
      "PostgreSQL",
    ],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjBuZXR3b3JrfGVufDF8fHx8MTc3MDIxOTg3OXww&ixlib=rb-4.1.0&q=80&w=1080",
    liveUrl: "https://apicache-pro.vercel.app",
    sourceUrl: "https://github.com/yourusername/apicache-pro",
    overview:
      "APICache Pro is a production-ready caching proxy I built after noticing our app was making the same API calls hundreds of times. It intelligently caches responses, automatically invalidates stale data, and provides detailed analytics about API usage patterns. In testing with a real app, it reduced API costs by 70% and improved page load time from 2.3s to 0.8s.",
    features: [
      "Reduced API calls by 70% with smart caching strategies (stale-while-revalidate, cache-aside)",
      "Automatic cache invalidation based on TTL, webhooks, or manual triggers",
      "Cache hit rate of 85% in production testing with 10,000+ requests/hour",
      "Request coalescing - merges duplicate simultaneous requests into one",
      "Analytics dashboard showing cache performance, cost savings, and usage patterns",
      "Background refresh for popular endpoints (keeps cache warm before expiration)",
      "Rate limiting protection - prevents thundering herd when cache expires",
    ],
    challenges: [
      "Implementing cache invalidation correctly - 'There are only two hard things in Computer Science...'",
      "Handling race conditions with simultaneous requests for uncached data",
      "Building a request coalescing mechanism that doesn't introduce bugs",
      "Designing an intelligent TTL system (different endpoints need different strategies)",
      "Ensuring cache consistency when upstream API data changes",
    ],
    learnings: [
      "Advanced Redis caching patterns (cache-aside, write-through, write-behind)",
      "Race condition handling with distributed locks and atomic operations",
      "Bull Queue for background job processing and cache warming",
      "HTTP caching headers (ETag, Cache-Control, Last-Modified) and how to leverage them",
      "Building middleware that's transparent to existing applications",
    ],
  },
];
