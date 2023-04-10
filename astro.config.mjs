import image from '@astrojs/image'
import mdx from "@astrojs/mdx"
import prefetch from "@astrojs/prefetch"
import sitemap from "@astrojs/sitemap"
import htmlMinifier from "astro-html-minifier"
import { defineConfig } from 'astro/config'
import htmlMinifierConfig from './src/config/html-minifier.mjs'
import rehypePrettyCode from './src/config/rehype-pretty-code.mjs'
import sassConfig from './src/config/sass.mjs'
import sitemapConfig from './src/config/sitemap.mjs'
import preact from "@astrojs/preact"

// https://astro.build/config
export default defineConfig({
  ...rehypePrettyCode,
  ...sassConfig,
  ...sitemapConfig,
  integrations: [htmlMinifier(htmlMinifierConfig), sitemap(), image(), mdx(), prefetch(), preact()]
})