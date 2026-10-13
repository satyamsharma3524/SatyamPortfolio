/** Section 13 — SEO, Metadata & Social. */

import { profile } from "./profile";
import { experience } from "./background";
import type { ExperienceEntry, Project } from "./types";

/**
 * Bump this whenever the content meaningfully changes. It feeds the sitemap's
 * <lastmod> and the schema's dateModified, so Google has a reason to recrawl.
 */
// Full ISO 8601 date-time with a timezone: Google's ProfilePage report rejects a bare
// date ("Invalid datetime value for dateModified").
export const SITE_UPDATED = "2026-10-14T00:00:00+05:30";

/**
 * Name-first everywhere. The query this site has to win is the name itself, so the
 * name leads the <title>, the description, the OG title and the H1's accessible text.
 * Titles stay under ~60 characters and descriptions under ~160 so neither is
 * truncated in results.
 */
export const seo = {
  title: "Satyam Sharma — Software Engineer · Backend, Python & Django",
  titleTemplate: "%s · Satyam Sharma",
  description:
    "Satyam Sharma, software engineer at HT Media (Hindustan Times), previously India IVF Fertility and InstaAstro. 4 years of Python and Django. Built MoneyDock.",
  ogTitle: "Satyam Sharma — Backend & Platform Engineer",
  ogDescription:
    "Satyam Sharma: backend and platform engineer at HT Media. Python, Django, Celery, Docker, Linux, Prometheus. Built and runs MoneyDock (272 tests gating every deploy) and Animatrixx (nine self-hosted services).",
  ogImageAlt: "Satyam Sharma — Backend and Platform Engineer. Code that ships. Servers that stay up.",
  siteName: "Satyam Sharma",
  twitterDescription:
    "Satyam Sharma — backend and platform engineer, 4 years of production Python and Django. Built MoneyDock and Animatrixx, and runs the infrastructure under both.",
  /*
    Google ignores the keywords meta tag and Bing treats a long one as a mild spam
    signal, so this is kept short and honest: the name variants people actually type.
  */
  keywords: [
    "Satyam Sharma",
    "Satyam Sharma software engineer",
    "Satyam Sharma backend engineer",
    "Satyam Sharma developer",
    "Satyam Sharma portfolio",
    "Satyam Sharma Noida",
    "Satyam Sharma HT Media",
    "Satyam Sharma Hindustan Times",
    "Satyam Sharma India IVF",
    "Satyam Sharma InstaAstro",
    "Satyam Sharma Coding Ninjas",
    "Satyam Sharma MoneyDock",
    "Satyam Sharma Animatrixx",
    "Satyam Sharma Python developer",
    "Satyam Sharma Django developer",
    "satyamsharma3524",
    "backend engineer Noida",
    "Python Django developer India",
    "platform engineer Delhi NCR",
    "MoneyDock",
    "Animatrixx",
  ],
} as const;

/* ------------------------------------------------------------------ Schema */

/** An employer as a schema.org Organization, with the names people search it by. */
function orgNode(entry: ExperienceEntry) {
  return {
    "@type": "Organization",
    "@id": `${profile.siteUrl}/experience/${entry.slug}#org`,
    name: entry.orgName,
    ...(entry.orgAliases?.length ? { alternateName: [...entry.orgAliases] } : {}),
    ...(entry.orgSameAs?.length ? { sameAs: [...entry.orgSameAs] } : {}),
  };
}

const SITE = profile.siteUrl;
export const PERSON_ID = `${SITE}/#person`;
export const WEBSITE_ID = `${SITE}/#website`;

const portraitUrl = profile.portrait ? `${SITE}${profile.portrait}` : undefined;

/*
  Only profiles that ARE Satyam belong in sameAs — Google uses it to reconcile the
  entity across sites. His products are linked as things he created, not as himself.
*/
const sameAs = [profile.links.linkedin, profile.links.github].filter(
  (url): url is string => Boolean(url),
);

export const personSchema = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: profile.name,
  givenName: "Satyam",
  familyName: "Sharma",
  alternateName: ["satyamsharma3524"],
  jobTitle: "Software Engineer — Backend & Platform",
  description:
    "Satyam Sharma is a software engineer (backend and platform) with four years of production Python and Django — currently at HT Media (Hindustan Times), previously at India IVF Fertility and InstaAstro. He built MoneyDock and Animatrixx, and runs the Linux, Docker and observability layer underneath them.",
  url: SITE,
  mainEntityOfPage: { "@id": `${SITE}/#profilepage` },
  ...(portraitUrl
    ? {
        image: {
          "@type": "ImageObject",
          "@id": `${SITE}/#portrait`,
          url: portraitUrl,
          contentUrl: portraitUrl,
          caption: "Satyam Sharma",
        },
      }
    : {}),
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  nationality: { "@type": "Country", name: "India" },
  worksFor: experience
    .filter((e) => e.current)
    .map((e) => orgNode(e)),
  alumniOf: [
    ...experience.filter((e) => !e.current).map((e) => orgNode(e)),
    { "@type": "CollegeOrUniversity", name: "Indira Gandhi National Open University" },
    { "@type": "CollegeOrUniversity", name: "Panjab University, Chandigarh" },
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Backend Engineer",
    occupationLocation: { "@type": "City", name: "Noida" },
    skills:
      "Python, Django, Django REST Framework, Celery, RabbitMQ, Redis, PostgreSQL, MongoDB, Docker, Linux, nginx, AWS, Prometheus, Grafana",
  },
  knowsAbout: [
    "Python",
    "Django",
    "Django REST Framework",
    "Celery",
    "RabbitMQ",
    "Redis",
    "Elasticsearch",
    "PostgreSQL",
    "MariaDB",
    "MongoDB",
    "Docker",
    "Linux",
    "nginx",
    "AWS",
    "Prometheus",
    "Grafana",
    "Next.js",
    "TypeScript",
    "System Architecture",
    "Observability Engineering",
  ],
  sameAs,
} as const;

