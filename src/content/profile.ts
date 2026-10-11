/** Identity, contact details and the brand system. Section 2 and Section 3. */

/* ============================================================================
   ⚠️  THREE VALUES TO REPLACE BEFORE DEPLOY
   ----------------------------------------------------------------------------
   1. `email`      — currently the one address verifiably under Satyam's control
                     (it is the published contact on moneydock.in). Swap it for a
                     personal address. Do NOT use satyam.sharma@shine.com here:
                     that is a work address at the current employer, and this page
                     exists to be read by people hiring away from that employer.
   2. `siteUrl`    — the real deploy origin. It feeds metadataBase, the canonical
                     tag, the sitemap, robots.txt and the Person schema. A wrong
                     value here is the single most damaging one-line error on the
                     site, because every other URL is derived from it.
   3. `portrait`   — WIRED, but the file currently at that path is the template
                     author's photograph, not Satyam's. Overwrite the bytes at
                     public/images/satyam-sharma-portrait.webp. Set this back to
                     null to fall back to the typographic panel in the meantime.

   ⚠️ `resumeAvailable` is FALSE ON PURPOSE, and this is not the same kind of
   placeholder as the three above. The file at `resumeHref` has the right filename
   and the WRONG CONTENTS: its first lines read "SHIVAM SHARMA / Associate Product
   Manager · AI Products", with that person's phone number, email, LinkedIn and
   GitHub. Renaming a PDF does not rewrite it.

   A résumé sits behind a button, so unlike a wrong photograph nobody notices it is
   wrong until a recruiter opens it — which is the worst possible moment. So the
   button stays hidden until the PDF is genuinely Satyam's. Replace the bytes at
   public/Satyam-Sharma-Software-Engineer-Resume.pdf, then flip this to true; the
   hero, the header and the footer all pick it up from here.
   ========================================================================== */

export const profile = {
  name: "Satyam Sharma",
  role: "Software Engineer · Backend & Platform",
  email: "support@moneydock.in",
  phone: "",
  location: "Noida, Uttar Pradesh, India · IST (GMT+5:30)",
  locationShort: "Noida, India · IST",
  experience: "4 years in production",
  siteUrl: "https://satyam-sharma-portfolio.vercel.app",
  resumeHref: "/Satyam-Sharma-Software-Engineer-Resume.pdf",
  /* Flip to true once the PDF is in /public. Widened to `boolean` deliberately so the
     conditional branches on both sides stay live code rather than being narrowed away. */
  resumeAvailable: false as boolean,
  portrait: "/images/satyam-sharma-portrait.webp" as string | null,
  links: {
    /* Verified: read off the public profile URL on the LinkedIn account itself. */
    linkedin: "https://www.linkedin.com/in/satyam-sharma-726b19202",
    /*
      NULL BECAUSE I DO NOT KNOW IT. An earlier revision of this file had
      "https://github.com/satyamsharma" here — that was a guess at the handle, not a
      verified URL, and it is exactly the kind of link that 404s in front of the one
      reader who bothered to click it. Every consumer of this field is gated on it
      being non-null, so the GitHub affordance simply does not render until the real
      handle is set. Put the actual profile URL here and it appears everywhere.
    */
    github: null as string | null,
    /* Verified: both resolve and are the live deployments described in the case studies. */
    moneydock: "https://moneydock.in",
    animatrixx: "https://animatrixx.in",
  },
} as const;

/** Section 2 — Personal Brand System. */
export const brand = {
  tagline: "I build the service, then I run it.",
  secondaryTaglines: [
    "Four years of Python in production, across three product startups.",
    "The API, the queue, the container, and the dashboard that watches it.",
    "Backend depth, with the operational half still attached.",
    "I ship it, and I am the one paged when it breaks.",
    "Not a developer who deploys. An engineer who owns the runtime.",
  ],
  mission:
    "To build backend systems that stay correct under load, under failure, and under someone else’s maintenance — and to own the whole path from the first query to the alert that fires at 3am.",
  adjectives: [
    {
      word: "Rigorous",
      gloss: "272 tests gating a production deploy. Pure functions for anything financial.",
    },
    {
      word: "Operational",
      gloss: "Docker, nginx, uWSGI, Prometheus, Grafana, Loki — on servers I administer.",
    },
    {
      word: "Deliberate",
      gloss:
        "Fail-open where hiding a good page costs most. Fail-closed where a mistake opens a door.",
    },
  ],
} as const;

/** Section 3 — Bios. The medium bio carries the About section’s opening. */
export const bios = {
  short:
    "Satyam Sharma is a software engineer with four years of production Python and Django across three product-based startups, currently at HT Media. He works across the seam between development and operations — architecting server-side logic while running the Linux, Docker and AWS infrastructure underneath it. Independently, he built and operates MoneyDock, a financial platform of roughly 4,800 indexed pages behind 272 automated tests. Based in Noida, India.",
  medium: [
    "Satyam Sharma is a backend and platform engineer four years into shipping Python and Django in production — at HT Media now, at India IVF Fertility before that, and at InstaAstro before that. Three product companies, all of them fast, none of them with a spare team to hand the operational half to.",
    "That constraint is the reason the work looks the way it does. He built MoneyDock, a personal-finance platform for the Indian market, as a solo project: 27 calculators, roughly 4,800 indexed pages, five external data feeds, and 272 automated tests wired into the build command so a failing test blocks the deploy rather than filing a ticket. He also built Animatrixx, an anime and manga platform — and, more to the point, the nine-container stack it runs on: Django under uWSGI behind nginx, Celery on RabbitMQ, Redis, MariaDB, Elasticsearch, and a Prometheus / Grafana / Loki / Promtail observability layer, self-hosted rather than rented.",
    "He is looking for a backend or platform engineering role where owning the runtime is part of the job rather than another department’s.",
  ],
} as const;
