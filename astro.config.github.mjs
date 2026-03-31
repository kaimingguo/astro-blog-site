// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// GitHub Pages static build — no Cloudflare adapter
// https://astro.build/config
export default defineConfig({
    site: "https://kaimingguo.github.io",
    integrations: [mdx(), sitemap()],
});
