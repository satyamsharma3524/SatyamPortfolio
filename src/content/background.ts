/**
 * Section 11 — Background. Experience, education, certifications, achievements, ownership.
 *
 * ⚠️  THE THREE EMPLOYER BULLET SETS BELOW ARE DELIBERATELY CONSERVATIVE.
 *
 * They are written only from what is publicly verifiable: the role titles, the durations,
 * and the technologies attributed to each role. No metric, incident, scale figure or
 * outcome has been invented for any employer — a fabricated "reduced latency by 40%" is
 * the fastest way to lose a technical interview, because the follow-up question is always
 * "reduced from what, measured how?".
 *
 * Satyam: replace each `bullets` array with 2–4 real specifics per role — what you built,
 * what scale it ran at, what broke and what you did about it. Numbers wherever you are
 * allowed to share them. That is the single highest-leverage edit remaining on this site.
 */

import type {
  Achievement,
  Certification,
  ExperienceEntry,
  NamedBlock,
  SectionMeta,
} from "./types";

export const backgroundMeta: SectionMeta = {
  id: "background",
  eyebrow: "05 · Background",
  heading: "Experience, education, credentials",
  intro: "The formal version, for anyone who needs it in this shape.",
};

export const experience: readonly ExperienceEntry[] = [
  {
    role: "Software Engineer",
    org: "HT Media · Hindustan Times",
    context: "Gurugram, Haryana · On-site",
    period: "Mar 2026 — Present",
    bullets: [
      "Backend and infrastructure engineering inside one of India’s largest media groups — an established codebase, architectural decisions I did not make, and traffic at a scale no side project reaches.",
      "Python, Django and Linux server work, in an environment where the development and operations halves of a change are both mine to reason about.",
    ],
  },
  {
    role: "Software Engineer (Django, DevOps)",
    org: "India IVF Fertility",
    context: "Noida, Uttar Pradesh · On-site · 1 yr 2 mos",
    period: "Feb 2025 — Mar 2026",
    bullets: [
      "A role where the Django work and the DevOps work were formally the same job: building Django and Django REST Framework services, and configuring the containers, servers and deployment path they ran on.",
      "MariaDB schema design and administration, deployment pipelines, and system deployment — the areas colleagues at the company have since endorsed on the public record.",
      "This is the year deployment stopped being the step after development for me and became part of the design, because I was the person underneath what I had just written.",
    ],
  },
  {
    role: "Software Engineer (Python, Django)",
    org: "InstaAstro",
    context: "Noida, Uttar Pradesh · On-site · 2 yrs 3 mos",
    period: "Oct 2022 — Dec 2024",
    bullets: [
      "Back-end engineering on a live consumer product at a product-based startup — Python, Django and Django REST Framework against real users from my first year in the industry.",
      "Asynchronous processing with Celery over RabbitMQ, MariaDB and ORM-level work, and Docker on Linux for packaging and deployment.",
      "Where Prometheus and Grafana stopped being résumé entries and became tools I had actually debugged a production problem with — the reason I later chose to build that layer myself rather than rent it.",
    ],
  },
  {
    role: "Data Science & Machine Learning Apprentice",
    org: "Coding Ninjas",
    context: "Apprenticeship · 1 yr 3 mos",
    period: "Jul 2022 — Sep 2023",
    bullets: [
      "Structured apprenticeship in data science and machine learning, run alongside full-time engineering work. The Python data-handling habits it built are the ones the MoneyDock metric layer is written with.",
    ],
  },
];

export const education = {
  degree: "MCA, Computer Software Engineering",
  institution: "Indira Gandhi National Open University",
  period: "Jul 2023 — Jul 2025",
  note: "Completed while working full-time as a software engineer — the master’s ran alongside two and a half years of production work rather than before it. Earlier: BCA in web and software development from Panjab University, Chandigarh (2019–2022), graduating with an A+ grade.",
} as const;

export const certifications: readonly Certification[] = [
  {
    name: "Data Structures & Algorithms in Python — Excellence Certificate",
    issuer: "Coding Ninjas · Nov 2022",
  },
  { name: "Python — Certificate of Excellence", issuer: "Coding Ninjas" },
  { name: "Django — Skill Assessment, passed", issuer: "LinkedIn" },
  { name: "Data Science & Machine Learning", issuer: "Coding Ninjas" },
];

export const achievementsIntro =
  "Drawn from work that exists and can be checked. Every figure carries the window it was measured over; the search numbers are Google Search Console for moneydock.in, twelve months to August 2026.";

export const achievements: readonly Achievement[] = [
  {
    achievement: "65,400 search impressions in 12 months",
    context: "moneydock.in, from a domain that did not exist in December 2025",
  },
  {
    achievement: "4,800+ pages indexed by Google",
    context: "Programmatic page sets built to survive a scaled-content review",
  },
  {
    achievement: "272 tests gating every production deploy",
    context: "Grown from 100. In the build command, so a failure blocks the deployment",
  },
  {
    achievement: "2,300 API calls replaced by a single CSV",
    context: "Switching to NSE's official Bhavcopy removed the rate-limit ceiling entirely",
  },
  {
    achievement: "9 services self-hosted and administered",
    context: "Animatrixx — including the Prometheus, Grafana and Loki plane I built myself",
  },
  {
    achievement: "4 years of production Python",
    context: "Across three product-based startups, none with a separate ops function",
  },
];

export const leadership: readonly NamedBlock[] = [
  {
    title: "Owning the runtime, not just the commit.",
    body: "Across three employers and two solo products, the operational half has never been someone else’s. That is why I configure nginx and uWSGI, why I stood up a metrics and log-shipping plane on Animatrixx rather than requesting one, and why I treat a deployment path as something to design instead of something to follow.",
  },
  {
    title: "Making my own discipline mechanical.",
    body: "MoneyDock’s test suite lives in the build command rather than in CI, because a green badge is advisory and a build that refuses to produce a deployment is a constraint. Before the hardening pass I locked existing behaviour behind 100 tests written against untouched source, so any fix that changed something would be visibly wrong rather than arguably fine.",
  },
  {
    title: "Publishing my own defects.",
    body: "The Animatrixx write-up on this site names the secrets baked into a Docker image, the homepage rail that silently returns nothing, and the localStorage decision I would reverse. I would rather be the engineer who found those and said so than the one who shipped them and hoped nobody looked.",
  },
];
