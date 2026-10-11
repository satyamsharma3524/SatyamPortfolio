/** Section 12 — Contact & Footer. */

import { profile } from "./profile";
import type { SectionMeta } from "./types";

export const contactMeta: SectionMeta = {
  id: "contact",
  eyebrow: "06 · Contact",
  heading: "Let’s talk",
};

/**
 * A contact row. `tel` and `mono` are flags rather than the component matching on the
 * label string — a label is copy, and copy changes. Keying render behaviour to the text
 * means renaming a row silently changes how it is rendered.
 */
export interface ContactDetail {
  readonly label: string;
  readonly value: string;
  /** Renders the copy-to-clipboard affordance and lifts this row into the headline slot. */
  readonly copy?: boolean;
  /** Renders as a tel: link. */
  readonly tel?: boolean;
  /** Sets the value in the mono/tabular face — for anything that is mostly digits. */
  readonly mono?: boolean;
}

export const contact = {
  body: [
    "I’m looking for a backend or platform engineering role — Python and Django services, real data volume, and infrastructure I’m expected to understand rather than file tickets against.",
    "If you’re hiring for something like that, or you want to argue with a decision in one of the case studies above, email is the fastest way to reach me. The Animatrixx write-up has a list of my own mistakes in it; I’m happy to go deeper on any of them.",
  ],
  details: [
    { label: "Email", value: profile.email, copy: true },
    { label: "Location", value: profile.location },
    { label: "Availability", value: "Open to Backend / Platform / DevOps roles" },
    { label: "Work setup", value: "On-site, hybrid or remote · Delhi NCR" },
    { label: "Experience", value: profile.experience, mono: true },
  ] satisfies readonly ContactDetail[],
} as const;

interface FooterLink {
  readonly label: string;
  readonly href: string;
  readonly external?: boolean;
}

/**
 * The résumé link only appears once the PDF exists. This site's rule is that there is
 * never a dead link, and a button pointing at a missing file would break it.
 */
const footerLinks: readonly FooterLink[] = [
  { label: "Work", href: "/#work" },
  { label: "How I Build", href: "/#practice" },
  { label: "Stack", href: "/#skills" },
  { label: "Background", href: "/#background" },
  ...(profile.resumeAvailable
    ? [{ label: "Résumé", href: profile.resumeHref, external: true }]
    : []),
  { label: "MoneyDock", href: profile.links.moneydock, external: true },
  { label: "Animatrixx", href: profile.links.animatrixx, external: true },
  { label: "LinkedIn", href: profile.links.linkedin, external: true },
  ...(profile.links.github
    ? [{ label: "GitHub", href: profile.links.github, external: true }]
    : []),
  { label: "Email", href: `mailto:${profile.email}` },
];

export const footer = {
  name: profile.name,
  tagline: "Code that ships. Servers that stay up.",
  links: footerLinks,
  status: [profile.locationShort, "Open to Backend / Platform / DevOps roles"],
  bottom:
    "© 2026 Satyam Sharma · Built with Next.js and TypeScript · Designed and built by me",
  note: "Every number on this site carries the window it was measured over. If something here doesn’t hold up, tell me — I’d rather fix it than defend it.",
} as const;
