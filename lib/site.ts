// Single source of truth for site content. Sourced from Tanush's résumé
// (public/TYarram_Resume.pdf) and public GitHub (github.com/tyarram262).

export const identity = {
  name: "Tanush Yarram",
  email: "tanush.yarram@gmail.com",
  github: "https://github.com/tyarram262",
  linkedin: "https://www.linkedin.com/in/tanushyarram",
  resumeUrl: "/TYarram_Resume.pdf",
  title: "Software Engineer",
  bio: "I build backend systems and infrastructure — API gateways, event-driven services, and the observability around them. Currently at Visa, and starting an M.S. in Computer Science at UT Austin this fall.",
  // Set to "/headshot.jpg" (and add the file to public/) to show a photo in
  // the hero. Left empty, the hero renders without one.
  headshot: "",
};

export type ExperienceItem = {
  title: string;
  company: string;
  date: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "Visa Inc",
    date: "March 2026 – Present",
    bullets: [
      "Assumed end-to-end ownership of a production NGINX API gateway fronting internal services, hardening the request path with Message-Level Encryption (MLE) and mutual TLS to encrypt payloads in transit and enforce certificate-based service identity for every consumer.",
      "Led the gateway's security posture, triaging vulnerability scan findings and driving NGINX and dependency patching to remediation via zero-downtime rolling upgrades with no disruption to downstream consumers.",
      "Served as gateway subject-matter expert for partner teams across the org, designing their routing, TLS, and certificate configurations and authoring onboarding runbooks that turned repeat integration requests into a self-service path.",
      "Reduced chatbot platform response times to sub-200ms by building Spring Boot microservices with circuit breakers, Redis caching, and async Kafka event processing, and tuning HikariCP connection pooling across 3 services to cut query latency 15% at 99.9% SLA.",
      "Engineered Grafana observability dashboards with automated threshold alerting across 5 production services, cutting mean-time-to-detect 20%, and authored automated integration test suites that reduced release-blocking failures 40% and enabled weekly independent deploys.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Visa Inc",
    date: "May – August 2025",
    bullets: [
      "Migrated 8 legacy monolithic applications to Docker/Kubernetes, reducing cold-start time from 4+ minutes to under 30 seconds and eliminating ~$200K/year in VM infrastructure costs, later adopted as the team's standard deployment pattern.",
      "Identified and resolved CPU and memory bottlenecks across 6 services during cross-departmental code reviews, improving application responsiveness and reducing p99 execution latency by ~55% in the highest-traffic service paths.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Diasorin",
    date: "April 2024 – August 2024",
    bullets: [
      "Engineered automated data validation pipelines using Python Pandas and SQL to clean and process 20k+ row enterprise datasets, eliminating critical reporting errors and ensuring data integrity.",
      "Developed Java/Spring Boot backend services processing daily ETL workflows for 3 downstream BI teams, replacing manual handoffs and reducing reporting pipeline errors by ~30% with unit and integration test coverage deployed via Azure DevOps CI/CD pipelines.",
    ],
  },
];

export type Project = {
  id: string;
  name: string;
  description: string;
  tags: string[];
  period?: string;
  href?: string;
  homepage?: string;
};

export const projects: Project[] = [
  {
    id: "momentum-trading-agent",
    name: "Momentum Autonomous Trading Agent + Pre-Trade Risk Dashboard",
    description:
      "An end-to-end agentic trading system: an autonomous LLM agent analyzing live market data and executing long-only equity trades via Model Context Protocol (MCP) brokerage integrations, plus a full-stack pre-trade portfolio-impact app. Agent autonomy is constrained within a 15% max-drawdown limit via ATR-based position sizing, correlation filtering, and a tiered circuit breaker with git-backed state persistence. The analysis layer implements cross-account wash-sale detection over rolling 30-day windows, FIFO lot selection, and sector-concentration scoring, validated by a Vitest suite covering tax and risk logic.",
    tags: ["Next.js", "Python", "SQLite", "Docker"],
    period: "2025 – Present",
    href: "https://github.com/tyarram262/Ledger-Check",
    homepage: "https://ledger-check-henna.vercel.app",
  },
  {
    id: "auto-aim-optimization",
    name: "Auto-Aim Optimization for Embedded Systems",
    description:
      "A hybrid Particle-Kalman algorithm fusing vision and IMU sensor data to achieve real-time localization on a single NVIDIA Jetson, replacing a reference algorithm that exceeded the compute budget by 2×. Reduced average compute load by 40% versus existing implementations while maintaining targeting accuracy, enabling deployment on embedded hardware previously considered underpowered for the task.",
    tags: ["Python", "C++", "OpenCV", "Kalman/Particle Filters"],
    period: "August 2025",
  },
  {
    id: "ai-career-guidance",
    name: "AI-Powered Career Guidance Platform",
    description:
      "Cut LLM API latency ~40% and reduced token costs by architecting a RAG pipeline (LangChain + GPT-4) with Redis response caching, served through a modular Node.js/PostgreSQL REST backend with independently deployable Docker services.",
    tags: ["React", "Node.js", "PostgreSQL", "OpenAI API", "Docker"],
    period: "January 2025",
  },
  {
    id: "retail-backtesting-tool",
    name: "Retail Backtesting Tool",
    description:
      "Backtests declarative YAML strategies with walk-forward validation, then reconciles the backtest against a live trade log to attribute where the two diverged.",
    tags: ["Python", "pandas", "yfinance", "pytest"],
    href: "https://github.com/tyarram262/Retail-Backtesting-Tool",
  },
  {
    id: "llm-evaluation",
    name: "LLM Evaluation",
    description:
      "Eval-as-a-service API — grades prompt/response pairs for toxicity, hallucination, and brand safety with a judge model, persisting scores behind authenticated routes.",
    tags: ["Python", "FastAPI", "SQLite", "Docker"],
    href: "https://github.com/tyarram262/LLM_Evaluation",
  },
  {
    id: "computer-vision-asl",
    name: "Computer Vision ASL",
    description:
      "Real-time webcam feedback on American Sign Language hand form, with an AWS Bedrock analysis path and a MediaPipe fallback.",
    tags: ["React", "Python", "AWS Bedrock", "MediaPipe"],
    href: "https://github.com/tyarram262/Computer-Vision-ASL",
  },
];

export type Degree = {
  school: string;
  degree: string;
  date: string;
  gpa?: string;
  coursework: string[];
};

export const education: Degree[] = [
  {
    school: "University of Texas at Austin",
    degree: "M.S. in Computer Science",
    date: "Aug 2026 – May 2028 (Expected)",
    coursework: [
      "Algorithms",
      "Machine Learning",
      "Advanced OS",
      "Distributed Computing",
      "Deep Learning",
      "Parallel Systems",
      "NLP",
    ],
  },
  {
    school: "Texas A&M University",
    degree: "B.S. in Applied Mathematics and Computer Science, Minor: Statistics",
    date: "December 2025",
    gpa: "3.8",
    coursework: [
      "DSA",
      "Discrete Structures",
      "Machine Learning",
      "Algorithm Analysis",
      "Computer Architecture",
    ],
  },
];

export const publication = {
  citation:
    "Yarram et al., AERA 2026, Los Angeles, CA — computational modeling and STEM+C mentorship research (poster session).",
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "Java", "C++", "JavaScript", "TypeScript", "MySQL", "Bash"],
  },
  {
    label: "Frameworks & libraries",
    items: [
      "React",
      "Spring Boot",
      "Pandas",
      "GraphQL",
      "TensorFlow",
      "scikit-learn",
      "PyTorch",
      "LangChain",
      "MCP",
      "RAG pipelines",
    ],
  },
  {
    label: "Technologies",
    items: [
      "Docker",
      "Kubernetes",
      "NGINX",
      "Kafka",
      "AWS SageMaker",
      "Azure",
      "Elasticsearch",
      "FastAPI",
      "Snowflake",
      "Redis",
      "Grafana",
      "Splunk",
    ],
  },
  {
    label: "Methodologies",
    items: [
      "REST APIs",
      "API gateway design",
      "mTLS/PKI",
      "Application security",
      "Agile/Scrum",
      "OOP/OOD",
      "CI/CD",
      "Distributed systems",
      "Git",
    ],
  },
];

export const certifications: string[] = [
  "Oracle Certified Professional: Java SE 11 Developer",
  "Supervised Machine Learning: Regression and Classification",
];
