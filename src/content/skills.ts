/**
 * Section 9 — Stack.
 *
 * Grouped as a hiring engineer would scan them, with every entry pointing at where it
 * was used. No proficiency bars, no self-ratings, no percentages — a five-star rating
 * on "Docker" tells a reader nothing they can check.
 *
 * Two evidence levels, and the distinction is load-bearing:
 *   "stated"   (■) — verifiable in that codebase or that role. If someone opened the
 *                    repository, they would find it.
 *   "inferred" (□) — in my toolkit, but not attributable to that specific column.
 *
 * The empty cells are deliberate. They are what make the filled ones mean something.
 */

import type { EvidencedSkill, SectionMeta, SkillGroup } from "./types";

export const skillsMeta: SectionMeta = {
  id: "skills",
  eyebrow: "04 · Stack",
  heading: "What I use, and where I used it",
  intro:
    "Two of these columns are projects with full write-ups on this site; three are production codebases at employers. Hover a skill to light up where it was used.",
};

/**
 * Column key: MD MoneyDock · AX Animatrixx · HT HT Media · IVF India IVF · IA InstaAstro
 *
 * The two project columns carry `slug`s because their case studies are on this site and
 * a reader can go check the claim. The three employer columns do not — those codebases
 * are not public, and a link that cannot exist should not pretend to.
 */
export const projectColumns = {
  MD: { short: "MD", name: "MoneyDock", slug: "moneydock" },
  AX: { short: "AX", name: "Animatrixx", slug: "animatrixx" },
  HT: { short: "HT", name: "HT Media", slug: null },
  IVF: { short: "IVF", name: "India IVF Fertility", slug: null },
  IA: { short: "IA", name: "InstaAstro", slug: null },
} as const;

export const evidenceLegend = [
  { level: "stated", label: "Verifiable in that codebase or role" },
  { level: "inferred", label: "In my toolkit — not attributed there" },
] as const;

const COLUMNS = ["MD", "AX", "HT", "IVF", "IA"] as const;

export const skillGroups: readonly SkillGroup[] = [
  {
    name: "Backend",
    columns: COLUMNS,
    rows: [
      { skill: "Python", cells: { AX: "stated", HT: "stated", IVF: "stated", IA: "stated" } },
      { skill: "Django", cells: { AX: "stated", HT: "stated", IVF: "stated", IA: "stated" } },
      { skill: "Django REST Framework", cells: { AX: "stated", IVF: "stated", IA: "stated" } },
      { skill: "Celery", cells: { AX: "stated", IA: "stated" } },
      { skill: "RabbitMQ", cells: { AX: "stated", IA: "stated" } },
      {
        skill: "REST API design",
        cells: { MD: "stated", AX: "stated", HT: "inferred", IVF: "inferred", IA: "stated" },
      },
      {
        skill: "Object-Relational Mapping",
        cells: { AX: "stated", IVF: "inferred", IA: "stated" },
      },
      { skill: "ETL / data pipelines", cells: { MD: "stated", AX: "stated", IVF: "stated" } },
      { skill: "Web scraping", cells: { MD: "stated", AX: "stated" } },
      { skill: "System architecture", cells: { MD: "stated", AX: "stated" } },
      {
        skill: "Debugging",
        cells: { MD: "stated", AX: "stated", HT: "inferred", IVF: "inferred", IA: "stated" },
      },
    ],
    note: "The MoneyDock column is empty for Django and Celery on purpose — that project is Next.js and cron route handlers, not Python. Claiming it there would make every other mark in this matrix worth less.",
  },
  {
    name: "Data",
    columns: COLUMNS,
    rows: [
      { skill: "MariaDB / MySQL", cells: { AX: "stated", IVF: "stated", IA: "stated" } },
      { skill: "PostgreSQL", cells: { HT: "inferred", IVF: "inferred", IA: "inferred" } },
      { skill: "MongoDB", cells: { MD: "stated" } },
      { skill: "Redis", cells: { AX: "stated", IA: "inferred" } },
      { skill: "Elasticsearch", cells: { AX: "stated" } },
      { skill: "Database design", cells: { MD: "stated", AX: "stated", IVF: "stated" } },
      { skill: "Database administration", cells: { AX: "stated", IVF: "stated" } },
      { skill: "Time-series modelling", cells: { MD: "stated" } },
      { skill: "Caching strategy", cells: { MD: "stated", AX: "stated" } },
    ],
  },
  {
    name: "Platform & operations",
    columns: COLUMNS,
    rows: [
      {
        skill: "Linux",
        cells: { AX: "stated", HT: "stated", IVF: "stated", IA: "stated" },
      },
      { skill: "Docker", cells: { AX: "stated", IVF: "stated", IA: "stated" } },
      { skill: "nginx", cells: { AX: "stated", IVF: "inferred" } },
      { skill: "uWSGI", cells: { AX: "stated" } },
      { skill: "AWS", cells: { MD: "stated", AX: "stated", HT: "inferred", IVF: "inferred" } },
      { skill: "Vultr", cells: { AX: "inferred", IVF: "inferred" } },
      { skill: "CI/CD", cells: { MD: "stated", AX: "stated", IVF: "stated" } },
      { skill: "System deployment", cells: { MD: "stated", AX: "stated", IVF: "stated" } },
      { skill: "Prometheus", cells: { AX: "stated", IA: "stated" } },
      { skill: "Grafana", cells: { AX: "stated", IA: "stated" } },
      { skill: "Loki / log shipping", cells: { AX: "stated" } },
      { skill: "Kubernetes", cells: {} },
    ],
    note: "Kubernetes has no mark in any column. It is on my LinkedIn and it is not yet in anything I have shipped, so it gets an empty row rather than a generous one.",
  },
  {
    name: "Product surface",
    columns: COLUMNS,
    rows: [
      { skill: "Next.js", cells: { MD: "stated", AX: "stated" } },
      { skill: "React", cells: { MD: "stated", AX: "stated" } },
      { skill: "TypeScript", cells: { MD: "stated", AX: "stated" } },
      { skill: "Tailwind CSS", cells: { MD: "stated", AX: "stated" } },
      { skill: "Vitest / Testing Library", cells: { MD: "stated" } },
      { skill: "Programmatic SEO", cells: { MD: "stated" } },
      { skill: "Structured data (JSON-LD)", cells: { MD: "stated" } },
      { skill: "Git", cells: { MD: "stated", AX: "stated", HT: "stated", IVF: "stated", IA: "stated" } },
    ],
  },
];

