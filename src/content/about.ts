/** Section 7 — About. */

import type { FocusBlock, JourneyBeat, SectionMeta } from "./types";

export const aboutMeta: SectionMeta = {
  id: "about",
  heading: "About",
};

export const professionalSummary: readonly string[] = [
  "I’m a backend engineer four years into production Python, and I’ve spent most of that time on the side of the line most teams put a handoff on.",
  "The pattern is consistent across three startups and two solo products: write the service, model the data, then own the machine it runs on. At InstaAstro that meant Django and Celery alongside Grafana and Prometheus. At India IVF it meant the Django work and the DevOps work being the same job description. On Animatrixx it meant standing up nine containers and a metrics plane because there was nobody to ask for one. On MoneyDock it meant five ingestion pipelines, 272 tests, and being the person who has to read Search Console at midnight when indexation moves.",
  "I’m not a developer who has heard of Docker, and I’m not an ops engineer who scripts a bit. I do both, and the reason I keep doing both is that the code gets better when you’re the one who has to keep it alive.",
];

/** Four beats. Each one names what changed. */
export const journey: readonly JourneyBeat[] = [
  {
    year: "2022",
    title: "Python, in production, immediately.",
    body: "InstaAstro was a live consumer product and I was writing Django against it in my first year out. Two years and three months there taught me the difference between code that works and code that works at 9pm on a Sunday — and it’s where Celery, RabbitMQ, Prometheus and Grafana stopped being résumé words and became things I’d actually debugged.",
  },
  {
    year: "2025",
    title: "The title said Django and DevOps.",
    body: "At India IVF Fertility the two halves were formally one role. That year is when I stopped thinking of deployment as the last step of development and started thinking of the runtime as part of the design — because I was the one configuring nginx, the containers and the servers underneath what I’d just written.",
  },
  {
    year: "2024 — 2025",
    title: "Building the layer I’d always been handed.",
    body: "Animatrixx is where I self-hosted everything on purpose: Django under uWSGI behind nginx, Celery on RabbitMQ, Redis, Elasticsearch, and a Prometheus, Loki and Grafana stack I stood up myself. It also has no tests, secrets I baked into a Docker image, and a homepage rail that silently returns nothing. I learned more from that list than from anything that went right.",
  },
  {
    year: "2026",
    title: "Doing it properly the second time.",
    body: "MoneyDock is the correction. 272 tests wired into the build command so a failure blocks the deploy rather than filing a ticket. Timeouts on all twelve outbound calls. A hardening pass with fourteen findings, each pinned by a test written against the unmodified source first. Every one of those disciplines exists because Animatrixx showed me what its absence costs.",
  },
];

export const currentFocus: readonly FocusBlock[] = [
  {
    label: "What I’m working on right now",
    body: "MoneyDock’s indexation curve. Impressions went from roughly a thousand a day to a peak near five and a half thousand across July, which is mass indexation at deep positions rather than a ranking win — new pages enter around position 70 and drag the average down while nothing that was ranking has moved. The work is turning that volume into position: pruning genuinely thin pages, and making sure every page still standing has a computed number on it that exists nowhere else.",
  },
  {
    label: "What I’m getting better at",
    body: "Instrumenting features rather than infrastructure. I had a four-second scrape interval on request rates and no way to notice that an entire homepage rail had been returning an empty list for weeks. Uptime and correctness are two different questions and I was only asking one of them.",
  },
  {
    label: "What I’m looking for",
    body: "A backend or platform role where owning the runtime is part of the job rather than another team’s. Python and Django services, real data volume, and infrastructure I’m expected to understand rather than file tickets against. I’d rather be somewhere the on-call rotation includes the people who wrote the code.",
  },
];

export const personalNote = "Based in Noida, Uttar Pradesh. MCA, IGNOU, 2024–2026.";
