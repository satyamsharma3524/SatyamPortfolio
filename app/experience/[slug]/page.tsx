import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExperienceDetail } from "@/src/components/experience/ExperienceDetail";
import { SiteHeader } from "@/src/components/layout/SiteHeader";
import { SiteFooter } from "@/src/components/sections/SiteFooter";
import { JsonLd } from "@/src/components/seo/JsonLd";
import { experience, experienceBySlug } from "@/src/content/background";
import { profile } from "@/src/content/profile";
import {
  experienceDescription,
  experienceSchema,
  experienceTitle,
} from "@/src/content/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return experience.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = experienceBySlug(slug);
  if (!entry) return {};

  const title = experienceTitle(entry);
  const description = experienceDescription(entry);
  const url = `/experience/${entry.slug}`;

  return {
    // Absolute: the name already leads, so the "· Satyam Sharma" suffix would repeat it.
    title: { absolute: title },
    description,
    keywords: [
      `${profile.name} ${entry.orgName}`,
      ...(entry.orgAliases ?? []).map((alias) => `${profile.name} ${alias}`),
      `${profile.name} ${entry.role}`,
    ],
    alternates: { canonical: url },
    openGraph: { type: "profile", firstName: "Satyam", lastName: "Sharma", title, description, url },
    twitter: { title, description },
  };
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = experienceBySlug(slug);
  if (!entry) notFound();

  return (
    <>
      <SiteHeader variant="sub" />
      <main id="main">
        <ExperienceDetail entry={entry} />
      </main>
      <SiteFooter />
      <JsonLd data={experienceSchema(entry)} />
    </>
  );
}
