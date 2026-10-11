/** Section 5 — Hero. Three lines, each doing a different job: reframe, claim, proof. */

import type { ProofPoint } from "./types";

export const hero = {
  eyebrow: "Four years of Python in production. Three product startups.",
  headline: "Code that ships. Servers that stay up.",
  /**
   * The same headline, broken for the line-by-line mask reveal. The break sits at
   * the comma — the identical split the OG image uses, so the social card and the
   * page agree.
   */
  headlineLines: ["Code that ships.", "Servers that stay up."],
  /** Read before the headline by screen readers and crawlers, so the H1 names him. */
  headlineSrPrefix: "Satyam Sharma, backend and platform engineer —",
  subheadline:
    "Backend engineer working the seam between development and operations — Python and Django services, and the Linux, Docker and observability layer they actually run on.",
  lede: "Software Engineer at HT Media, previously India IVF Fertility and InstaAstro. Outside work I built MoneyDock, a personal-finance platform for the Indian market: 27 calculators, ~4,800 indexed pages, five live data feeds, and 272 automated tests wired into the build command so a failing test blocks the deploy. And Animatrixx — plus the nine-container stack behind it: Django under uWSGI behind nginx, Celery on RabbitMQ, Redis, Elasticsearch, and a Prometheus/Grafana/Loki layer I self-host rather than rent.",
  /** Four cells, mono, no icons. This is the 12-second read. */
  proof: [
    { value: "4 yrs", label: "Python and Django in production" },
    { value: "168K", label: "search impressions since Nov 2025, moneydock.in" },
    { value: "272", label: "tests gating every production deploy" },
    { value: "9", label: "containerised services I run myself" },
  ] satisfies readonly ProofPoint[],
  availability:
    "Open to Backend, Platform and DevOps engineering roles · Delhi NCR — Noida, Gurugram · On-site, hybrid or remote",
  scrollCue: "Scroll",
  portraitAlt: "Satyam Sharma, backend and platform engineer, Noida, India",
  /**
   * Rendered in place of the photograph while `profile.portrait` is null. Initials,
   * role and location set in the site's own type — a deliberate panel, rather than a
   * grey box with a broken-image glyph in it.
   */
  portraitFallback: {
    initials: "SS",
    caption: "Backend & Platform Engineer",
    sub: "Noida, India · IST",
  },
} as const;

/**
 * Technology strip. Four groupings, ordered the way the work is layered: the service,
 * the state it keeps, the machine it runs on, and the surface a user touches. Every
 * item appears in shipped production work or in one of the two case studies below.
 */
export const techStrip = [
  {
    label: "Backend",
    items: ["Python", "Django", "Django REST Framework", "Celery", "REST APIs", "ORM"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MariaDB", "MySQL", "MongoDB", "Redis", "Elasticsearch"],
  },
  {
    label: "Platform",
    items: ["Linux", "Docker", "nginx", "uWSGI", "AWS", "Vultr", "CI/CD"],
  },
  {
    label: "Operate",
    items: ["Prometheus", "Grafana", "Loki", "RabbitMQ", "Vitest"],
  },
] as const;
