/** Section 4 — Navigation & Global Microcopy. */

import type { NavItem } from "./types";

export const nav: readonly NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "How I Build", href: "#practice" },
  { label: "Stack", href: "#skills" },
  { label: "Background", href: "#background" },
  { label: "Contact", href: "#contact" },
];

/** Mobile sheet header. Sheet, not hamburger overlay. */
export const mobileNavHeading = "Sections";

export const buttons = {
  heroPrimary: "See the work",
  heroSecondary: "Résumé",
  heroTertiary: "Email me",
  projectCard: "Read the case study",
  liveProduct: "Open the live product",
  repo: "View the code",
  prd: "Read the design doc",
  caseStudyBack: "← All work",
  contactPrimary: "Email me",
  contactSecondary: "Connect on LinkedIn",
  skillsRevealMore: "Show all",
  skillsRevealLess: "Show less",
  copy: "Copy",
  copied: "Copied",
} as const;

/** Never a dead `#`. When a link cannot exist yet, say why in one clause. */
export const unavailable = {
  privateRepo: "Private repository — walkthrough on request",
  employerRestricted: "Employer system — not publicly linkable",
  notPublic: "Build available on request",
  screensPending: "Screens pending",
} as const;

/** Single centred line, mono, low contrast, fades at ~600ms. No spinner. */
export const loading = {
  primary: ["Satyam Sharma", "Backend, then the runtime."],
  alternates: [
    "Build it, then run it.",
    "Two products. One page.",
    "Loading the work.",
  ],
} as const;

export const notFound = {
  heading: "404",
  body: [
    "This route doesn’t exist.",
    "Which is at least the correct status code —\nand better than a soft 200 on an empty page.",
    "Everything that does exist is one click away.",
  ],
  actions: { primary: "Back to the work", secondary: "Email me" },
  metaTitle: "Not found",
  metaDescription: "That route doesn’t exist. The work does.",
} as const;

export const errorPage = {
  heading: "500",
  body: [
    "Something broke on my end.",
    "Not your fault, and not a routing problem —\nthe page failed to render.",
  ],
  actions: { primary: "Try again", secondary: "Back to the work" },
  footnote: "If it keeps happening:",
} as const;

export const emptyStates = {
  mediaSlot: "Screens pending — live product linked above",
  decisionsPending:
    "Trade-off notes in progress. Happy to talk through the calls I made.",
  skillFilterEmpty: "Nothing under that filter yet. The full list is above.",
  caseStudyFilterEmpty: "No projects match. Clear the filter to see everything.",
} as const;

export const a11y = {
  skipLink: "Skip to content",
  navLandmark: "Primary navigation",
  emailLink: "Email Satyam Sharma",
  resumeLink: "Download résumé, PDF, opens in a new tab",
  projectCardLink: (project: string) => `Read the ${project} case study`,
  scrollProgress: "Page progress",
  themeGroup: "Colour theme",
  themeAuto: "Match the system theme",
  themeToLight: "Switch to light theme",
  themeToDark: "Switch to dark theme",
} as const;

export const toasts = {
  emailCopied: "Email copied",
  linkCopied: "Link copied",
  resumeOpening: "Opening résumé",
} as const;
