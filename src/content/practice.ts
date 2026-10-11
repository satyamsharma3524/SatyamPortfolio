/**
 * Section 8 — How I Build.
 *
 * Not a generic SDLC diagram. These five steps are the order actually followed across
 * MoneyDock and Animatrixx, and each example is checkable against one of those two
 * codebases — which is the only reason a section like this is worth having.
 */

import type { PracticeStep, SectionMeta } from "./types";

export const practiceMeta: SectionMeta = {
  id: "practice",
  eyebrow: "03 · Method",
  heading: "How I build a service",
  intro:
    "Five steps, in the order I run them. Every example is from a real codebase, and step 05 is the one that changed how I work.",
};

export const practiceSteps: readonly PracticeStep[] = [
  {
    number: "01",
    name: "Model the data first",
    body: "The schema decides what the application can cheaply do, so it gets settled before any endpoint exists. On MoneyDock that meant storing five years of daily prices as capped parallel arrays on one document per security rather than three million rows — which made a full history read a single document fetch, at the cost of cross-entity history queries the product never needs.",
  },
  {
    number: "02",
    name: "Isolate what must be correct",
    body: "Anything whose wrongness is expensive gets pulled into pure, I/O-free functions that can be tested without a network. Every financial metric on MoneyDock lives in that layer, returns null rather than NaN, and ends in a finite check. The feed parsers are split into a pure parse(text) half and a fetching half for the same reason.",
  },
  {
    number: "03",
    name: "Assume the network is hostile",
    body: "Every outbound call gets a timeout — twelve of them on MoneyDock, from 8 to 30 seconds. Retries are differentiated by failure class rather than applied uniformly: on Animatrixx, rate limits and dropped connections back off exponentially with jitter, timeouts back off without it, and non-retryable errors bail immediately instead of burning the budget. Failure degrades to the shape the client already renders, not to a 500.",
  },
  {
    number: "04",
    name: "Run it, and watch it",
    body: "Deployment is part of the design, not the step after it. On Animatrixx that meant nine containers on one network — nginx, uWSGI, Celery, RabbitMQ, Redis, MariaDB, Elasticsearch — with Prometheus scraping application and query metrics every four seconds and Promtail shipping logs into Loki. I built that plane rather than rent one, which is why I can now read one.",
  },
  {
    number: "05",
    name: "Make the gate mechanical",
    body: "Discipline I have to remember is discipline I will skip. MoneyDock’s Vercel build command runs the test suite before the build, so 272 failing-or-passing tests decide whether a deployment exists at all. Before the hardening pass I wrote 100 tests against the unmodified source and got them green first, so any fix that changed behaviour would be visibly wrong rather than arguably fine.",
  },
];

export const practiceClosing =
  "Steps 01 through 04 are judgment, and judgment fails quietly. Step 05 is the only one that fails loudly, which is why it is the one I would not give up.";
