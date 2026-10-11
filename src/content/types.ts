/**
 * Content types.
 *
 * Every string that reaches the page originates in `PORTFOLIO-CONTENT.md` and is
 * transcribed verbatim into the modules in this directory. Components read from
 * here; no component authors copy of its own.
 */

/**
 * "Live" is the honest label for a product that is deployed and serving real traffic
 * while still being actively worked on. "In development" understates a site with
 * indexed pages and search impressions; "Delivered" implies it was handed over and
 * left alone. Both of the projects here are neither.
 */
export type ProjectStatus =
  | "Live"
  | "Delivered"
  | "In development"
  | "In progress";

export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export interface SectionMeta {
  /** Mono eyebrow, e.g. "02 · Work". Absent on the one unnumbered section. */
  readonly eyebrow?: string;
  readonly heading: string;
  readonly intro?: string;
  readonly id: string;
}

export interface ProofPoint {
  readonly value: string;
  readonly label: string;
}

export interface CurrentlyEntry {
  readonly name: string;
  readonly period: string;
  readonly role: string;
  readonly summary: string;
  /** Drives the status dot: accent for active threads. */
  readonly live: boolean;
  readonly caseStudy?: string;
}

export interface JourneyBeat {
  readonly year: string;
  readonly title: string;
  readonly body: string;
}

export interface FocusBlock {
  readonly label: string;
  readonly body: string;
}

export interface Adjective {
  readonly word: string;
  readonly gloss: string;
}

export interface PracticeStep {
  readonly number: string;
  readonly name: string;
  readonly body: string;
}

/**
 * Column keys for the skills matrix.
 *
 * Two of these are projects with case studies on this site; three are employers. That
 * mix is deliberate — a skill proven in production at a company is stronger evidence
 * than the same skill proven in a side project, and the matrix should be able to say
 * which one it was.
 *
 * MD MoneyDock · AX Animatrixx · HT HT Media · IVF India IVF Fertility · IA InstaAstro
 */
export type ProjectKey = "MD" | "AX" | "HT" | "IVF" | "IA";

/** "✓" — stated in that project’s write-up. "○" — inferred, not yet attributed. */
export type Evidence = "stated" | "inferred";

export interface SkillRow {
  readonly skill: string;
  readonly cells: Partial<Record<ProjectKey, Evidence>>;
}

export interface SkillGroup {
  readonly name: string;
  readonly columns: readonly ProjectKey[];
  readonly rows: readonly SkillRow[];
  readonly note?: string;
}

export interface EvidencedSkill {
  readonly skill: string;
  readonly where: string;
}

export interface ArchitectureLayer {
  readonly name: string;
  readonly body: string;
}

export interface FlowNode {
  readonly label: string;
  readonly detail?: string;
}

export interface FeatureRow {
  readonly feature: string;
  readonly what: string;
  readonly why: string;
}

export interface NamedBlock {
  readonly title: string;
  readonly body: string;
}

export interface ProjectLink {
  readonly label: string;
  readonly href?: string;
  /** Shown in place of a link when the destination cannot exist yet. */
  readonly unavailable?: string;
}

export interface GoalBlock {
  readonly label: string;
  readonly body?: string;
  readonly items?: readonly string[];
}

export interface Project {
  readonly slug: string;
  readonly name: string;
  readonly status: ProjectStatus;
  readonly role: string;
  readonly kind: string;
  readonly period: string;
  readonly metaTitle: string;
  /** Grid-view card copy. */
  readonly cardBlurb: string;
  /** One-line reason this project sits in this position in the order. */
  readonly rationale: string;
  readonly metrics: readonly ProofPoint[];
  readonly overview: readonly string[];
  readonly problem: readonly string[];
  readonly goals: readonly GoalBlock[];
  readonly architecture: {
    readonly preface?: string;
    readonly layers: readonly ArchitectureLayer[];
    readonly footnote?: string;
    /** Left-to-right flow diagram, where the content specifies one. */
    readonly flow?: readonly FlowNode[];
  };
  readonly features: {
    readonly columns: readonly [string, string, string];
    readonly rows: readonly FeatureRow[];
  };
  readonly decisions: {
    readonly preface?: string;
    readonly items: readonly NamedBlock[];
  };
  readonly challenges: readonly NamedBlock[];
  readonly lessons: readonly NamedBlock[];
  readonly futureImprovements: {
    readonly preface?: string;
    readonly items: readonly string[];
  };
  readonly technologies: {
    readonly statedLabel: string;
    readonly stated: readonly string[];
    readonly impliedLabel?: string;
    readonly implied?: readonly string[];
    readonly footnote?: string;
  };
  readonly links: readonly ProjectLink[];
  readonly mediaPlaceholder: string;
}

export interface ExperienceEntry {
  readonly role: string;
  readonly org: string;
  readonly context: string;
  readonly period: string;
  readonly bullets: readonly string[];
  readonly caseStudy?: string;
  /** URL segment for this role's own page: /experience/<slug>. */
  readonly slug: string;
  /** The organisation's plain name, for page titles and schema. */
  readonly orgName: string;
  /** A shorter role title for the <title> tag, when the full one would be truncated. */
  readonly shortRole?: string;
  /** Other names people search the organisation by. */
  readonly orgAliases?: readonly string[];
  /** Verified public references for the organisation (schema sameAs). */
  readonly orgSameAs?: readonly string[];
  /** Where the role was based. */
  readonly city?: string;
  /** True for the role held now. */
  readonly current?: boolean;
  /** Technologies named in this role's bullets — nothing that is not stated above. */
  readonly stack: readonly string[];
}

export interface Certification {
  readonly name: string;
  readonly issuer: string;
}

export interface Achievement {
  readonly achievement: string;
  readonly context: string;
}
