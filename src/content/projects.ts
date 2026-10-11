/**
 * Section 10 — Work. Case studies.
 *
 * Two projects, at full depth, rather than four at brochure depth. Both are deployed
 * and serving real traffic, and both are solo builds — which means every decision
 * recorded here was mine, including the ones I would not make again.
 *
 * Rule applied throughout: every number carries the condition it was measured under,
 * and nothing is claimed that a reader with the repository open could contradict. The
 * `futureImprovements` sections are where the honest gaps live, and they are the
 * sections I would point an interviewer at first.
 */

import { unavailable, emptyStates } from "./microcopy";
import type { Project, SectionMeta } from "./types";

export const workMeta: SectionMeta = {
  id: "work",
  eyebrow: "02 · Work",
  heading: "Two products, built and operated",
  intro:
    "Each write-up covers the same ground: what the problem was, how the system is shaped, the decisions I would defend under questioning, the ones that turned out wrong, and what is still missing. Ordered by what is hardest to fake.",
};

export const projects: readonly Project[] = [
  /* ======================================================================== */
  {
    slug: "moneydock",
    name: "MoneyDock",
    status: "Live",
    role: "Solo engineer — architecture, build, data pipelines, operations",
    kind: "Personal-Finance Platform · FinTech",
    period: "Dec 2025 — Present",
    metaTitle: "MoneyDock — a solo-built financial platform, ~9,250 pages behind 272 tests",
    cardBlurb:
      "A no-signup financial platform for Indian retail investors: 27 hand-built calculators, a page for every NSE stock and mutual fund, and automated fund-vs-fund and stock-vs-stock comparisons across related categories — ~9,250 pages indexed by Google, all computed from live NSE and AMFI feeds, with 272 automated tests wired into the build command so a failing test blocks the deploy.",
    rationale:
      "A solo build carrying real production load, real money-adjacent correctness requirements, and a test suite that gates its own deploys. The closest thing on this page to a small engineering team’s output.",
    metrics: [
      { value: "168K", label: "Google search impressions · 27 Nov 2025 – 10 Oct 2026" },
      { value: "1,270", label: "organic clicks · same window" },
      { value: "~9,250", label: "pages indexed by Google · Search Console, 4 Oct 2026" },
      { value: "272", label: "automated tests · a failure blocks the deploy" },
      { value: "27", label: "financial calculators, hand-derived" },
      { value: "5", label: "live external data feeds" },
    ],
    overview: [
      "MoneyDock is a free, no-signup personal-finance platform for Indian retail investors, live at moneydock.in. It does four things: runs 27 financial calculations that recompute live as you drag a slider; serves a page per NSE-listed stock and per mutual fund with computed returns, annualised volatility and maximum drawdown; compares any two of them head-to-head with a ₹10,000-growth overlay; and reads the market — indices, forex, commodities, crypto, and gold and silver rates with the India duty and GST maths made explicit.",
      "I built and operate all of it: the Next.js application, the MongoDB schema, the five ingestion pipelines, the 272-test suite, the SEO architecture that took it to roughly 9,250 indexed pages, and the decisions about what not to build. There is no team, and there is no separate ops function.",
      "The interesting engineering here is not the calculators — it is that this is a money-adjacent product at programmatic scale. Both halves of that phrase constrain the design hard. Money-adjacent means a wrong number is worse than no number. Programmatic scale means thousands of near-identical pages, which is precisely the pattern Google’s March 2026 core update was built to demote. Most of what follows is the consequence of taking both of those seriously at the same time.",
    ],
    problem: [
      "Indian retail investing has an information problem that is not a lack of information. Calculator sites exist in abundance; most gate results behind a signup, bury them under ad interstitials, or quietly get the compounding convention wrong — recurring deposits compounded monthly instead of quarterly, income tax computed against last year’s slabs, HRA exemption applying two of the three statutory tests instead of all three.",
      "The security-level data is worse. Trailing returns are everywhere. Annualised volatility and maximum drawdown — the two numbers that actually describe what holding something feels like — are published for almost no direct mutual-fund plans, because computing them requires several years of daily NAV history and nobody wants to store it.",
      "And the obvious way to build at this scale is the way that now gets a site removed from the index. Templating 2,300 stock pages that differ only by name and price is textbook scaled-content abuse. So the problem was never “can I generate thousands of pages” — it was whether each page could contain something that exists nowhere else, computed from data I actually hold.",
    ],
    goals: [
      {
        label: "Correctness goal",
        body: "No number on the site may be wrong, and no number may be invented. Where a value cannot be sourced, the page shows fewer facts rather than a plausible guess. Two consequences I held to: P/B ratio and dividend yield were left off stock pages entirely because there is no feed for them, and every metric function returns null rather than NaN so a missing input renders as “N/A” instead of as a number.",
      },
      {
        label: "Differentiation goal",
        body: "Every programmatic page must pass one test before it ships:",
        items: [
          "Does this page contain computed numbers that exist nowhere else on the internet in this combination?",
          "If the answer is no, the page set does not get built — regardless of how much traffic the keyword has.",
          "One concept was killed on exactly this test: per-stock brokerage and STT pages. Charges are a function of trade value and broker, not of the stock, so 2,300 pages would have differed only by name.",
        ],
      },
      {
        label: "Operational goal",
        body: "One person must be able to run this. That ruled out anything requiring a human in the loop — no editorial approval queue, no per-page LLM generation to review, no manual data entry. Everything either computes deterministically or does not exist.",
      },
      {
        label: "Performance goal",
        body: "No network round-trip for a calculation, and no language model anywhere in the request path. Both are TTFB problems and crawl-budget problems before they are user-experience problems.",
      },
    ],
    architecture: {
      preface:
        "Six layers, arranged so that the expensive and failure-prone work happens on a schedule rather than during a request. Nothing a user waits for talks to an external service.",
      layers: [
        {
          name: "Ingestion — five external feeds, on cron",
          body: "NSE Bhavcopy (the official end-of-day CSV of every listed security), NSE’s equity master list, AMFI’s daily NAV file, Yahoo Finance for intraday and forex, and CoinGecko. Nine cron route handlers, each Bearer-gated on a shared secret, each holding itself to a 45-second time budget and writing through bulkWrite in unordered 500–1,000-operation batches. Every outbound call has an AbortSignal timeout — twelve of them, from 8 seconds for IndexNow to 30 for AMFI — because a hung fetch in a serverless function is billed until it is killed.",
        },
        {
          name: "Persistence — MongoDB, time series as parallel arrays",
          body: "Nine Mongoose models. Price and NAV history are not one document per day; they are compact parallel arrays on a single document per entity, capped server-side with $push … $slice: -1300, which is about five years of trading days. That is ~150 MB for 2,400 stocks and ~90 MB for 3,500 funds, versus tens of millions of documents the obvious way. The connection is a singleton cached on globalThis so a warm serverless instance reuses it.",
        },
        {
          name: "Computation — pure, null-safe, unit-tested",
          body: "Everything financially load-bearing lives in I/O-free modules: trailing returns on a 248-trading-day year, annualised volatility as the standard deviation of daily returns scaled by √248, maximum drawdown, a SIP backtest against real NAV history, and XIRR. Every function ends in a Number.isFinite check and returns null rather than propagating NaN. Feed parsers are split into a pure parse(text) half and a fetching half so the parsers are testable without a network.",
        },
        {
          name: "Rendering — ISR, tuned per data cadence",
          body: "Server Components throughout, with revalidation windows matched to how fast the underlying data actually changes: 600 seconds for the home page and market views, 6 hours for index constituents (Bhavcopy is end-of-day), 12 hours for individual stock and fund pages, 24 hours for blog posts and comparisons. generateStaticParams pre-builds the highest-traffic pages; the long tail renders on demand and is then cached.",
        },
        {
          name: "Delivery — CDN cache, deterministic fallbacks",
          body: "Read APIs set s-maxage with stale-while-revalidate so repeat traffic is absorbed at the edge rather than at the database. Recharts is behind four dynamic imports with ssr:false to keep it out of the initial bundle. Every read endpoint returns the exact shape the client already renders on failure — {a:null,b:null}, or an empty array — so an upstream outage degrades to “N/A” in a table instead of a 500.",
        },
        {
          name: "Operations — the deploy is the gate",
          body: "The Vercel build command is `npm run test:deploy && npm run build`. There is no separate CI step to ignore and no badge to go stale: if the suite fails, there is no deployment. Index-gating logic decides per page whether it is worth indexing at all, and the same predicate filters the sitemap, so the two can never disagree.",
        },
      ],
      footnote:
        "The design rationale for the programmatic page sets, including the sets I decided against, is written up in the repository as a scaling blueprint rather than living in my head. Same for the hardening pass — 14 numbered findings, each with the failure it closed and the test that pins it.",
      flow: [
        { label: "5 external feeds", detail: "NSE Bhavcopy, AMFI, Yahoo, CoinGecko" },
        { label: "Cron ETL", detail: "bearer-gated, 45s budget, unordered bulkWrite" },
        { label: "MongoDB", detail: "parallel arrays, capped at ~1,300 points" },
        { label: "Pure metric layer", detail: "unit-tested, returns null not NaN" },
        { label: "ISR", detail: "600s to 24h, matched to data cadence" },
        { label: "Edge CDN", detail: "s-maxage + stale-while-revalidate" },
      ],
    },
    features: {
      columns: ["Feature", "What it does", "Why it is built this way"],
      rows: [
        {
          feature: "27 financial calculators",
          what: "SIP, EMI, income tax under both regimes, PPF, NPS, GST, HRA, gratuity, EPF, FIRE, SWP and more — recomputing live as sliders move",
          why: "All client-side state, so there is no network round-trip per keystroke and no server cost per calculation",
        },
        {
          feature: "Per-fund SIP backtest",
          what: "Buys at the first available NAV of each calendar month from real AMFI history and solves XIRR on the resulting cash flows",
          why: "The site’s most defensible asset — a real backtest, not a formula projection. Five refuse-to-answer gates run before it computes anything",
        },
        {
          feature: "Volatility and drawdown per security",
          what: "Annualised volatility (σ × √248) and maximum peak-to-trough drawdown, computed from stored daily history",
          why: "Almost nobody publishes these for direct plans. They are the numbers that make each page unique, which is what makes the page set defensible",
        },
        {
          feature: "Head-to-head comparison",
          what: "Any two stocks or funds, with a ₹10,000-growth overlay, a risk table and a data-derived verdict. Pages are generated automatically for pairs in related categories",
          why: "Reversed slugs canonicalise to one sorted URL, so a-vs-b and b-vs-a never compete as duplicates in the index",
        },
        {
          feature: "Deterministic verdict prose",
          what: "Every sentence of every generated assessment is computed from that page’s own figures",
          why: "Zero hallucination risk, zero per-page model cost, no approval queue — and no generic filler that would be identical across thousands of pages",
        },
        {
          feature: "Embeddable calculators",
          what: "Any of the 27 as a one-line iframe carrying a “Powered by MoneyDock” attribution link",
          why: "The only link source that scales without outreach. Embed routes are noindex and get frame-ancestors * while every other route is locked to SAMEORIGIN",
        },
        {
          feature: "Bilingual evergreen content",
          what: "English and Hindi post pairs, linked by hreflang, drawn from a finite 45-topic library",
          why: "The library is finite on purpose — when every topic is covered the job publishes nothing rather than inventing filler",
        },
      ],
    },
    decisions: {
      preface:
        "The six calls below are the ones I would want to be questioned on. Two of them reversed an earlier decision of my own, which is the part I would rather talk about than the architecture diagram.",
      items: [
        {
          title: "One CSV instead of 2,300 API calls.",
          body: "Pricing the NSE universe symbol-by-symbol through Yahoo got rate-limited, so most stock pages carried stale or missing prices — and a stock page with no price is worthless. NSE publishes an official end-of-day Bhavcopy: one CSV with the closing price of every listed security. Switching to it replaced roughly 2,300 per-symbol requests with a single one. The tradeoff is that the single request becomes load-bearing, so it is defended four ways: dual-host retry across two NSE archive domains, a 15-second timeout, a browser User-Agent and Referer because NSE rejects non-browser agents, a sanity floor that treats a CSV under 100 rows as failure rather than as data, and a ten-day backward walk so weekends and market holidays resolve without intervention.",
        },
        {
          title: "Removing the language model from the request path.",
          body: "The comparison pages originally called Gemini synchronously on the first visit to any new pair. It worked, and it was wrong: multi-second TTFB, a crawl-budget sink, and a request that could hang until the platform killed it into a raw error page. I rebuilt it as a two-speed page. The most recent 500 pairs are pre-built; everything else renders instantly from a deterministic fallback computed from stored figures, marked noindex-but-follow so a thinner version never enters the index yet still passes link equity, and upgraded later by a cron job. When I later built fund comparisons, they never had a model in the request path at all — that is the lesson already learned, applied without having to relearn it.",
        },
        {
          title: "Deterministic prose over generated prose, deliberately against my own plan.",
          body: "The plan had been to generate fund-comparison verdicts with Gemini. I replaced that with computed sentences from unit-tested functions. Three reasons: no hallucination risk on a page about someone’s money, no per-page inference cost across thousands of pairs, and no approval queue — which matters because I am the only person who could staff one. The constraint that made it work is a rule in the assessment module: a bullet is emitted only when the underlying metric exists, so missing data produces fewer bullets, never invented ones.",
        },
        {
          title: "Fail-open for indexing, fail-closed for authentication.",
          body: "The same codebase makes opposite choices about ambiguity, and the direction is chosen by blast radius. The index gate defaults to indexable — anything undefined, NaN, or the wrong type is treated as “index it”, because wrongly hiding a page that is earning impressions costs more than wrongly indexing a thin one. The admin auth module defaults to locked — if the password variable is not configured, no request is ever treated as admin, so a misconfiguration leaves the endpoints shut rather than silently open. It also bails on length before comparing bytes, so a wrong password cannot be discovered one character at a time through response timing.",
        },
        {
          title: "Time series as capped parallel arrays.",
          body: "Five years of daily closes for 2,400 stocks is roughly three million rows the obvious way. Storing them as parallel arrays on one document per entity and capping with $slice: -1300 keeps it at about 150 MB, and reading one entity’s full history is a single document fetch instead of a range scan. The cost is that arbitrary cross-entity queries over history become awkward — I accepted that, because the product never needs one. The chart endpoints then project only the fields they use, which halved the bytes read per request when I noticed the high and low arrays were being fetched and discarded.",
        },
        {
          title: "Letting robots.txt allow what Googlebot needs to render.",
          body: "A blanket disallow on /_next/ looks like sensible hygiene. It meant Googlebot was rendering the site completely unstyled — confirmed by looking at the screenshot in Search Console’s live test, not by reasoning about it. The fix carves /_next/static/ and /_next/image back out, relying on robots.txt longest-match precedence. The same file then explicitly allows seventeen named AI and answer-engine crawlers, on the view that being readable by the systems that increasingly answer these questions is worth more than the traffic it might divert.",
        },
      ],
    },
    challenges: [
      {
        title: "Scaling without triggering the filter designed to catch it.",
        body: "The March 2026 core update demoted template-with-variable-substitution at scale by 50–90%, and programmatic pages are this site’s entire growth thesis. There was no way to test the boundary safely, so I released in gated batches — 500, then 2,000, then the rest — advancing only when Search Console showed at least 60% of a batch indexed, with a hard stop if “crawled, currently not indexed” passed roughly 40%.",
      },
      {
        title: "XIRR has no closed form, and NAV history has holes.",
        body: "Schemes change, holidays interrupt, series start mid-life. A silently wrong return figure on a page about someone’s savings is worse than no figure, so the solver bisects net present value over a bounded range for up to 200 iterations and returns null when no sign change exists rather than reporting a bogus root. Five gates run before it: array-length parity, a minimum of two months, sufficient purchase months, every NAV strictly positive, and exact calendar-month contiguity — computing the expected span and refusing if it disagrees with the observed count, so a gappy series cannot quietly misrepresent returns.",
      },
      {
        title: "One database blip poisoning the process until redeploy.",
        body: "The classic serverless singleton bug, and the hardest class to catch because it is invisible in normal operation. The connect promise was cached on globalThis, so a single failed connection during a cold start cached the rejected promise — and every later request on that warm instance replayed the same rejection until the process happened to restart. Every page on the site returning 500, with no error in the request that caused it. Three lines fixed it; what makes it closed rather than patched is a test that pins both halves, asserting the retry happens and that the happy path still connects exactly once, so a future refactor cannot quietly open a connection per request.",
      },
      {
        title: "A finance page that must not fabricate.",
        body: "The temptation on a thin page is always to add a plausible-looking field. I left P/B and dividend yield off stock pages because there is no source for them. Where a stock has no industry classification, the peer heading says “most actively traded stocks” rather than claiming a relationship that does not exist. This is a discipline problem more than an engineering one, and it is the constraint I found hardest to hold.",
      },
      {
        title: "Reading my own metrics correctly.",
        body: "Mass indexation makes average position look like collapse: new pages enter the index around position 70 and drag the mean down while nothing that was ranking has moved. Pruning genuinely empty pages does the reverse — indexed count dips and average position improves, which looks like a loss and is the intended outcome. Learning to read the two apart took longer than building the pipeline that caused them.",
      },
      {
        title: "Automated content that was actively harmful.",
        body: "An earlier version of the blog job produced roughly 95 posts of news, IPO updates, stock tips and Hindi duplicates — content stale within days, competing against publications this domain cannot outrank, and dragging the whole site under a scaled-content signal. I audited it, cut about 80 posts, and rewrote the job to draw from a finite library of 45 evergreen topics that self-terminates instead of churning. Deleting most of what an automation I wrote had produced was the correct call and not a comfortable one.",
      },
    ],
    lessons: [
      {
        title: "Choose fail-open or fail-closed per blast radius, not per codebase.",
        body: "I used to treat defensive defaults as a single house style. Holding two opposite defaults in one codebase — and being able to say why each one points the way it does — turned out to be a much better way to reason about failure than picking a side.",
      },
      {
        title: "A test suite is worth what it blocks.",
        body: "The suite grew from 100 to 272 tests, but the change that mattered was putting it in the build command rather than in CI. A green badge is advisory. A build that will not produce a deployment is a constraint, and I stopped having to remember to be careful.",
      },
      {
        title: "Lock behaviour before you improve it.",
        body: "Before the hardening pass I wrote 100 tests against the unmodified source and got them green, so any fix that changed observable behaviour would be visibly wrong rather than arguably fine. It cost a day up front and made the following fourteen fixes boring, which is exactly what you want from a hardening pass.",
      },
      {
        title: "Returning null is a design decision.",
        body: "Every metric function returning null rather than NaN means the honest answer travels all the way to the page and renders as “N/A”. Once that convention existed, “we don’t have this number” stopped being an error case to suppress and became a normal value the UI knows how to display.",
      },
      {
        title: "Confirm rendering assumptions by looking.",
        body: "The robots.txt problem was invisible to reasoning and obvious in a screenshot. I now check what a crawler actually receives rather than what the configuration ought to imply — the same instinct as reading the response instead of trusting the client.",
      },
      {
        title: "The best decision on the project was a deletion.",
        body: "Killing the per-stock brokerage pages, cutting 80 blog posts, and refusing to add two fields I had no source for did more for this site than any feature I shipped. Restraint is not a substitute for engineering, but at programmatic scale it is part of it.",
      },
    ],
    futureImprovements: {
      preface:
        "In roughly the order I would take them, and stated plainly rather than as a roadmap. The first three are gaps I would raise myself in an interview.",
      items: [
        "No IP or user rate limiting exists. Protection today is structural — CDN caching absorbs repeat traffic, cron routes are Bearer-gated, admin writes are token-gated — but that is not the same thing, and it is the first item I would close.",
        "There is no end-to-end suite. 272 unit and integration tests cover the maths, the parsers, the API contracts and the component states, but nothing drives a real browser through a calculator and asserts the rendered figure.",
        "The income tax and Atal Pension calculators use rounded slab offsets and an approximation formula rather than the exact statutory tables. Both are marked as approximations in the source; on a finance site both should be exact.",
        "One dependency (sharp) is imported by the blog image job but missing from package.json — it resolves only through a transitive copy, which is a build waiting to break.",
        "Only one of the nine cron jobs currently pings IndexNow on publish. Wiring the rest would cut the lag between a page updating and search engines seeing it.",
        "The sitemap is a single document. It is fine at today’s size and needs sharding before it reaches the 50,000-URL limit; the rationale for deferring it is written down rather than assumed.",
        "Coverage reporting is not configured, so I know the suite is meaningful by reading it rather than by measuring it.",
      ],
    },
    technologies: {
      statedLabel: "In the codebase",
      stated: [
        "Next.js 16 (App Router)",
        "React 19",
        "TypeScript (strict)",
        "MongoDB",
        "Mongoose",
        "Tailwind CSS",
        "Vitest",
        "Testing Library",
        "Recharts",
        "AWS S3",
        "Vercel",
        "Google Gemini",
        "ISR",
        "JSON-LD structured data",
      ],
      impliedLabel: "Engineering practices the build depends on",
      implied: [
        "Time-series modelling",
        "ETL pipeline design",
        "Financial mathematics",
        "XIRR / numerical methods",
        "Caching strategy",
        "Programmatic SEO",
        "Test-gated deployment",
        "Failure-mode analysis",
      ],
    },
    links: [
      { label: "Open the live product", href: "https://moneydock.in" },
      { label: "View the code", unavailable: unavailable.privateRepo },
    ],
    mediaPlaceholder: emptyStates.mediaSlot,
  },

  /* ======================================================================== */
  {
    slug: "animatrixx",
    name: "Animatrixx",
    status: "Live",
    role: "Solo engineer — backend, infrastructure, frontend",
    kind: "Anime & Manga Platform · Self-hosted Infrastructure",
    period: "Aug 2024 — Present",
    metaTitle: "Animatrixx — an anime and manga platform on nine self-hosted services",
    cardBlurb:
      "An anime streaming and manga reading platform, and the nine-container stack behind it: Django under uWSGI behind nginx, Celery on RabbitMQ, Redis, MariaDB, Elasticsearch, and a Prometheus/Grafana/Loki observability layer — self-hosted rather than rented.",
    rationale:
      "The project where I own the infrastructure rather than a platform’s abstraction of it. Nine orchestrated services, an ingestion pipeline against two undocumented rate limits, and a metrics and logging plane I built because nobody was going to hand me one.",
    metrics: [
      { value: "9", label: "orchestrated services, one bridge network" },
      { value: "4", label: "data stores — MariaDB, Redis, Elasticsearch, S3" },
      { value: "33", label: "API operations across 21 URL patterns" },
      { value: "4", label: "differentiated retry strategies in the ingest path" },
    ],
    overview: [
      "Animatrixx is an anime streaming and manga reading platform. The manga side is fully operational: a catalogue ingested from MangaDex with cover and banner art reconciled from AniList, debounced full-text search backed by Elasticsearch, tag filtering, threaded comments, a per-user recency rail and trending and popular rankings, and a fullscreen reader with vertical-scroll and page modes, keyboard shortcuts and auto-hiding chrome. The anime side ships the complete viewing interface — player controls, quality and playback-speed selection, seek and volume with mute interlock, episode navigation and YouTube-style keybindings — with the streaming backend as the current build phase rather than a finished layer.",
      "The reason this project earns a case study is the half users never see. It runs on nine containers I orchestrate and administer: Django 5 under uWSGI behind nginx, MariaDB, Redis, RabbitMQ, Celery worker and beat, Elasticsearch, and a Prometheus, Grafana, Loki and Promtail observability stack scraping application metrics every four seconds and shipping structured logs off the box.",
      "I chose to self-host all of it. A managed platform would have been faster and I would have learned considerably less — most of what is written below is a consequence of having to run the thing rather than deploy it.",
    ],
    problem: [
      "Manga sources do not want to be aggregated. MangaDex serves page images from ephemeral, hotlink-protected nodes: there are no stable URLs, you must call an allocator to be assigned a node and compose URLs yourself from a returned hash and filename list, and those nodes reject any request whose Referer is not mangadex.org. A correctly-composed URL still returns 403 from a browser on another domain.",
      "The metadata is split across two sources with no shared identifier. MangaDex has complete chapter data and poor cover art; AniList has excellent cover and banner art and no chapter pages. There is no ISBN, no cross-reference — the only available join is the title, and MangaDex titles arrive as a language-keyed dictionary full of romanisation noise, punctuation and season markers that AniList’s search will not match.",
      "Both APIs rate-limit on separate, undocumented budgets, and a catalogue crawl makes thousands of sequential calls. A naive loop dies partway and leaves the database half-populated; a naive retry storm gets the address banned. And the ranking features users expect — continue reading, trending, popular — are ranked lists that change on every page view, which is a GROUP BY over a view-events table on every homepage load if you build them the obvious way.",
    ],
    goals: [
      {
        label: "Infrastructure goal",
        body: "Run the whole system myself, on servers I administer, with enough observability to diagnose a problem from metrics and logs rather than by guessing. Concretely: application metrics scraped on a short interval, structured logs shipped off the host, and a dashboard I can open before I open a shell.",
      },
      {
        label: "Ingestion goal",
        body: "A crawl that survives contact with two hostile rate limits:",
        items: [
          "Never abort the whole run for a single failed item — degrade to skipping that item.",
          "Differentiate the retry strategy by failure class, rather than retrying everything identically.",
          "Stay under the sustained-rate radar deliberately, with jitter, instead of going as fast as possible and reacting to bans.",
          "Make re-runs idempotent, so an interrupted crawl can simply be run again.",
        ],
      },
      {
        label: "Read-path goal",
        body: "Keep ranked, personalised lists off the relational database. No aggregate query on the homepage request path, and no analytics write blocking a user’s page load.",
      },
    ],
    architecture: {
      preface:
        "Nine containers on one bridge network, plus a Next.js frontend deployed separately. The shape below is the production composition; the observability plane is drawn detached because it observes the system rather than serving it.",
      layers: [
        {
          name: "Edge — nginx",
          body: "nginx (unprivileged, alpine) terminates the request, serves collected static assets straight from a shared volume so they never touch an application worker, and forwards everything else to Django over the uwsgi protocol rather than HTTP.",
        },
        {
          name: "Application — Django 5 and DRF under uWSGI",
          body: "Django 5.0.3 with Django REST Framework, running under uWSGI in master mode with threads enabled. Token authentication, page-number pagination, eleven ordered middleware, and nested routers from drf-nested-routers so chapters and comments are properly parented under a manga rather than filtered by query parameter. Three stacked auth backends, including a custom one that accepts either a username or an email in the same field.",
        },
        {
          name: "State — MariaDB, Redis, Elasticsearch, S3",
          body: "MariaDB holds the relational truth: seven models across four apps, with the manga-to-tag many-to-many, self-referential threaded comments, and a per-user reading-history row constrained unique on user and manga. Redis serves double duty — a django-redis cache for the non-personalised rails, and a separate raw client holding sorted sets and lists for rankings. Elasticsearch mirrors the searchable fields as a read replica so full-text queries never reach MariaDB. S3 in ap-south-1 holds site assets.",
        },
        {
          name: "Asynchronous work — Celery on RabbitMQ",
          body: "A Celery worker and a beat scheduler, brokered over AMQP with results persisted back to MariaDB. View tracking is fired from the detail endpoint with delay() so a user’s page load never waits on analytics writes; welcome emails render an HTML template with a plain-text alternative and go out through SMTP off the request path.",
        },
        {
          name: "Read path — the image proxy",
          body: "The one piece of infrastructure that exists purely because an upstream refuses to cooperate. A Django view validates the requested host against an allowlist, re-requests the image with a spoofed Referer, and streams it back with a seven-day immutable cache header — so the browser only ever talks to my origin and the ephemeral upstream node stays an implementation detail.",
        },
        {
          name: "Observability — Prometheus, Grafana, Loki, Promtail",
          body: "django-prometheus exposes application and database-query metrics; Prometheus scrapes them every four seconds. Promtail tails the Django log and ships it to Loki, which stores it on a TSDB schema. Grafana sits on top. This is the layer I would have been given at a larger company and had to build here, and building it is the reason I can read one.",
        },
      ],
      footnote:
        "Configurations for distributed tracing and long-term metrics storage exist in the repository but are not wired into the running composition. They are staged work, not shipped work, and I would rather say so than let a directory listing imply otherwise.",
      flow: [
        { label: "nginx", detail: "static from volume, uwsgi_pass to app" },
        { label: "Django + uWSGI", detail: "DRF, token auth, nested routers" },
        { label: "Catalogue path", detail: "Elasticsearch search, Redis-cached rails" },
        { label: "Reader path", detail: "image proxy, 7-day immutable cache" },
        {
          label: "Async + observability plane",
          detail: "Celery, RabbitMQ, Prometheus, Grafana, Loki, Promtail",
        },
      ],
    },
    features: {
      columns: ["Feature", "What it does", "The engineering underneath"],
      rows: [
        {
          feature: "Manga catalogue and reader",
          what: "Ingested catalogue, tag filtering, chapter list with sort, fullscreen reader with vertical and page modes, keyboard shortcuts, auto-hiding chrome and a page-grid navigator",
          why: "Chapter numbers arrive as free text, so ordering is a database-level cast to integer on a derived column rather than the model’s lexicographic default",
        },
        {
          feature: "Full-text search",
          what: "Debounced search across titles, descriptions and tags with its own pagination bounds",
          why: "Elasticsearch as a read replica of the searchable fields, so query load never lands on MariaDB. 500ms debounce on the client so keystrokes do not each become a query",
        },
        {
          feature: "Personalised and ranked rails",
          what: "Continue reading, trending and popular, on the homepage",
          why: "Maintained incrementally in Redis rather than recomputed. Recency uses a capped-LRU list idiom that self-bounds at ten entries with no cleanup job",
        },
        {
          feature: "Image proxy",
          what: "Serves upstream page images through my own origin",
          why: "Host-allowlisted, Referer-spoofing relay with a seven-day immutable cache header — the only way those images can reach a browser on this domain at all",
        },
        {
          feature: "Threaded comments",
          what: "Nested replies with edit and delete restricted to the author",
          why: "Self-referential foreign key with a recursive serializer, and the one query in the project hardened against N+1 with select_related and prefetch_related",
        },
        {
          feature: "Auth, including Google",
          what: "Username-or-email and password, or Google OAuth",
          why: "Custom authentication backend resolving either identifier; OAuth client credentials read from the database at request time rather than baked into the application",
        },
        {
          feature: "Anime viewing interface",
          what: "Full player chrome — seek, volume with mute interlock, quality and speed selection, fullscreen, episode navigation, auto-hide, keybindings",
          why: "Interface complete and interactive; the streaming backend is the current build phase, so the player runs against a placeholder source rather than a manifest",
        },
      ],
    },
    decisions: {
      preface:
        "Four decisions I would defend, and one I would reverse. The reversal is the more useful conversation.",
      items: [
        {
          title: "Four retry strategies, chosen by failure class.",
          body: "Treating every failure identically is how a crawler either gives up too early or gets banned. So each class gets its own response: rate limiting and dropped connections retry on truncated exponential backoff plus random jitter — the jitter matters because a synchronous crawler retrying on exact powers of two self-synchronises into bursts; timeouts retry on plain exponential backoff; non-retryable HTTP errors bail immediately rather than burning the retry budget; and the second upstream, with its own separate limit, gets its own fixed-interval loop. Between items there is a deliberate jittered politeness delay, because staying under the sustained-rate threshold on purpose is cheaper than reacting to bans.",
        },
        {
          title: "Skip the item, never the run.",
          body: "If a chapter’s images cannot be resolved after five attempts, the crawl logs it and continues to the next chapter rather than persisting a broken row or aborting. Upserts are keyed on the upstream identifier pair, so a re-run repairs what was skipped instead of duplicating what succeeded. Combined, those two properties mean the recovery procedure for a failed crawl is to run it again — which is the only recovery procedure I will reliably follow.",
        },
        {
          title: "Reprojecting Redis ordering back into SQL.",
          body: "The recency rail needs rows in insertion order, and a WHERE id IN (...) query explicitly does not guarantee it. The obvious fix is to fetch and re-sort in Python. Instead the Redis list order is compiled into a CASE WHEN ladder passed to order_by, so the database returns rows already in the right order and the application does no sorting at all. It is the sharpest few lines in the backend and the one I would put on a whiteboard.",
        },
        {
          title: "Self-hosting the observability stack.",
          body: "Prometheus scraping every four seconds, Promtail tailing into Loki, Grafana on top, with the database engine itself wrapped so query-level metrics are exposed alongside application metrics. A hosted APM would have been an afternoon. Building it taught me what a scrape interval costs, why log shipping is a separate concern from log writing, and how to read a metrics plane — which is the transferable skill, and the reason this was worth the extra week.",
        },
        {
          title: "Handing chapter images to the reader through localStorage. I would reverse this.",
          body: "The chapter list writes the page-URL array into localStorage and the reader reads it back, which avoids a second request and works perfectly from a click. It also means the reader cannot be refreshed, deep-linked or shared — arriving directly renders an error — and because the list endpoint serialises every field, a long series ships every chapter’s full image array to fetch one. The correct design is a per-chapter endpoint and a trimmed list serializer. This is the clearest example on this page of a decision that was locally convenient and architecturally wrong, and I would rather name it than have someone find it.",
        },
      ],
    },
    challenges: [
      {
        title: "Joining two catalogues with no shared key.",
        body: "The only join available was the title, across two sources that spell things differently. The normaliser is deliberately lossy — strip everything non-alphanumeric, keep the first four words — because maximising recall matters more than precision when a miss simply means no cover art. Once resolved, the discovered second identifier is stored, so the fuzzy match runs once per title and never again.",
      },
      {
        title: "Chapter numbers that are not numbers.",
        body: "Upstream chapter numbers include values like 10.5 and Extra, along with empty and null, so the field is text and the model’s default ordering sorts chapter 10 before chapter 2. Solved twice, in two places: a database-level cast to integer on an annotated column for the API ordering, and again on the client because the chapter list also supports a user-toggled sort direction that cannot re-query.",
      },
      {
        title: "A producer and consumer that disagreed on a key.",
        body: "The view-tracking task writes a per-day trending key; the homepage reads a weekly one; nothing rolls the daily keys up. The result is that the trending rail returns an empty list and the daily sets accumulate unread. The architecture is right and the aggregation job is missing — the fix is one scheduled union of the last seven days. I found this by reading the code path rather than from an alert, which is itself the finding: I have metrics on request rates and none on whether a feature returns data.",
      },
      {
        title: "Secrets baked into the image.",
        body: "The Dockerfile copies the environment file into the image and the docker ignore file is empty, so credentials are present in every layer. This is the most serious defect in the project, it is entirely mine, and the remediation is not just a config change — the keys have to be rotated because they are also in the build history. Naming it here is deliberate: I would rather be the person who found it than the person who shipped it and did not notice.",
      },
      {
        title: "No tests, on a system with real users.",
        body: "There is no automated test suite in either repository — the test files are the Django scaffolding with nothing in them. MoneyDock has 272 tests because Animatrixx taught me what their absence costs: every one of the defects above was found by reading code or by a user hitting it, which is the slowest and most expensive way to find anything.",
      },
      {
        title: "Turning off the type checker to ship.",
        body: "The frontend build ignores TypeScript errors, and that flag is load-bearing: the manga detail page renders six fields the serializer never returns, so they are undefined in production. Disabling the check did not make the problem go away, it made it invisible — and the honest version of this is that I chose shipping over correctness and then stopped being able to see the difference.",
      },
    ],
    lessons: [
      {
        title: "Build the observability plane once, and you can read anyone’s.",
        body: "Standing up Prometheus, Loki, Promtail and Grafana myself is why a metrics dashboard is now a tool rather than a wall of charts. It is the single most transferable thing this project gave me, and I would not have got it from a hosted agent and a default dashboard.",
      },
      {
        title: "Instrument features, not just infrastructure.",
        body: "I had four-second scrape intervals on request rates and no way to notice that a homepage rail had been returning an empty list. Infrastructure metrics tell you the service is up. They say nothing about whether it is doing its job, and I now treat those as two separate questions.",
      },
      {
        title: "Suppressing a warning is a decision with a cost.",
        body: "Ignoring build-time type errors let me ship and hid a live data-contract break. The lesson was not “types are good” — it was that turning off a check converts a known problem into an unknown one, and unknown problems are the expensive kind.",
      },
      {
        title: "Idempotence is the recovery plan you will actually use.",
        body: "Upserting on a stable upstream key means the answer to a half-finished crawl is to run it again. Every recovery procedure more complex than that is a procedure I would have got wrong at the moment I needed it.",
      },
      {
        title: "Convenient at the call site, wrong at the boundary.",
        body: "The localStorage handoff saved a request and cost addressability, shareability and refresh. I now ask what a design forbids, not only what it enables — a URL that cannot be shared is a product decision disguised as an implementation detail.",
      },
      {
        title: "This project is the reason the next one had tests.",
        body: "Almost every discipline in MoneyDock — the test-gated deploy, the pure functions, the timeouts on every outbound call, the hardening pass with each fix pinned by a test — is a direct response to something that went wrong here. Taken as a pair, that progression is the most useful thing either project says about me.",
      },
    ],
    futureImprovements: {
      preface:
        "Ordered by severity rather than by appeal. The first three are correctness and security work, not features.",
      items: [
        "Rotate every credential and rebuild the image with a populated docker ignore file, so secrets stop living in build layers and history. Highest priority, and not optional.",
        "Ship the streaming backend behind the completed player interface — source resolution, an HLS manifest and a segment-serving path — so the anime half runs on real media rather than a placeholder.",
        "Add the scheduled rollup that unions the daily trending keys into the weekly one, and put a TTL on the dailies so they stop accumulating unread.",
        "Make the reader addressable: a per-chapter images endpoint, a trimmed list serializer that stops shipping every chapter’s pages, and real previous and next chapter links instead of the current dead buttons.",
        "Add lazy loading and windowing to the reader. Every page of a chapter currently mounts at once against a proxy that buffers whole images in a worker, so a long chapter fires dozens of concurrent requests on open.",
        "Turn the type checker back on and fix what it finds, starting with the six fields the manga detail page reads and the serializer never sends.",
        "Fix the persistence path for reading progress — two endpoints currently fail on a type mismatch, which is why the reader never reports progress at all.",
        "Add throttling. The rate-limit decorator on login is installed and commented out, so there is no brute-force protection on the authentication endpoint.",
        "Standard Django production hardening: TLS redirect, HSTS, secure cookie flags, a proxy SSL header, and log rotation — the log currently runs at debug level to an unrotated file, which captures every query forever.",
        "A test suite. Starting with the ingestion pipeline and the auth endpoints, because those are where a regression is both most likely and least visible.",
      ],
    },
    technologies: {
      statedLabel: "In the codebase",
      stated: [
        "Python 3.10",
        "Django 5",
        "Django REST Framework",
        "Celery",
        "RabbitMQ",
        "Redis",
        "MariaDB",
        "Elasticsearch",
        "Docker Compose",
        "nginx",
        "uWSGI",
        "Prometheus",
        "Grafana",
        "Loki",
        "Promtail",
        "AWS S3",
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
      ],
      impliedLabel: "Engineering practices the build depends on",
      implied: [
        "Container orchestration",
        "Linux server administration",
        "Reverse-proxy configuration",
        "Distributed task queues",
        "Cache design",
        "Web scraping at scale",
        "Backoff and jitter",
        "Observability engineering",
        "OAuth integration",
      ],
    },
    links: [
      { label: "Open the live product", href: "https://animatrixx.in" },
      { label: "View the code", unavailable: unavailable.privateRepo },
    ],
    mediaPlaceholder: emptyStates.mediaSlot,
  },
];

export function projectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
