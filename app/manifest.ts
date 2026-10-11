import type { MetadataRoute } from "next";
import { profile } from "@/src/content/profile";
import { seo } from "@/src/content/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} — Backend & Platform Engineer`,
    short_name: profile.name,
    description: seo.description,
    start_url: "/",
    display: "browser",
    background_color: "#0a0a0b",
    theme_color: "#0a0a0b",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
