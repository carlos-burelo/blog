import config from './src/config/modules'
import integrations from './src/config/integrations'
import { defineConfig } from 'astro/config'

export default defineConfig({
  ...config,
  integrations
})