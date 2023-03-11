import image from '@astrojs/image'
import mdx from "@astrojs/mdx"
import prefetch from "@astrojs/prefetch"
import sitemap from "@astrojs/sitemap"
import svelte from "@astrojs/svelte"
import htmlMinifier from "astro-html-minifier"
import satori from "astro-satori"
import { defineConfig } from 'astro/config'
// import astroSatoriConfig from './config/astro-satori.mjs'
import htmlMinifierConfig from './config/html-minifier.mjs'
import rehypePrettyCode from './config/rehype-pretty-code.mjs'
import sassConfig from './config/sass.mjs'
import sitemapConfig from './config/sitemap.mjs'


export default defineConfig({
  ...rehypePrettyCode,
  ...sassConfig,
  ...sitemapConfig,
  integrations: [
    htmlMinifier(htmlMinifierConfig),
    // satori(astroSatoriConfig),
    sitemap(),
    image(),
    svelte(),
    mdx(),
    prefetch(),
  ]
})