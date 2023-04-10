const sassConfig = {
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/shared/styles/mixins.scss";'
        }
      }
    }
  }
}

export default sassConfig