import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

/**
 * Turbopack infers the project root by walking upwards looking for a lockfile or
 * workspace marker. When this directory sits inside a folder that has one (a parent
 * `Projects/` holding several repos, a `.git` one level up, a stray `package.json`),
 * it can root itself ABOVE this project — and then every bare import resolves against
 * the parent's non-existent `node_modules`. The failure mode is a compile error that
 * looks like a missing dependency, e.g.
 *
 *   Can't resolve 'tailwindcss' in '/Users/you/Documents/Development/Projects'
 *
 * even though `tailwindcss` is installed here, because the resolver never looks in
 * this project's `node_modules` at all. Under `next dev` the watcher then retries the
 * failed compile continuously, which is what turns a config mistake into runaway
 * memory use rather than a single error.
 *
 * Pinning both roots to this file's directory makes resolution independent of whatever
 * happens to live in the parent folders.
 */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  outputFileTracingRoot: projectRoot,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  /*
    One indexable origin: https://www.satyamsharma.dev.

    Vercel already 308s the apex (satyamsharma.dev) to www, so there is deliberately
    NO apex/www redirect here — adding one in the other direction would loop.

    The production *.vercel.app alias serves the same pages, so it is sent to the real
    domain too; any other *.vercel.app host (preview deploys) stays reachable for
    review but is marked noindex so Google never splits the name's ranking across them.
  */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "satyam-portfolio-eight-sigma.vercel.app" }],
        destination: "https://www.satyamsharma.dev/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "(?<sub>.*)\\.vercel\\.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
