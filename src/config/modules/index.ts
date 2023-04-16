import type { AstroUserConfig } from 'astro'
import prettyCodeConfig from './pretty-code'
import productionConfig from './production'
import sassConfig from './sass'

const config: Omit<AstroUserConfig, 'integrations'> = {
  ...sassConfig,
  ...prettyCodeConfig,
  ...productionConfig
}

export default config