/**
 * Testing is split out deliberately. It is the clearest before-and-after in my work —
 * zero tests on one project, 272 gating deploys on the next — and burying that inside a
 * matrix row would lose the only part of it that matters.
 */
export const dataAnalytics = {
  name: "Testing & correctness",
  shippedLabel: "In shipped work",
  shipped: [
    { skill: "272 tests gating every deploy", where: "MoneyDock — in the build command" },
    { skill: "Unit-tested financial mathematics", where: "MoneyDock — pure, I/O-free modules" },
    { skill: "Regression tests pinning each hardening fix", where: "MoneyDock — 14 findings" },
    { skill: "Content-quality assertions as tests", where: "MoneyDock — body length, FAQ counts" },
  ] satisfies readonly EvidencedSkill[],
  workingLabel: "Practices I apply, not yet all in one codebase",
  working: [
    "Vitest",
    "Testing Library",
    "jsdom",
    "Contract tests for API routes",
    "Pure-function extraction",
    "Fail-open vs fail-closed defaults",
    "Timeouts on all outbound I/O",
    "Graceful degradation contracts",
    "Idempotent ETL",
    "Backoff with jitter",
  ],
} as const;

interface ToolEntry {
  readonly tool: string;
  readonly where: string;
  readonly level: "stated" | "inferred" | "coursework";
}

export const tools: readonly ToolEntry[] = [
  { tool: "Prometheus + Grafana", where: "Animatrixx, InstaAstro", level: "stated" },
  { tool: "Loki + Promtail", where: "Animatrixx", level: "stated" },
  { tool: "Docker Compose", where: "Animatrixx", level: "stated" },
  { tool: "Google Search Console", where: "MoneyDock", level: "stated" },
  { tool: "Vitest", where: "MoneyDock", level: "stated" },
  { tool: "Kubernetes", where: "Not yet shipped", level: "inferred" },
];

export const skillsMatrixCaption =
  "The empty cells are the point. A matrix where every row is full is a list of words, not evidence — so Kubernetes has no marks, and Django has none under MoneyDock.";

export const skillsClosing =
  "Nothing on this list is here because it looks good on a list. Three of these I learned because a system I had already shipped broke without them.";
