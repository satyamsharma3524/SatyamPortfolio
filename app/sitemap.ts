import type { MetadataRoute } from "next";
import { profile } from "@/src/content/profile";
import { experience } from "@/src/content/background";
import { projects } from "@/src/content/projects";
import { SITE_UPDATED } from "@/src/content/seo";

/** Home (with the portrait as an image entry), the case studies, and the résumé. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(SITE_UPDATED);
  const site = profile.siteUrl;

  return [
    {
      url: site,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      ...(profile.portrait ? { images: [`${site}${profile.portrait}`] } : {}),
    },
    ...projects.map((project) => ({
      url: `${site}/work/${project.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...experience.map((entry) => ({
      url: `${site}/experience/${entry.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    ...(profile.resumeAvailable
      ? [
          {
            url: `${site}${profile.resumeHref}`,
            lastModified,
            changeFrequency: "yearly" as const,
            priority: 0.5,
          },
        ]
      : []),
  ];
}
