/**
 * Section 10.5 — Design documents.
 *
 * A solo project has no design-review meeting, so the reasoning either gets written
 * down or it lives in one head and decays. MoneyDock's repository carries five
 * substantial engineering documents alongside the code. This section exists because
 * they are, on reflection, the least common thing in this portfolio: plenty of
 * engineers ship a side project, and very few write the decision record for one.
 *
 * `documents` stays empty — the repository is private, and a link that cannot exist
 * should not be drawn. The section renders what is real: what each document is for.
 */

export const analysis = {
  heading: "Design documents",
  intro:
    "Five engineering documents in the MoneyDock repository. Not deliverables for anyone — the reasoning written down so it could be argued with later, including by me.",
  period: "Dec 2025 — Present",
  status: "In the repository",
  cardTitle: "Five design documents, written for a team of one",
  cardBlurb:
    "A scaling blueprint, a hardening report, an SEO strategy, a deploy checklist and a content audit. Together they are the reason I can explain a decision I made eight months ago without reconstructing it.",
  cta: "",
  distinction:
    "The case studies above describe systems I built. These describe decisions I made — including the ones I later reversed, which is the part a document is actually for. A commit history tells you what changed. It does not tell you what else was on the table.",
  framing: [
    "The habit came from a specific failure. On Animatrixx I made a series of reasonable local decisions — hand the reader its images through localStorage, disable the type checker to get a build out, cache whole model instances in Redis — and eight months later I could no longer reconstruct why. Each one had a cost I had not written down, so each one had to be rediscovered.",
    "So on MoneyDock the rationale ships with the code. The scaling blueprint records not only the page sets I built but the one I killed, and the test it failed. The hardening report numbers fourteen findings and names the test that pins each fix, so a future refactor cannot quietly undo one. The deploy checklist records what was rejected as well as what shipped — including advice I was given and decided against.",
    "The document I would point an interviewer at is the content audit. My own automation had produced about ninety-five posts of news and stock tips that were dragging the whole domain under a scaled-content signal. The audit is the paperwork of deleting roughly eighty of them.",
  ],
  documents: [
    {
      stage: "Scaling blueprint",
      what: "Every programmatic page set, the one test each had to pass, and the concept killed for failing it",
    },
    {
      stage: "Hardening report",
      what: "Fourteen numbered findings, each with the failure it closed and the test that pins it shut",
    },
    {
      stage: "SEO strategy",
      what: "Where the real risk sits, and why volume was never the problem — undifferentiated volume was",
    },
    {
      stage: "Deploy checklist",
      what: "What shipped, what was deliberately rejected, and how to read the metrics afterwards",
    },
    {
      stage: "Content audit",
      what: "The case for deleting roughly 80 of 95 posts my own automation had generated",
    },
  ],
  methods: [
    "Design docs",
    "Decision records",
    "Failure-mode analysis",
    "Release gating",
    "Self-audit",
    "Markdown",
  ],
  /** Private repository — no public URLs to link. Walkthrough on request. */
  studies: [] as readonly { title: string; href: string; summary?: string }[],
} as const;
