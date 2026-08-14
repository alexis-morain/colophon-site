// @ts-check
import { defineConfig } from "astro/config";

// Static output, no adapter, no integration. The site is eleven kilobytes of
// HTML and one stylesheet: anything else here would be a dependency to keep
// alive for no gain. `site` feeds the canonical tags and the sitemap the day
// one is needed, so set it to the real domain before the first deploy.
// Hosted on GitHub Pages as a project site, so the pages live under a path.
// The day a real domain points here: set `site` to it, set `base` to "/", and
// drop a CNAME file in `public/`. Nothing else changes, because every internal
// link is built from `import.meta.env.BASE_URL`.
export default defineConfig({
  site: "https://alexis-morain.github.io",
  base: "/colophon-site",
  trailingSlash: "always",
  output: "static",
  build: { inlineStylesheets: "always" },
  compressHTML: true,
});
