import type { AstroIntegration } from 'astro'
import compress from './compress'
import image from './image'
import mdx from './mdx'
import preact from './preact'
import sitemap from './sitemap'

const integrations: AstroIntegration[] = [mdx, image, sitemap, preact, compress]

export default integrations