/** The home page's graph: who he is, the site, the profile page, and what he built. */
export const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    personSchema,
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE,
      name: profile.name,
      alternateName: ["Satyam Sharma — Portfolio", "satyamsharma.dev", "www.satyamsharma.dev"],
      description: seo.description,
      inLanguage: "en-IN",
      author: { "@id": PERSON_ID },
      publisher: { "@id": PERSON_ID },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE}/#profilepage`,
      url: SITE,
      name: seo.title,
      description: seo.description,
      inLanguage: "en-IN",
      isPartOf: { "@id": WEBSITE_ID },
      mainEntity: { "@id": PERSON_ID },
      about: { "@id": PERSON_ID },
      dateModified: SITE_UPDATED,
      ...(portraitUrl ? { primaryImageOfPage: { "@id": `${SITE}/#portrait` } } : {}),
    },
    {
      "@type": "WebSite",
      "@id": `${profile.links.moneydock}/#website`,
      name: "MoneyDock",
      url: profile.links.moneydock,
      creator: { "@id": PERSON_ID },
    },
    {
      "@type": "WebSite",
      "@id": `${profile.links.animatrixx}/#website`,
      name: "Animatrixx",
      url: profile.links.animatrixx,
      creator: { "@id": PERSON_ID },
    },
  ],
} as const;

/** A case study's graph: the page, its breadcrumb, and the product it describes. */
export function caseStudySchema(project: Project) {
  const url = `${SITE}/work/${project.slug}`;
  const live = project.links.find(
    (l) => "href" in l && typeof l.href === "string" && l.href.startsWith("https://"),
  )?.href;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${project.name} case study by ${profile.name}`,
        description: project.cardBlurb,
        inLanguage: "en-IN",
        isPartOf: { "@id": WEBSITE_ID },
        author: { "@id": PERSON_ID },
        about: live ? { "@id": `${live}/#website` } : undefined,
        breadcrumb: { "@id": `${url}#breadcrumb` },
        dateModified: SITE_UPDATED,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: profile.name, item: SITE },
          { "@type": "ListItem", position: 2, name: "Work", item: `${SITE}/#work` },
          { "@type": "ListItem", position: 3, name: project.name, item: url },
        ],
      },
      ...(live
        ? [
            {
              "@type": "WebSite",
              "@id": `${live}/#website`,
              name: project.name,
              url: live,
              creator: { "@type": "Person", "@id": PERSON_ID, name: profile.name, url: SITE },
            },
          ]
        : []),
    ],
  };
}

/** "Satyam Sharma — Software Engineer at InstaAstro": the exact phrase people search. */
export function experienceTitle(entry: ExperienceEntry) {
  const role = entry.shortRole ?? entry.role.replace(/\s*\(.*\)$/, "");
  return `${profile.name} — ${role} at ${entry.orgName}`;
}

export function experienceDescription(entry: ExperienceEntry) {
  const article = /^[AEIOU]/i.test(entry.role) ? "an" : "a";
  const where = entry.city ? ` in ${entry.city}` : "";
  const [start, end] = entry.period.split(" — ");
  const when = entry.current ? `since ${start}` : `${start} – ${end}`;
  const verb = entry.current ? "is" : "was";
  return `${profile.name} ${verb} ${article} ${entry.role} at ${entry.orgName}${where}, ${when}. Stack: ${entry.stack.slice(0, 5).join(", ")}.`;
}

/** An experience page's graph: the page, its breadcrumb, him, and the employer. */
export function experienceSchema(entry: ExperienceEntry) {
  const url = `${SITE}/experience/${entry.slug}`;
  const org = orgNode(entry);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${url}#webpage`,
        url,
        name: experienceTitle(entry),
        description: experienceDescription(entry),
        inLanguage: "en-IN",
        isPartOf: { "@id": WEBSITE_ID },
        mainEntity: { "@id": PERSON_ID },
        about: [{ "@id": PERSON_ID }, { "@id": org["@id"] }],
        breadcrumb: { "@id": `${url}#breadcrumb` },
        dateModified: SITE_UPDATED,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: profile.name, item: SITE },
          { "@type": "ListItem", position: 2, name: "Experience", item: `${SITE}/#background` },
          { "@type": "ListItem", position: 3, name: entry.orgName, item: url },
        ],
      },
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: profile.name,
        url: SITE,
        jobTitle: entry.current ? entry.role : personSchema.jobTitle,
        ...(entry.current ? { worksFor: org } : { alumniOf: org }),
        knowsAbout: [...entry.stack],
        sameAs,
      },
    ],
  };
}

/** OG image direction: type only, near-black, one hairline rule. */
export const ogImage = {
  name: "SATYAM SHARMA",
  headline: ["Code that ships.", "Servers that stay up."],
  proof: [
    "4 yrs Python in production ·",
    "168K search impressions ·",
    "272 tests gating every deploy",
  ],
} as const;
