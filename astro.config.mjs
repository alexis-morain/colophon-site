// @ts-check
import { defineConfig } from "astro/config";

// Static output, no adapter, no integration. The site is eleven kilobytes of
// HTML and one stylesheet: anything else here would be a dependency to keep
// alive for no gain. `site` feeds the canonical tags and the sitemap the day
// one is needed, so set it to the real domain before the first deploy.
// Served at the root of booklibre.app by a Cloudflare Worker that only serves
// static assets (`wrangler.jsonc`, `npm run deploy`). The old GitHub Pages
// address keeps answering from `pages-redirects/`, one page per old path.
export default defineConfig({
  site: "https://booklibre.app",
  base: "/",
  trailingSlash: "always",
  output: "static",
  build: { inlineStylesheets: "always" },
  compressHTML: true,
});
