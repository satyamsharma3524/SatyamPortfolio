/**
 * Section 6 — Currently.
 *
 * Three live threads: the day job, and the two products that are still being worked on
 * rather than parked. Momentum is what separates a portfolio from an archive.
 */

import type { CurrentlyEntry, SectionMeta } from "./types";

export const currentlyMeta: SectionMeta = {
  id: "currently",
  eyebrow: "01 · Now",
  heading: "Three things in flight",
  intro:
    "A production codebase inside a large media company, and two products I built and still operate myself — one of them serving live search traffic today.",
};

export const currently: readonly CurrentlyEntry[] = [
  {
    name: "HT Media",
    period: "Mar 2026 — Present",
    role: "Software Engineer",
    summary:
      "Backend and infrastructure work inside one of India’s largest media groups — an existing codebase, existing architectural decisions, and a scale of traffic no side project reaches.",
    live: true,
  },
  {
    name: "MoneyDock",
    period: "Dec 2025 — Present",
    role: "Solo engineer — built and operated",
    summary:
      "A personal-finance platform for the Indian market. 27 calculators, ~9,250 indexed pages, five external data feeds, 272 tests gating every deploy. Live at moneydock.in.",
    live: true,
    caseStudy: "moneydock",
  },
  {
    name: "Animatrixx",
    period: "Aug 2024 — Present",
    role: "Solo engineer — build and infrastructure",
    summary:
      "An anime and manga platform, and the nine-container stack it runs on: Django, Celery, RabbitMQ, Redis, MariaDB, Elasticsearch, and a full Prometheus/Grafana/Loki observability layer.",
    live: true,
    caseStudy: "animatrixx",
  },
];

export const currentlyTransition =
  "The two products below have full write-ups — the architecture, the decisions I’d defend, the ones I got wrong, and what the numbers said afterwards.";
