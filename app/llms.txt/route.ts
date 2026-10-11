import { bios, profile } from "@/src/content/profile";
import { experience } from "@/src/content/background";
import { projects } from "@/src/content/projects";
import { seo } from "@/src/content/seo";

/**
 * /llms.txt — a plain-text summary for AI search and assistants (ChatGPT, Perplexity,
 * Claude, Google AI Overviews), generated from the same content as the page so it
 * can never drift from it.
 */
export const dynamic = "force-static";

export function GET() {
  const site = profile.siteUrl;
  const links = [
    `- Website: ${site}`,
    `- LinkedIn: ${profile.links.linkedin}`,
    profile.links.github ? `- GitHub: ${profile.links.github}` : null,
    `- Email: ${profile.email}`,
    profile.resumeAvailable ? `- Résumé (PDF): ${site}${profile.resumeHref}` : null,
  ].filter(Boolean);

  const body = [
    `# ${profile.name}`,
    "",
    `> ${seo.description}`,
    "",
    bios.short,
    "",
    "## Links",
    ...links,
    "",
    "## Experience",
    ...experience.map(
      (e) => `- [${e.role} at ${e.orgName}](${site}/experience/${e.slug}) — ${e.period}`,
    ),
    "",
    "## Projects",
    ...projects.map(
      (p) => `- [${p.name} case study](${site}/work/${p.slug}): ${p.cardBlurb}`,
    ),
    "",
    "## Products",
    `- MoneyDock: ${profile.links.moneydock}`,
    `- Animatrixx: ${profile.links.animatrixx}`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
