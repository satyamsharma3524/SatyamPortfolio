import Link from "next/link";
import { Reveal } from "@/src/components/motion/Reveal";
import { Chip, Eyebrow } from "@/src/components/ui/primitives";
import { ArrowRight } from "@/src/components/ui/Button";
import { experience } from "@/src/content/background";
import { profile } from "@/src/content/profile";
import { projects } from "@/src/content/projects";
import { experienceDescription } from "@/src/content/seo";
import type { ExperienceEntry } from "@/src/content/types";

/**
 * One role, on its own page.
 *
 * Exists so "Satyam Sharma <company>" has a page whose title, H1 and opening sentence
 * all say exactly that. Set in the case studies' type and rhythm — header, mono meta
 * line, narrative lede, ruled lists — so it reads as part of the same site.
 */
export function ExperienceDetail({ entry }: { entry: ExperienceEntry }) {
  const others = experience.filter((e) => e.slug !== entry.slug);

  return (
    <article className="shell pb-24 pt-10 lg:pb-32 lg:pt-14">
      <Reveal y={10}>
        <Link
          href="/#background"
          className="group inline-flex items-center gap-2 font-mono text-mono-lg uppercase tracking-[0.13em] text-ink-2 transition-colors duration-[var(--dur-hover)] hover:text-accent-hover"
        >
          <span className="link-draw">← {profile.name}</span>
        </Link>
      </Reveal>

      <div className="mt-9 grid gap-x-12 gap-y-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Reveal y={10}>
            <Eyebrow className="text-ink-4">
              Experience · {entry.current ? "Current role" : "Previous role"}
            </Eyebrow>
          </Reveal>

          <Reveal y={14} delay={0.03}>
            <h1 className="mt-5 text-h1 font-medium leading-[1.02] text-ink">
              <span className="block">{profile.name}</span>
              <span className="sr-only"> — </span>
              <span className="block text-ink-2">
                {entry.role} at {entry.orgName}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.06} className="mt-5">
            <p className="font-mono text-mono uppercase leading-[1.7] tracking-[0.12em] text-ink-3">
              {entry.context}
              <span aria-hidden="true" className="mx-2 text-ink-4">
                ·
              </span>
              <time>{entry.period}</time>
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-9">
            <p className="narrative max-w-[58ch] text-lede text-ink-2">
              {experienceDescription(entry)}
            </p>
          </Reveal>

          <Reveal delay={0.14} className="mt-10">
            <Eyebrow className="mb-5 text-ink-4">What the role involved</Eyebrow>
            <ul className="space-y-4">
              {entry.bullets.map((bullet) => (
                <li key={bullet} className="relative max-w-[70ch] pl-6 text-base text-ink-2">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-[0.72em] h-px w-3 bg-line-2"
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <aside className="space-y-12 lg:col-span-4">
          <Reveal y={12} delay={0.08}>
            <Eyebrow className="mb-4 text-ink-4">Stack at {entry.orgName}</Eyebrow>
            <ul className="flex flex-wrap gap-1.5">
              {entry.stack.map((tech) => (
                <li key={tech}>
                  <Chip>{tech}</Chip>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal y={12} delay={0.12}>
            <Eyebrow className="mb-4 text-ink-4">Other roles</Eyebrow>
            <ul className="ruled border-t border-line">
              {others.map((other) => (
                <li key={other.slug} className="border-b border-line">
                  <Link
                    href={`/experience/${other.slug}`}
                    className="group flex items-baseline justify-between gap-4 py-3.5 text-sm text-ink-2 transition-colors duration-[var(--dur-hover)] hover:text-ink"
                  >
                    <span className="link-draw">
                      {other.role.replace(/\s*\(.*\)$/, "")} at {other.orgName}
                    </span>
                    <span className="num shrink-0 font-mono text-mono text-ink-4">
                      {/Present$/.test(other.period) ? "Now" : other.period.slice(-4)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal y={12} delay={0.16}>
            <Eyebrow className="mb-4 text-ink-4">Built independently</Eyebrow>
            <ul className="space-y-3">
              {projects.map((project) => (
                <li key={project.slug}>
                  <Link
                    href={`/work/${project.slug}`}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors duration-[var(--dur-hover)] hover:text-accent-hover"
                  >
                    <span className="link-draw">{project.name} case study</span>
                    <ArrowRight className="shrink-0 transition-transform duration-[var(--dur-hover)] group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </aside>
      </div>
    </article>
  );
}
