import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudy } from "@/src/components/case-study/CaseStudy";
import { SiteHeader } from "@/src/components/layout/SiteHeader";
import { SiteFooter } from "@/src/components/sections/SiteFooter";
import { JsonLd } from "@/src/components/seo/JsonLd";
import { profile } from "@/src/content/profile";
import { projectBySlug, projects } from "@/src/content/projects";
import { caseStudySchema } from "@/src/content/seo";

/** Cut at a word boundary so the description is never truncated mid-word in results. */
function clip(text: string, max = 158) {
  if (text.length <= max) return text;
  return `${text.slice(0, text.lastIndexOf(" ", max - 1)).replace(/[,:;—\s]+$/, "")}…`;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) return {};

  /* "MoneyDock case study · Satyam Sharma" — short enough that the name is never cut off. */
  const title = `${project.name} case study`;
  const description = clip(`${project.name}, built and run by ${profile.name}. ${project.cardBlurb}`);

  return {
    title,
    description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "article",
      title: `${project.metaTitle} — ${profile.name}`,
      description,
      url: `/work/${project.slug}`,
      authors: [profile.siteUrl],
    },
    twitter: {
      title: `${project.metaTitle} — ${profile.name}`,
      description,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <SiteHeader variant="sub" />
      <main id="main">
        <CaseStudy project={project} />
      </main>
      <SiteFooter />
      <JsonLd data={caseStudySchema(project)} />
    </>
  );
}
