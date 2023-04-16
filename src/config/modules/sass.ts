const sassConfig = {
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/core/theme/mixins.scss";'
        }
      }
    }
  }
}

export default sassConfig